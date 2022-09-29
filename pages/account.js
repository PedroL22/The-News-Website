import { useSession } from "next-auth/react";
import Head from "next/head";

export default function account() {
	const { data: session } = useSession({ required: true });

	if (session) {
		return (
			<div>
				<Head>
					<title>{session.user.name} - The News Website</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className="pt-20">
					<p>Welcome {session.user.name}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className="pt-20">
				<p>You are not signed in.</p>
			</div>
		);
	}
}
