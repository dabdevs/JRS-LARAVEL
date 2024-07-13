import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Form from './Form'

export default function Create({ auth, models }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Form models={models} />
    </AuthenticatedLayout>
  )
}
