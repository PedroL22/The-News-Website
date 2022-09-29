import Link from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react'

export default function NavBar() {
	const { data: session } = useSession()

	if (session) {
		return (
			<nav className="fixed h-16 bg-red-700 mb-10 w-screen">
				<div className="flex mx-auto max-w-7xl justify-between p-5 w-screen">
					<Link href="/"><h1 className="text-white font-medium cursor-pointer hover:text-gray-200 transition-all ease-in duration-75">The News Website</h1></Link>
					<div className='flex'>
						<Link href="account"><img src={session.user.image} alt="user profile picture" className='w-12 rounded-full my-auto mx-2 -mt-3 cursor-pointer' /></Link>
						<Link href="account"><p className='xl:flex hidden text-white font-medium cursor-pointer my-auto mx-2 -mt-0 hover:text-gray-200 transition-all ease-in duration-75'>{session.user.email}</p></Link>
						<button onClick={signOut} className="text-white font-medium cursor-pointer my-auto mx-2 -mt-0 hover:text-gray-200 transition-all ease-in duration-75">Logout</button>
					</div>

				</div>
			</nav>
		);
	} else {
		return (
			<nav className="fixed h-16 bg-red-700 mb-10 w-screen">
				<div className="flex mx-auto max-w-7xl justify-between p-5 w-screen">
					<Link href="/"><h1 className="text-white font-medium cursor-pointer hover:text-gray-200 transition-all ease-in duration-75">The News Website</h1></Link>
					<button onClick={signIn} className="text-white font-medium cursor-pointer hover:text-gray-200 transition-all ease-in duration-75">Login</button>
				</div>
			</nav>
		)
	}

}
