import React from "react";

import SideNav from "../ui/dashboard/sidenav";

interface Children {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {children}
    </div>
  );
}
