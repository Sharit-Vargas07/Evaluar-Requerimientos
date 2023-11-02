@extends('layouts.app')

@section('titulo')
Registrate desde Devstagram
@endsection

@section('contenido')
<form method="POST" action="/ruta-a-tu-controlador" class="space-y-4 flex">
  @csrf
  <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
  <div class="">
      <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
      <input type="text" name="nombre" id="nombre" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
  </div>
  <div>
      <label for="email" class="block text-sm font-medium text-gray-700">UserName</label>
      <input type="email" name="email" id="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
  </div>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" name="email" id="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
</div>
<div>
  <label for="email" class="block text-sm font-medium text-gray-700">Password</label>
  <input type="email" name="email" id="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
</div>
<div>
  <label for="email" class="block text-sm font-medium text-gray-700">Confirmed Password</label>
  <input type="email" name="email" id="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
</div>
<div class="flex justify-center mt-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Enviar
  </button>
</div>
</div>
</form>
<div>
  <img src="imgdos.jpg" class="max-w-full h-auto" alt="Descripción de la imagen">
</div>


@endsection
