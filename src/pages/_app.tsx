import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  // Mantiene <html lang> sincronizado con el locale activo.
  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);

  return <Component {...pageProps} />;
}
