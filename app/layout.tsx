import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veeels",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full fixed top-0 z-50">
          <Navbar />
        </div>
        <div className="pt-20">{children}</div>
        <Footer />
        <Toaster />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='NmNRMDhmNFRlOGZrRmtjdzhCczVDQT09';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);})();`,
          }}
        />
      </body>
    </html>
  );
}
