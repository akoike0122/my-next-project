import { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | コーポレートサイト",
    default: "コーポレートサイト"
  },
  description: "『next.js+ヘッドレスCMSで始める』",
  openGraph: {
    title: "コーポレートサイト",
    description: "テストサイト",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <GoogleAnalytics gaId="" />
    </html>
  );
}
