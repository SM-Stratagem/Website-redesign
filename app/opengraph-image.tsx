import { ImageResponse } from "next/og";

export const alt =
  "SM Stratagem — A Dubai digital product studio. Maker of VoxxHire.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#faf5e9",
          color: "#1b1611",
          padding: "80px 100px",
          fontFamily: "serif",
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -200,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: 600,
            background:
              "radial-gradient(circle, rgba(81,107,88,.32) 0%, rgba(81,107,88,0) 70%)"
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -150,
            right: -100,
            width: 700,
            height: 700,
            borderRadius: 700,
            background:
              "radial-gradient(circle, rgba(122,148,133,.28) 0%, rgba(122,148,133,0) 70%)"
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b5f53",
            fontFamily: "sans-serif",
            fontWeight: 500
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                width: 36,
                height: 36,
                borderRadius: 36,
                border: "2px solid #1b1611",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 14,
                  height: 14,
                  borderRadius: 14,
                  background: "#516b58"
                }}
              />
            </div>
            <div style={{ display: "flex" }}>SM STRATAGEM</div>
          </div>
          <div style={{ display: "flex" }}>DUBAI · UAE</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            fontSize: 92,
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#1b1611"
          }}
        >
          <div style={{ display: "flex" }}>A Dubai digital</div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>product studio.</span>
            <span style={{ color: "#516b58", fontStyle: "italic" }}>Maker</span>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>of</span>
            <span style={{ color: "#516b58", fontStyle: "italic" }}>
              VoxxHire.
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#3d342c",
              fontFamily: "sans-serif",
              maxWidth: 700,
              lineHeight: 1.4
            }}
          >
            B2B · B2C · B2B2C assessment platform, custom websites &amp;
            software for forward-thinking teams.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.15em",
              color: "#516b58",
              fontFamily: "monospace",
              fontWeight: 600
            }}
          >
            SM-STRATAGEM.COM
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
