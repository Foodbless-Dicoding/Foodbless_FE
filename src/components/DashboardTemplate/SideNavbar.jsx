/* eslint-disable react/display-name */
import { House } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';

const SideNavbar = forwardRef(({ isOpen }, ref) => {
  return (
    <div ref={ref} className={`bg-secondaryGreen z-50 text-white h-full w-64 p-4 fixed md:relative transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
      <div className="flex flex-row items-center justify-center">
        <Image className="py-2" src="/assets/logo_nav_desktop.png" alt="FoodBless Logo" width={192} height={192} />
      </div>
      <hr className="border-fbWhite opacity-50" />
      <nav className="flex flex-col space-y-4 py-2 pl-2 px-2">
        <Link href="/dashboard" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
          <House size={20} />
            Beranda
        </Link>
      </nav>
    </div>
  );
});

export default SideNavbar;
