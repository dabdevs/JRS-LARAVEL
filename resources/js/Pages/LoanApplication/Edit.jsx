import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Form from './Form'

export default function Edit({ auth, application, car, states }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Form car={car} states={states} application={application}/>
        </AuthenticatedLayout>
    )
}
