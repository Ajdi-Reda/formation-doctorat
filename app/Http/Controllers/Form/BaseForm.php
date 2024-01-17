<?php
namespace App\Http\Controllers\Form;

use Exception;
use Illuminate\Http\Request;


abstract class BaseForm
{
  protected array $validationRules;
  protected Request $request;
  public function __construct(Request $request)
  {
    $validatedRequest = $this->validate($request);
    if ($validatedRequest) {
      $this->request = $request;
    } else {
      throw new Exception('Request is unvalid');
    }

  }
  public function validate(Request $request = null)
  {
    if ($request != null) {
      try {
        return $request->validateWithBag('default', $this->validationRules);
      } catch (\Illuminate\Validation\ValidationException $e) {
        dd($e->errors());
      }
    }
    throw new \InvalidArgumentException('Request is null');
  }
  abstract function handle();
  abstract function store();
  abstract function update();

}
