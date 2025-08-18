// app/cv/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Paulo Parramon — Curriculum Vitae',
}

const pdfPath = '/static/cv/Paulo_Parramon_CV.pdf'

export default function CVPage() {
  return (
    <main className="py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">CV</h1>

      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <iframe
          src={`${pdfPath}#view=FitH`}
          title="Paulo Parramon — CV"
          className="h-[80vh] w-full"
        />
      </div>

      <div className="mt-4 flex gap-4">
        <a
          href={pdfPath}
          download
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          Download PDF
        </a>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:underline dark:text-gray-300"
        >
          Open in new tab
        </a>
      </div>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        If the preview doesn’t appear, use the links above.
      </p>
    </main>
  )
}
