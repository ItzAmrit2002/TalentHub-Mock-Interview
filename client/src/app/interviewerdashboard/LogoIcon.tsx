import Link from 'next/link';
import React from 'react'

const LogoIcon = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
			<div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</Link>
	);
};

export default LogoIcon