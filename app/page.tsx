import Image from 'next/image'
import NextAuthForm from "@/components/auth-next-form"
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import ProfileCard from '@/components/ProfileCard'

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {session ? (<ProfileCard user={session?.user!}/>) :

        <>
          <h1 className='flex items-center h-screen w-full justify-center'>Home page - your are not sign in</h1>
        </>
      }


    </main>
  )
}
