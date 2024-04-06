import { TabsDemo } from "@/ui-shadcn/TabsDemo/TabsDemo";

const page = () => {
	return (
		<div className="w-screen max-w-screen h-screen flex justify-center items-center ">
			<TabsDemo
				LoginTitle="Log In as a Interviewer"
				LoginDescription="Login to your account and continue your journey"
				SignUpTitle="Sign Up as a Interviewer"
				SignUpDescription="Join our platform and help students ace their interviews"
				UserType="interviewer"
			/>
		</div>
	);
};

export default page;
