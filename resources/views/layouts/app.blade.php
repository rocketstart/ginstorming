<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ginstorming</title>

    <!-- Styles -->
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">

</head>
<body id="app-layout">

@include('includes.navbar')

@yield('content')

<!-- JavaScripts -->
<script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>
