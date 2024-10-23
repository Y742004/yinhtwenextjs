import { SignIn } from "@/app/components/signin-signout-form/sign-in";
import { SignOut } from "@/app/components/signin-signout-form/sign-out";
import { Sign } from "crypto";

export default function Page() {
    return (
        <>
           <h1>AdminDashboard</h1>
           <SignIn/>
           <SignOut/>
         </>
    );
}