import React from 'react'
import FormSignIn from './_components/form-signin'
import { Metadata } from 'next';

export default function Page() {
  return (
   <FormSignIn/>
  )
}

// metadata
export const metadata: Metadata = {
  title: "Sing In Page",
  description: "this is the  page of Sing In",
};