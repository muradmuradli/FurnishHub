"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Auth = () => {
	return (
		<div className="h-[31.2rem] w-full flex justify-center items-center">
			<div className="border border-slate-300 p-5 flex flex-col gap-4 w-[22rem]">
				<h1>Sign in with your Google Account</h1>
				<button
					onClick={() => signIn("google", { callbackUrl: "/" })}
					className="bg-blue-500 hover:bg-blue-600 transition p-2
                     text-white w-full flex gap-2 items-center justify-center uppercase"
				>
					Login
					<AiOutlineGooglePlus size={25} />
				</button>
			</div>
		</div>
	);
};

export default Auth;
