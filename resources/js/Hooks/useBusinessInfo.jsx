import { usePage } from '@inertiajs/react';

export default function useBusinessInfo() {
    const { businessInfo } = usePage().props
    const {phone, email, address, about_us} = businessInfo

    return {
        phone,
        email,
        address,
        about_us
    }
}
