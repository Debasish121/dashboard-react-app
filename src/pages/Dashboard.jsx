import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import RecentOrders from '../components/RecentOrders'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <h1 className="text-2xl mx-6 mb-3">Transaction | This Month</h1>
            <div className="flex flex-row gap-4 mx-6">
                <RecentOrders />
            </div>
        </div>
    )
}
