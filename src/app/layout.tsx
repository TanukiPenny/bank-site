import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Penny's Landing Site",
  description: "Just a simple landing page for my domain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en">
      <head>
        <meta content="https://penny.moe/" property="og:url"/>
        <meta content="https://zip.penny.moe/u/bna-michiru.gif" property="og:image"/>
        <link rel="icon" href="http://zip.penny.moe/u/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
            rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
