import { ImageResponse } from "next/og"

// Definimos el tamaño del favicon
export const size = {
  width: 32,
  height: 32,
}

// Definimos el tipo de contenido
export const contentType = "image/png"

// Generamos el favicon dinámicamente
export default function Icon() {
  return new ImageResponse(
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
        fontSize: "22px",
        fontWeight: "bold",
      }}
    >
      P
    </div>,
    {
      ...size,
    },
  )
}

