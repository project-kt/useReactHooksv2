import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Use React Hook",
  description: "Your daily hook ready to use",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={fontSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex h-screen flex-col">
            <Navbar />
            <div className="container flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
