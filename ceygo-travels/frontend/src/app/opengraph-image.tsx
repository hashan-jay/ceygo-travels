import { ImageResponse } from "next/og";

export const alt = "CeyGo Travels — private journeys across Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFCEA",
          color: "#141414",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, fontWeight: 600 }}>
          CEYGO TRAVELS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 0.95, letterSpacing: -2 }}>
            The island, unfolded city by city.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#5A5848" }}>
            Private Sri Lanka journeys for international travelers.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>
          Colombo · Sigiriya · Kandy · Ella · Galle
        </div>
      </div>
    ),
    { ...size },
  );
}
