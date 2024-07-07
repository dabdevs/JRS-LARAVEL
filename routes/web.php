<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [GuestController::class, 'index'])->name('index');

// Dashboard routes
Route::get('/dashboard', [AdminController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

// Auth routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Listing routes
Route::match(['get', 'post'], '/listing', [ListingController::class, 'index']);
Route::get('listing/{slug}', [ListingController::class, 'displayCar'])->name('listing.car');
// Route::get('listing/search', [ListingController::class, 'search'])->name('search');

// Roles routes
Route::resource('roles', RoleController::class)->middleware(AdminMiddleware::class);
Route::post('/roles/{roleId}/add', [RoleController::class, 'addPermission'])->name('roles.permissions.add');
Route::post('/roles/{roleId}/remove', [RoleController::class, 'removePermission'])->name('roles.permissions.remove');

// Cars routes
Route::prefix('dashboard')->middleware('auth')->group(function () {
    Route::resource('cars', CarController::class);
})->middleware(AdminMiddleware::class);

Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
