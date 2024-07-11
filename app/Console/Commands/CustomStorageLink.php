<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CustomStorageLink extends Command
{
    protected $signature = 'storage:custom-link';
    protected $description = 'Create a symbolic link from "public_html/storage" to "storage/app/public"';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $target = storage_path('app/public');
        $link = public_path('public_html/storage');

        if (file_exists($link)) {
            $this->error('The "public_html/storage" directory already exists.');
        } else {
            symlink($target, $link);
            $this->info('The [public_html/storage] directory has been linked.');
        }
    }
}
