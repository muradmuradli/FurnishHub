import React from "react";
import {
	AiOutlineAim,
	AiOutlineCompass,
	AiOutlineDropbox,
} from "react-icons/ai";

interface ServiceCardProps {
	icon: any;
	title: string;
	content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, content }) => {
	return (
		<div className="px-8 py-10 w-4/12 flex flex-col gap-2 items-center justify-center bg-slate-300 rounded-md">
			{icon}
			<h1 className="text-3xl font-bold">{title}</h1>
			<span className="text-center text-sm text-slate-700">{content}</span>
		</div>
	);
};

const Services = () => {
	const cardItems = [
		{
			id: 1,
			icon: <AiOutlineAim size={50} />,
			title: "Mission",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
		},
		{
			id: 2,
			icon: <AiOutlineCompass size={50} />,
			title: "Vision",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
		},
		{
			id: 3,
			icon: <AiOutlineDropbox size={50} />,
			title: "History",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
		},
	];

	return (
		<div className="bg-slate-200 flex flex-col h-[25rem] p-10 relative">
			<div className="flex items-center justify-between">
				<div className="w-6/12 flex justify-center">
					<h1 className="text-3xl font-bold tracking-wider text-slate-700">
						Custom Furniture <hr /> Built Only For You
					</h1>
				</div>
				<div className="w-6/12 flex justify-center">
					<span className="w-9/12 text-slate-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						architecto, quisquam magnam mollitia quia tempora iure.
					</span>
				</div>
			</div>
			<div className="flex items-center gap-12 px-32 absolute top-44">
				{cardItems.map((cardItem) => {
					return (
						<ServiceCard
							key={cardItem.id}
							icon={cardItem.icon}
							title={cardItem.title}
							content={cardItem.content}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
