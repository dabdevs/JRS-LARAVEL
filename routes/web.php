<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\LoanApplicationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UploadController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});

Route::get('/production-linkstorage', function () {
    Artisan::call('storage:custom-link');
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
});

Route::get('/optimize', function () {
    Artisan::call('optimize:clear');
});

Route::get('/queue', function () {
    Artisan::call('queue:work');
});

Route::get('/', [GuestController::class, 'index'])->name('index');
Route::post('/contact', [GuestController::class, 'contact'])->name('contact');

// Auth routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Listing routes
Route::match(['get', 'post'], '/listing', [ListingController::class, 'index']);
Route::get('listing/{slug}', [ListingController::class, 'displayCar'])->name('listing.car');
Route::get('get-qualified/{carId}', [GuestController::class, 'getQualified'])->name('get_qualified');
Route::post('store-application', [GuestController::class, 'storeApplication'])->name('store_application');
Route::get('get-qualified-success', [GuestController::class, 'getQualifiedSuccess'])->name('get_qualified_success');

// Roles routes
// Route::resource('roles', RoleController::class)->middleware(AdminMiddleware::class);
// Route::post('/roles/{roleId}/add', [RoleController::class, 'addPermission'])->name('roles.permissions.add');
// Route::post('/roles/{roleId}/remove', [RoleController::class, 'removePermission'])->name('roles.permissions.remove');

// Cars routes
Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () { // Dashboard routes
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // Car routes
    Route::resource('cars', CarController::class);
    // Route::get('cars/{slug}', [CarController::class, 'show'])->name('cars.show');
    Route::post('cars/image/{imgId}/delete', [CarController::class, 'deleteImage'])->name('cars.images.delete');

    // Loan Application routes
    Route::resource('applications', LoanApplicationController::class)->except('create');
    Route::get('applications/create/{carId}', [LoanApplicationController::class, 'create'])->name('applications.create');
    
    // Upload images
    Route::post('upload-images', [UploadController::class, 'images'])->name('upload.images');
})->middleware(AdminMiddleware::class);

Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
