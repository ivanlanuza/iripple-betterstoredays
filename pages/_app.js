import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

export default function App({ Component, pageProps }) {
  return (
    <div className={GeistSans.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
