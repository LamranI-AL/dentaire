import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={DmSans.variable}>
      <body className="bg-slate-500">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
