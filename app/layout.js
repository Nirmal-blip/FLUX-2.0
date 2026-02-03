import localFont from "next/font/local";
import { Inter, Orbitron, JetBrains_Mono, Poppins, Space_Grotesk, Rajdhani, Exo_2, Audiowide, Michroma, Teko, Oswald, Bebas_Neue, Anton, Russo_One, Electrolize, Saira_Condensed, Quantico, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
  display: "swap",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
  display: "swap",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

// Using Teko as Jersey alternative - great sports font
const jersey = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jersey",
  display: "swap",
});

// Athletic fonts
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo-one",
  display: "swap",
});

// Technical/Futuristic fonts
const electrolize = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-electrolize",
  display: "swap",
});

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-saira-condensed",
  display: "swap",
});

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

// Local Font
const DeliusRegular = localFont({
  src: [
    {
      path: "fonts/Delius-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-delius-regular",
  display: "swap",
});

export const metadata = {
  title: "Student Activity Center - SAC",
  description: "Ignite your passion, unleash creativity & showcase your talent at Student Activity Center",
};

import ToastProvider from "./components/ui/Toast";
import { LoadingProvider } from "./components/providers/LoadingProvider";
import ClientProvider from "./components/providers/ClientProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration warnings caused by browser extensions
              if (typeof window !== 'undefined') {
                const originalError = console.error;
                console.error = (...args) => {
                  if (args[0] && args[0].includes && args[0].includes('hydration')) {
                    return;
                  }
                  originalError.apply(console, args);
                };
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} ${poppins.variable} ${spaceGrotesk.variable} ${rajdhani.variable} ${exo2.variable} ${audiowide.variable} ${michroma.variable} ${jersey.variable} ${oswald.variable} ${bebasNeue.variable} ${anton.variable} ${russoOne.variable} ${electrolize.variable} ${sairaCondensed.variable} ${quantico.variable} ${shareTechMono.variable} ${DeliusRegular.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ClientProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ClientProvider>
        <ToastProvider />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              border: '1px solid rgba(6, 182, 212, 0.5)',
              borderRadius: '12px',
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: '500',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
