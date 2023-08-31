import { formatPrice } from "@/utils/helpers";
import React from "react";
import {
	removeItemAction,
	toggleAmountAction,
} from "@/redux/features/cart/actions";
import { BsTrash, BsTrash2Fill } from "react-icons/bs";
import AmountButtons from "./AmountButtons";

interface CartItemProps {
	id: string;
	image: string;
	name: string;
	color: string;
	price: number;
	amount: number;
}

const CartItem: React.FC<CartItemProps> = ({
	id,
	image,
	name,
	color,
	price,
	amount,
}) => {
	const increase = () => {
		toggleAmountAction(id, "inc");
	};

	const decrease = () => {
		toggleAmountAction(id, "dec");
	};

	return (
		<div className="flex justify-between gap-2 lg:gap-0">
			<div className="flex gap-2 lg:gap-3 lg:w-3/12 lg:items-center">
				<img
					className="h-16 w-20 rounded-md object-cover lg:h-20 lg:w-[15rem] "
					src={image}
					alt={name}
				/>
				<div className="flex flex-col text-sm capitalize lg:text-base">
					<h1 className="lg:font-bold">{name}</h1>
					<div className="flex items-center gap-2">
						<span>color: </span>
						<div
							className="h-3 w-3 rounded-full opacity-60"
							style={{ backgroundColor: color }}
						></div>
					</div>
					<h1 className="lg:hidden">{formatPrice(price)}</h1>
				</div>
			</div>
			<h1 className="hidden lg:flex lg:w-3/12 lg:justify-center lg:items-center lg:text-slate-500 lg:capitalize">
				price: {formatPrice(price)}
			</h1>
			<div className="flex items-center mr-3 lg:mr-0 gap-2 lg:w-3/12 lg:justify-center lg:items-center">
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
				<button
					type="button"
					className="bg-red-600 p-2 rounded-md lg:hidden"
					onClick={() => removeItemAction(id)}
				>
					<BsTrash2Fill size={15} color="white" />
				</button>
			</div>
			<div className="hidden lg:flex lg:gap-3 lg:w-3/12 lg:justify-center lg:items-center">
				<h1 className="">{formatPrice(price * amount)}</h1>
				<div className="hidden lg:flex lg:justify-center lg:items-center">
					<button
						type="button"
						className="bg-red-500 transition hover:bg-red-600 p-2 rounded-md"
						onClick={() => removeItemAction(id)}
					>
						<BsTrash2Fill size={15} color="white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
