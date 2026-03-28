import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flirt Styling | Personal Styling & Closet Services",
  description:
    "Flirt Styling is a warm, editorial personal styling and closet organization service based in Denver, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
