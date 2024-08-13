import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20">
			<div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-white whitespace-pre">
				Acet Labs
			</motion.span>
		</Link>
	);
};

export default Logo