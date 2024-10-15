"use client"

import '../../styles/globals.css'
import { useState } from 'react'
import { Book, Globe, DollarSign, Clock, Users, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useRouter } from 'next/navigation'

const comparisonData = [
  {
    title: "Cost",
    traditional: "Generally more expensive due to printing and distribution costs. No opportunity to try before buying.",
    NursePrep: "$29.99 / month",
    icon: DollarSign,
  },
  {
    title: "Format",
    traditional: "Physical books and printed materials",
    NursePrep: "Digital resources accessible on various devices",
    icon: Book,
  },
  {
    title: "Accessibility",
    traditional: "Limited to physical location",
    NursePrep: "Available anytime, anywhere with internet connection",
    icon: Globe,
  },
  {
    title: "Updates",
    traditional: "Requires purchasing new editions",
    NursePrep: "Frequently updated at no additional cost",
    icon: Clock,
  },
  {
    title: "Interaction",
    traditional: "Limited to in-person study groups",
    NursePrep: "Interactive forums, live sessions, and virtual study groups",
    icon: Users,
  },
  {
    title: "Practice Tests",
    traditional: "Limited number of practice tests",
    NursePrep: "Extensive practice tests with immediate feedback",
    icon: Award,
  },
]

export default function Comparison() {
  const [showOnline, setShowOnline] = useState(true)
  const router = useRouter()

  const toRegisterPage = () => {
    router.push(`/register`)
  }

  return (
    <div className="container mx-auto px-4 py-8">      
      <div className="md:hidden flex items-center justify-center mb-4">
        <span className="mr-2 text-sm font-medium">Traditional</span>
        <Switch
          checked={showOnline}
          onCheckedChange={setShowOnline}
          className="data-[state=checked]:bg-primary"
        />
        <span className="ml-2 text-sm font-medium">Online</span>
      </div>

      <div className="grid md:grid-cols-3">
        {comparisonData.map((item, index) => (
          <Card key={index} className="md:col-span-1 flex flex-col gap-6 p-6 rounded-none">
            <CardHeader className="flex flex-col gap-4 items-center pb-2">
              <item.icon className="h-16 w-16 text-primary" />
              <CardTitle className='text-xl'>{item.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="hidden md:block">
                <CardDescription className="mb-2">
                  <strong>Traditional:</strong> {item.traditional}
                </CardDescription>
                <CardDescription className=' text-black'>
                  <strong>NursePrep:</strong> {item.NursePrep}
                </CardDescription>
              </div>
              <div className="md:hidden">
                <CardDescription>
                  {showOnline ? item.NursePrep : item.traditional}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        {/* <Button variant="outline" className="mr-4">Learn More</Button> */}
        <Button onClick={() => toRegisterPage()}>
          Get Started
        </Button>
      </div>
    </div>
  )
}