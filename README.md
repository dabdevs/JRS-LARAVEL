# JRS AUTO CORP

A web progressive application (WPA) for JRS AUTO CORP car dealership built with Laravel, Inertia, and React.

## Features

- Vehicle browsing
- Seller contact
- Loan application
- Admin dashboard for vehicle and application management

## Tech Stack

- Backend: Laravel
- Frontend: React
- Routing: Inertia.js
- Database: MySQL

## Installation

1. Clone the repository
git clone https://github.com/dabdevs/JRS-LARAVEL.git

2. Install dependencies:
composer install
npm install

3. Set up environment variables:
cp .env.example .env
php artisan key:generate

4. Set up the database:
php artisan migrate
php artisan db:seed

5. Compile assets:
npm run dev

6. Start the server:
php artisan serve

## Usage

### Public Area
- Browse, search and filter vehicles
- View vehicules 
- Contact seller
- Apply for loans

### Admin Dashboard
- Manage vehicles (CRUD operations)
- Process loan applications
- Change application status
- Submit applications to bank for approval

# Contributing to JRS AUTO CORP

Thank you for your interest in JRS AUTO CORP. However, please note that this project is currently not open for external contributions.

## Closed Source Project

JRS AUTO CORP is a closed-source project maintained exclusively by our internal development team. We do not accept pull requests or code contributions from external sources at this time.

## Reporting Issues

While we don't accept code contributions, we value your feedback:

- If you encounter a bug or have a suggestion, please contact our support team at dabdevs@gmail.com.
- For security-related issues, please email dabdevs@gmail.com.

## Future Plans

We may open parts of our project for contribution in the future. Any changes to our contribution policy will be reflected in this document and announced through our official channels.

Thank you for your understanding and interest in our project.

## License

This project is licensed under the [MIT License](LICENSE).
