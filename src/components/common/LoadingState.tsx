import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingStateProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingState({ message = "Loading...", size = 'md' }: LoadingStateProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Loader2 className={`animate-spin text-primary-600 ${sizeClasses[size]}`} />
      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  )
}

