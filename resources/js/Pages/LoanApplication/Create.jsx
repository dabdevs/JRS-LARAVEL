import React from 'react'
import Form from './Form'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Create({auth}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Form />
    </AuthenticatedLayout>
  )
}
