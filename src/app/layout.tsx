import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "./lib/registry";
import Providers from "../providers/Providers";
import { Wrapper } from "@/components/Wrapper";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "CADEX test assignment",
  description: "Test assignment for CADEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Wrapper>
              <Header />
              <main className="main">{children}</main>
              <Footer />
            </Wrapper>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
