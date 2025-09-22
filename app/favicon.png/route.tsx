import { ImageResponse } from "next/og"

export async function GET() {
  // Google prefiere favicons de 48x48 para las SERPs
  const size = {
    width: 48,
    height: 48,
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
        fontSize: "24px", // Aumentado para mejor legibilidad
        fontWeight: "bold",
      }}
    >
      P
    </div>,
    {
      ...size,
    },
  )

  // PNG es el formato preferido por Google para favicons en SERPs
  return new Response(await icon.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}

