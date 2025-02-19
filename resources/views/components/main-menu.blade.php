<nav class="main-menu">

	<a href="{{ route('home') }}" class="main-menu-option {{ request()->routeIs('home') ? 'activeSection' : '' }}">
		{{ __('main-menu.home') }}
	</a>
	<a href="{{ route('pilates') }}" class="main-menu-option {{ request()->routeIs('pilates') ? 'activeSection' : '' }}">
		{{ __('main-menu.activites.pilates') }}
	</a>

{{--	<a href="{{ route('laragon') }}" class="main-menu-option">Test</a>--}}

	<a href="{{ route('contact') }}" class="main-menu-option {{ request()->routeIs('contact') ? 'activeSection' : '' }}">
		{{ __('main-menu.contact') }}
	</a>

	<a href="{{ route('selectLanguage', 'es') }}">Español</a> | <a href="{{ route('selectLanguage', 'en') }}">English</a>

</nav>
