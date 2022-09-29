import Link from 'next/link';
import {signIn} from 'next-auth/react'

export default function NavBar() {
  return (
    <nav className="fixed h-16 bg-red-700 mb-10 w-screen">
      <div className="flex mx-auto max-w-7xl justify-between p-5 w-screen">
        <Link href="/"><h1 className="text-white font-medium cursor-pointer">The News Website</h1></Link>
				<button onClick={() => signIn()} className="text-white font-medium cursor-pointer">Login</button>
      </div>
    </nav>
  );
}
