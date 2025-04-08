import Link from 'next/link'

export default function JobCard({ job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 mb-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{job.location}</p>
        </div>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{job.salary.startsWith('₹') ? job.salary : `₹${job.salary}`}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}