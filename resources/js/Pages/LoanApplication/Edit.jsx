import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Form from './Form'

export default function Edit({ auth, application, car }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Form car={car} application={application}/>
        </AuthenticatedLayout>
    )
}
