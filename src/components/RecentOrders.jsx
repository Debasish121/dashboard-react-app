import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { HiOutlineArrowDown, HiOutlineArrowUp, HiOutlineDownload, HiOutlineSearch } from 'react-icons/hi'

const recentOrderData = [
    {
        id: '1',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '2',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '3',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '4',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '5',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '6',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '7',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '8',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '9',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '10',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '11',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '12',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '13',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '14',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    },
    {
        id: '15',
        product_id: '281209',
        order_date: '2022-05-17T03:24:00',
        order_total: '₹1,278.23',
        transaction_fee: '₹22'
    }
]

export default function RecentOrders() {
    return (
        <>
            <div className="bg-white px-4 pt-3 pb-4 rounded-md border border-gray-200 flex-1">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <div className="relative">
                            <HiOutlineSearch
                                fontSize={20}
                                className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                            />
                            <input
                                type="text"
                                placeholder="Search by order ID..."
                                className="text-sm focus:outline-none active:outline-none border text-gray-600 w-[18rem] h-10 pl-11 pr-4"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex items-center text-gray-700 border p-2 rounded-md">
                            {/* Sorting icons */}
                            <span className="mr-1">Sort</span>
                            <HiOutlineArrowUp />
                            <HiOutlineArrowDown />
                        </button>
                        <button className="flex items-center text-gray-700 border text-2xl p-1.5 rounded-md ml-2">
                            <HiOutlineDownload />
                        </button>
                    </div>
                </div>
                <div className="border-x border-gray-200 rounded-sm mt-3">
                    <table className="w-full text-gray-700">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="w-1/4 px-4 py-2 text-left">Order ID</th>
                                <th className="w-1/4 px-4 py-2 text-center">Order Date</th>
                                <th className="w-1/4 px-4 py-2 text-center">Order Total</th>
                                <th className="w-1/4 px-4 py-2 text-right">Transaction Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrderData.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-4 py-2">
                                        <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        {format(new Date(order.order_date), 'dd MMM yyyy')}
                                    </td>
                                    <td className="px-4 py-2 text-center">{order.order_total}</td>
                                    <td className="px-4 py-2 text-right">{order.transaction_fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="flex items-center text-gray-600 border p-2 rounded-md mr-3 font-bold">
                        &lt; Previous
                    </button>
                    <div className="flex space-x-4">
                        <button className="text-gray-700 border-none p-1 ml-3 rounded-md">1</button>
                        <span className="text-gray-700 p-2">...</span>
                        {/* Show pages after 10*/}
                        <button className="text-gray-700 bg-blue-700 text-white border-none p-2 rounded-md">10</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">11</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">12</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">13</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">14</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">15</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">16</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">17</button>
                        <button className="text-gray-700 border-none p-1 rounded-md">18</button>
                    </div>
                    <button className="flex items-center text-gray-600 border p-2 rounded-md ml-4 font-bold">
                        Next &gt;
                    </button>
                </div>
            </div>
        </>
    )
}
