<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{{ $metaTitle ?? 'Bambú Bienestar' }}</title>

<meta name="description" content="{{ $metaDescription ?? 'Bienvenido a Bambú Bienestar, un lugar para encontrar paz y equilibrio.' }}">
<meta name="keywords" content="{{ $metaKeywords ?? 'bienestar, relajación, salud, yoga' }}">
<meta name="author" content="{{ $metaAuthor ?? 'Bambú Bienestar' }}">
<meta name="robots" content="{{ $metaRobots ?? 'index, follow' }}">
<meta name="theme-color" content="#4CAF50">

<!-- Open Graph -->
<meta property="og:title" content="{{ $metaTitle ?? 'Bambú Bienestar' }}">
<meta property="og:description" content="{{ $metaDescription ?? 'Bienvenido a Bambú Bienestar.' }}">
<meta property="og:image" content="{{ $metaImage ?? asset('images/default.png') }}">
<meta property="og:url" content="{{ $metaUrl ?? url()->current() }}">
<meta property="og:type" content="website">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $metaTitle ?? 'Bambú Bienestar' }}">
<meta name="twitter:description" content="{{ $metaDescription ?? 'Bienvenido a Bambú Bienestar.' }}">
<meta name="twitter:image" content="{{ $metaImage ?? asset('images/default.png') }}">
