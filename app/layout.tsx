import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { IntroScreen } from "@/components/intro-screen";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Farhad Hossen",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntroScreen />
          <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row gap-8 p-6 lg:p-10 pt-28 lg:pt-28 relative">
            <Navigation />
            <Sidebar />
            <main className="flex-1 w-full min-w-0 flex flex-col gap-24 py-10 pb-10">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}