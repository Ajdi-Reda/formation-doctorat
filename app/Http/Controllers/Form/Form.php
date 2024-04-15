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
    }

    protected function validate()
    {
        return $this->request->validate($this->validationRules);
    }

    abstract function store();

    abstract function update(Model $model);
}
