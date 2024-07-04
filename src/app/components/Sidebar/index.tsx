"use client";

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface SidebarItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Account', href: '/account', icon: <i className="fas fa-user"></i> },
  { name: 'Security', href: '/security', icon: <i className="fas fa-lock"></i> },
  { name: 'Notifications', href: '/notifications', icon: <i className="fas fa-bell"></i> },
  { name: 'Pricing', href: '/pricing', icon: <i className="fas fa-dollar-sign"></i> },
  { name: 'Sales', href: '/sales', icon: <i className="fas fa-tags"></i> },
  { name: 'Users & Roles', href: '/user', icon: <i className="fas fa-users"></i> },
  { name: 'Backups', href: '/backups', icon: <i className="fas fa-cloud"></i> },
];

const Sidebar: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 w-64 h-screen p-4 ml-5 border-2 bg-white mt-[2rem] rounded">
      <div className="flex flex-col h-[90%] justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <nav>
            <ul>
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className={`flex items-center p-2 rounded-lg ${
                      pathname === item.href ? 'bg-blue-100 text-blue-600' : 'text-[#94A3B8]'
                    } hover:bg-blue-50`}>
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 mb-10">
          <Link href="/dashboard">
            <span className="flex gap-4 items-center p-2  text-gray-600 hover:bg-blue-50  rounded border-[#344054] border">
              <Image src='/signOut.svg' width={20} height={20} alt='sign out icon' />
              <span className='text-[#344054]'>Back to Dashboard</span>
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
