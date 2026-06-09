import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GTM from "./GTM";
import { ToastContainer } from 'react-toastify';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Graduvate",
    template: "%s | Graduvate",
  },
  description: "Study MBBS abroad with expert guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          name="google-site-verification"
          content="Ue4VRDH2LxFFOsTbPyNI5ypjIrH1gOZkWSPLXi2UGlw"
        />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={2500} />
        <GTM />
        {children}
      </body>
    </html>
  );
}
