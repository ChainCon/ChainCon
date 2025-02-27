
 import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Header from "@/components/header"

export const metadata = {
  title: "Tamago Labs - X-Engine",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={"antialiased font-mono"}>
        <Providers>
          <div className="flex min-h-screen flex-col bg-neutral-900 text-base font-normal text-white w-full">

            <div className="flex flex-grow flex-row">
              <div className="border-r border-neutral-600">
                <Navbar />
              </div>
              <div className="flex-grow"> 
                {children}
              </div>

            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
