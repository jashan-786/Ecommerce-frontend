import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react';
import { Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {

    let navi= useNavigate()

  return (
    <Center m={10}>

        <SignIn signUpUrl="Signup"   afterSignInUrl = "/" />
    </Center>
  )
}
