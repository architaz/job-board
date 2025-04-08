'use client'
import JobCard from './components/JobCard'
import FilterSection from './components/FilterSection'
import jobsData from './data/jobs.json'
import { useState } from 'react'

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState(jobsData)

  const handleFilterChange = (filters) => {
    const filtered = jobsData.filter((job) => {
      const locationMatch = job.location.toLowerCase().includes(filters.location.toLowerCase())
      const tagMatch = filters.tag === '' || job.tags.includes(filters.tag)
      return locationMatch && tagMatch
    })
    setFilteredJobs(filtered)
  }

  return (
    <div>
      <FilterSection onFilterChange={handleFilterChange} />
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <p className="text-gray-600 dark:text-gray-300">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}