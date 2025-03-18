'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@components/components/Button';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.image && <Image src={session?.user?.image} alt={`${session?.user?.name} image`} width={190} height={190} />}
      
      <h2>{session?.user?.name}</h2>
      <h3>{session?.user?.email}</h3>

      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}
