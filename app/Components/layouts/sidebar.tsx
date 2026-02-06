"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, History, Compass, BookmarkPlus, Settings } from 'lucide-react';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Categories', href: '/Categories', icon: LayoutGrid },
        { name: 'Frequent', href: '/Frequent', icon: History },
        { name: 'Explore', href: '/explore', icon: Compass },
        { name: 'Add Bookmark', href: '/add', icon: BookmarkPlus },
        { name: 'Settings', href: '/Settings', icon: Settings },
    ];

    return (
        <aside className="w-64 h-screen bg-[#0D0D0D] text-white flex flex-col p-6 fixed left-0 top-0 border-r border-gray-800 z-50">
            <div className="mb-10">
                <Image src="/Logo.svg" alt="Markflow" width={140} height={100} priority/>
            </div>
            
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group w-full ${
                                isActive 
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                                : "hover:bg-gray-800/50 text-gray-400 hover:text-white"
                            }`}
                        >
                            <Icon size={20} className={isActive ? "text-white" : "text-gray-500 group-hover:text-white"} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;