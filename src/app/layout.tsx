import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FurnishHub",
	description: "Your ultimate guide to quality furniture",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
					<Providers>
						{/* Navbar, Sidebar and Footer components will be displayed in all pages */}
						<Navbar />
						<Sidebar />
						{children}
						<Footer />
					</Providers>
				</SessionProvider>
			</body>
		</html>
	);
}
