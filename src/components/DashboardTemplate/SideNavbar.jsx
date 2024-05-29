/* eslint-disable react/display-name */
import { Binoculars, BoxArrowDown, ClockCounterClockwise, House, Package, Storefront } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';

const SideNavbar = forwardRef(({ isOpen, role }, ref) => {
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

        {role === "seller" && (
          <>
            <Link href="/dashboard/seller/penjualan" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
              <Storefront size={20} />
                Penjualan
            </Link>
            <Link href="/dashboard/seller/order-masuk" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
              <BoxArrowDown size={20} />
                Pesanan Masuk
            </Link>
            <Link href="/dashboard/seller/riwayat-order" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
            <ClockCounterClockwise size={20} />
                Riwayat Pesanan
            </Link>
          </>
        )}

        {role === "customer" && (
          <>
            <Link href="/dashboard/customer/cari-makanan" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
              <Binoculars size={20} />
                Cari Makanan
            </Link>
            <Link href="/dashboard/customer/pesananku" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
              <Package size={20} />
                Pesananku
            </Link>
            <Link href="/dashboard/customer/riwayat-pesanan" className="hover:bg-primaryGreen text-md hover:bg-opacity-50 font-normal p-2 rounded-md flex flex-row items-center gap-2">
              <ClockCounterClockwise size={20} />
                Riwayat Pesanan
            </Link>
          </>
        )}

        {role === "admin" && (
          <>
          
          </>
        )}

      </nav>
    </div>
  );
});

export default SideNavbar;
