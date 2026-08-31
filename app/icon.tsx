import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 512, height: 512 }
export const contentType = "image/png"

function BrandMark({ canvasSize }: { canvasSize: number }) {
    const iconSize = Math.round(canvasSize * 0.56)

    return (
        <div
            style={{
                width: canvasSize,
                height: canvasSize,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#E30613",
                borderRadius: Math.round(canvasSize * 0.22),
            }}
        >
            <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 20V8M9 20V8M14 20V8M19 20V8" />
                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M3 11h18M3 15h18" />
                <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 8l2.5-4M9 8l2.5-4M14 8l2.5-4M19 8l1.5-2.5" />
            </svg>
        </div>
    )
}

export default function Icon() {
    return new ImageResponse(<BrandMark canvasSize={512} />, {
        width: 512,
        height: 512,
    })
}
