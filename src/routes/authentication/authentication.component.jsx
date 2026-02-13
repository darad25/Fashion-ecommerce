import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer, AuthCard } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <AuthCard>
        <SignInForm />
      </AuthCard>
    </AuthenticationContainer>
  );
};

export default Authentication;