import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '@/ui/Paragraph'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-red-500">
      <Paragraph size="sm" >some text</Paragraph>
    </main>
  )
}
