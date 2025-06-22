export interface Payment {
    id: string
    userId: string
    consultationId?: string
    documentId?: string
    amount: number
    currency: string
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
    paymentMethod: string
    transactionId?: string
    gatewayResponse?: any
    createdAt: Date
    updatedAt: Date
  }
  
  export interface PaymentOrder {
    orderId: string
    amount: number
    currency: string
    description: string
    consultationId?: string
    documentId?: string
  }
  
  // src/types/api.ts
  export interface ApiResponse<T = any> {
    success: boolean
    data?: T
    message?: string
    error?: string
    code?: string
  }
  
  export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
      hasNext: boolean
      hasPrev: boolean
    }
  }
  
  export interface SearchParams {
    q?: string
    page?: number
    limit?: number
    sort?: string
    order?: 'asc' | 'desc'
    filters?: Record<string, any>
  }