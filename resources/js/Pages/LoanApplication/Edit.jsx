import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Form from './Form'

export default function Edit({ auth, application }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Form application={application}/>
        </AuthenticatedLayout>
    )
}
