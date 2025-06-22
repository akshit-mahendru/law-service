import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { CheckCircle, Video, FileText, Users, ArrowRight } from 'lucide-react'
// Replace it with these two separate imports:
import { CONSULTATION_TYPES } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

const documentPackages = [
  {
    name: 'Starter Pack',
    price: 4999,
    description: 'Essential documents for new businesses',
    features: [
      '2 Service Agreements',
      '1 NDA Template',
      '1 Employment Contract',
      'Basic Terms & Conditions',
      '1 Free Consultation (30 min)',
      'Email Support'
    ],
    popular: false,
  },
  {
    name: 'Business Pack',
    price: 9999,
    description: 'Comprehensive legal document package',
    features: [
      '5 Service Agreements',
      '3 NDA Templates',
      '3 Employment Contracts',
      '2 Vendor Agreements',
      'Privacy Policy',
      'Terms & Conditions',
      '2 Free Consultations (30 min each)',
      'Priority Support'
    ],
    popular: true,
  },
  {
    name: 'Enterprise Pack',
    price: 19999,
    description: 'Complete legal documentation suite',
    features: [
      'Unlimited Service Agreements',
      'Unlimited NDAs',
      '10 Employment Contracts',
      '5 Vendor Agreements',
      'Partnership Agreement',
      'Shareholder Agreement',
      'All Compliance Templates',
      '5 Free Consultations (60 min each)',
      'Dedicated Legal Support'
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Consultation Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Video Consultation Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert legal advice through secure video calls
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {CONSULTATION_TYPES.map((type) => (
                <Card key={type.id} className={`relative border-2 hover:shadow-xl transition-all ${'popular' in type && type.popular ? 'border-primary-500 scale-105' : 'border-gray-200'}`}>
                  {'popular' in type && type.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="h-8 w-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-2xl">{type.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary-600 my-4">
                      {formatCurrency(type.price)}
                    </div>
                    <p className="text-gray-600">{type.duration} minutes • {type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-600" />
                        <span className="text-sm">Secure video consultation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-600" />
                        <span className="text-sm">Expert legal advice</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-600" />
                        <span className="text-sm">Session recording available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-600" />
                        <span className="text-sm">Follow-up support</span>
                      </div>
                    </div>
                    <Link href={`/dashboard/consultations/book?type=${type.id}`}>
                      <Button 
                        className="w-full" 
                        variant={'popular' in type && type.popular ? 'default' : 'outline'}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Document Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Legal Document Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready-to-use legal document templates customized for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {documentPackages.map((pkg) => (
                <Card key={pkg.name} className={`relative border-2 hover:shadow-xl transition-all ${pkg.popular ? 'border-primary-500 scale-105' : 'border-gray-200'}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600">
                      Best Value
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary-600 my-4">
                      {formatCurrency(pkg.price)}
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/dashboard/documents/templates?package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Choose Package
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Custom Legal Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Need something specific? We offer custom legal services tailored to your unique requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: 'Contract Drafting', price: 'From ₹2,000', icon: FileText },
                { service: 'Legal Review', price: 'From ₹1,500', icon: CheckCircle },
                { service: 'Compliance Audit', price: 'From ₹10,000', icon: Users },
                { service: 'Dispute Resolution', price: 'From ₹8,000', icon: Video },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.service}</h3>
                      <p className="text-primary-600 font-medium">{item.price}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do video consultations work?",
                  answer: "Book a consultation, make payment, and receive a secure video call link. Our lawyers will call you at the scheduled time for your consultation."
                },
                {
                  question: "Are the consultations confidential?",
                  answer: "Yes, all consultations are completely confidential and protected by attorney-client privilege. We use encrypted video calls for maximum security."
                },
                {
                  question: "Can I get a refund if I'm not satisfied?",
                  answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with your consultation, we'll provide a full refund within 24 hours."
                },
                {
                  question: "How quickly can I get a consultation?",
                  answer: "Most consultations can be scheduled within 2-4 hours. For urgent matters, we offer same-day consultations based on lawyer availability."
                },
                {
                  question: "Do you provide ongoing legal support?",
                  answer: "Yes, we offer retainer-based ongoing legal support for businesses that need regular legal assistance. Contact us for custom pricing."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Legal Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose your consultation type and connect with expert lawyers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lawyers">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Contact Sales
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