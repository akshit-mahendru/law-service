'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { APP_CONFIG } from '@/lib/constants'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: 'general'
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      subject: 'general'
    })
    setLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Have questions about our services? Need help with legal matters? 
              We're here to help your business succeed.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Full Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          label="Email *"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Phone Number"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <Input
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="consultation">Book Consultation</option>
                          <option value="pricing">Pricing Question</option>
                          <option value="technical">Technical Support</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Tell us about your legal needs or questions..."
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-primary-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-gray-600">{APP_CONFIG.supportPhone}</p>
                          <p className="text-sm text-gray-500">Mon-Fri 9AM-7PM IST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-primary-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-600">{APP_CONFIG.supportEmail}</p>
                          <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Office</h4>
                          <p className="text-gray-600">
                            Mumbai, Maharashtra<br />
                            India 400001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-primary-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Business Hours</h4>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 7:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <a href={`tel:${APP_CONFIG.supportPhone}`}>
                        <Button className="w-full justify-start" variant="outline">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                      <a href={`mailto:${APP_CONFIG.supportEmail}`}>
                        <Button className="w-full justify-start" variant="outline">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                      </a>
                      <Link href="/lawyers">
                        <Button className="w-full justify-start">
                          <Send className="mr-2 h-4 w-4" />
                          Book Consultation
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Frequently Asked</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">How quickly can I get a consultation?</h4>
                        <p className="text-sm text-gray-600">Most consultations can be scheduled within 2-4 hours.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Do you offer emergency legal support?</h4>
                        <p className="text-sm text-gray-600">Yes, we have lawyers available for urgent matters 24/7.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">What payment methods do you accept?</h4>
                        <p className="text-sm text-gray-600">We accept all major cards, UPI, net banking, and wallets.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              Don't wait for legal issues to become bigger problems. Get expert advice today.
            </p>
            <Link href="/lawyers">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Find a Lawyer Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}