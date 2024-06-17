import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodbless App",
  description: "Selamat tinggal kelaparan, tidak ada makanan terbuang lagi!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="dicoding:email" content="rhesakornelius@gmail.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
