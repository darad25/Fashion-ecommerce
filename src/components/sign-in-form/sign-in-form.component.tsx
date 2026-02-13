import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer,
  Divider,
  DividerLine,
  DividerText,
  SignUpLink,
  SignUpLinkText,
  SignUpLinkAnchor
} from './sign-in-form.styles';
import { googleSignInStart, emailSignInStart, clearUserError } from '../../store/user/user.action';
import { selectUserError, selectIsLoading, selectCurrentUser } from '../../store/user/user.selector';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    dispatch(clearUserError());
    return () => {
      dispatch(clearUserError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log('Auth Error Object:', error);
      // @ts-ignore
      const errorCode = error.code || (error.response && error.response.data && error.response.data.error && error.response.data.error.message);

      console.log('Detected Error Code:', errorCode);

      switch (errorCode) {
        case 'auth/user-not-found':
        case 'auth/invalid-credential':
        case 'INVALID_LOGIN_CREDENTIALS':
          alert('No user associated with this email or invalid credentials');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/popup-closed-by-user':
          // User closed the popup, no need to alert
          break;
        default:
          alert(`Auth Error: ${errorCode || error.message || 'Unknown error'}`);
      }
    }
  }, [error]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button isLoading={isLoading} type='submit'>Sign In</Button>
          <Button
            isLoading={isLoading}
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </ButtonsContainer>

        <Divider>
          <DividerLine />
          <DividerText>or</DividerText>
          <DividerLine />
        </Divider>

        <SignUpLink>
          <SignUpLinkText>Don't have an account?</SignUpLinkText>
          <SignUpLinkAnchor to='/auth/signup'>Sign up now</SignUpLinkAnchor>
        </SignUpLink>
      </form>
    </SignInContainer>
  );
};

export default SignInForm; 