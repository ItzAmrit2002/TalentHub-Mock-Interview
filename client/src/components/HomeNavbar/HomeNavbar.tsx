import { Avatar, AvatarFallback, AvatarImage } from "@/ui-shadcn/avatar";
import ShimmerButton from "@/ui-aceternity/Buttons/ShimmerButton";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HomeNavbar = () => {
	return (
		<div className="sticky w-screen bg-transparent h-18 flex justify-between items-center pt-7 z-40 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4 }}
				className="flex justify-center items-center gap-4 ml-10">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<h3 className="font-sans lg:text-2xl font-bold text-white">
					TalentHub
				</h3>
			</motion.div>

			<motion.div className="md:flex md:justify-center md:items-center md:gap-11 md:lg:text-[18px] md:text-white md:font-semibold  hidden">
				{/* <motion.h3
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="font-serif cursor-pointer">
					<Link to="Home1" spy={true} smooth={true} offset={50} duration={1000}>
						About
					</Link>
				</motion.h3> */}
				<motion.h3
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.4 }}
					className="font-serif cursor-pointer">
					<Link to="Home2" spy={true} smooth={true} offset={50} duration={1000}>
						Join Us
					</Link>
				</motion.h3>
				<motion.h3
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.5 }}
					className="font-serif cursor-pointer">
					<Link to="Home3" spy={true} smooth={true} offset={50} duration={1000}>
						Testimonials
					</Link>
				</motion.h3>
				<motion.h3
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.6 }}
					className="font-serif cursor-pointer">
					<Link to="Home4" spy={true} smooth={true} offset={50} duration={1000}>
						About
					</Link>
				</motion.h3>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4, delay: 0.8 }}
				className="md:flex md:justify-center md:items-center md:gap-8 md:mr-10 md:lg:text-[17px] md:text-[#ffffff] md:font-semibold  z-40 hidden">
				<ShimmerButton title="Student" path="login/student" />
				<ShimmerButton title="Interviewer" path="login/interviewer" />
			</motion.div>
			<motion.button
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.3 }}
				className="p-[3px] relative md:hidden mr-9">
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
				<div className="font-sans px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
					<CiMenuBurger />
				</div>
			</motion.button>
		</div>
	);
};

export default HomeNavbar;
