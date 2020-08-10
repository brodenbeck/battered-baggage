import Head from 'next/head';

/**
 * <head> component with meta information and links
 * @since v1.0.0
 */
const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <title>Battered Baggage</title>
  </Head>
);

export default Meta;
