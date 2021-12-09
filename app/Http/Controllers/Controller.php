<?php

namespace App\Http\Controllers;

use Illuminate\Console\Scheduling\Event;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    // public function show(Event $event)
    // {
        // return Inertia::render('Device/Show', [
        //     'device' => $event->only('id', 'name', 'brand', 'release'),
        // ]);

        // // Alternatively, you can use the inertia() helper
        // return inertia('Device/Show', [
        //     'event' => $event->only('id', 'name', 'brand', 'release'),
        // ]);

    // }

}
