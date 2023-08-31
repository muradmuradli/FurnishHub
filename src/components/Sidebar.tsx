"use client";

import { links } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartButtons from "./CartButtons";
import { setSidebar } from "@/redux/features/products/slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";

const Sidebar = () => {
	const { isSidebarOpen } = useAppSelector((store) => store.products);
	const dispatch = useAppDispatch();
	const { data: session } = useSession();

	const handleSidebar = () => {
		dispatch(setSidebar());
	};

	return (
		<div>
			<aside
				className={`lg:hidden fixed z-[60] bg-white w-full h-screen border-slate-300 p-5 left-0 top-0 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300`}
			>
				<div className="flex justify-between items-center">
					<img
						className="h-8"
						src="/assets/furnishhub-logo.png"
						alt="furnish hub"
					/>
					<button onClick={handleSidebar}>
						<AiOutlineClose size={25} />
					</button>
				</div>
				<ul className="capitalize mt-2 flex flex-col gap-2 text-lg">
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link href={url}>{text}</Link>
							</li>
						);
					})}
					<li>{session?.user && <Link href={"/checkout"}>checkout</Link>}</li>
				</ul>
				<div className="flex justify-center">
					<CartButtons />
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
