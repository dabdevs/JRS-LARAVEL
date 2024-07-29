<?php 

// Define the path to the log file
$logFilePath = '../storage/logs/queue.log';

// Ensure the directory exists
if (!file_exists(dirname($logFilePath))) {
    mkdir(dirname($logFilePath), 0755, true);
}

// Ensure the log file exists
if (!file_exists($logFilePath)) {
    touch($logFilePath);
    chmod($logFilePath, 0666);
}

// Run the Laravel queue worker
exec('php artisan queue:work --queue=default --tries=3', $output, $return_var);

// Log the output and return status
file_put_contents($logFilePath, implode("\n", $output) . "\n", FILE_APPEND);
if ($return_var !== 0) {
    file_put_contents($logFilePath, "Command failed with return code $return_var\n", FILE_APPEND);
}