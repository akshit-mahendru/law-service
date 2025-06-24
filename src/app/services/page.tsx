// File: src/app/services/page.tsx
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  Phone, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Clipboard
} from 'lucide-react'

const services = [
  {
    id: 'compliance',
    title: 'Legal Compliance',
    description: 'Comprehensive legal compliance management for businesses',
    icon: Clipboard,
    features: [
      'Regulatory Compliance Audit',
      'Compliance Documentation',
      'Legal Risk Assessment',
      'Regulatory Filing Support',
      'Compliance Training',
      'Ongoing Compliance Monitoring'
    ],
    pricing: 'Starting from ₹3,000',
    popular: false,
  },
  {
    id: 'sme-compliance',
    title: 'MSME Compliance',
    description: 'Complete compliance management for small and medium enterprises',
    icon: Scale,
    features: [
      'MSME Registration & Udyam Certificate',
      'GST Registration & Compliance',
      'Labor Law Compliance',
      'Environmental Clearances',
      'MSME Form 1 Filing',
      'Regulatory Audit Support'
    ],
    pricing: 'Starting from ₹5,000',
    popular: false,
  },
  {
    id: 'contract-drafting',
    title: 'Contract Drafting & Review',
    description: 'Professional contract drafting and legal document services',
    icon: FileText,
    features: [
      'Service Agreements',
      'Vendor/Supplier Contracts',
      'Employment Agreements',
      'Non-Disclosure Agreements',
      'Partnership Agreements',
      'Terms & Conditions'
    ],
    pricing: 'Starting from ₹2,000',
    popular: true,
  },
  {
    id: 'business-advisory',
    title: 'Business Legal Advisory',
    description: 'Strategic legal guidance for business growth and operations',
    icon: Users,
    features: [
      'Business Structure Planning',
      'Investment Documentation',
      'Merger & Acquisition Support',
      'Corporate Governance',
      'Board Resolutions',
      'Shareholder Agreements'
    ],
    pricing: 'Starting from ₹10,000',
    popular: false,
  },
  {
    id: 'ip-protection',
    title: 'Intellectual Property',
    description: 'Protect your business assets and intellectual property',
    icon: Shield,
    features: [
      'Trademark Registration',
      'Copyright Protection',
      'Patent Application Support',
      'IP Licensing Agreements',
      'Brand Protection',
      'IP Dispute Resolution'
    ],
    pricing: 'Starting from ₹3,000',
    popular: false,
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    description: 'Resolve business disputes efficiently and cost-effectively',
    icon: Phone,
    features: [
      'Commercial Dispute Resolution',
      'Payment Recovery (MSME Samadhaan)',
      'Contract Disputes',
      'Employment Disputes',
      'Arbitration Support',
      'Mediation Services'
    ],
    pricing: 'Starting from ₹8,000',
    popular: false,
  },
  {
    id: 'tax-gst',
    title: 'Tax & GST Services',
    description: 'Comprehensive tax planning and GST compliance services',
    icon: Clock,
    features: [
      'GST Registration & Returns',
      'Tax Planning & Advisory',
      'GST Audit & Compliance',
      'Input Tax Credit Optimization',
      'Tax Dispute Resolution',
      'Annual Tax Compliance'
    ],
    pricing: 'Starting from ₹4,000',
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Legal Services for Businesses
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From compliance to contracts, Neeti Marg provides end-to-end legal solutions 
              tailored for businesses in India through our MARG approach.
            </p>
            <Link href="/lawyers">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Card key={service.id} className={`relative hover:shadow-xl transition-shadow ${service.popular ? 'border-2 border-primary-500' : ''}`}>
                    {service.popular && (
                      <Badge className="absolute -top-3 left-6 bg-primary-600">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-gray-600">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4">
                        <div className="text-lg font-semibold text-primary-600 mb-4">
                          {service.pricing}
                        </div>
                        <div className="space-y-3">
                          <Link href={`/services/${service.id}`}>
                            <Button variant="outline" className="w-full">
                              Learn More
                            </Button>
                          </Link>
                          <Link href={`/dashboard/consultations/book?service=${service.id}`}>
                            <Button className="w-full">
                              Get Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Neeti Marg Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent process to get the legal help you need through our MARG methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose Service',
                  description: 'Select the legal service that matches your business needs from our comprehensive offerings'
                },
                {
                  step: '02',
                  title: 'Book Consultation',
                  description: 'Schedule a video consultation with a specialized lawyer who understands your industry'
                },
                {
                  step: '03',
                  title: 'Get Expert Advice',
                  description: 'Discuss your requirements and receive professional legal guidance tailored to your situation'
                },
                {
                  step: '04',
                  title: 'Receive Support',
                  description: 'Get drafted documents and ongoing legal support as needed for your business growth'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with our expert lawyers at Neeti Marg and get the legal support your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lawyers">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Find a Lawyer
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