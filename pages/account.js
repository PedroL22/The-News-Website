import { useSession, signOut } from "next-auth/react";

export default function account() {
	const { data: session } = useSession({ required: true });

	if (session) {
		return (
			<div className="pt-20">
				<p>Welcome {session.user.name}</p>
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
