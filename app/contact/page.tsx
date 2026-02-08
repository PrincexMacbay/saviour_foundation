"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Warri, Delta State", "Nigeria"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["saviourfoundation1995@gmail.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 915 743 4271", "+234 915 743 4271"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
  },
]

const inquiryTypes = [
  "General Inquiry",
  "School Registration",
  "Sponsorship Opportunity",
  "Partnership Proposal",
  "Volunteer Interest",
  "Media/Press",
  "Other",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">Contact Us</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Have questions or want to get involved? We&apos;d love to hear from you. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-0 bg-muted text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                        <CheckCircle className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Message Sent Successfully!
                      </h3>
                      <p className="mb-6 text-muted-foreground">
                        Thank you for reaching out. We&apos;ll respond to your inquiry within 24-48 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+234 800 000 0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Type of Inquiry</Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Select an option</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization/School (Optional)</Label>
                        <Input
                          id="organization"
                          name="organization"
                          placeholder="Your organization or school name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Whether you&apos;re a school looking to register students for our competitions, a potential sponsor, or someone interested in supporting our mission, we welcome your inquiry.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground">For Schools</h3>
                    <p className="text-muted-foreground">
                      Interested in registering your school for our upcoming academic competition? Contact us with your school details and we&apos;ll provide registration information.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground">For Sponsors & Partners</h3>
                    <p className="text-muted-foreground">
                      Looking to make an impact through educational support? We offer various partnership opportunities. Let&apos;s discuss how we can work together.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground">For Volunteers</h3>
                    <p className="text-muted-foreground">
                      Want to contribute your time and skills? We always welcome dedicated volunteers who share our passion for education.
                    </p>
                  </div>
                </div>

                <Card className="border-0 bg-primary">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-primary-foreground">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-primary-foreground/80">
                      We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call our office directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Find Us in Warri
              </h2>
              <p className="mt-2 text-muted-foreground">
                Saviour Foundation is based in Warri, Delta State, Nigeria
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl bg-card">
                <div className="flex aspect-[21/9] items-center justify-center bg-muted">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-4 text-lg font-semibold text-foreground">
                      Warri, Delta State, Nigeria
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      Contact us for detailed directions to our office
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-background md:text-3xl">
                  Follow Our Journey
                </h2>
                <p className="mt-2 text-background/80">
                  Stay updated with our latest events and impact stories.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/events">Upcoming Events</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                  <Link href="/impact">Our Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
