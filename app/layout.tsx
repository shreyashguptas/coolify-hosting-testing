import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello",
  description: "Minimal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji",
        }}
      >
        {children}
      </body>
    </html>
  );
}
