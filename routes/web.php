<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

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

// Roles routes
Route::resource('roles', RoleController::class)->middleware(AdminMiddleware::class);
Route::post('/roles/{roleId}/add', [RoleController::class, 'addPermission'])->name('roles.permissions.add');
Route::post('/roles/{roleId}/remove', [RoleController::class, 'removePermission'])->name('roles.permissions.remove');

require __DIR__.'/auth.php';
