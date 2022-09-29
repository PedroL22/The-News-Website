import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";

export default function MainContainer({ children, session }) {
	return (
		<>
			<SessionProvider session={session}>
				<NavBar />
				<div>{children}</div>
			</SessionProvider>
		</>
	);
}
