import React from 'react'

import { SignUp } from '@clerk/clerk-react'
import { Center } from '@chakra-ui/react'

export default function Singnup() {
  return (
    <Center m={10} >

        <SignUp signInUrl="Signin"  afterSignUpUrl="Signin"/>
      
    </Center>
  )
}
