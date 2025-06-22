import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Star, MapPin, Clock, Video, CheckCircle } from 'lucide-react'
import { Lawyer } from '@/types/lawyer'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'

interface LawyerCardProps {
  lawyer: Lawyer
  showBookButton?: boolean
}

export function LawyerCard({ lawyer, showBookButton = true }: LawyerCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <Avatar 
            src={lawyer.user.avatar} 
            name={`${lawyer.user.firstName} ${lawyer.user.lastName}`}
            size="lg"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {lawyer.user.firstName} {lawyer.user.lastName}
              </h3>
              {lawyer.isVerified && (
                <CheckCircle className="h-5 w-5 text-success-600" />
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{lawyer.city}, {lawyer.state}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">{lawyer.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-gray-500">
                ({lawyer.totalConsultations} consultations)
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary-600">
              {formatCurrency(lawyer.hourlyRate)}/hr
            </div>
            <div className="text-sm text-gray-600">{lawyer.experience} years exp</div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {lawyer.specializations.slice(0, 3).map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
            {lawyer.specializations.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{lawyer.specializations.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Languages:</span>{' '}
            {lawyer.languages.slice(0, 3).join(', ')}
            {lawyer.languages.length > 3 && ` +${lawyer.languages.length - 3} more`}
          </div>
        </div>

        {/* Bio Preview */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            {lawyer.bio}
          </p>
        </div>

        {/* Availability Indicator */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${lawyer.isAvailable ? 'bg-success-600' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-600">
              {lawyer.isAvailable ? 'Available today' : 'Busy'}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Video className="h-4 w-4" />
            <span>Video consultation</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link href={`/lawyers/${lawyer.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Profile
            </Button>
          </Link>
          {showBookButton && (
            <Link href={`/dashboard/consultations/book?lawyer=${lawyer.id}`} className="flex-1">
              <Button className="w-full">
                Book Now
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}