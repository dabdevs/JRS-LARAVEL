import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Form from './Form'

export default function Edit({ auth, car, models }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Form car={car} models={models} />
        </AuthenticatedLayout>
    )
}
