// import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/gatherly/Footer/Footer.jsx";

// Supabase server-side URL test (should be visible in the Render Cloud (render.com) deployment logs, if uncommented below)
/* console.log("OUR_PUBLIC_SUPABASE_URL");
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL); */

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Gatherly",
  description: "Connect Locally, Unite Globally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-2 items-center font-semibold text-4xl">
                    <Image
                      src="/assets/images/logo_light.png"
                      alt="gatherly logo"
                      className="h-8 w-auto dark:hidden"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/assets/images/logo_dark.png"
                      alt="gatherly logo"
                      className="h-8 w-auto hidden dark:block"
                      width={32}
                      height={32}
                    />
                    <Link href={"/"}>Gatherly</Link>
                    {/* <div className="flex items-center gap-2">
                      <DeployButton />
                    </div> */}
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>

              {/* <div className="flex flex-col gap-20 max-w-5xl p-5"> */}
              <div className="flex flex-col max-w-5xl">{children}</div>

              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
