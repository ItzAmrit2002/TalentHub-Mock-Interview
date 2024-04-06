import { TabsDemo } from "@/ui-shadcn/TabsDemo/TabsDemo";

const page = () => {



	return (
		<div className="w-screen max-w-screen h-screen flex justify-center items-center ">
			<TabsDemo
				LoginTitle="Log In as a Student"
				LoginDescription="Login to your account and find your perfect interviewer"
				SignUpTitle="Sign Up as a student"
				SignUpDescription="Join our platform and get one step closer to your dream job"
				UserType="student"
			/>
		</div>
	);
};

export default page;
