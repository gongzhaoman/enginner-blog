'use client'

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
      >
        <span className="sr-only">Open navigation</span>
        <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
          <path
            d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-hidden lg:hidden"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity"></div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed right-0 top-0 flex h-full items-start justify-end overflow-y-auto">
              <div className="h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-custom-background shadow-2xl ring-1 ring-black/10 transition">
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                <button
                  type="button"
                  className="absolute right-6 top-5 flex h-8 w-8 items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close navigation</span>
                  <svg
                    className="h-3.5 w-3.5 overflow-visible stroke-slate-900"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M0 0L14 14M14 0L0 14"></path>
                  </svg>
                </button>
                <div className="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
                  <div className="px-8 py-6">
                    <Link className="block w-9 overflow-hidden" href="/">
                      <span className="sr-only">Tailwind UI</span>
                      <svg
                        className="h-6 w-auto"
                        aria-hidden="true"
                        viewBox="0 0 160 24"
                        fill="none"
                      >
                        <path
                          d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                          className="fill-sky-400"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="py-6 pl-4 pr-8">
                    <div className="-my-2 items-start space-y-2">
                      <Link
                        className="block w-full rounded-md px-4 py-2 hover:bg-gray-200"
                        href="/components"
                      >
                        Components
                      </Link>
                      <Link
                        className="block w-full rounded-md px-4 py-2 hover:bg-gray-200"
                        href="/components"
                      >
                        Components
                      </Link>
                      <Link
                        className="block w-full rounded-md px-4 py-2 hover:bg-gray-200"
                        href="/components"
                      >
                        Components
                      </Link>
                    </div>
                  </div>
                  <div className="py-6 pl-4 pr-8">
                    <p className="flex flex-col px-4">
                      <span className="text-sm text-slate-500">Signed in as</span>
                      <span className="mt-0.5 truncate">gjl87910lq@gmail.com</span>
                    </p>
                  </div>
                  <div className="py-6 pl-4 pr-8">
                    <div className="-my-2 space-y-2">
                      <Link
                        className="block w-full px-4 py-2 hover:bg-gray-200"
                        href="/account-settings"
                      >
                        Account Settings
                      </Link>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                        type="button"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
