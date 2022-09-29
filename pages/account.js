import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function account() {
	const { data: session } = useSession({ required: true });

	if (session) {
		return (
			<div>
				<Head>
					<title>{session.user.name} - The News Website</title>
					<meta
						name="description"
						content="A news website with The Guardian API."
					/>
					<link rel="icon" href="/favicon.png" />
				</Head>

				<div className="xl:pt-36 pt-20 xl:ml-5 xl:flex block">
					<img
						src={session.user.image}
						alt="user profile picture"
						className="w-36 xl:mx-0 mx-auto rounded-lg"
					/>
					<div>
						<h1 className="xl:ml-10 mt-2 text-center font-medium text-3xl text-gray-600">
							{session.user.name}
						</h1>
						<p className="xl:ml-10 text-center text-gray-400">
							{session.user.email}
						</p>
						<Link href="/">
							<button className="flex mt-2 mx-auto xl:ml-24 text-white bg-red-700 rounded-md px-5 py-2 hover:bg-red-800 transition-all ease-in duration-75">
								Back
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Head>
					<title>The News Website</title>
					<meta
						name="description"
						content="A news website with The Guardian API."
					/>
					<link rel="icon" href="/favicon.png" />
				</Head>

				<div className="pt-20 ml-5">
					<p>...</p>
				</div>
			</div>
		);
	}
}
