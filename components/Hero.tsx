'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
        Paulo Parramon-Arcos
      </h1>
      <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
        Exploring cognition, neurotechnology, and the science of language.
      </p>
      <div className="mt-10">
        <a href="#about" className="text-lg text-blue-600 hover:underline">
          ↓ Learn more
        </a>
      </div>
    </section>
  )
}
