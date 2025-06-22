'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LawyerCard } from '@/components/lawyer/LawyerCard'
import { LawyerSearch } from '@/components/lawyer/LawyerSearch'
import { Button } from '@/components/ui/Button'
import { Lawyer, LawyerSearchFilters } from '@/types/lawyer'
import { User } from '@/types/user'
import { Loader2, Users, Filter } from 'lucide-react'

// Mock data for demo - in real app this would come from API
const mockLawyers: Lawyer[] = [
  {
    id: '1',
    userId: '1',
    user: {
      id: '1',
      email: 'rajesh.patel@email.com',
      firstName: 'Rajesh',
      lastName: 'Patel',
      phone: '+91-9876543210',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'MH/1234/2010',
    experience: 12,
    specializations: ['Corporate Law', 'Contract Law', 'MSME & Startup Law'],
    languages: ['English', 'Hindi', 'Gujarati'],
    education: [
      { degree: 'LLB', institution: 'Mumbai University', year: 2010 },
      { degree: 'LLM', institution: 'National Law School', year: 2012 }
    ],
    courts: ['Bombay High Court', 'Supreme Court of India'],
    rating: 4.8,
    totalConsultations: 245,
    hourlyRate: 1500,
    isAvailable: true,
    isVerified: true,
    bio: 'Experienced corporate lawyer specializing in SME legal matters, contract drafting, and business compliance. Helped over 200 small businesses navigate complex legal challenges.',
    achievements: ['Best Corporate Lawyer 2022', 'SME Legal Expert'],
    city: 'Mumbai',
    state: 'Maharashtra',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    userId: '2',
    user: {
      id: '2',
      email: 'priya.sharma@email.com',
      firstName: 'Priya',
      lastName: 'Sharma',
      phone: '+91-9876543211',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'KA/5678/2015',
    experience: 8,
    specializations: ['Labour & Employment', 'Compliance & Regulatory', 'Tax & GST'],
    languages: ['English', 'Hindi', 'Kannada'],
    education: [
      { degree: 'LLB', institution: 'Bangalore University', year: 2015 }
    ],
    courts: ['Karnataka High Court', 'City Civil Court'],
    rating: 4.6,
    totalConsultations: 187,
    hourlyRate: 1200,
    isAvailable: true,
    isVerified: true,
    bio: 'Employment law specialist with expertise in labor compliance, GST matters, and regulatory compliance for small and medium enterprises.',
    city: 'Bangalore',
    state: 'Karnataka',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    userId: '3',
    user: {
      id: '3',
      email: 'amit.singh@email.com',
      firstName: 'Amit',
      lastName: 'Singh',
      phone: '+91-9876543212',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'DL/9012/2008',
    experience: 15,
    specializations: ['Intellectual Property', 'Contract Law', 'Dispute Resolution'],
    languages: ['English', 'Hindi'],
    education: [
      { degree: 'LLB', institution: 'Delhi University', year: 2008 },
      { degree: 'LLM (IP)', institution: 'NLSIU Bangalore', year: 2010 }
    ],
    courts: ['Delhi High Court', 'Supreme Court of India', 'IPAB'],
    rating: 4.9,
    totalConsultations: 312,
    hourlyRate: 1800,
    isAvailable: false,
    isVerified: true,
    bio: 'Senior intellectual property lawyer with extensive experience in trademark, copyright, and patent matters. Specializes in IP protection for tech startups and SMEs.',
    achievements: ['IP Lawyer of the Year 2021', 'Patent Expert'],
    city: 'New Delhi',
    state: 'Delhi',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    userId: '4',
    user: {
      id: '4',
      email: 'meera.joshi@email.com',
      firstName: 'Meera',
      lastName: 'Joshi',
      phone: '+91-9876543213',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'MH/3456/2012',
    experience: 10,
    specializations: ['Real Estate', 'Contract Law', 'Banking & Finance'],
    languages: ['English', 'Hindi', 'Marathi'],
    education: [
      { degree: 'LLB', institution: 'Pune University', year: 2012 }
    ],
    courts: ['Bombay High Court', 'District Court Pune'],
    rating: 4.7,
    totalConsultations: 198,
    hourlyRate: 1300,
    isAvailable: true,
    isVerified: true,
    bio: 'Real estate and banking law expert helping SMEs with property transactions, loan documentation, and financial compliance matters.',
    city: 'Pune',
    state: 'Maharashtra',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    userId: '5',
    user: {
      id: '5',
      email: 'vikram.reddy@email.com',
      firstName: 'Vikram',
      lastName: 'Reddy',
      phone: '+91-9876543214',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'AP/7890/2013',
    experience: 9,
    specializations: ['Environmental Law', 'Compliance & Regulatory', 'Corporate Law'],
    languages: ['English', 'Hindi', 'Telugu'],
    education: [
      { degree: 'LLB', institution: 'Osmania University', year: 2013 }
    ],
    courts: ['Andhra Pradesh High Court', 'National Green Tribunal'],
    rating: 4.5,
    totalConsultations: 156,
    hourlyRate: 1100,
    isAvailable: true,
    isVerified: true,
    bio: 'Environmental and regulatory compliance specialist for manufacturing SMEs. Expert in pollution control, environmental clearances, and industrial compliance.',
    city: 'Hyderabad',
    state: 'Telangana',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    userId: '6',
    user: {
      id: '6',
      email: 'kavya.nair@email.com',
      firstName: 'Kavya',
      lastName: 'Nair',
      phone: '+91-9876543215',
      avatar: '',
      role: 'lawyer',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    barCouncilNumber: 'KL/2345/2016',
    experience: 7,
    specializations: ['Tax & GST', 'Labour & Employment', 'MSME & Startup Law'],
    languages: ['English', 'Hindi', 'Malayalam'],
    education: [
      { degree: 'LLB', institution: 'Kerala University', year: 2016 }
    ],
    courts: ['Kerala High Court', 'GST Appellate Tribunal'],
    rating: 4.4,
    totalConsultations: 134,
    hourlyRate: 1000,
    isAvailable: true,
    isVerified: true,
    bio: 'Tax and GST specialist helping SMEs with compliance, return filing, and dispute resolution. Young and dynamic lawyer with modern approach.',
    city: 'Kochi',
    state: 'Kerala',
    timeZone: 'Asia/Kolkata',
    availability: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

export default function LawyersPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchLoading, setSearchLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price'>('rating')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const lawyersPerPage = 6

  useEffect(() => {
    // Simulate API call
    const fetchLawyers = async () => {
      setLoading(true)
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setLawyers(mockLawyers)
      setFilteredLawyers(mockLawyers)
      setLoading(false)
    }

    fetchLawyers()
  }, [])

  const handleSearch = async (filters: LawyerSearchFilters) => {
    setSearchLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    let filtered = [...lawyers]

    // Apply filters
    if (filters.specialization) {
      filtered = filtered.filter(lawyer => 
        lawyer.specializations.some(spec => 
          spec.toLowerCase().includes(filters.specialization!.toLowerCase())
        )
      )
    }

    if (filters.city) {
      filtered = filtered.filter(lawyer => 
        lawyer.city.toLowerCase().includes(filters.city!.toLowerCase())
      )
    }

    if (filters.state) {
      filtered = filtered.filter(lawyer => 
        lawyer.state.toLowerCase() === filters.state!.toLowerCase()
      )
    }

    if (filters.language) {
      filtered = filtered.filter(lawyer => 
        lawyer.languages.includes(filters.language!)
      )
    }

    if (filters.minRating) {
      filtered = filtered.filter(lawyer => lawyer.rating >= filters.minRating!)
    }

    if (filters.maxRate) {
      filtered = filtered.filter(lawyer => lawyer.hourlyRate <= filters.maxRate!)
    }

    setFilteredLawyers(filtered)
    setCurrentPage(1)
    setSearchLoading(false)
  }

  const sortLawyers = (lawyers: Lawyer[]) => {
    return [...lawyers].sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case 'rating':
          comparison = a.rating - b.rating
          break
        case 'experience':
          comparison = a.experience - b.experience
          break
        case 'price':
          comparison = a.hourlyRate - b.hourlyRate
          break
      }
      
      return sortOrder === 'desc' ? -comparison : comparison
    })
  }

  const sortedLawyers = sortLawyers(filteredLawyers)
  const totalPages = Math.ceil(sortedLawyers.length / lawyersPerPage)
  const startIndex = (currentPage - 1) * lawyersPerPage
  const paginatedLawyers = sortedLawyers.slice(startIndex, startIndex + lawyersPerPage)

  const handleSortChange = (newSortBy: typeof sortBy) => {
    if (newSortBy === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('desc')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary-600" />
            <p className="text-gray-600">Loading lawyers...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Expert Lawyers</h1>
          <p className="text-lg text-gray-600">
            Connect with verified lawyers specializing in SME legal matters
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <LawyerSearch onSearch={handleSearch} loading={searchLoading} />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">
              {searchLoading ? 'Searching...' : `${filteredLawyers.length} lawyers found`}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="flex space-x-2">
              {[
                { key: 'rating' as const, label: 'Rating' },
                { key: 'experience' as const, label: 'Experience' },
                { key: 'price' as const, label: 'Price' },
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  variant={sortBy === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleSortChange(key)}
                  className="text-xs"
                >
                  {label}
                  {sortBy === key && (
                    <span className="ml-1">
                      {sortOrder === 'desc' ? '↓' : '↑'}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Lawyers Grid */}
        {searchLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary-600" />
              <p className="text-gray-600">Searching lawyers...</p>
            </div>
          </div>
        ) : filteredLawyers.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No lawyers found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters to find more lawyers.
            </p>
            <Button variant="outline" onClick={() => handleSearch({})}>
              Clear all filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedLawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                <div className="flex space-x-1">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    const isVisible = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    
                    if (!isVisible) {
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return <span key={page} className="px-2">...</span>
                      }
                      return null
                    }
                    
                    return (
                      <Button
                        key={page}
                        variant={page === currentPage ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  })}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}