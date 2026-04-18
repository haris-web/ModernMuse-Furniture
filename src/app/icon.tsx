import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "#1a1a2e",
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            background: "#c9974a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a1a2e",
            fontSize: 12,
            fontWeight: 800,
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

