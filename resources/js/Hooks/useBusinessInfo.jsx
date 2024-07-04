import { usePage } from '@inertiajs/react';

export default function useBusinessInfo() {
    const { auth, businessInfo } = usePage().props
    const {phone, email, address, logo, about_us} = businessInfo

    return {
        phone,
        email,
        address,
        logo,
        about_us
    }
}
