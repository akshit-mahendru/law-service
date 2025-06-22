export interface Document {
    id: string
    name: string
    type: string
    size: number
    url: string
    uploadedBy: string
    consultationId?: string
    isTemplate: boolean
    category?: string
    tags?: string[]
    createdAt: Date
    updatedAt: Date
  }
  
  export interface DocumentTemplate {
    id: string
    name: string
    category: string
    description: string
    price: number
    fields: TemplateField[]
    content: string
    preview?: string
    isActive: boolean
    downloads: number
    createdAt: Date
    updatedAt: Date
  }
  
  export interface TemplateField {
    id: string
    name: string
    label: string
    type: 'text' | 'email' | 'phone' | 'date' | 'number' | 'select' | 'textarea'
    required: boolean
    options?: string[]
    placeholder?: string
    validation?: string
  }
  