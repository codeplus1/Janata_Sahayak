<x-guest-layout>
    <div class="mb-4"></div>
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center ">
        {{ __('आफ्नो पासवर्ड बिर्सनुभयो? कुनै समस्या छैन। केवल हामीलाई तपाईंको E-mail दिनुहोस् र हामी तपाईंलाई Password reset Link Email गर्नेछौं जसले तपाईंलाई नयाँ Password छनौट गर्न अनुमति दिनेछ।') }}
    </div>

    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />


    @extends('Frontend.Auth.forgot-password')


    {{-- <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <x-primary-button>
                {{ __('Email Password Reset Link') }}
            </x-primary-button>
        </div>
    </form> --}}
</x-guest-layout>
