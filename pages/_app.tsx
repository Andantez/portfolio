import '../styles/cssReset.css';
import '../styles/globalStyles.css';
import type { AppProps } from 'next/app';
import { lora, merriweather } from '../lib/fonts';
import MainLayout from '../components/layout/MainLayout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <div className={`${lora.variable} ${merriweather.variable}`}>
        <Component {...pageProps} />
      </div>
    </MainLayout>
  );
}
