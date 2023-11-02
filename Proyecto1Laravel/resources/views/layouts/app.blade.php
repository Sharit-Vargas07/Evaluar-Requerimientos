<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        @vite('resources/css/app.css')
    </head>
    <body class="bg-slate-100">
      <header class=" flex items-center text-center justify-between border-b p-5 bg-white shadow">
        <h1 class="text-3xl font-black">Devstagram</h1>
        <nav>
          <a class="uppercase text-gray-600" href="auth.login">LOGIN</a>
          <a class="uppercase text-gray-600" href="/register">CREAR CUENTA</a>
        </nav>
      </header>
      <main class="container mx-auto mt-10">
        <h2 class="font-black text-center text-3xl mb-10">
          @yield('titulo')
        </h2> 
        @yield('contenido')
      </main>
      <footer class="text-center p-5 text-gray-500 font-bold uppercase">
        Todos los Derechos Reservados {{date('Y')}} {{-- Para poner el año exacto con PHP --}}
      </footer>
    
   
    </body>
</html>