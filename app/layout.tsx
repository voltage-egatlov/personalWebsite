import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const garamondClassico = localFont({
    src: [
        {
            path: "../public/fonts/GaramondClassicoSC.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-garamond-classico",
    display: "swap",
    fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
    title: "tej chhabra",
    description: "tej's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} ${garamondClassico.variable} antialiased`}
                >
                    {children}
                </body>
            </html>
        </ViewTransitions>
    );
}
