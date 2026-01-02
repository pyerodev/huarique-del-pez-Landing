import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "El Huarique Del Pez - Authentic Peruvian Ceviche",
  description: "Fresh, authentic Peruvian Ceviche delivered to your door or served at our table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${workSans.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-main dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
