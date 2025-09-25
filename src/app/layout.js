import nextFontLocal from "next/font/local";
import "./globals.css";

const geistSans = nextFontLocal({
  src: [
    {
      path: "./fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Geist-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Geist-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = nextFontLocal({
  src: [
    {
      path: "./fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Homepage | Isaac Bao",
  description:
    "Here is Isaac Bao's personal homepage | Beijing Moonshot Academy (MSA) | UI/UX ✕ Social Science - (Expressive)| Love Building something AMAZING and INSPIRING | Figma, vibe coding, Java, Next.js, blog | @Singularity奇点/@OMNIAPATH-NEXT/@MSA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
