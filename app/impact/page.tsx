import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Impact | Saviour Foundation",
  description: "Discover the impact of Saviour Foundation - students supported, schools reached, and scholarships awarded in Delta State, Nigeria.",
}

const stats = [
  { value: "500+", label: "Students Supported", description: "Young minds empowered through our programs" },
  { value: "50+", label: "Schools Reached", description: "Educational institutions across Delta State" },
  { value: "100+", label: "Scholarships Awarded", description: "Financial support provided to students" },
  { value: "N5M+", label: "Total Investment", description: "Invested in educational empowerment" },
  { value: "5", label: "Competitions Held", description: "Annual inter-school academic events" },
  { value: "1000+", label: "Books Distributed", description: "Educational materials provided" },
]

const testimonials = [
  {
    quote: "Saviour Foundation changed my life. The scholarship I received allowed me to continue my education when my family could not afford it. Today, I am pursuing my dreams.",
    name: "Blessing Okonkwo",
    role: "2023 Scholarship Recipient",
    school: "Government Secondary School, Warri",
  },
  {
    quote: "The academic competition was an incredible experience. It pushed me to study harder and believe in my abilities. Winning was just the beginning of my journey.",
    name: "Emmanuel Adigwe",
    role: "2024 Competition Winner",
    school: "Unity Secondary School, Effurun",
  },
  {
    quote: "As a school administrator, I have seen how Saviour Foundation motivates our students. The recognition they receive inspires the entire school to strive for excellence.",
    name: "Mrs. Gladys Ofurhie",
    role: "School Principal",
    school: "Delta State Model School",
  },
  {
    quote: "The textbooks and learning materials we received made a significant difference. Many of our students now have resources they could not have accessed otherwise.",
    name: "Mr. Augustine Efe",
    role: "Head Teacher",
    school: "St. Michael Primary School, Warri",
  },
]

const successStories = [
  {
    title: "From Competition Winner to University Scholar",
    description: "After winning our 2022 competition, this student received a full scholarship and is now studying Medicine at a top Nigerian university.",
    image: "/images/scholarship.jpg",
  },
  {
    title: "School Transforms Through Partnership",
    description: "One of our partner schools saw a 40% improvement in academic performance after participating in our programs for two consecutive years.",
    image: "/images/competition.jpg",
  },
  {
    title: "Community Impact Beyond Students",
    description: "Our educational materials distribution has benefited not just students but entire families, creating a culture of learning in local communities.",
    image: "/images/hero-students.jpg",
  },
]

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">Our Impact</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Measuring success through the lives we touch and the futures we help build across Delta State.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">By The Numbers</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Impact at a Glance</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-0 bg-muted text-center">
                  <CardContent className="p-8">
                    <p className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{stat.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Success Stories</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Stories of Transformation</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {successStories.map((story) => (
                <Card key={story.title} className="overflow-hidden border-0 bg-card shadow-sm">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Voices of Impact</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="border border-border bg-card">
                  <CardContent className="p-8">
                    <Quote className="mb-4 h-8 w-8 text-secondary" />
                    <p className="mb-6 text-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Report CTA */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-background md:text-4xl">
                  <span className="text-balance">Be Part of Our Impact Story</span>
                </h2>
                <p className="mt-4 text-lg text-background/80">
                  Every contribution, partnership, and act of support adds to our collective impact. Together, we can reach more students, support more schools, and transform more lives.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/contact">Support Our Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                    <Link href="/sponsors">View Our Partners</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students benefiting from our programs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
