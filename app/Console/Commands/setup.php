<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class setup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->artisan->call('php artisan seed --class=MainSeeder');
    }
}
