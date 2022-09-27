import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="h-16 bg-red-700 mb-10">
      <div className="flex mx-auto max-w-7xl justify-between p-5">
        <Link href="/"><h1 className="text-white font-medium cursor-pointer">The News Website</h1></Link>
				<Link href="#"><h1 className="text-white font-medium cursor-pointer">Login</h1></Link>
      </div>
    </nav>
  );
}
