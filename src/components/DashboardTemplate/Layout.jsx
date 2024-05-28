"use client";
import { useState, useEffect, useRef } from 'react';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';
import Cookies from 'js-cookie';


const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const roleFromCookie = Cookies.get("role");
    const usernameFromCookie = Cookies.get("username");
    const photoFromCookie = Cookies.get("photo");

    if (roleFromCookie && usernameFromCookie && photoFromCookie) {
      setRole(roleFromCookie);
      setUsername(usernameFromCookie);
      setPhoto(photoFromCookie);
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="h-screen flex bg-neutral-200">
      <SideNavbar ref={sidebarRef} isOpen={isSidebarOpen}/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar toggleSidebar={toggleSidebar} role={role} photo={photo} username={username} />
        <main className="flex-1 px-6 py-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
