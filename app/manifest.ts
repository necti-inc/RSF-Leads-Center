import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Rock Solid Fence Leads",
        short_name: "RSF Leads",
        description: "Lead management dashboard for Rock Solid Fence",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#E30613",
        icons: [
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icon",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icon",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    }
}
