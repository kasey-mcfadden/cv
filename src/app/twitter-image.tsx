import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const alt = "Kasey McFadden - Full Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load CMU Serif fonts
  const fontRegular = await readFile(
    join(process.cwd(), "public/fonts/cmu-serif/cmunrm.ttf")
  );
  const fontBold = await readFile(
    join(process.cwd(), "public/fonts/cmu-serif/cmunbx.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontFamily: "CMU Serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: 8,
            }}
          >
            Kasey McFadden
          </h1>
          <p
            style={{
              fontSize: 36,
              color: "#4a4a4a",
              marginTop: 0,
            }}
          >
            Full Stack Software Engineer
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#6a6a6a",
              marginTop: 24,
            }}
          >
            kaseym.com/cv
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "CMU Serif",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "CMU Serif",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
