import React from 'react'
import Form from './Form'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Create({auth, car}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Form car={car} storeUrl={route('applications.store')}/>
    </AuthenticatedLayout>
  )
}
