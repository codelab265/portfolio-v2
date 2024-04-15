<div class="px-4">
    <div class="w-full md:w-1/2 mx-auto my-12 p-8 bg-white rounded-lg border-2">
        <form wire:submit="create">
            {{ $this->form }}
            
            
        </form>
        <div class="mt-6">
            <span class="mt-6 bg-red-500 py-2 px-4 rounded-sm">
                {{ $this->createAction }}
        </span>
        </div>
        <x-filament-actions::modals />
    </div>
</div>
