import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import authOptions from './api/auth/[...nextauth]/nextAuthOptions'
import { Metadata } from 'next'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hey {session && session.user!.name}</h1>
      <Link href="/users"> Users </Link>

      <ProductCard></ProductCard>
    </main>
  )
}

export const metadata: Metadata = {
  title: '',
  description: ''
}
