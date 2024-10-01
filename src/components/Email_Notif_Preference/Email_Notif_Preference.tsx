"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Bell, Mail, MessageSquare, ShieldAlert, Star, Zap } from "lucide-react"

interface NotificationPreference {
  id: string
  label: string
  description: string
  icon: React.ReactNode
}

export default function EmailNotificationPreferences() {
  const [preferences, setPreferences] = useState<{ [key: string]: boolean }>({
    accountUpdates: true,
    newFeatures: true,
    securityAlerts: true,
    productNews: false,
    feedback: false,
    mentions: true,
  })

  const notificationOptions: NotificationPreference[] = [
    {
      id: "accountUpdates",
      label: "Account Updates",
      description: "Get notified about important changes to your account",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      id: "newFeatures",
      label: "New Features",
      description: "Be the first to know about new features and improvements",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: "securityAlerts",
      label: "Security Alerts",
      description: "Receive alerts about security issues and unauthorized access attempts",
      icon: <ShieldAlert className="h-4 w-4" />,
    },
    {
      id: "productNews",
      label: "Product News",
      description: "Stay updated with our latest product announcements and updates",
      icon: <Mail className="h-4 w-4" />,
    },
    {
      id: "feedback",
      label: "Feedback Requests",
      description: "Participate in surveys and provide feedback to help us improve",
      icon: <Star className="h-4 w-4" />,
    },
    {
      id: "mentions",
      label: "Mentions and Replies",
      description: "Get notified when someone mentions you or replies to your comments",
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ]

  const handlePreferenceChange = (id: string) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSaveChanges = () => {
    // In a real application, you would send these preferences to your backend
    console.log("Saving preferences:", preferences)
    toast({
      title: "Preferences Saved",
      description: "Your email notification preferences have been updated.",
    })
  }

  return (
    <Card className="w-full mt-8 mx-auto">
      <CardHeader>
        <CardTitle>Email Notification Preferences</CardTitle>
        <CardDescription>Choose which emails you&apos;d like to receive</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {notificationOptions.map((option) => (
          <div key={option.id} className="flex items-start space-x-4">
            <Checkbox
              id={option.id}
              checked={preferences[option.id]}
              onCheckedChange={() => handlePreferenceChange(option.id)}
            />
            <div className="flex-1 space-y-1">
              <Label
                htmlFor={option.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center space-x-2"
              >
                {option.icon}
                <span>{option.label}</span>
              </Label>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          You can change these preferences at any time
        </p>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}