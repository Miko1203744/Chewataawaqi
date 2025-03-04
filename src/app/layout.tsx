import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/theme-provider"
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Chewata Awaqi",
  description: "Let there be games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
              {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
