import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="min-h-screen flex justify-center items-center mt-18">
      <SignIn />
    </div>
  );
}

export default SignInPage;