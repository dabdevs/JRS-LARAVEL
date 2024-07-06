import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/SaveButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="bg-gray-100 flex justify-center items-center h-screen">

                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="/img/forgot-password.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    
                    <h1 className="text-2xl font-semibold mb-4">Forgot My Password</h1>

                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </div>

                    <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <button type="submit" disabled={processing} className="mt-3 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition duration-300 w-full">
                                Email Password Reset Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
