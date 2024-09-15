<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'phone' => ['required', 'string', 'max:255','unique:users'],
            'citizenship_no' => ['required', 'string', 'max:255', 'unique:users'],
            'avatar' => ['file', 'image', 'mimes:jpeg,png,jpg,gif'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'citizenship_no' => $request->citizenship_no,
            'avatar' => $request->avatar,
            'password' => Hash::make($request->password),
        ]);
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $newName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('avatars'), $newName); // Move the file to the 'avatars' directory
            $user->avatar = "avatars/$newName"; // Update the user with the avatar path
            $user->save(); // Save the user with the avatar
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
