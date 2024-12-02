import Image from "next/image";
import { Providers } from "./providers";
import { Button, User } from "@nextui-org/react";
import { Users } from "./components/Users";
import { CreateUser } from "./components/create-user";
import { CreateContent } from "./components/create-content";
import { Content } from "./components/Content";
import { Account } from "./components/Account";
import { CreateAccount } from "./components/create-account";
import { VimeoUI } from "./lms/vimeoUI";
import { YoutubeUI } from "./YoutubeUi/youtube";
import { LoginUser } from "./components/loginuser";
import { auth } from "@/auth";
import { CurrentUser } from "./components/user/current-user";
import { SayarUi } from "./sayar/sayarUi";
import { SideBar } from "./sayar/sideBar";
import { SignIn } from "./components/signin-signout-form/sign-in";
import { Sign } from "crypto";
import { SignOut } from "./components/signin-signout-form/sign-out";
import { h1 } from "framer-motion/client";
import CommentBoxLoom from "./loom/Comment";
 
export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return <>
    <h1>Unauthenticated</h1>
    <SignIn/>
    </> 
    
  }
  return (
    <>
 
    {JSON.stringify(session)}
    <CurrentUser/>
    <SignIn/>
    <SignOut/>
    <div className="p-5">
      {/* <Account/>
      <CreateAccount/>
      <CreateContent/>
      <Content/>
     
    <CreateUser/>
      <div className="">What the fuck!</div>

      <Button> Click me</Button>
      <Users/> */}
     {/* <VimeoUI/> */}
     {/* <YoutubeUI/> */}
     {/* <RichTextEditor/> */}
   <SayarUi/>

    

    </div>
   
    </>
  );
}
