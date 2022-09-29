import { SessionProvider } from "next-auth/react";
import NavBar from "./NavBar";
import Aside from "./Aside";

export default function MainContainer({ children, session }) {
	return (
		<>
			<SessionProvider session={session}>
				<NavBar />
				<Aside />
				<div>{children}</div>
			</SessionProvider>
		</>
	);
}
