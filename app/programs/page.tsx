import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, GraduationCap, BookOpen, Lightbulb, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Programs | Saviour Foundation",
  description: "Explore Saviour Foundation's programs including academic competitions, scholarships, educational materials support, and student motivation initiatives.",
}

const programs = [
  {
    icon: Trophy,
    title: "Inter-School Academic Competitions",
    description: "Our flagship program brings together the brightest students from primary and secondary schools across Delta State to compete in various academic disciplines.",
    features: [
      "Annual competitions in Mathematics, English, Sciences, and General Knowledge",
      "Multiple rounds including preliminary, semi-final, and grand finale",
      "Cash prizes and trophies for top performers",
      "Recognition certificates for all participants",
      "Schools receive awards for outstanding performance",
    ],
    image: "/images/competition.jpg",
  },
  {
    icon: GraduationCap,
    title: "Scholarships & Cash Awards",
    description: "We provide financial support to academically outstanding students to help them pursue their educational goals without financial barriers.",
    features: [
      "Full and partial scholarships for secondary education",
      "Performance-based cash awards",
      "School fees support for exceptional students",
      "Tuition assistance for tertiary education preparation",
      "Emergency educational support fund",
    ],
    image: "/images/scholarship.jpg",
  },
  {
    icon: BookOpen,
    title: "Educational Materials Support",
    description: "We ensure students have access to the learning resources they need to succeed academically.",
    features: [
      "Distribution of textbooks and workbooks",
      "School supplies including notebooks, pens, and mathematical sets",
      "Library support for partner schools",
      "Digital learning resources where applicable",
      "Examination preparation materials",
    ],
    image: "/images/hero-students.jpg",
  },
  {
    icon: Lightbulb,
    title: "Student Motivation Initiatives",
    description: "Beyond material support, we inspire students to dream big and work hard toward their goals.",
    features: [
      "Motivational seminars and workshops",
      "Career guidance and counseling sessions",
      "Mentorship programs connecting students with professionals",
      "Leadership development activities",
      "Success story sharing from past beneficiaries",
    ],
    image: "/images/photo_1_fegor.jpg",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">Our Programs</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Comprehensive initiatives designed to identify, nurture, and reward academic excellence among students in Delta State.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Four Pillars of Support</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our programs work together to create a holistic approach to educational empowerment, addressing both recognition and practical support needs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <Card key={program.title} className="group border border-border bg-card transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Programs */}
        {programs.map((program, index) => (
          <section
            key={program.title}
            className={`py-20 ${index % 2 === 0 ? "bg-muted" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    <span className="text-balance">{program.title}</span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">{program.description}</p>
                  <ul className="mt-6 space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* How to Participate */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">How Schools Can Participate</span>
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Schools in Delta State interested in participating in our programs can register their students for upcoming competitions and scholarship opportunities.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Register Your School</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/events">View Upcoming Events</Link>
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
