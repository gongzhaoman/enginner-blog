'use client'
import './globals.css'

import { Dialog, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <html lang="zh-CN">
      <body className="bg-custom-background lg:px-8">
        <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
          <nav aria-label="Global" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center py-[2.125rem]">
              <Link className="flex-none text-slate-900" href="/">
                <span className="sr-only">Tailwind UI</span>
                <svg className="h-6 w-auto" aria-hidden="true" viewBox="0 0 160 24" fill="none">
                  <path
                    d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                    className="fill-sky-400"
                  ></path>
                  <path
                    d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://tailwindcss.com/blog/introducing-catalyst"
                className="group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden min-[1300px]:flex"
              >
                <svg className="h-4 w-4 fill-sky-500" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-semibold">Introducing Catalyst</span>
                <svg width="2" height="2" aria-hidden="true" className="fill-slate-900">
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <span className="font-medium">
                  <span className="md:hidden">Our new React UI kit</span>
                  <span className="hidden md:inline">A modern application UI kit for React</span>
                </span>
                <svg
                  viewBox="0 0 5 8"
                  className="h-2 w-[5px] fill-black/30 group-hover:fill-black/60"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  aria-hidden="true"
                >
                  <path d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"></path>
                </svg>
              </Link>
              <div className="ml-auto hidden lg:flex lg:items-center">
                <Link className="hover:text-custom-lightingFont" href="/components">
                  Components
                </Link>
                <Link className="ml-8 hover:text-custom-lightingFont" href="/templates">
                  Templates
                </Link>
                <Link className="ml-8 hover:text-custom-lightingFont" href="/documentation">
                  Docs
                </Link>
              </div>
              <button
                type="button"
                className="-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8"
              >
                <span className="sr-only">Search components</span>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-gray-900 hover:fill-gray-900"
                >
                  <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                </svg>
              </button>
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
                    <Menu.Items className="absolute right-0 z-10 mt-4 min-w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            </div>
          </nav>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-hidden lg:hidden"
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
                <Dialog.Panel className="fixed inset-0 flex translate-x-0 items-start justify-end overflow-y-auto">
                  <div className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-custom-background shadow-2xl ring-1 ring-black/10 transition">
                    <h2 className="sr-only">Navigation</h2>
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
                    <nav className="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
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
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </Dialog>
          </Transition>
        </header>
        {children}
      </body>
    </html>
  )
}
