import { SignIn } from "../components/signin-signout-form/sign-in";
import { SignOut } from "../components/signin-signout-form/sign-out";

export default function Page() {
    return (
        <>
            <h1>Dashboard</h1>
            <SignIn/>
            <SignOut/>
        </>
    );
}