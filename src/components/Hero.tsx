import React from "react";
import Link from "next/link";
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";

const Hero = () => {
	return (
		<div className="h-[21rem] lg:h-[39rem] flex lg:items-center">
			<article className="p-5 lg:w-6/12 flex justify-center lg:items-center">
				<div className="lg:w-8/12 flex flex-col items-start gap-3">
					<h1 className="lg:text-[3rem] text-4xl lg:leading-[3.5rem] text-slate-700 font-extrabold capitalize">
						Design Your <br /> Comfort Zone
					</h1>
					<p className="leading-8 lg:leading-10 lg:text-lg text-slate-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						eligendi beatae, iste facere suscipit labore! Consectetur, sed
						fugiat! Iusto voluptatem voluptates.
					</p>
					<Link
						href={"/products"}
						className="py-1 px-4 lg:py-3 lg:px-6 mt-5 bg-transparent lg:text-lg uppercase text-slate-700 
						hover:bg-slate-100 border border-slate-500 transition flex items-center gap-2 justify-center font-light"
					>
						<span>Shop Now</span>
					</Link>
				</div>
			</article>
			<article className="hidden w-6/12 lg:flex justify-center p-5 relative scale-[85%] -mt-5">
				<div className="bg-neutral-200 h-[34rem] w-96 absolute bottom-10 left-24 -z-10 rounded-md"></div>
				<img
					src="assets/hero-bcg.jpeg"
					alt="hero bcg"
					className="h-[40rem] rounded-md z-10"
				/>
				<img
					src="assets/hero-bcg-2.jpeg"
					alt="person working"
					className="absolute bottom-5 left-8 h-[12rem] z-20 rounded-md"
				/>
			</article>
		</div>
	);
};

export default Hero;
