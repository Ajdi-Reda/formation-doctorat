<?php

namespace App\Http\Controllers\Form;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

abstract class BaseForm extends Form
{
    protected array $validationRules = [];

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    abstract function handle();

    abstract function store();

    abstract function update(Model $model);
}
