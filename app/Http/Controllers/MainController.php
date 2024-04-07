<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function home()
    {
        return Inertia::render(
            "Home",
            [
                'projects' => Project::query()->where('is_published', true)->get(),
                'reviews' => Review::query()->where('is_published', true)->get()
            ]
        );
    }

    public function projects()
    {
        return Inertia::render('Projects', [
            'projects' => Project::query()->where('is_published', true)->get(),
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
