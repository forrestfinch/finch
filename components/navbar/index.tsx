import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon, XIcon
} from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import Image from 'next/image'


const navigation = [
    { name: 'Manifesto', href: '/#manifesto' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
]

interface Props {
    alt?: Boolean
}

const NavBar = ({ alt }: Props) => {
    return (
        <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Forrest &amp; Finch</span>
                                    <Image
                                        className="h-8 w-auto sm:h-10"
                                        src="/logo.png"
                                        height={50}
                                        width={50}
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item, key) => (
                            <Link key={key} href={item.href}>
                                <a className="font-medium text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <Image
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    height={50}
                                    width={50}
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item, key) => (
                                <Link key={key} href={item.href}>
                                    <a
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default NavBar