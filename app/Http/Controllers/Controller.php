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

    public function show(Event $event)
    {
        return Inertia::render('Event/Show', [
            'event' => $event->only('id', 'title', 'start_date', 'description'),
        ]);

        // Alternatively, you can use the inertia() helper
        return inertia('Event/Show', [
            'event' => $event->only('id', 'title', 'start_date', 'description'),
        ]);

    }
}
