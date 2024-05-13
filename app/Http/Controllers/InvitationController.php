<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvitationRequest;
use App\Models\Invitation;

class InvitationController extends Controller
{
    public function store(StoreInvitationRequest $request)
    {
        dd($request);
        $invitation = new Invitation($request->all());
        $invitation->save();
        $emailController = new EmailController();
        $link = urldecode(route('registerProfessor') . '?invitation_token=' . $invitation->invitation_token);
        $message = "Here's the invite link to join our university: " . $link;
        $emailController->sendEmail($request->input('email'), $message);
    }
}
