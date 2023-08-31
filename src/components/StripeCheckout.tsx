import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	useStripe,
	Elements,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import { clearCartAction } from "@/redux/features/cart/actions";
// import "./stripe.css";
import { formatPrice } from "@/utils/helpers";
import { redirect } from "next/navigation";

const promise = loadStripe(
	"pk_test_51Lc7n1AjfmBWcVNk49rNeXgpGjgINfQ7VkQlMpnzHCfotW9DQqMyYqbTcWVPg7R5YUlRzWcYnOn5WWctYw29tyTZ00WxFcUDQC"
);

const CheckoutForm = () => {
	const { cart, total_amount, shipping_fee } = useAppSelector(
		(store) => store.cart
	);
	const { data: session } = useSession();

	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState("");
	const [processing, setProcessing] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	const createPaymentIntent = async () => {
		try {
			const { data } = await axios.post(
				"/.netlify/functions/create-payment-intent",
				JSON.stringify({ cart, shipping_fee, total_amount })
			);
			setClientSecret(data.clientSecret);
		} catch (error) {
			// console.log(error.response)
		}
	};

	useEffect(() => {
		createPaymentIntent();
	}, []);

	const handleChange = async (event: any) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};
	const handleSubmit = async (ev: any) => {
		ev.preventDefault();
		setProcessing(true);
		const payload = await stripe!.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements!.getElement(CardElement)!,
			},
		});
		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError("null");
			setProcessing(false);
			setSucceeded(true);
			setTimeout(() => {
				clearCartAction();
				redirect("/");
			}, 10000);
		}
	};

	return (
		<div className="w-3/12 border border-slate-300 rounded-md p-6">
			{succeeded ? (
				<article>
					<h4>Thank you</h4>
					<h4>Your payment was successful!</h4>
					<h4>Redirecting to home page shortly</h4>
				</article>
			) : (
				<article>
					<h4>Hello, {session?.user && session?.user?.name}</h4>
					<p>Your total is {formatPrice(total_amount)}</p>
					<p>Test Card Number: 4242 4242 4242 4242</p>
				</article>
			)}
			<form
				className="flex flex-col mt-5"
				id="payment-form"
				onSubmit={handleSubmit}
			>
				<CardElement id="card-element" onChange={handleChange} />
				<button
					className="bg-blue-500 text-white rounded-md w-full p-2 mt-5"
					disabled={processing || disabled || succeeded}
					id="submit"
				>
					<span id="button-text">
						{processing ? <div className="spinner" id="spinner"></div> : "Pay"}
					</span>
				</button>
				{error && (
					<div className="card-error" role="alert">
						{error}
					</div>
				)}
				{/* Show a success message upon completion */}
				<p className={succeeded ? "result-message" : "result-message hidden"}>
					Payment succeeded, see the result in your
					<a href={`https://dashboard.stripe.com/test/payments`}>
						{" "}
						Stripe dashboard.
					</a>{" "}
					Refresh the page to pay again.
				</p>
			</form>
		</div>
	);
};

const StripeCheckout = () => {
	return (
		<Elements stripe={promise}>
			<div className="flex justify-center items-center h-[23rem]">
				<CheckoutForm />
			</div>
		</Elements>
	);
};

export default StripeCheckout;
