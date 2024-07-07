import { usePage } from '@inertiajs/react';

export default function usePermissions() {
    const { auth } = usePage().props
    
    const can = (permission) => {
        return auth.permissions.includes(permission);
    };

    return {
        can
    }
}
