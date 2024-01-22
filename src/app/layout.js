import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SideMenu } from "@/components";
import Vaul from "@/components/Vaul";
import { Suspense } from "react";
import Loading from "./loading";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Doe",
  description: "John Doe is a software developer based in Istanbul, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white dark:bg-[#2b2a2a] flex flex-col md:flex-row h-full">
          <Providers>
            <SideMenu />
            <Vaul />
            <Suspense fallback={<Loading />}>
              <div className="mx-auto dark:bg-[#2b2a2a] md:max-w-7xl h-full w-full md:mx-auto md:pl-64 xl:pl-80">
                {children}
              </div>
              <Analytics />
            </Suspense>
          </Providers>
        </div>
      </body>
    </html>
  );
}
