'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';

interface SidebarItem {
  name: string;
  href: string;
  iconSrc: string;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Account', href: '/account', iconSrc: '/user.svg' },
  { name: 'Security', href: '/security', iconSrc: '/security.svg' },
  { name: 'Notifications', href: '/notifications', iconSrc: '/notification.svg' },
  { name: 'Pricing', href: '/pricing', iconSrc: '/pricing.svg' },
  { name: 'Sales', href: '/sales', iconSrc: '/sales.svg' },
  { name: 'Users & Roles', href: '/' || '/user', iconSrc: '/users.svg' },
  { name: 'Backups', href: '/backups', iconSrc: '/backups.svg' },
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
                    <span className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-blue-100 text-[#0D6EFD]' : 'text-[#94A3B8]'
                      } hover:bg-blue-50`}>
                      <Image
                        src={item.iconSrc}
                        width={20}
                        height={20}
                        alt={`${item.name.toLowerCase()} icon`}
                        className={pathname === item.href ? styles.activeIcon : styles.icon}
                      />
                      <span className="ml-3">{item.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='border-[#F0F2F5] border-b-2 w-full relative mt-6' />
        </div>
        <div>
          <Link href="/dashboard">
            <span className="flex gap-4 items-center p-2 text-gray-600 hover:bg-blue-50 rounded border-[#344054] border">
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
