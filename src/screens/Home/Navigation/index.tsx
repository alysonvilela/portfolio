import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={clsx("w-full mx-auto bg-white justify-center", open && "border-b border-brand-light-3")}>
      <div
        className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto px-8 py-2"
      >
        <Link
          prefetch={false}
          href={'/'}
          className="flex items-center flex-row justify-between text-brand-dark-2"
        >
          <div className="group block flex-shrink-0">
            <div className="">
              <p className="font-medium text-brand-dark-3 group-hover:text-gray-300">
                alysonvilela.
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="focus:shadow-outline focus:outline-none md:hidden rounded-lg"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                className={!open ? 'inline-flex' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M6 18L18 6M6 6l12 12"
                className={open ? 'inline-flex' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </Link>
        <nav
          className={`${open ? 'flex' : 'hidden'
            } flex-col items-center lg:flex lg:flex-row lg:justify-start lg:mt-0 gap-2 lg:gap-1 lg:p-0 lg:px-0 md:pb-0 opacity-100 p-4 px-5`}
        >
          <Button variant={'link'} className='text-xs' asChild>
            <Link prefetch={false} href="/about">
              About
            </Link>
          </Button>
          <Button variant={'link'} className='text-xs' asChild>
            <Link prefetch={false} href="/contact">
              Services
            </Link>
          </Button>

          <Link prefetch={false} href="#">
            <span>Online</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
