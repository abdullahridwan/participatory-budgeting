import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import ResearchBanner from "./components/ResearchBanner";

export const metadata: Metadata = {
  title: "Participatory Budgeting in the Bronx",
  description: "Community members in the Bronx decide how public money gets spent. Learn what participatory budgeting is, how it works, and how to vote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SmoothScroll>
            <Nav />
            {children}
          </SmoothScroll>
          <ResearchBanner />
        </Providers>
      </body>
    </html>
  );
}
