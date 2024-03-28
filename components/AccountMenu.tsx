'use client'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

export default function AccountMenu() {
  return (
    <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center text-sm font-semibold text-gray-900 hover:text-custom-lightingFont">
          Account
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 z-20 mt-4 min-w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3">
              <p className="text-xs text-gray-500">Signed in as</p>
              <p className="font-semibold">gjl87910lq@gmail.com</p>
            </div>
            <div className="border-t-[1px] border-slate-900/10 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-200' : ''}`}
                    href="/profile"
                  >
                    Your Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-200' : ''}`}
                    href="/settings"
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-200' : ''}`}
                    href="/signout"
                  >
                    Sign out
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
