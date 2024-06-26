import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import { SiteProvider } from "./context/SiteContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerd Studio",
  description: "Open Source AI",
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteProvider>
      <html lang="en">
        <body className={inter.className}>
          <section className="relative flex bg-white">
            <Sidebar />
            <section className="w-full">
              <Navbar />
              {children}
            </section>
          </section>
          <Toaster />
        </body>
      </html>
    </SiteProvider>
  );
}
