export const formatPrice = (number: any) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(number / 100);
};

export const getUniqueValues = (data: any, type: string) => {
	let unique = data.map((item: any) => item[type]);
	if (type === "colors") {
		unique = unique.flat();
	}
	unique = unique.filter(
		(value: any, index: number, array: any) => array.indexOf(value) === index
	);
	return ["all", ...unique];
};
