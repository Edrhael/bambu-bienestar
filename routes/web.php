<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\defaultController;

// Recuperar metatags según idioma y página
Route::get('/idioma/{locale}', function ($locale) {
	if (in_array($locale, ['es', 'en'])) {
		session(['locale' => $locale]);
	}
	return redirect()->back();
})->name('selectLanguage');

/* Routes */

// Home
Route::get('/', [defaultController::class, 'home'])->name('home');

// Pilates
Route::get('/actividades/pilates', [defaultController::class, 'pilates'])->name('pilates');

// Contact
Route::get('/contacto', [defaultController::class, 'contact'])->name('contact');

// Legal Advice
Route::get('/aviso-legal', [defaultController::class, 'legalAdvice'])->name('legalAdvice');

// Laragon Default Page
Route::get('/test', [defaultController::class, 'laragon'])->name('laragon');
