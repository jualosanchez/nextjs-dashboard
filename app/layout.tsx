import "@/app/ui/global.css";
import React from "react";

import { montserrat } from "./ui/fonts";

import Footer from "@/app/ui/footer";

interface Children {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed="true">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
