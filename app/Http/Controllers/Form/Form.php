<?php

namespace App\Http\Controllers\Form;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use BadMethodCallException;
use Illuminate\Database\Eloquent\Model;

abstract class Form
{
    protected array $validationRules = [];
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->storeFormStep();
    }

    protected function validate()
    {
        return $this->request->validate($this->validationRules);
    }

    protected function storeFormStep()
    {
        if ($this->request->has('form_step')) {
            session(['form_step' => $this->request->input('form_step')]);
        }
    }

    abstract function store();

    abstract function update(Model $model);
}
