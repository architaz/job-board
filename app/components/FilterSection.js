'use client'
import { useState } from 'react'

export default function FilterSection({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: '',
    tag: '',
    currency: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

<div>
  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Currency
  </label>
  <select
    id="currency"
    name="currency"
    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
    value={filters.currency || ''}
    onChange={handleChange}
  >
    <option value="INR">₹ INR</option>
    <option value="USD">$ USD</option>
  </select>
</div>

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Remote, New York"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            value={filters.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Job Type
          </label>
          <select
            id="tag"
            name="tag"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            value={filters.tag}
            onChange={handleChange}
          >
            <option value="">All Types</option>
            <option value="Remote">Remote</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Internship">Internship</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  )
}