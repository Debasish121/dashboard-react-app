import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { GoTriangleDown } from 'react-icons/go'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
            <div className="flex items-center">
                <span className="text-lg text-gray-800 ml-2 mr-4">Payments</span>
                <span className="text-sm text-gray-600 ml-1 ">
                    <HiOutlineQuestionMarkCircle className="text-sm text-gray-600" />
                </span>

                <span className="text-sm text-gray-600 ml-1 mt-0.5">How it works</span>
            </div>
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search features, tutorial, etc."
                    className="text-sm focus:outline-none active:outline-none border-none bg-gray-100 text-gray-600 w-[24rem] h-10 pl-11 pr-4 rounded-md"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative rounded-full">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    'relative bg-gray-100 text-gray-600 rounded-full group inline-flex items-center rounded-sm p-2 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100',
                                    open && 'bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 bg-gray-300 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <GoTriangleDown className="text-gray-600 h-6 w-6" />
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/profile')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/settings')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
