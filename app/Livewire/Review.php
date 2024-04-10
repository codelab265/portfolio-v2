<?php

namespace App\Livewire;

use App\Models\Review as ModelsReview;
use Filament\Actions\Action;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Livewire\Attributes\Title;
use Livewire\Component;

class Review extends Component implements HasForms, HasActions
{
    use InteractsWithForms;
    use InteractsWithActions;

    #[Title('Create review')]

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill();
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image_url')
                    ->label('Your picture')
                    ->image()
                    ->avatar()
                    ->directory('reviews')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('job_title')
                    ->label('Company/job title')
                    ->required()
                    ->maxLength(255),
                Textarea::make('review')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),


            ])
            ->statePath('data');
    }

    public function create(): void
    {
        $reviews = $this->form->getState();
        $reviews['is_published'] = false;
        ModelsReview::create($reviews);
        Notification::make()
            ->title('Submited successfully')
            ->success()
            ->send();
        $this->form->fill();
    }

    public function render()
    {
        return view('livewire.review');
    }

    public function createAction(): Action
    {
        return Action::make('create')
            ->label('Submit')
            ->color('warning')
            ->action(fn () => $this->create());
    }
}
