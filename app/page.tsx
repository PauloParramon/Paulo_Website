// app/page.tsx
import Image from 'next/image'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Profile image above the About section */}
      <section aria-label="Profile photo" className="mt-8 flex justify-center">
        <div className="h-40 w-40 overflow-hidden rounded-full ring-1 ring-gray-200 dark:ring-gray-700">
          <Image
            src="/static/images/Paulo.png" // public/static/images/Paulo.png
            alt="Paulo Parramon-Arcos"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <AboutSection />
    </>
  )
}
