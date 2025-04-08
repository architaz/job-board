import { notFound } from 'next/navigation'
import jobsData from '../../data/jobs.json'
import Link from 'next/link'

export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }))
}

export default function JobDetails({ params }) {
  const job = jobsData.find((j) => j.id.toString() === params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{job.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{job.company}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">{job.location}</p>
          </div>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">{job.salary}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Job Description</h2>
          <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="#"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors duration-200"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}