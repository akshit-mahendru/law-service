import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { 
  Video, 
  FileText, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle,
  Users,
  Phone,
  ArrowRight,
  Scale
} from 'lucide-react'
import { CONSULTATION_TYPES } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Legal Consultation Made <span className="text-yellow-400">Simple</span> for SMEs
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Connect with verified lawyers specializing in SME legal matters. 
                  Get expert advice through video consultations at affordable prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/lawyers">
                    <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                      Find Lawyers <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                      Our Services
                    </Button>
                  </Link>
                </div>
                
                {/* Quick stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-blue-200 text-sm">Verified Lawyers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-blue-200 text-sm">SMEs Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.8/5</div>
                    <div className="text-blue-200 text-sm">Client Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Quick Consultation Booking</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>Choose from 12+ specializations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>Video consultation in 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>Starting from ₹399</span>
                    </div>
                  </div>
                  <Link href="/dashboard/consultations/book">
                    <Button className="w-full mt-6 bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SME Legal?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique legal challenges faced by small and medium enterprises in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Consultations</h3>
                  <p className="text-gray-600">Secure video calls with verified lawyers from anywhere in India</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-success-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">SME Specialists</h3>
                  <p className="text-gray-600">Lawyers with deep expertise in small business legal matters</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-warning-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-600">Get consultation within 2 hours of booking</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-error-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-gray-600">End-to-end encrypted consultations with strict confidentiality</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the consultation type that fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CONSULTATION_TYPES.map((type) => (
                <Card key={type.id} className={`relative border-2 hover:shadow-xl transition-all ${type.popular ? 'border-primary-500 scale-105' : 'border-gray-200'}`}>
                  {type.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.name}</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {formatCurrency(type.price)}
                    </div>
                    <div className="text-gray-600 mb-6">{type.duration} minutes</div>
                    <p className="text-gray-600 mb-8">{type.description}</p>
                    <Link href={`/dashboard/consultations/book?type=${type.id}`}>
                      <Button 
                        className="w-full" 
                        variant={type.popular ? 'default' : 'outline'}
                      >
                        Select Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Legal Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From compliance to contracts, we cover all your SME legal needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Scale className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">MSME Compliance</h3>
                  <p className="text-gray-600 mb-4">
                    MSME registration, GST compliance, labor law adherence, and regulatory filings
                  </p>
                  <Link href="/services/sme-compliance" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Contract Drafting</h3>
                  <p className="text-gray-600 mb-4">
                    Service agreements, vendor contracts, employment agreements, and NDAs
                  </p>
                  <Link href="/services/contract-drafting" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Business Advisory</h3>
                  <p className="text-gray-600 mb-4">
                    Partnership agreements, investor relations, mergers, and business restructuring
                  </p>
                  <Link href="/services/business-advisory" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">IP Protection</h3>
                  <p className="text-gray-600 mb-4">
                    Trademark registration, copyright protection, and intellectual property disputes
                  </p>
                  <Link href="/services/ip-protection" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Dispute Resolution</h3>
                  <p className="text-gray-600 mb-4">
                    Commercial disputes, payment recovery, arbitration, and litigation support
                  </p>
                  <Link href="/services/dispute-resolution" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Tax & GST</h3>
                  <p className="text-gray-600 mb-4">
                    GST registration, tax planning, compliance audits, and dispute resolution
                  </p>
                  <Link href="/services/tax-gst" className="text-primary-600 hover:text-primary-700 font-medium">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied SME owners who trust us with their legal needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "SME Legal helped us navigate complex GST compliance issues. Their lawyers are knowledgeable and responsive. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">RS</span>
                    </div>
                    <div>
                      <div className="font-semibold">Rajesh Sharma</div>
                      <div className="text-gray-600 text-sm">Manufacturing Company, Mumbai</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Quick consultation booking and expert advice on employment contracts. The video call was crystal clear and very professional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">PK</span>
                    </div>
                    <div>
                      <div className="font-semibold">Priya Krishnan</div>
                      <div className="text-gray-600 text-sm">IT Services, Bangalore</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Affordable pricing and excellent service. They helped us with vendor agreements and saved us thousands in legal fees."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">AJ</span>
                    </div>
                    <div>
                      <div className="font-semibold">Arjun Joshi</div>
                      <div className="text-gray-600 text-sm">Retail Business, Pune</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Expert Legal Advice?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of SMEs who trust us with their legal needs. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lawyers">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Find a Lawyer <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}