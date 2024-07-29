<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CustomStorageLink extends Command
{
    protected $signature = 'storage:custom-link';
    protected $description = 'Create a symbolic link from "public_html/storage" to "storage/app/public_html"';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $target = storage_path('app/public_html');
        $link = base_path('public_html/storage');

        // Ensure the target directory exists
        if (!file_exists($target)) {
            $this->error('The target directory "storage/app/public_html" does not exist.');
            return;
        }

        // Ensure the link directory exists
        if (!file_exists(dirname($link))) {
            mkdir(dirname($link), 0755, true);
        }

        if (file_exists($link)) {
            $this->error('The "public_html/storage" directory already exists.');
        } else {
            symlink($target, $link);
            $this->info('The [public_html/storage] directory has been linked.');
        }
    }
}
