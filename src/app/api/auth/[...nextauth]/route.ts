import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId:
				"671211516632-u6d3mjec6e4p2iu600vump383dur9ohq.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
	pages: {
		signIn: "/auth",
	},
});

export { handler as GET, handler as POST };
