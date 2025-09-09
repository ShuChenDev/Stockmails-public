import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stockmails - Your daily finacial briefing service",
  description: "Daily Financial Briefing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-600 text-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
