import {useSession, signIn, signOut} from 'next-auth/react'

export default function login() {
	const { data: session } = useSession()

	if (session) {
		return (
			<div className='pt-20'>
				<p>Welcome, {session.user.email}</p>
				<img src={session.user.image} alt="user profile picture" className='rounded-full'/>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		)
	} else {
		return (
			<div className='pt-20'>
				<p>You are not signed in.</p>
				<button onClick={() => signIn()}>Sign In</button>
			</div>
		)
	}
}
