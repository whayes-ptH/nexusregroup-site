import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { metadataBase: new URL("https://nexusregroup.eu"), title: { default: "Nexus Reinsurance Group | International Risk Management", template: "%s | Nexus Reinsurance Group" }, description: "Reinsurance placement, captive company management and specialty risk expertise from Nassau to global markets.", alternates: { canonical: "/" }, openGraph: { type: "website", url: "https://nexusregroup.eu", siteName: "Nexus Reinsurance Group", images: [{ url: "/hero.webp", width: 1600, height: 900 }] }, icons: { icon: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>; }
