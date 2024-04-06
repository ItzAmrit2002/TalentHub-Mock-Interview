"use client"
import { useRouter } from 'next/navigation'
const ShimmerButton = ({ title, path }: { title: string, path: string }) => {
	const router = useRouter()
	return (
		<button className="inline-flex md:h-9 lg:h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] md:px-3 lg:px-6 font-medium text-slate-400 transition-colors" onClick={()=> router.push(`/${path}`) }>
			{title}
		</button>
	);
};

export default ShimmerButton;
