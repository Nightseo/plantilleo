import { ImageResponse } from "next/og"

export async function GET() {
  const size = {
    width: 180,
    height: 180,
  }

  const icon = new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        borderRadius: "20%",
        color: "white",
        fontSize: "120px",
        fontWeight: "bold",
      }}
    >
      P
    </div>,
    {
      ...size,
    },
  )

  return new Response(await icon.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}

