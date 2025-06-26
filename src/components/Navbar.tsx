'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#5B5D83] shadow text-white">
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logonavbar.png"
            alt="MentalCare Logo"
            width={120}
            height={40}
            className="w-auto h-auto"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/beranda" className="hover:text-gray-200 transition-colors">Beranda</Link>
          <Link href="/artikel" className="hover:text-gray-200 transition-colors">Artikel</Link>
          <Link href="/psikiater" className="hover:text-gray-200 transition-colors">Psikiater</Link>
          <Link href="/tentangkami" className="hover:text-gray-200 transition-colors">Tentang Kami</Link>
          <Link href="/kontak" className="hover:text-gray-200 transition-colors">Kontak</Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-4`}>
        <Link href="/beranda" className="block hover:text-gray-200 transition-colors">Beranda</Link>
        <Link href="/artikel" className="block hover:text-gray-200 transition-colors">Artikel</Link>
        <Link href="/psikiater" className="block hover:text-gray-200 transition-colors">Psikiater</Link>
        <Link href="/tentangkami" className="block hover:text-gray-200 transition-colors">Tentang Kami</Link>
        <Link href="/kontak" className="block hover:text-gray-200 transition-colors">Kontak</Link>
      </nav>
    </div>
  </header>

  )
}

export default Navbar
