import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Isaac Bao",
  description:
    "Here is Isaac Bao's personal homepage | Grade-10 at Beijing Moonshot Academy(MSA) | UI/UX and Social Science | Love Building something AMAZING and INSPIRING | Figma, vibe coding, Java, Next.js, blog | @Singularity奇点/@OMNIAPATH-NEXT/@MSA",
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
