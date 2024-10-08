"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import  Logo  from "@/app/interviewerdashboard/Logo"
import LogoIcon from "@/app/interviewerdashboard/LogoIcon";
import Dashboard from "@/app/interviewerdashboard/Dashboard";
import {
	IconArrowLeft,
	IconBrandTabler,
	IconSettings,
	IconUserBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const InterviewerDashboard = () => {
	const links = [
		{
			label: "Dashboard",
			href: "#",
			icon: (
				<IconBrandTabler className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Profile",
			href: "#",
			icon: (
				<IconUserBolt className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Settings",
			href: "#",
			icon: (
				<IconSettings className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Logout",
			href: "#",
			icon: (
				<IconArrowLeft className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
	];
	const [open, setOpen] = useState(false);
	return (
		<div
			className={cn(
				"rounded-md flex flex-col md:flex-row bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-700 overflow-hidden",
				"h-[100vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
			)}>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							link={{
								label: "Manu Arora",
								href: "#",
								icon: (
									<Image
										src="https://assets.aceternity.com/manu.png"
										className="h-7 w-7 flex-shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
			<Dashboard />
		</div>
	);
};





export default InterviewerDashboard;
