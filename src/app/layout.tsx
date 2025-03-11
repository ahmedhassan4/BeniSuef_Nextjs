import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";

export const metadata = {
  title: "Home",
  description: "Rent rooms",
};

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          josefin.className +
          " min-h-screen flex flex-col relative bg-gray-800 text-white"
        }
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
