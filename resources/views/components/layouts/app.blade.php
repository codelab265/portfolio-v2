<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <title>{{ $title ?? 'Page Title' }}</title>
        @filamentStyles
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased bg-red-50">
        <header>
            <nav class="w-full h-[70px] flex items-center bg-white shadow-lg">
             <div class="container mx-auto flex items-center justify-between cursor-pointer">
                <img src="{{ asset('images/logo2.png') }}" alt="" class="w-[40px]">
                <a href="/" class="px-4 py-1 rounded-sm hover:text-red-500 duration-300 transition-all">
                    Home
                </a>
             </div>
            </nav>
        </header>
        {{ $slot }}
        
        @livewire('notifications')
        @filamentScripts
    </body>
</html>
