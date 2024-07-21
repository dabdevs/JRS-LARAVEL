import React from 'react'
import Form from './Form'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Create({auth, car, states}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Form car={car} states={states} storeUrl={route('applications.store')}/>
    </AuthenticatedLayout>
  )
}
