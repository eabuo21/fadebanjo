'use client'

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHydrated(true)
  }, [])

  const menuItems = [
    { label: 'About Me', link: '/' },
    { label: 'Publications', link: '/publications' },
    { label: 'Insights', link: '/insights' },
  ]

  const socials = [
    {
      icon: faGithub,
      link: 'https://github.com/Azzahra-cloud/Azzahra-cloud',
    },
    {
      icon: faEnvelope,
      link: 'mailto:adebanjofatimo2000@gmail.com',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/fatimo-adebanjo/',
    },
    {
      icon: faGoogleScholar,
      link: 'https://scholar.google.com/citations?hl=en&user=u8BbMb4AAAAJ',
    },
  ]

  return (
    <>
      {/* Mobile Hamburger */}
      {hydrated && (
        <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
          <button onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
          {/* <span className="font-bold text-lg">Fatimo Adebanjo</span> */}
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary text-white transform 
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 
        transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4 p-6 border-b border-gray-700">
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <Image
                src="/assets/images/fatimo.jpg"
                alt="Fatimo Adebanjo"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h4 className="text-xl font-bold">Fatimo Adebanjo</h4>
            <p className="text-center text-sm text-gray-300">
              Interested in ML theory and Optimization
            </p>

            {/* Social Icons */}
            <div className="flex flex-row gap-x-3 justify-center items-center mt-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white p-2 rounded-full w-7 h-7 flex justify-center items-center group hover:bg-white transition"
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-base text-white group-hover:text-primary"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.link
              return (
                <Link
                  key={item.label}
                  href={item.link}
                  className={`flex items-center gap-4 p-3 rounded-md transition ${
                    isActive
                      ? 'bg-gray-700 text-white font-semibold'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setOpen(false)} // close sidebar on mobile
                >
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {hydrated && open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
