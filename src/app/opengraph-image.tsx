import { ImageResponse } from "next/og";

export const alt = "Nazmus Sakib · Software Engineer | ASP.NET · nopCommerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#f3f1eb",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 18% 22%, rgba(13,110,106,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 88% 78%, rgba(196,165,116,0.14), transparent 55%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "#0d6e6a",
        }}
      />

      <div
        style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#0d6e6a",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Open to Software Engineer roles
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#141816",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Nazmus Sakib
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 820,
            color: "#3a423c",
            fontSize: 30,
            lineHeight: 1.35,
            fontWeight: 500,
          }}
        >
          ASP.NET Core · nopCommerce · enterprise platforms
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            color: "#6a736c",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <span>ASP.NET Core</span>
          <span>·</span>
          <span>nopCommerce</span>
          <span>·</span>
          <span>ERP Integration</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#085551",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          portfolio-mn-sakib-se.vercel.app
        </div>
      </div>
    </div>,
    { ...size },
  );
}
