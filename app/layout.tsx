import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner"

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
    display: "swap", // improves font rendering consistency
});

export const metadata: Metadata = {
    title: "PrepWise",
    description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning={true}>
        <body className={`${monaSans.className} antialiased  pattern`}>
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
