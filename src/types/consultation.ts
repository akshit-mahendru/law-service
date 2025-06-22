export interface Consultation {
    id: string
    clientId: string
    lawyerId: string
    client: User
    lawyer: Lawyer
    type: 'quick' | 'standard' | 'detailed'
    duration: number
    scheduledAt: Date
    status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
    meetingUrl?: string
    recordingUrl?: string
    notes?: string
    clientNotes?: string
    lawyerNotes?: string
    rating?: number
    feedback?: string
    amount: number
    paymentId?: string
    paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded'
    createdAt: Date
    updatedAt: Date
  }
  
  export interface ConsultationBooking {
    lawyerId: string
    type: 'quick' | 'standard' | 'detailed'
    scheduledAt: Date
    notes?: string
    urgency?: 'low' | 'medium' | 'high'
    topics: string[]
  }
  
  export interface ConsultationFeedback {
    consultationId: string
    rating: number
    feedback: string
    wouldRecommend: boolean
    areas?: string[]
  }