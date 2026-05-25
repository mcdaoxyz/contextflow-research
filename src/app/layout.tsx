import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ContextFlow Research", description: "Academic paper assistant with semantic search across research papers and technical documents." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
