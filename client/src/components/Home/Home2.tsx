import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/ui-aceternity/BackgroundBeams/background-beams";
import BoxCards from "./BoxCards/BoxCards";
const Home2 = () => {
	return (
		<div className="relative min-h-screen h-full" id="Home2">
			<div className="h-full w-full  bg-black/[0.96] antialiased bg-grid-white/[0.02] absolute overflow-scroll">
				{/* <Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/> */}
				<BackgroundBeams />
				<motion.h1
					initial={{ opacity: 0.5, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-11">
					Help Us Define Your Goals
				</motion.h1>
				<motion.div
					initial={{ opacity: 0.1, y: 200, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="2xl:container h-[80%] flex justify-center items-center gap-[100px] mt-5 flex-wrap">
					{/* <div className=" flex justify-between items-center z-20"> */}
					<BoxCards
						title="Student"
						desc="Register as a student today and gain access to our unparalleled mock interview experience facilitated by industry experts, ensuring you receive the highest quality preparation for your future career endeavors."
						file="/student.png"
					/>
					<BoxCards
						title="Interviewer"
						desc="Join our esteemed team of interviewers, where you'll play a pivotal role in guiding students towards their dream careers by providing unparalleled interview experiences and invaluable insights to help them secure their desired positions"
						file="/inter4.png"
					/>
					{/* </div> */}
				</motion.div>
			</div>
		</div>
	);
};

export default Home2;
