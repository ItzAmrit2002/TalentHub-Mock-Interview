import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoginLoading = () => {
	return (
		<div>
			<Skeleton className="w-[100px] h-[20px] rounded-full" />
		</div>
	);
};

export default LoginLoading;
