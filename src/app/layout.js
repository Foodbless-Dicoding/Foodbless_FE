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
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
