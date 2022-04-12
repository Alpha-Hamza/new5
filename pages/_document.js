/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:wght@500;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <link
            href="https://fonts.googleapis.com/css?family=Lobster"
            rel="stylesheet"
            type="text/css"
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
