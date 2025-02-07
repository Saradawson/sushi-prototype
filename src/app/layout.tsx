import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "sushi",
  description: "fake point of sale app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-pinkFour" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
