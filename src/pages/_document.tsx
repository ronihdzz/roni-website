import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

type DocProps = DocumentInitialProps & { locale: string };

export default class MyDocument extends Document<DocProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocProps> {
    const initialProps = await Document.getInitialProps(ctx);
    // ctx.locale viene del routing i18n; fallback al defaultLocale.
    return { ...initialProps, locale: ctx.locale ?? "es" };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
