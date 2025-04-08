import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="https://app.embed.im/snow.js" defer></script>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
