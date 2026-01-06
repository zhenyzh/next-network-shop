import type { Metadata } from "next";
import '@zhenyzh/common-ui/style/common/ui'
import { Nunito } from "next/font/google";
import Header from "@/widgets/header/header";

import "@/shared/styles/globals.css";

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
