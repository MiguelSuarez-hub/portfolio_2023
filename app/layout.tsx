import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAS Dev",
  description: "Web portfolio developed with next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-gray-200 text-dark  dark:bg-gray-900 dark:text-white  selection:bg-gray-300 dark:selection:bg-gray-500 `}>
        <Provider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
