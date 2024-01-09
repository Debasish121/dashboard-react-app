import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

export default function DashboardStatsGrid() {
    return (
        <div className="flex flex-col">
            <div className="flex mx-6 mt-6 mb-4 text-3xl items-center justify-between">
                <h1>Overview</h1>
                <button className="flex items-center text-lg p-2 bg-white rounded-md border text-gray-700">
                    Last month
                    <HiOutlineChevronDown className="w-5 h-5 ml-1" />
                </button>
            </div>
            <div className="flex gap-6 m-6">
                <BoxWrapper>
                    <div className="pl-4">
                        <span className="text-md text-gray-700 font-light">Online Orders</span>
                        <div className="flex items-center mt-4">
                            <strong className="text-4xl text-gray-700 font-semibold">231</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="pl-4">
                        <span className="text-md text-gray-700 font-light">Amount received</span>
                        <div className="flex items-center mt-4">
                            <strong className="text-4xl text-gray-700 font-semibold">₹ 23,92,312.19</strong>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-md p-6 flex-1 border border-gray-200 flex items-center">{children}</div>
}
