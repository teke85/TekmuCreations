'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    id:1,
    title: "Home",
    url: "/"
  },
  {
    id:2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
  id:3,
  title: "Blog",
  url: "/blog",
  },
  {
    id:4,
    title: "About",
    url: "/about",
  },
  {
    id:5,
    title:"Contact",
    url: "/contact",
  },
  {
    id:6,
    title:"Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
     <Link href="/">
        <Image alt="logo"
        src="/logo.png"
        width={120}
        height={120}
        style={{
            objectFit: 'contain',
        }} />
     </Link>
     <div>{links.map((link) => (<Link key={link.id} href={link.url}>
      {link.title}
     </Link>
     ))}
     <button onClick={() => {
      console.log("logged out");
     }}>Logout</button>
    </div>
    </div>
  )
}

export default Navbar