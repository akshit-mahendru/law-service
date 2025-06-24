// File: src/components/ui/TeamMemberImage.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface TeamMemberImageProps {
  src: string
  alt: string
  initials: string
  size?: number
}

export function TeamMemberImage({ 
  src, 
  alt, 
  initials, 
  size = 128 
}: TeamMemberImageProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div 
      className="mx-auto mb-6 relative overflow-hidden rounded-full bg-primary-100 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover rounded-full"
          onError={handleImageError}
          priority
        />
      ) : (
        <span className="text-primary-600 font-bold text-2xl">
          {initials}
        </span>
      )}
    </div>
  )
}