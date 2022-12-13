import "../styles/cssReset.css";
import type { AppProps } from "next/app";
import { lora, merriweather } from "../lib/fonts";
import MainLayout from "../components/layout/MainLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <main className={`${lora.variable} ${merriweather.variable}`}>
        <Component {...pageProps} />
      </main>
    </MainLayout>
  );
}
