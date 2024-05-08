<?php

namespace App\Http\Controllers\Form;

use App\Models\Application;
use App\Models\MasterDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationForm
{
    /**
     * @throws \Exception
     */
    private $bacDetailId;
    private $licenceDetailId;
    private $masterDetailId;
    public function __construct(Request $request)
    {
        $bacDetail = new BacForm($request);
        $licenceDetail = new LicenceForm($request);
        $masterDetail = new MasterForm($request);
        $this->bacDetailId = $bacDetail->handle();
        $this->licenceDetailId = $licenceDetail->handle();
        $this->masterDetailId = $masterDetail->handle();
        $this->handle();
    }
    public function handle()
    {
        $user = Auth::user();
        if (optional($user->candidate)->applications()->exists()) {
            $application = $user->candidate->applications()->first();

            if ($application) {
                $this->update();
                return;
            }
        }

        $this->store();
    }
    public function store()
    {
        $thesisValues =  session('course');

        $candidate = Auth::user()->candidate;

        $candidate->thesisProposals()->attach($thesisValues, [
            'bac_detail_id' => $this->bacDetailId,
            'licence_detail_id' => $this->licenceDetailId,
            'master_detail_id' => $this->masterDetailId
        ]);
    }


    public function update()
    {
        $thesisValues =  session('course');

        $candidate = Auth::user()->candidate;

        Auth::user()->candidate->thesisProposals()->detach();
        Auth::user()->candidate->thesisProposals()->attach($thesisValues, [
            'bac_detail_id' => $this->bacDetailId,
            'licence_detail_id' => $this->licenceDetailId,
            'master_detail_id' => $this->masterDetailId
        ]);
    }
}
