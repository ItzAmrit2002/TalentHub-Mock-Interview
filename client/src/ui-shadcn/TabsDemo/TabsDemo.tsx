"use client";
import { handleLogin, handleGoogleLogin, handleSignUp } from "@/controllers/authentication";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import GoogleButton from "@/components/GoogleButton/googleButton";
import { useRouter } from 'next/navigation'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo({
	LoginTitle,
	LoginDescription,
	SignUpTitle,
	SignUpDescription,
	UserType,
}: {
	LoginTitle: string;
	LoginDescription: string;
	SignUpTitle: string;
	SignUpDescription: string;
	UserType: string;
}) {
  const router = useRouter()
	const [loginEmail, setloginEmail] = useState("");
	const [loginPassword, setloginPassword] = useState("");

	const [signupName, setSignupName] = useState("");
	const [signupEmail, setSignupEmail] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const handleLoginSubmit = async () => {
    setloginEmail("");
    setloginPassword("");
    const data = await handleLogin(loginEmail, loginPassword);
    
    if (data && data.status === 200) {
      // Redirect to dashboard
	  const result = await data.json();;
	  console.log(result);
	  if(result.role === UserType){
		router.push(`/${UserType}dashboard`);
	  }
	  else{
		console.log("Invalid Role");
	  }
      
    }
  };

  const handleGoogleLoginSubmit = async (role: string) => {
    setloginEmail("");
    setloginPassword("");
    const data = await handleGoogleLogin(role, router);
    console.log(data);
    
  };

  const handleRegisterSubmit = async () => {
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirmPassword("");
    const data = await handleSignUp(signupName, signupEmail, signupPassword, signupConfirmPassword, UserType);
    console.log(data);
    if (data && data.status === 200) {
      // Redirect to dashboard
      router.push(UserType);
    }
  }

	return (
		<Tabs defaultValue="login" className="w-[500px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="login">Log In</TabsTrigger>
				<TabsTrigger value="signup">Sign Up</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<Card>
					<CardHeader>
						<CardTitle>{LoginTitle}</CardTitle>
						<CardDescription>{LoginDescription}</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="email">E-mail</Label>
							<Input
								id="name"
								value={loginEmail}
								placeholder="Enter your email"
								type="text"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setloginEmail(e.target.value);
								}}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">Password</Label>
							<Input
								id="username"
								value={loginPassword}
								placeholder="Enter your password"
								type="password"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setloginPassword(e.target.value);
								}}
							/>
						</div>
					</CardContent>
					<CardFooter className="flex justify-around items-center">
						<Button
							onClick={
								handleLoginSubmit
							}>
							Login
						</Button>
						{/* <Button onClick={()=>{
              handleGoogleLoginSubmit(UserType);
              setloginEmail("");
              setloginPassword("");
            }}>Google</Button> */}

						<GoogleButton role={UserType} onClickFunction={handleGoogleLoginSubmit}/>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="signup">
				<Card>
					<CardHeader>
						<CardTitle>{SignUpTitle}</CardTitle>
						<CardDescription>{SignUpDescription}</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
                value={signupName}
								type="text"
								placeholder="Enter your Full Name "
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setSignupName(e.target.value);
								}}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="email">E-mail</Label>
							<Input
								id="email"
								type="email"
                value={signupEmail}
								placeholder="Enter your E-mail"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setSignupEmail(e.target.value);
								}}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="currend">Password</Label>
							<Input
								id="current"
								type="password"
                value={signupPassword}
								placeholder="Set your password"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setSignupPassword(e.target.value);
								}}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="new">Confirm Password</Label>
							<Input
								id="new"
								type="password"
                value={signupConfirmPassword}
								placeholder="Confirm password"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setSignupConfirmPassword(e.target.value);
								}}
							/>
						</div>
					</CardContent>
					<CardFooter className="flex justify-around items-center ">
						<Button onClick={handleRegisterSubmit}>Sign Up</Button>
            <GoogleButton role={UserType} onClickFunction={handleGoogleLoginSubmit}/>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
