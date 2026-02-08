import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Trophy, BookOpen, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Saviour Foundation",
  description: "Upcoming events and academic competitions organized by Saviour Foundation in Delta State, Nigeria.",
}

const upcomingEvent = {
  title: "Inter-School Academic Competition 2026",
  date: "May 15-16, 2026",
  time: "9:00 AM - 4:00 PM",
  venue: "Warri Convention Center, Delta State",
  description: "Our flagship annual event brings together the brightest minds from primary and secondary schools across Delta State. Students compete in various academic disciplines for scholarships, cash prizes, and recognition.",
  highlights: [
    "Mathematics & Sciences Challenge",
    "English Language & Literature Quiz",
    "General Knowledge Competition",
    "Spelling Bee",
    "Debate Competition",
  ],
  benefits: [
    "Cash prizes totaling over N1,000,000",
    "Scholarships for top performers",
    "Educational materials for all participants",
    "Recognition certificates",
    "Networking with educational leaders",
  ],
}

const eventSchedule = [
  {
    day: "Day 1 - May 15",
    activities: [
      { time: "8:00 AM", activity: "Registration & Accreditation" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "10:00 AM", activity: "Preliminary Rounds Begin" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Preliminary Rounds Continue" },
      { time: "4:00 PM", activity: "Day 1 Concludes" },
    ],
  },
  {
    day: "Day 2 - May 16",
    activities: [
      { time: "9:00 AM", activity: "Semi-Final Rounds" },
      { time: "11:30 AM", activity: "Final Preparations" },
      { time: "12:00 PM", activity: "Grand Finale" },
      { time: "2:00 PM", activity: "Award Ceremony" },
      { time: "3:30 PM", activity: "Closing Remarks" },
    ],
  },
]

const pastEvents: { title: string; date: string; description: string; image: string }[] = []

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">Events</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Join us at our upcoming events and witness academic excellence in action.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Upcoming Event */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                Featured Event
              </span>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">{upcomingEvent.title}</span>
                </h2>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{upcomingEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{upcomingEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{upcomingEvent.venue}</span>
                  </div>
                </div>

                <p className="mt-6 text-lg text-muted-foreground">{upcomingEvent.description}</p>

                <div className="mt-8">
                  <h3 className="mb-4 font-semibold text-foreground">Competition Categories:</h3>
                  <ul className="space-y-2">
                    {upcomingEvent.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-secondary" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Register Your School</Link>
                </Button>
              </div>

              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/competition.jpg"
                    alt="Academic competition"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <Card className="mt-6 border-0 bg-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">What Participants Receive:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {upcomingEvent.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Event Schedule */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Schedule</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Event Schedule
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {eventSchedule.map((day) => (
                <Card key={day.day} className="border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-primary">{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {day.activities.map((item) => (
                        <li key={item.activity} className="flex gap-4">
                          <span className="w-20 shrink-0 text-sm font-medium text-secondary">
                            {item.time}
                          </span>
                          <span className="text-foreground">{item.activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Participation</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">Who Should Attend?</span>
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Students</h3>
                      <p className="mt-1 text-muted-foreground">
                        Primary and secondary school students from schools across Delta State who excel academically and want to showcase their abilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Schools & Teachers</h3>
                      <p className="mt-1 text-muted-foreground">
                        Educational institutions looking to motivate their students and gain recognition for academic excellence.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Sponsors & Partners</h3>
                      <p className="mt-1 text-muted-foreground">
                        Organizations interested in supporting education and connecting with talented young minds in Delta State.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students at event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Past Events</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Recent Activities
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {pastEvents.length === 0 ? (
                <p className="col-span-full text-center text-muted-foreground">
                  We launched in 2026. Our first event is the Inter-School Academic Competition in May. Past events will appear here after our events take place.
                </p>
              ) : (
                pastEvents.map((event) => (
                  <Card key={event.title} className="overflow-hidden border-0 bg-card shadow-sm">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm font-medium text-secondary">{event.date}</p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{event.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  Ready to Participate?
                </h2>
                <p className="mt-2 text-primary-foreground/80">
                  Register your school or inquire about sponsorship opportunities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Register Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/sponsors">Become a Sponsor</Link>
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
