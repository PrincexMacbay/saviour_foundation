import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors & Partners | Saviour Foundation",
  description: "Learn about sponsorship opportunities and partnership with Saviour Foundation to support education in Delta State, Nigeria.",
}

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    amount: "N1,000,000+",
    description: "Lead partner for our flagship events",
    benefits: [
      "Premier branding at all events",
      "Naming rights for competition category",
      "VIP seating at all events",
      "Recognition in all marketing materials",
      "Opportunity to present awards",
      "Direct engagement with students",
      "Detailed impact reports",
    ],
    highlighted: true,
  },
  {
    name: "Gold Sponsor",
    amount: "N500,000 - N999,999",
    description: "Major supporter of educational programs",
    benefits: [
      "Prominent branding at events",
      "Recognition in marketing materials",
      "Reserved seating at events",
      "Opportunity to interact with students",
      "Quarterly impact updates",
      "Certificate of partnership",
    ],
    highlighted: false,
  },
  {
    name: "Silver Sponsor",
    amount: "N200,000 - N499,999",
    description: "Valued contributor to student success",
    benefits: [
      "Logo placement at events",
      "Social media recognition",
      "Event attendance invitations",
      "Annual impact report",
      "Certificate of appreciation",
    ],
    highlighted: false,
  },
  {
    name: "Bronze Sponsor",
    amount: "N50,000 - N199,999",
    description: "Supporting friend of education",
    benefits: [
      "Recognition at events",
      "Social media mention",
      "Certificate of appreciation",
      "Newsletter acknowledgment",
    ],
    highlighted: false,
  },
]

const partnerTypes = [
  {
    icon: Building2,
    title: "Corporate Partners",
    description: "Businesses committed to corporate social responsibility in education can partner with us to make a lasting impact on young minds.",
  },
  {
    icon: Users,
    title: "Educational Institutions",
    description: "Schools and universities can collaborate with us to extend educational opportunities and share resources.",
  },
  {
    icon: Heart,
    title: "Individual Donors",
    description: "Individuals passionate about education can support our programs through donations of any size.",
  },
  {
    icon: Trophy,
    title: "Government Agencies",
    description: "We welcome partnerships with government bodies to amplify educational initiatives in Delta State.",
  },
]

const impactAreas = [
  "Funding scholarships for outstanding students",
  "Providing prizes for academic competitions",
  "Distributing educational materials to schools",
  "Supporting motivational programs and workshops",
  "Enabling infrastructure for competition events",
  "Expanding reach to more schools in Delta State",
]

export default function SponsorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-background md:text-5xl">
                <span className="text-balance">Sponsors & Partners</span>
              </h1>
              <p className="mt-6 text-lg text-background/80">
                Join us in transforming education. Your partnership can change lives and build futures.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Partner With Us</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">Make a Meaningful Impact</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  When you partner with Saviour Foundation, you&apos;re not just sponsoring an event—you&apos;re investing in the future of Delta State. Your support directly impacts students, schools, and communities.
                </p>
                <div className="mt-8">
                  <h3 className="mb-4 font-semibold text-foreground">Your Sponsorship Supports:</h3>
                  <ul className="space-y-3">
                    {impactAreas.map((area) => (
                      <li key={area} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {partnerTypes.map((type) => (
                  <Card key={type.title} className="border border-border bg-card">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <type.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sponsorship Levels</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Choose Your Level of Impact</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We offer flexible sponsorship packages to accommodate different budgets and goals. Every contribution makes a difference.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sponsorshipTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative border ${
                    tier.highlighted
                      ? "border-secondary bg-card shadow-lg"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className={tier.highlighted ? "text-secondary" : "text-foreground"}>
                      {tier.name}
                    </CardTitle>
                    <p className="text-2xl font-bold text-foreground">{tier.amount}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-6 w-full ${
                        tier.highlighted
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      <Link href="/contact">Become a Sponsor</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Sponsors Placeholder */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Supporters</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Thank You to Our Partners</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We are grateful to the organizations and individuals who have supported our mission.
              </p>
            </div>
            <Card className="border border-dashed border-border bg-muted/50">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Become Our First Featured Sponsor
                </h3>
                <p className="mb-6 max-w-md text-muted-foreground">
                  We are actively seeking partners who share our vision for educational excellence. Your logo and recognition could be featured here.
                </p>
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* In-Kind Donations */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Other Ways to Help</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">In-Kind Donations Welcome</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Can&apos;t make a financial contribution? We also welcome donations of educational materials, textbooks, school supplies, and other resources that can benefit students.
              </p>
              <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Discuss In-Kind Donation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-background md:text-4xl">
                <span className="text-balance">Ready to Make a Difference?</span>
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Contact us today to discuss how your organization can partner with Saviour Foundation to transform education in Delta State.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                  <Link href="/programs">Learn About Our Programs</Link>
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
