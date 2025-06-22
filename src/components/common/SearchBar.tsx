// src/components/common/SearchBar.tsx
'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
  loading?: boolean
}

export function SearchBar({ placeholder = "Search...", onSearch, loading = false }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={<Search className="h-4 w-4" />}
        className="flex-1"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  )
}
