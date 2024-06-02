"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavbarFoodBless() {
    return(
      <header className="transform transition-transform duration-300 sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primaryGreen text-sm py-6 px-6">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
          <Link className="sm:order-1 flex-none text-xl font-semibold" href="/">
              <Image src="/assets/logo_nav_desktop.png" alt="FoodBless Logo" width={180} height={50} />
          </Link>
          <div className="sm:order-3 flex items-center gap-x-2">
            <a href="/login">
              <button id="masuk-btn" type="button" className="py-2 px-5 hover:scale-110	inline-flex items-center gap-x-2 text-sm font-bold rounded-lg border border-fbYellow bg-transparent text-fbYellow shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                Masuk
              </button>
            </a>
            <a href="/daftar">
              <button id="daftar-btn" type="button" className="hover:scale-110 py-2 px-5 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-fbYellow text-primaryGreen shadow-sm  disabled:opacity-50 disabled:pointer-events-none">
                Daftar
              </button>
            </a>
            <button id="hamburger_btn" type="button" className="lg:hidden hover:scale-110 hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg  text-fbYellow hover:text-fbRed shadow-sm disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:grow-0 sm:basis-auto sm:block sm:order-2">
            <div className="text-fbWhite lg:text-lg md:text-md sm:text-md  flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a className="font-medium hover:text-fbYellow  hover:underline" href="/">Beranda</a>
              <a className="font-medium hover:text-fbYellow  hover:underline" href="#">Pengguna</a>
              <a className="font-medium hover:text-fbYellow  hover:underline" href="#">Pemilik Bisnis</a>
              <a target="_blank" className="font-medium hover:text-fbYellow  hover:underline"  href="https://github.com/Foodbless-Dicoding">Tentang</a>
              <a className="font-medium hover:text-fbYellow  hover:underline md:hidden lg:hidden" href="/login">Masuk</a>
              <a className="font-medium hover:text-fbYellow  hover:underline md:hidden lg:hidden" href="#">Daftar</a>
            </div>
          </div>
        </nav>
      </header>
    );
}