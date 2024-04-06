import { TabsDemo } from "@/ui-shadcn/TabsDemo/TabsDemo";
import { Suspense } from "react";
import LoginLoading from "./LoginLoading";
const page = () => {
	return (
		<div className="w-screen max-w-screen h-screen flex justify-center items-center ">
			<Suspense fallback={<LoginLoading/>} >
			<TabsDemo
				LoginTitle="Log In as a Interviewer"
				LoginDescription="Login to your account and continue your journey"
				SignUpTitle="Sign Up as a Interviewer"
				SignUpDescription="Join our platform and help students ace their interviews"
				UserType="interviewer"
			/>
			</Suspense>
		</div>
	);
};

export default page;
