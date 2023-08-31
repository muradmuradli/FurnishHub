import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface StarsProps {
	stars: any;
	reviews: any;
}

const Stars: React.FC<StarsProps> = ({ stars, reviews }) => {
	const tempStars = Array.from({ length: 5 }, (_: any, index: any) => {
		const number = index + 0.5;
		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BsStarFill />
				) : stars >= number ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});

	return (
		<div className="flex gap-3 items-center">
			<div className="flex gap-1 text-yellow-400">
				{/* star */}
				{tempStars}
			</div>
			<p className="text-sm text-slate-600">({reviews} customer reviews)</p>
		</div>
	);
};

export default Stars;
