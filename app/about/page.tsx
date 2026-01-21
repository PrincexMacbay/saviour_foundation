import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Saviour Foundation",
  description: "Learn about Saviour Foundation's mission to empower education in Delta State, Nigeria through scholarships and academic competitions.",
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To identify, nurture, and reward academically outstanding students in primary and secondary schools through competitions, scholarships, and comprehensive educational support programs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the leading foundation in Delta State for educational empowerment, creating a generation of confident, knowledgeable leaders who will drive positive change in their communities.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Excellence, integrity, equity, and compassion guide everything we do. We believe every child deserves access to quality education regardless of their background.",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Foundation Established",
    description: "Saviour Foundation was founded in Warri, Delta State with a vision to transform education.",
  },
  {
    year: "2022",
    title: "First Competition",
    description: "Launched our inaugural inter-school academic competition with 20 participating schools.",
  },
  {
    year: "2023",
    title: "Scholarship Program",
    description: "Introduced comprehensive scholarship programs supporting students through secondary education.",
  },
  {
    year: "2024",
    title: "Expanded Reach",
    description: "Extended programs to over 50 schools across Delta State, impacting hundreds of students.",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description: "Strengthened partnerships and launched new initiatives for educational materials support.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">About Saviour Foundation</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Dedicated to transforming lives through education and nurturing the academic potential of young minds in Delta State, Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item) => (
                <Card key={item.title} className="border-0 bg-muted shadow-sm">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Background Story */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">Born from a Passion for Education</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Saviour Foundation was established in Warri, Delta State, driven by the belief that education is the most powerful tool for transforming lives and communities. We recognized that many talented students in our region lacked the resources and recognition they deserved.
                  </p>
                  <p>
                    What began as a small initiative to reward academic excellence has grown into a comprehensive foundation that touches the lives of hundreds of students annually. Through inter-school competitions, scholarships, and educational support, we are building a legacy of academic achievement.
                  </p>
                  <p>
                    Today, Saviour Foundation stands as a beacon of hope for students across Delta State, proving that with the right support and encouragement, every child can achieve greatness.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/scholarship.jpg"
                  alt="Student receiving scholarship award"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl lg:order-2">
                <Image
                  src="/images/founder.jpg"
                  alt="Queen OgheneFegor Macbay - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Leadership</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Meet Our Founder
                </h2>
                <h3 className="mt-4 text-xl font-semibold text-secondary">Queen OgheneFegor Macbay</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Queen OgheneFegor Macbay is the visionary founder of Saviour Foundation. Her passion for education and commitment to youth development led her to establish this organization with the goal of creating opportunities for academically gifted students.
                  </p>
                  <p>
                    Under her leadership, Saviour Foundation has grown from a local initiative to a recognized force for educational empowerment in Delta State. Her dedication to the cause has inspired countless students to pursue academic excellence.
                  </p>
                  <p>
                    &ldquo;Every child has potential. Our job is to help them discover it and provide the support they need to flourish,&rdquo; says Queen OgheneFegor Macbay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Milestones of Impact
              </h2>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="hidden h-4 w-4 shrink-0 self-start rounded-full bg-primary md:mt-1 md:block" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  Ready to Make a Difference?
                </h2>
                <p className="mt-2 text-primary-foreground/80">
                  Join us in empowering the next generation of leaders.
                </p>
              </div>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
