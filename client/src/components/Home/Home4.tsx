import { GridBackgroundDemo } from "@/ui-aceternity/BoxGridBg/BoxGridBg";
import { StickyScroll } from "@/ui-aceternity/Sticky Scroll/StickyScroll";
import Image from "next/image";
import { motion } from "framer-motion";
const Home4 = () => {
	const content = [
		{
			title: "Log In / Sign Up",
			description:
				"Log in to your account or sign up for a new one. Our platform makes it easy to get started and start finding your perfect interviewers. Complete your profile, add your skills, and upload your updated resume. This helps us match you with the best interviewers for your needs. Get started today and take the first step towards your dream career.",
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white relative">
					<Image
						
						src="https://img.freepik.com/premium-vector/account-login-line-icon-new-user-register_1948-2986.jpg"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Choose your interviewer",
			description:
				"According to your profile, we'll match you with the best interviewers for your needs. You can choose from a variety of interviewers, each with their own unique skills and experiences. Browse through their profiles, read reviews, and select the one that best fits your requirements. Our platform makes it easy to find the perfect interviewer for your needs.",
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white relative">
					<Image
				
						src="https://www.ismartrecruit.com/upload/blog/main_image/Interview_tips_for_interviewer.webp"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Pricing",
			description:
				"In this platform, you can find the best interviewers at the most competitive prices. Every interviewer has their own pricing structure, so you can choose the one that best fits your budget, so you can find the perfect interviewer for your needs without breaking the bank. Compare prices, read reviews, and choose the best interviewer for your needs.",
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white relative">
					<Image
						src="https://cdn.shopify.com/app-store/listing_images/d3d0f13185118f1a979bd22798f6fc99/icon/CMeZ9N_0lu8CEAE=.jpg"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Schedule your interview",
			description:
				"Once you've chosen your interviewer, you can schedule your interview at a time that works best for you. Our platform makes it easy to find a time that works for both you and your interviewer. You can schedule your interview in advance according to your own timings. Join the interview and get the best experience.",
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white relative">
					<Image
					
						src="https://media.istockphoto.com/id/1298405314/vector/job-interview.jpg?s=612x612&w=0&k=20&c=F3P4brlXN7S35fe73OrxrKs0-FMc3VoMSuv6I6VIcGg="
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
	];
	return (
		<GridBackgroundDemo>
			<div className="h-screen w-full flex flex-col justify-around items-center text-center" id="Home4">
				<motion.h1
                initial={{ opacity: 0.5, y: -300 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.5,
					duration: 0.8,
					ease: "easeInOut",
				}}
                className="text-transparent bg-gradient-to-r from-[#aac5d6] to-[#FFFFFF] bg-clip-text text-5xl font-bold text-center py-6 underline-offset-4 font-raleway">
					How to get started ?
				</motion.h1>

				<StickyScroll content={content} />
			</div>
		</GridBackgroundDemo>
	);
};

export default Home4;
