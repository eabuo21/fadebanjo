'use client'

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Contributions from './contributions'
import ResearchInterests from './researchinterests'
import Introduction from './introduction'

export default function Bio() {
  const socials = [
    {
      icon: faGithub,
      link: 'https://github.com/Azzahra-cloud/Azzahra-cloud',
    },
    {
      icon: faEnvelope,
      link: 'adebanjofatimo2000@gmail.com', // auto converts to mailto:
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/fatimo-adebanjo/',
    },
    {
      icon: faGoogleScholar,
      link: 'https://scholar.google.com/citations?hl=en&user=u8BbMb4AAAAJ ',
    },
  ]

  // Detect if the link is an email
  const formatSocialLink = (link) => {
    if (!link) return '#'
    return link.includes('@') ? `mailto:${link}` : link
  }

  return (
    <div className="flex flex-col w-full  h-full  px-4 md:px-7  justify-start items-start  gap-9  ">
      {/* information section */}

      <section className=" w-full h-[fixed] flex  flex-col md:hidden ">
        <div className=" flex-col items-start  gap-4 p-6 border-b border-gray-700">
          <div className="relative w-44 h-44">
            <Image
              src="/assets/images/fatimo.jpg"
              alt="Fatimo Adebanjo"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <h4 className="text-xl font-bold">Fatimo Adebanjo</h4>

          <p className="text-left text-xl text-gray-700">
            Interested in ML theory and Optimization
          </p>

          <div className="flex flex-row gap-x-3 justify-start items-start ">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={formatSocialLink(item.link)}
                target="_blank"
                className="border border-primary p-2 rounded-[100%] w-7 h-7 flex justify-center items-center  group hover:bg-white transition"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-base text-primary group-hover:text-primary"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5  md:px-0  flex flex-col gap-y-3 ">
        <Introduction />
      </section>

      {/* <section className="px-5  md:px-0  flex flex-col gap-y-3 ">
        <ResearchInterests />
      </section>
      <section className="px-5  md:px-0  flex flex-col gap-y-3 ">
        <Contributions />
      </section> */}
    </div>
  )
}
