import React from "react";
import { motion } from "framer-motion";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel"; // Import the missing type
import LogoScroll from "../LogoScroller/LogoScroll";

const Home3 = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<div className="top-0 z-[-2] min-h-screen  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col justify-around items-center overflow-x-hidden text-center" id="Home3">
			<motion.h2
				initial={{ opacity: 0.2, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className={
					"text-white text-center font-raleway font-bold text-5xl md:text-5xl pt-10"
				}>
				Testimonials from our Students
			</motion.h2>
			<motion.div
				initial={{ opacity: 0.2, y: 200, scale: 0.8 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				transition={{
					delay: 0.6,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="w-full h-fit flex flex-col justify-between items-center text-center">
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					delay: 0.9,
					duration: 1,
					ease: "easeInOut",
				}}
				className="flex justify-around items-center pb-10">
				<LogoScroll />
			</motion.div>
		</div>
	);
};

export default Home3;
