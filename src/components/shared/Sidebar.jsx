import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineCurrencyDollar, HiOutlineChevronDown } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'
import img from '../images/nishyan.jpg'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={img} alt="Your Alt Text" className="w-12 h-12 rounded-sm" />

                <div>
                    <span className="text-neutral-200 text-lg p-1 mt-1">Nishyan</span>
                    <a
                        href="https://www.facebook.com/thenishyan"
                        className="block text-gray-400 underline rounded-md p-1 pt-2"
                        target="blank"
                    >
                        Visit Store
                    </a>
                </div>
                <div className="flex items-center ml-auto">
                    <a href="https://www.google.com" target="blank">
                        <HiOutlineChevronDown className="text-white text-2xl" />
                    </a>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-neutral-700">
                <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md w-full m-1">
                    <HiOutlineCurrencyDollar className="text-gray-100 bg-gray-500 rounded-md h-10 w-10 p-1 mr-2" />
                    <div className="flex items-left flex-col">
                        <span className="text-sm text-gray-300">Available credits</span>
                        <span className="text-md text-white">222.10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}
