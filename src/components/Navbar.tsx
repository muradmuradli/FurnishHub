"use client";

import { links } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import CartButtons from "./CartButtons";
import { useAppDispatch } from "@/redux/hooks";
import { setSidebar } from "@/redux/features/products/slice";
import { useSession } from "next-auth/react";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const { data: session } = useSession();

	const handleSidebar = () => {
		dispatch(setSidebar());
	};

	return (
		<div className="p-5 lg:px-48 flex items-center justify-between">
			{/* Logo and hamburger button */}
			<div className="flex items-center justify-between w-full lg:w-4/12">
				<Link href="/">
					<img
						className="h-8 lg:h-12"
						alt="furnish-hub"
						src="/assets/furnishhub-logo.png"
					/>
				</Link>
				<button onClick={handleSidebar} className="md:hidden lg:hidden">
					<GiHamburgerMenu size={25} />
				</button>
			</div>

			{/* Page links */}
			<ul className="hidden gap-9 lg:flex lg:items-center lg:justify-center lg:w-4/12 text-lg font-light capitalize pt-2">
				{links.map((link) => {
					const { id, text, url } = link;
					return (
						<li
							className="border-b-4 border-transparent hover:border-blue-600 transition"
							key={id}
						>
							<Link href={url}>{text}</Link>
						</li>
					);
				})}
				{session?.user && (
					<li className="border-b-4 border-transparent hover:border-blue-600 transition">
						<Link href={"/checkout"}>checkout</Link>
					</li>
				)}
			</ul>

			{/* Cart buttons */}
			<div className="hidden lg:flex justify-center lg:w-4/12">
				<CartButtons />
			</div>
		</div>
	);
};

export default Navbar;
