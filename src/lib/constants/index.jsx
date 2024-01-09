import {
    HiOutlineViewGrid,
    HiOutlineTruck,
    HiOutlineSpeakerphone,
    HiOutlineChartBar,
    HiOutlineCash,
    HiOutlineCog,
    HiOutlineUsers,
    HiOutlineColorSwatch,
    HiOutlineCalculator,
    HiOutlineClipboardList,
    HiOutlineQuestionMarkCircle,
    HiOutlineLightningBolt,
    HiOutlineHome
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/home',
        icon: <HiOutlineHome />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineClipboardList />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'delivery',
        label: 'Delivery',
        path: '/delivery',
        icon: <HiOutlineTruck />
    },
    {
        key: 'marketing',
        label: 'Marketing',
        path: '/marketing',
        icon: <HiOutlineSpeakerphone />
    },
    {
        key: 'analytics',
        label: 'Analytics',
        path: '/analytics',
        icon: <HiOutlineChartBar />
    },
    {
        key: 'payments',
        label: 'Payments',
        path: '/',
        icon: <HiOutlineCash />
    },
    {
        key: 'Tools',
        label: 'Tools',
        path: '/tools',
        icon: <HiOutlineCog />
    },
    {
        key: 'discounts',
        label: 'Discounts',
        path: '/discounts',
        icon: <HiOutlineCalculator />
    },
    {
        key: 'audience',
        label: 'Audience',
        path: '/audience',
        icon: <HiOutlineUsers />
    },
    {
        key: 'appearance',
        label: 'Appearance',
        path: '/appearance',
        icon: <HiOutlineColorSwatch />
    },
    {
        key: 'plugins',
        label: 'Plugins',
        path: '/plugins',
        icon: <HiOutlineLightningBolt />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
