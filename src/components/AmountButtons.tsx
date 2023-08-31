import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AmountButtonsProps {
	amount: number;
	increase: any;
	decrease: any;
}

const AmountButtons: React.FC<AmountButtonsProps> = ({
	amount,
	increase,
	decrease,
}) => {
	return (
		<div className="text-lg lg:text-2xl font-bold flex items-center gap-2 lg:gap-5">
			<button onClick={decrease}>
				<AiOutlineMinus />
			</button>
			<span>{amount}</span>
			<button onClick={increase}>
				<AiOutlinePlus />
			</button>
		</div>
	);
};

export default AmountButtons;
