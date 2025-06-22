export interface Lawyer {
    id: string
    userId: string
    user: User
    barCouncilNumber: string
    experience: number
    specializations: string[]
    languages: string[]
    education: Education[]
    courts: string[]
    rating: number
    totalConsultations: number
    hourlyRate: number
    isAvailable: boolean
    isVerified: boolean
    bio: string
    achievements?: string[]
    certifications?: string[]
    city: string
    state: string
    timeZone: string
    availability: AvailabilitySlot[]
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Education {
    degree: string
    institution: string
    year: number
  }
  
  export interface AvailabilitySlot {
    id: string
    dayOfWeek: number // 0-6 (Sunday-Saturday)
    startTime: string // HH:mm format
    endTime: string // HH:mm format
    isActive: boolean
  }
  
  export interface LawyerSearchFilters {
    specialization?: string
    city?: string
    state?: string
    language?: string
    minRating?: number
    maxRate?: number
    experience?: {
      min?: number
      max?: number
    }
    availability?: {
      date?: string
      time?: string
    }
  }