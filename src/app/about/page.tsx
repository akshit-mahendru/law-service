import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Link from 'next/link'
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering SMEs with <span className="text-yellow-400">Accessible Legal Services</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                We believe every small and medium enterprise deserves quality legal support 
                without the complexity and high costs of traditional legal services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize legal services for small and medium enterprises across India by 
                  providing affordable, accessible, and expert legal consultation through technology.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We understand that SMEs are the backbone of India's economy, contributing 
                  significantly to employment and GDP. Yet, they often struggle with legal 
                  complexities due to cost and accessibility barriers.
                </p>
                <Link href="/lawyers">
                  <Button>
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">10k+</div>
                    <div className="text-gray-600">SMEs Served</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Expert Lawyers</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                    <div className="text-gray-600">Client Rating</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-gray-600">Satisfaction Rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Accessibility',
                  description: 'Making legal services accessible to every SME, regardless of size or location',
                  icon: Users,
                },
                {
                  title: 'Transparency',
                  description: 'Clear pricing, honest communication, and transparent processes',
                  icon: Target,
                },
                {
                  title: 'Excellence',
                  description: 'Delivering high-quality legal services with expert lawyers and modern technology',
                  icon: Award,
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Legal and technology experts working together to serve SMEs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Adv. Rahul Sharma',
                  role: 'Founder & Chief Legal Officer',
                  experience: '15+ years in Corporate Law',
                  description: 'Former partner at leading law firm, specialized in SME legal matters'
                },
                {
                  name: 'Priya Patel',
                  role: 'Co-Founder & CEO',
                  experience: 'Tech entrepreneur',
                  description: 'Former product manager at tech unicorn, passionate about legal tech innovation'
                },
                {
                  name: 'Adv. Vikram Singh',
                  role: 'Head of Legal Operations',
                  experience: '12+ years in Business Law',
                  description: 'Expert in MSME compliance and business advisory services'
                }
              ].map((member, index) => (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary-600 font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                    <p className="text-gray-600">{member.description}</p>
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
              Join Thousands of Satisfied SMEs
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference of having expert legal support at your fingertips.
            </p>
            <Link href="/lawyers">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}