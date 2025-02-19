@extends('default-layout')

@section('title', __('home.title'))

@section('content')

	<h1>{{ __('home.main_title') }}</h1>

    <p>{!! __('home.introduction') !!}</p>

@endsection
