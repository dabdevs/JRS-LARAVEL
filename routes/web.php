<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [GuestController::class, 'index'])->name('index');
Route::get('/search/{keyword}', [ListingController::class, 'search'])->name('search');

// Dashboard routes
Route::get('/dashboard', [AdminController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

// Auth routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Listing routes
Route::get('listing', [ListingController::class, 'index'])->name('listing.index');
Route::get('cars/{slug}', [ListingController::class, 'displayCar'])->name('listing.car');

// Roles routes
Route::resource('roles', RoleController::class)->middleware(AdminMiddleware::class);
Route::post('/roles/{roleId}/add', [RoleController::class, 'addPermission'])->name('roles.permissions.add');
Route::post('/roles/{roleId}/remove', [RoleController::class, 'removePermission'])->name('roles.permissions.remove');

Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
