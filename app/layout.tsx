import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import "./globals.css"

const display = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-display",
})

const body = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
})

export const metadata: Metadata = {
    title: "Rock Solid Fence — Leads",
    description: "Lead management dashboard for Rock Solid Fence",
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/icon", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "RSF Leads",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#e30613",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${display.variable} ${body.variable}`}>{children}</body>
        </html>
    )
}
