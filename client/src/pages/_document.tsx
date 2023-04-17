import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@200;400&family=Russo+One&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.cdnfonts.com/css/avenir-next-lt-pro" rel="stylesheet" />
          <link rel="short icon" href="/album.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument
