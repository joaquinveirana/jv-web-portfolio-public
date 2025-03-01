import * as React from 'react';
const title = 'Joaquín Veirana';
const url = '';
const description = 'My Personal website';
const author = 'Joaquín Veirana';

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="site" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={'/my_logos/share.png'} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      <link rel="apple-touch-icon" href="/my_logos/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="16x16" href="/my_logos/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="32x32" href="/my_logos/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/my_logos/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" color="#000000" href="/my_logos/logo_jv_bold_cyan_white_sq.svg" />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/my_logos/apple-touch-icon.png" />
    </>
  );
}
