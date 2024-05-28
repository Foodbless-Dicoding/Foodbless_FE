/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { CaretRight, FadersHorizontal, List, SignOut, User } from '@phosphor-icons/react';
import { postLogout } from '@/data/api-endpoint.js';

const TopNavbar = ({ toggleSidebar, role, photo, username }) => {
  return (
    <nav className=" flex bg-primaryGreen p-4 h-[75px] items-center z-40">
      <div className="container mx-auto flex justify-between items-center">
      <div className="md:hidden items-center flex">
          <button onClick={toggleSidebar} className="text-gray-300 focus:outline-none">
          <List size={28} />
          </button>
        </div>
        <div className="flex gap-2 items-center">
        <CaretRight className="text-fbWhite invisible md:visible" size={18} />
          <Link className="text-fbWhite capitalize hover:underline font-semibold" href="/dashboard">
            Dashboard {role} 
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">

            <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl bg-fbYellow text-fbDark shadow-sm disabled:opacity-50 disabled:pointer-events-none">
            {photo ? (
                <img className="w-6 h-6 rounded-full" src={`https://ferdian-q4w3i3hz7a-uc.a.run.app${photo}`} alt="Profile" />
              ) : (
                <img className="w-6 h-6 rounded-full" src="https://placehold.co/400" alt="" />
            )}
              <svg className="hs-dropdown-open:rotate-180 size-4 text-fbDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            {/* Profile Modals */}
            <div className="hs-dropdown-menu z-50 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-neutral-50 shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                <a className="flex cursor-default items-center font-bold gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:bg-gray-100" href="#">
                <User size={18} />
                  {username}
                </a>
                <hr className="border-gray-200" />
                <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="/dashboard/account">
                  <FadersHorizontal size={18} />
                  Akun Saya
                </a>
                <a onClick={() => postLogout()} className="flex font-bold items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-red-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                <SignOut size={18} />
                  Keluar
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
