<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">

    <title>Serverless React PWA on AWS</title>

    <meta name="author" content="Gianluca Casati">
    <meta name="description" content="How to create a serverless Progressive Web App, using React, Redux, React Router, TypeScript on frontend and AWS Lambda, Cloudfront, Amazon SES, API Gateway for a zero maintenance required backend.">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="theme-color" content="#eeeeee">
    <meta name="apple-mobile-web-app-status-bar-style" content="#eeeeee">

    <link rel="manifest" href="manifest.json">

	
    <meta name="apple-mobile-web-app-title" content="Conquer-it">
    <meta name="application-name" content="Conquer-it">

    <style>
      html {
        color: #333333;
        font-family: "Lucida Console", Monaco, monospace;
      }

      body {
        background-color: #eeeeee;
      }

      noscript {
        color: magenta;
        text-align: center;
        font-size: 5vh;
      }
    </style>

    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <h1>Serverless React PWA on AWS</h1>

    <noscript>
      <p>Opsss... your JavaScript looks disabled 😒</p>
    </noscript>

    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('cache.js', { scope: '/' })
        })
      }
    </script>
  </body>
</html>
