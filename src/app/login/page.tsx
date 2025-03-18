'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react';

import { Button } from '@components/components/Button'

export default function Login() {
  const { data: session } = useSession();
  return (
    <div>
      <Button onClick={() => signIn("github")}>
        Login
      </Button>
    </div>
  )
}
