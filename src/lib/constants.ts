// App Configuration
export const APP_CONFIG = {
    name: 'SME Legal Consultation',
    description: 'Affordable legal consultation for Small & Medium Enterprises in India',
    version: '1.0.0',
    supportEmail: 'support@smelegal.com',
    supportPhone: '+91-8800-123-456',
  } as const
  
  // Business Constants
  export const BUSINESS_TYPES = [
    'Manufacturing',
    'Service',
    'Trading',
    'Retail',
    'Technology',
    'Healthcare',
    'Education',
    'Food & Beverage',
    'Textile',
    'Other',
  ] as const
  
  export const COMPANY_SIZES = [
    'Micro (< ₹1 Cr)',
    'Small (₹1-10 Cr)',
    'Medium (₹10-250 Cr)',
  ] as const
  
  // Legal Specializations
  export const LEGAL_SPECIALIZATIONS = [
    'Corporate Law',
    'Contract Law',
    'Labour & Employment',
    'Intellectual Property',
    'Tax & GST',
    'Real Estate',
    'Compliance & Regulatory',
    'Dispute Resolution',
    'MSME & Startup Law',
    'Environmental Law',
    'Banking & Finance',
    'Foreign Exchange (FEMA)',
  ] as const
  
  // Consultation Types
  export const CONSULTATION_TYPES = [
    {
      id: 'quick',
      name: 'Quick Consultation',
      duration: 15,
      price: 399,
      description: 'Quick legal advice for urgent matters',
    },
    {
      id: 'standard',
      name: 'Standard Consultation',
      duration: 30,
      price: 799,
      description: 'Detailed discussion for complex issues',
      popular: true,
    },
    {
      id: 'detailed',
      name: 'Detailed Consultation',
      duration: 60,
      price: 1499,
      description: 'Comprehensive legal consultation',
    },
  ] as const
  
  // Languages
  export const LANGUAGES = [
    'English',
    'Hindi',
    'Marathi',
    'Gujarati',
    'Bengali',
    'Tamil',
    'Telugu',
    'Kannada',
    'Malayalam',
    'Punjabi',
  ] as const
  
  // Indian States
  export const INDIAN_STATES = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Puducherry',
  ] as const
  
  // Tier Classification
  export const TIER_CITIES = {
    tier1: [
      'Mumbai',
      'Delhi',
      'Bangalore',
      'Hyderabad',
      'Chennai',
      'Kolkata',
      'Pune',
      'Ahmedabad',
    ],
    tier2: [
      'Jaipur',
      'Lucknow',
      'Kanpur',
      'Nagpur',
      'Indore',
      'Thane',
      'Bhopal',
      'Visakhapatnam',
      'Pimpri-Chinchwad',
      'Patna',
      'Vadodara',
      'Ghaziabad',
      'Ludhiana',
      'Coimbatore',
      'Agra',
      'Madurai',
      'Nashik',
      'Faridabad',
      'Meerut',
      'Rajkot',
    ],
  } as const
  
  // Document Templates
  export const DOCUMENT_TEMPLATES = [
    {
      id: 'service-agreement',
      name: 'Service Agreement',
      category: 'Contracts',
      price: 1999,
      description: 'Standard service agreement template for SMEs',
    },
    {
      id: 'nda',
      name: 'Non-Disclosure Agreement',
      category: 'Contracts',
      price: 999,
      description: 'Protect your business information',
    },
    {
      id: 'employment-contract',
      name: 'Employment Contract',
      category: 'HR & Employment',
      price: 1499,
      description: 'Comprehensive employment agreement',
    },
    {
      id: 'vendor-agreement',
      name: 'Vendor Agreement',
      category: 'Supply Chain',
      price: 2499,
      description: 'Standard vendor/supplier agreement',
    },
    {
      id: 'privacy-policy',
      name: 'Privacy Policy',
      category: 'Compliance',
      price: 1299,
      description: 'GDPR and Indian data protection compliant',
    },
  ] as const
  
  // Navigation Menu
  export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Find Lawyers', href: '/lawyers' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ] as const
  
  // API Endpoints
  export const API_ENDPOINTS = {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register',
      logout: '/api/auth/logout',
      verify: '/api/auth/verify',
    },
    lawyers: {
      list: '/api/lawyers',
      search: '/api/lawyers/search',
      profile: '/api/lawyers/:id',
      availability: '/api/lawyers/availability',
    },
    consultations: {
      book: '/api/consultations',
      list: '/api/consultations',
      details: '/api/consultations/:id',
      join: '/api/consultations/:id/join',
    },
    payments: {
      create: '/api/payments/create-order',
      verify: '/api/payments/verify',
    },
  } as const
  
  // Status Enums
  export const CONSULTATION_STATUS = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
    NO_SHOW: 'no_show',
  } as const
  
  export const PAYMENT_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded',
  } as const
  
  // Error Messages
  export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please check your connection.',
    UNAUTHORIZED: 'Please login to continue.',
    FORBIDDEN: 'You do not have permission to perform this action.',
    NOT_FOUND: 'The requested resource was not found.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    SERVER_ERROR: 'Something went wrong. Please try again later.',
  } as const