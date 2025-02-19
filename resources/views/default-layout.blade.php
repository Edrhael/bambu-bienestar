<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

@include('partials.head')

</head>

<body>

@include('test.toolbox')

@include('partials.header')

<main class="content">
    @yield('content')
</main>

@include('partials.footer')

@include('partials.scripts')

</body>
</html>
