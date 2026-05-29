import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1611",
          color: "#faf5e9",
          fontFamily: "serif",
          padding: 24
        }}
      >
        <div
          style={{
            width: 116,
            height: 116,
            borderRadius: "50%",
            border: "5px solid #faf5e9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "#7a9485"
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
