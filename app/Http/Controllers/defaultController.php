<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class defaultController extends Controller
{

	public function home() {
		$metaTags = __('home.meta_tags');
		return view('home', $metaTags);
	}


	public function pilates() {
        return view('services\pilates');
    }

    public function contact() {
        return view('contact');
    }

    public function legalAdvice() {
        return view('legal\legal-advice');
    }

    public function laragon() {
        return view('laragon-default-page');
    }
}
