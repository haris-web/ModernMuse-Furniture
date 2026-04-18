import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "#1a1a2e",
        }}
      >
        <div
          style={{
            width: 112,
            height: 112,
            borderRadius: 32,
            background: "#c9974a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a1a2e",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          }}
        >
          P
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

