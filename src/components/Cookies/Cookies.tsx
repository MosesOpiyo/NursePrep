"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import '../../styles/globals.css'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [functionalCookies, setFunctionalCookies] = useState(true)
  const [analyticalCookies, setAnalyticalCookies] = useState(true)
  const [marketingCookies, setMarketingCookies] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent')
    if (!consentGiven) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('functionalCookies', functionalCookies.toString())
    localStorage.setItem('analyticalCookies', analyticalCookies.toString())
    localStorage.setItem('marketingCookies', marketingCookies.toString())
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('functionalCookies', 'false')
    localStorage.setItem('analyticalCookies', 'false')
    localStorage.setItem('marketingCookies', 'false')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Cookie Settings</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleDecline} aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            We use cookies to enhance your browsing experience and analyze our traffic. Please choose your preferences below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="functional-cookies" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Functional Cookies</label>
                <p className="text-sm text-muted-foreground">Essential for the website to function properly</p>
              </div>
              <Switch
                id="functional-cookies"
                checked={functionalCookies}
                onCheckedChange={setFunctionalCookies}
                aria-label="Toggle functional cookies"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="analytical-cookies" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Analytical Cookies</label>
                <p className="text-sm text-muted-foreground">Help us improve our website by collecting usage information</p>
              </div>
              <Switch
                id="analytical-cookies"
                checked={analyticalCookies}
                onCheckedChange={setAnalyticalCookies}
                aria-label="Toggle analytical cookies"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="marketing-cookies" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Marketing Cookies</label>
                <p className="text-sm text-muted-foreground">Used to deliver personalized ads and content</p>
              </div>
              <Switch
                id="marketing-cookies"
                checked={marketingCookies}
                onCheckedChange={setMarketingCookies}
                aria-label="Toggle marketing cookies"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleDecline}>Decline All</Button>
          <Button onClick={handleAccept}>Accept Selected</Button>
        </CardFooter>
      </Card>
    </div>
  )
}