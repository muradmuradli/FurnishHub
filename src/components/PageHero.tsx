import Link from "next/link";
import React from "react";

interface PageHeroProps {
	title: string;
	product?: any;
}

const PageHero: React.FC<PageHeroProps> = ({ title, product }) => {
	return (
		<div className="w-full bg-slate-200 px-7 py-9 text-2xl font-bold capitalize lg:px-[15rem] lg:text-3xl lg:py-14">
			<h3>
				<Link className="text-slate-700" href="/">
					Home /
				</Link>
				{product && <Link href="/products"> Products / </Link>} {title}
			</h3>
		</div>
	);
};

export default PageHero;
