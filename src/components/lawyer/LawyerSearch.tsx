'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Search, Filter, MapPin, Star } from 'lucide-react'
import { LEGAL_SPECIALIZATIONS, INDIAN_STATES, LANGUAGES } from '@/lib/constants'
import { LawyerSearchFilters } from '@/types/lawyer'

interface LawyerSearchProps {
  onSearch: (filters: LawyerSearchFilters) => void
  loading?: boolean
}

export function LawyerSearch({ onSearch, loading = false }: LawyerSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<LawyerSearchFilters>({})

  const handleSearch = () => {
    onSearch({
      ...filters,
      ...(searchQuery && { q: searchQuery }),
    })
  }

  const handleFilterChange = (key: keyof LawyerSearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
  }

  const clearFilters = () => {
    setFilters({})
    setSearchQuery('')
    onSearch({})
  }

  const activeFiltersCount = Object.keys(filters).filter(key => 
    filters[key as keyof LawyerSearchFilters] !== undefined && 
    filters[key as keyof LawyerSearchFilters] !== ''
  ).length

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      {/* Search Bar */}
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <Input
            placeholder="Search by name, specialization, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="relative"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.specialization && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.specialization}
              <button
                onClick={() => handleFilterChange('specialization', undefined)}
                className="ml-1 hover:text-error-600"
              >
                ×
              </button>
            </Badge>
          )}
          {filters.city && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {filters.city}
              <button
                onClick={() => handleFilterChange('city', undefined)}
                className="ml-1 hover:text-error-600"
              >
                ×
              </button>
            </Badge>
          )}
          {filters.language && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.language}
              <button
                onClick={() => handleFilterChange('language', undefined)}
                className="ml-1 hover:text-error-600"
              >
                ×
              </button>
            </Badge>
          )}
          {filters.minRating && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {filters.minRating}+ rating
              <button
                onClick={() => handleFilterChange('minRating', undefined)}
                className="ml-1 hover:text-error-600"
              >
                ×
              </button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Advanced Filters */}
      {showFilters && (
        <div className="border-t pt-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Specialization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={filters.specialization || ''}
                onChange={(e) => handleFilterChange('specialization', e.target.value || undefined)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">All specializations</option>
                {LEGAL_SPECIALIZATIONS.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={filters.state || ''}
                onChange={(e) => handleFilterChange('state', e.target.value || undefined)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">All states</option>
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={filters.language || ''}
                onChange={(e) => handleFilterChange('language', e.target.value || undefined)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">All languages</option>
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating
              </label>
              <select
                value={filters.minRating || ''}
                onChange={(e) => handleFilterChange('minRating', e.target.value ? Number(e.target.value) : undefined)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Any rating</option>
                <option value="4">4+ stars</option>
                <option value="4.5">4.5+ stars</option>
                <option value="4.8">4.8+ stars</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
            <Button onClick={handleSearch} disabled={loading}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}