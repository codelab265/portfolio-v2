<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('category')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('link')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('github')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('languages')
                    ->options([
                        'Laravel' => "Laravel",
                        'React' => "React",
                        'Next JS' => "Next JS",
                        'Wordpress' => "Wordpress",
                        'JQuery' => "JQuery",
                        'React Native' => "React Native",
                        'FlutterFlow' => "FlutterFlow",
                        'Mysql' => "Mysql",
                        'Firebase' => "Firebase",
                        'Tailwind' => "Tailwind",
                    ])
                    ->multiple()
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image_url')
                    ->directory('projects')
                    ->columnSpanFull(),
                Forms\Components\Toggle::make('is_published')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image_url'),
                Tables\Columns\TextColumn::make('category')
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')
                    ->description(fn ($record) => $record->description)
                    ->searchable(),

                Tables\Columns\TextColumn::make('languages')
                    ->formatStateUsing(function ($record) {
                        $languages = [];
                        foreach ($record->languages as $langauge) {
                            $languages[] = "<span className='px-3 py-1 border border-yellow-500 bg-yellow-100 rounded-full'>$langauge</span>,";
                        }

                        return implode(' ', $languages);
                    })->html(),

                Tables\Columns\IconColumn::make('is_published')
                    ->boolean(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageProjects::route('/'),
        ];
    }
}
