import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, BookOpen, Users, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: Trophy,
    title: "Academic Competitions",
    description: "Inter-school competitions that challenge and reward intellectual excellence.",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Financial support enabling outstanding students to pursue their education.",
  },
  {
    icon: BookOpen,
    title: "Educational Materials",
    description: "Providing textbooks and learning resources to students in need.",
  },
  {
    icon: Users,
    title: "Student Motivation",
    description: "Programs designed to inspire and encourage academic achievement.",
  },
]

const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "50+", label: "Schools Reached" },
  { value: "100+", label: "Scholarships Awarded" },
  { value: "5", label: "Years of Impact" },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
                  Empowering Education in Delta State
                </span>
                <h1 className="font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl">
                  <span className="text-balance">Building Tomorrow&apos;s Leaders Through Academic Excellence</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-background/80">
                  Saviour Foundation identifies and rewards academically outstanding students in Warri, Delta State through scholarships, competitions, and comprehensive educational support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/contact">Support Our Mission</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                    <Link href="/programs">
                      Our Programs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/hero-students.jpg"
                    alt="Students celebrating academic achievement"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-secondary p-4 shadow-lg">
                  <p className="text-3xl font-bold text-secondary-foreground">500+</p>
                  <p className="text-sm text-secondary-foreground/80">Students Empowered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Transforming Lives Through Education</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded with a vision to nurture academic excellence, Saviour Foundation has been at the forefront of educational empowerment in Delta State. We believe every child deserves the opportunity to reach their full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Our Programs & Initiatives</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <Card key={item.title} className="group border-0 bg-card shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                <Link href="/programs">
                  View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary-foreground md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Event Preview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/competition.jpg"
                  alt="Academic competition event"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
                  Upcoming Event
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">Inter-School Academic Competition 2026</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join us this March for our flagship event that brings together the brightest minds from primary and secondary schools across Delta State. Students compete in various academic disciplines for scholarships and prizes.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Multiple academic categories
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Cash prizes and scholarships
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Educational materials for participants
                  </li>
                </ul>
                <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/events">Learn More About This Event</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-background md:text-4xl">
                <span className="text-balance">Join Us in Shaping the Future</span>
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Your support can transform a student&apos;s life. Partner with Saviour Foundation to create lasting educational impact in Delta State.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Become a Partner</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                  <Link href="/sponsors">View Our Sponsors</Link>
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
