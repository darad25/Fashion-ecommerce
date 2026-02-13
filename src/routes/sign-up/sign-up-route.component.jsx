import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { SignUpPageContainer, SignUpCard } from './sign-up-route.styles';

const SignUpRoute = () => {
    return (
        <SignUpPageContainer>
            <SignUpCard>
                <SignUpForm />
            </SignUpCard>
        </SignUpPageContainer>
    );
};

export default SignUpRoute;
