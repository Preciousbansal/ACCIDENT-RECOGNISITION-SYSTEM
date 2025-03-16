import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Accident Recognition System",
  description: "A modern, user-friendly frontend for an AI-powered Accident Recognition System",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Accident Recognition System
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Detect accidents in real-time with our advanced AI system. Monitor live feeds, analyze uploaded
                    content, and receive instant alerts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button>
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Accident Recognition System"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="/placeholder.svg?height=550&width=550"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

