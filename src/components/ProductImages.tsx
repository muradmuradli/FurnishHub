import React, { useState } from "react";

interface ProductImagesProps {
	images: any;
}

const ProductImages: React.FC<ProductImagesProps> = ({
	images = [{ url: "" }],
}) => {
	const [main, setMain] = useState(images[0]);

	return (
		<div className="flex flex-col lg:items-end gap-3 lg:w-6/12 lg:pl-16 lg:pr-5">
			<img
				className="h-64 rounded-md w-full lg:w-10/12 lg:h-[32rem] object-cover"
				src={main.url}
				alt="main image"
			/>
			<div className="flex gap-3 w-full justify-center lg:justify-end">
				{images.map((image: any, index: number) => {
					return (
						<img
							className={`${
								image.url === main.url ? "border-2 border-slate-500" : ""
							} h-[3.6rem] w-[3.6rem] lg:h-[4.65rem] lg:w-[6.25rem] object-cover rounded-md cursor-pointer`}
							src={image.url}
							key={index}
							alt={image.filename}
							onClick={() => setMain(images[index])}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductImages;
