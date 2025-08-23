// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import { Sora, Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Fai Fit",
  description: "Fai Fit E-Commerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          <CartProvider>
          {children} 
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
