import React from "react";
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Demo using React with geolocation API"
      />
      <meta name="language" content="es" />
      <meta name="author" content="Paulo Tijero" />
      <meta
        name="subject"
        content="Fullstack Software Engineer, Technical Writer, and Funny Speaker"
      />
      <meta name="pagename" content="Geolocation" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="black" />
      <meta name="apple-mobile-web-app-title" content="Geolocation" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Geolocation" />
      <meta
        property="og:description"
        content="Demo using React with geolocation API"
      />
      <meta property="og:image" content="/assets/img/desktop.png" />
      <meta
        property="og:image:alt"
        content="Demo using React with geolocation API"
      />
      <meta
        property="og:url"
        content="https://react-geolocation.paulotijero.dev"
      />
      <meta property="og:site_name" content="Paulo Tijero" />
      <meta property="og:locale" content="es" />
      <meta
        name="twitter:card"
        value="summary_large_image"
        content="summary_large_image"
      />
      <meta name="twitter:site" value="@paulotijero" content="@paulotijero" />
      <meta
        name="twitter:creator"
        value="@paulotijero"
        content="@paulotijero"
      />
      <meta
        name="twitter:url"
        value="https://react-geolocation.paulotijero.dev"
        content="https://react-geolocation.paulotijero.dev"
      />
      <meta name="twitter:title" value="Geolocation" content="Geolocation" />
      <meta
        name="twitter:description"
        value="Demo using React with geolocation API"
        content="Demo using React with geolocation API"
      />
      <meta
        name="twitter:image"
        value="https://react-geolocation.paulotijero.dev/assets/img/desktop.png"
        content="https://react-geolocation.paulotijero.dev/assets/img/desktop.png"
      />
      <meta
        name="twitter:summary"
        content="Fullstack Software Engineer, Technical Writer, and Funny Speaker"
      />
    </Helmet>
  );
}

export default Seo;
