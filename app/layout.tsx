import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { IntroScreen } from "@/components/intro-screen";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingBackground } from "@/components/floating-background";
import "./globals.css";


const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farhad Hossen | Web Developer",
  description: "React & Next.js Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingBackground />
          {/* <IntroScreen /> */}
          <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row gap-8 p-6 lg:p-10 pt-20 lg:pt-24 relative">
            <Navigation />
            <Sidebar />
            <main className="flex-1 w-full min-w-0 flex flex-col">
              {children}
            </main>
          </div>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}