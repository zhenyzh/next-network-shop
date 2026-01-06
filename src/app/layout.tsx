import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import '@zhenyzh/common-ui/styles';
import "@/shared/styles/globals.css";
import {Header} from "@/widgets/header";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next network shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
