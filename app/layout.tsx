//import node module libraries
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "react-circular-progressbar/dist/styles.css";
import "./globals.css";

//import custom components
import ClientWrapper from "@/components/common/ClientWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Credit View Dashboard",
  description: "E-Solve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
