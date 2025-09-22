export async function GET() {
  const manifest = {
    name: "Plantilleo",
    short_name: "Plantilleo",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    theme_color: "#f97316",
    background_color: "#ffffff",
    display: "standalone",
  }

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}

