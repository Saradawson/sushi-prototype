import type { Metadata } from "next";

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
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
