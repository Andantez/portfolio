import "../styles/cssReset.css";
import type { AppProps } from "next/app";
import { lora, merriweather } from "../lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lora.variable} ${merriweather.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
