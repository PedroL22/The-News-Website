import React from 'react';

export default function NavBar() {
  return (
    <nav className="h-16 bg-red-700 mb-10">
      <div className="flex mx-auto max-w-7xl justify-between p-5">
        <h1 className="text-white font-medium">The News Website</h1>
        <h1 className="text-white font-medium">Login</h1>
      </div>
    </nav>
  );
}
