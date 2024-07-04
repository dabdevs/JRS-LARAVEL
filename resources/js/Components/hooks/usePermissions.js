import { usePage } from '@inertiajs/react';

export default function usePermissions() {
    const { auth } = usePage().props
    console.log('Permissions', auth.permissions)
    
    const can = (permission) => {
        return auth.permissions.includes(permission);
    };

    return {
        can
    }
}
