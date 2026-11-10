import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
export const metadata: Metadata = {
  title: "Veracust — Your ears can be fooled. Veracust won't.",
  description: "An acoustic authenticity engine exploring how to detect AI-cloned voices through the physical signals hidden in sound.",
  openGraph: { title: "Veracust — Acoustic authenticity", description: "Your ears can be fooled. Veracust won't.", type: "website" }
};
  verification: {
    google: "sOD0p3SacN9HoQAR597oIvtYpzAgrN-xeHcKUG9WQ-k",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>;
}
