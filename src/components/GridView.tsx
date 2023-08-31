import React from "react";
import Product from "./Product";

interface GridViewProps {
	products: any;
}

const GridView: React.FC<GridViewProps> = ({ products }) => {
	return (
		<div className="lg:flex gap-5 lg:flex-wrap">
			{products.map((product: any) => {
				return <Product key={product.id} {...product} width={30} />;
			})}
		</div>
	);
};

export default GridView;
