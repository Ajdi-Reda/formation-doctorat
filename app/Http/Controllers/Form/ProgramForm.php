<?php

namespace App\Http\Controllers\Form;

use App\Models\Program;
use App\Models\ThesisProposal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use voku\helper\ASCII;

class ProgramForm extends AdminForm
{
    protected array $validationRules = [
        'title' => ['required'],
        'description' => ['required', 'max:500'],
        'startDate' => ['required', 'date'],
        'endDate' => ['required', 'date'],
        'responsible' => ['required']
    ];
  public function __construct(Request $request)
  {
      parent::__construct($request);
  }

    public function store() {
        $thesis = ThesisProposal::create([
            'id' => Auth::user()->professor->id,
            'title' => $this->request->title,
            'description' => $this->request->description,
            'startDate' => $this->request->startDate,
            'endDate' => $this->request->endDate,
            'responsible' => $this->request->responsible,
        ]);
    }

  public function update(Model $model)
  {
      $program = Program::all()->find($this->request->id);

      $program->title = $this->request->title;
      $program->description = $this->request->description;
      $program->startDate = $this->request->description;
      $program->endDate = $this->request->description;
      $program->responsible = $this->request->description;
      $program->save();
  }

  public function destroy()
  {
      Program::destroy($this->request->id);
  }
}
