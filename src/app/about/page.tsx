// File: src/app/about/page.tsx
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { TeamMemberImage } from '@/components/ui/TeamMemberImage'
import Link from 'next/link'
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react'
import { APP_CONFIG } from '@/lib/constants'

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
                Empowering Businesses with <span className="text-yellow-400">Accessible Legal Services</span>
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                We believe every business deserves quality legal support 
                without the complexity and high costs of traditional legal services.
              </p>
              <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 mb-8">
                <p className="text-yellow-200 font-medium text-lg">
                  {APP_CONFIG.tagline}
                </p>
              </div>
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
                  To democratize legal services for businesses across India by 
                  providing affordable, accessible, and expert legal consultation through our comprehensive MARG approach.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We understand that businesses are the backbone of India's economy, contributing 
                  significantly to employment and GDP. Yet, they often struggle with legal 
                  complexities due to cost and accessibility barriers. Neeti Marg bridges this gap.
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
                    <div className="text-gray-600">Businesses Served</div>
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
                Our MARG Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The four pillars that guide everything we do at Neeti Marg
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Mediation',
                  description: 'Facilitating effective communication and resolution between parties',
                  icon: Users,
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  title: 'Advice',
                  description: 'Providing expert legal counsel tailored to your business needs',
                  icon: Target,
                  color: 'bg-green-100 text-green-600',
                },
                {
                  title: 'Rights',
                  description: 'Protecting and advocating for your legal rights and interests',
                  icon: Award,
                  color: 'bg-purple-100 text-purple-600',
                },
                {
                  title: 'Guidance',
                  description: 'Offering clear direction through complex legal landscapes',
                  icon: Heart,
                  color: 'bg-red-100 text-red-600',
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="h-8 w-8" />
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
                Meet Your Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Legal and technology experts working together to serve businesses across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-12">
                  <TeamMemberImage
                    src="/team/parvez-sadiq-rahman.jpg"
                    alt="Parvez Sadiq Rahman - Co-Founder, Neeti Marg"
                    initials="PSR"
                    size={160}
                  />
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">Parvez Sadiq Rahman</h3>
                  <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Co-Founder
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Visionary leader with extensive experience in legal technology and business law. 
                    Passionate about making legal services accessible to every business owner in India 
                    through innovative solutions and expert guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100">
                <CardContent className="p-12">
                  <TeamMemberImage
                    src="/team/akshit-mahendru.jpg"
                    alt="Akshit Mahendru - Co-Founder, Neeti Marg"
                    initials="AM"
                    size={160}
                  />
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">Akshit Mahendru</h3>
                  <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Co-Founder
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Technology entrepreneur and legal innovation expert dedicated to bridging the gap 
                    between traditional legal practice and modern business needs. Committed to delivering 
                    seamless digital legal experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Thousands of Satisfied Businesses
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference of having expert legal support at your fingertips with Neeti Marg.
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