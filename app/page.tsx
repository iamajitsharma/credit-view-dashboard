//import node modules libraries
import { Metadata } from "next";

//import custom components
import SignInForm from "@/components/forms/SignInForm";

export const metadata: Metadata = {
  title: "Login",
  description: "E-Solve",
};

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;
