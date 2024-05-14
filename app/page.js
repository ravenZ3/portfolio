import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col mt-20 bg-[#121212] container py-12 px-12 mx-auto">
      <Navbar />
      <HeroSection />
      
    </main>
  )
}
