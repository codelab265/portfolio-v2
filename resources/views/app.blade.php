<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta name="description" content="Welcome to Mphatso Mlenga's portfolio website, showcasing web and mobile development expertise from Lilongwe, Malawi. Explore my projects, skills, and experience in creating innovative digital solutions.">
        <meta name="keywords" content="Web developer,Mobile developer,Lilongwe,Malawi,Portfolio,Software engineer,Frontend,development,Backend development,Full-stack development,JavaScript,React,Laravel,PHP,HTML,CSS,Responsive design,UI/UX design,Application development,Mobile app development,Web development portfolio">
        <meta name="author" content="Mphatso Mlenga">
        <meta name="robots" content="index, follow">
        <!-- Example Open Graph tags -->
        <meta property="og:title" content="Mphatso Mlenga portfolio">
        <meta property="og:description" content="Welcome to Mphatso Mlenga's portfolio website, showcasing web and mobile development expertise from Lilongwe, Malawi. Explore my projects, skills, and experience in creating innovative digital solutions.">
        <meta property="og:image" content="{{ asset('images/seo.png') }}">
        <meta property="og:url" content="http://mphatso.codelab265.com">
        <meta property="og:type" content="website">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
