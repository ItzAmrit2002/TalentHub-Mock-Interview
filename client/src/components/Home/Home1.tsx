import HomeNavbar from "@/components/HomeNavbar/HomeNavbar";
import LitUpBorderButton from "@/ui-aceternity/Buttons/LitUpBorderButton";
import { SparklesCore } from "@/ui-aceternity/Sparkles/Sparkles";
import { FaArrowDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Home1 = () => {
	return (
		<div className="relative min-h-screen" id="Home1">
			<div className="absolute inset-0 z-0 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
				<HomeNavbar />
				<div className="w-full absolute inset-0 h-screen">
					<SparklesCore
						id="tsparticlesfullpage"
						background="transparent"
						minSize={0.6}
						maxSize={1.4}
						particleDensity={50}
						className="w-full h-full"
						particleColor="#FFFFFF"
					/>
				</div>
				<motion.div
					// initial={{ opacity: 0, y: 100 }}
					// animate={{ opacity: 1, y: 0 }}
					// transition={{ duration: 1.3 }}

					className="2xl:container mx-auto flex flex-col justify-between min-h-[80%] max-h-full items-center max-w-full mt-10 z-20 overflow-hidden">
					<div className="flex flex-col justify-between items-center w-4/6 mx-auto my-0 gap-14">
						<motion.p
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.3 }}
							className="font-mono text-wrap text-[34px] sm:text-[55px] md:text-[62px] lg:text-[68px] text-white text-center">
							Ace Your Tech Interview with Our Mock Interview Platform!
						</motion.p>
						<motion.span
							initial={{ opacity: 0, x: -300 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.3 }}>
								<ScrollLink to="Home4" spy={true} smooth={true} offset={50} duration={1000}>
							<LitUpBorderButton title="Get Started" />
							</ScrollLink>
							
						</motion.span>
					</div>

					<motion.span
						initial={{ opacity: 0, x: -300 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.6 }}
						className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:cursor-pointer z-50 hover:scale-110 hover:border-blue-400 hover:border-2 text-black">
							<ScrollLink to="Home2" spy={true} smooth={true} offset={50} duration={1000}>
						<FaArrowDown />
						</ScrollLink>
					</motion.span>
				</motion.div>
			</div>
		</div>
	);
};

export default Home1;
