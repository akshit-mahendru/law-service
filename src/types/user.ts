export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    phone?: string
    avatar?: string
    role: 'client' | 'lawyer' | 'admin'
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    
    // Client-specific fields
    companyName?: string
    businessType?: string
    companySize?: string
    gstNumber?: string
    city?: string
    state?: string
  }
  
  export interface ClientProfile extends User {
    role: 'client'
    companyName: string
    businessType: string
    companySize: string
    gstNumber?: string
    city: string
    state: string
  }