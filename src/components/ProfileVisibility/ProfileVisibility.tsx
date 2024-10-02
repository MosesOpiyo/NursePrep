"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import '../../styles/globals.css'
import { Eye, EyeOff, Globe, Lock, Users } from "lucide-react"

type VisibilitySetting = "public" | "all-members" | "only-me"

interface ProfileSetting {
  id: string
  label: string
  description: string
  value: VisibilitySetting
}

export default function ProfileVisibilitySettings() {
  const [settings, setSettings] = useState<ProfileSetting[]>([
    {
      id: "last-name",
      label: "Last Name",
      description: "Control who can see your last name",
      value: "all-members",
    },
    {
      id: "college-name",
      label: "College Name",
      description: "Control who can see your college information",
      value: "public",
    },
    {
      id: "disable-quiz-timer",
      label: "Disable Quiz Timer",
      description: "Control who can see that you've disabled the quiz timer",
      value: "only-me",
    },
    {
      id: "email",
      label: "Email Address",
      description: "Control who can see your email address",
      value: "only-me",
    },
    {
      id: "birth-date",
      label: "Birth Date",
      description: "Control who can see your birth date",
      value: "all-members",
    },
    {
      id: "social-links",
      label: "Social Media Links",
      description: "Control who can see your social media links",
      value: "public",
    },
  ])

  const handleSettingChange = (id: string, value: VisibilitySetting) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, value } : setting
      )
    )
  }

  const handleSaveChanges = () => {
    // In a real application, you would send these settings to your backend
    console.log("Saving visibility settings:", settings)
    toast({
      title: "Settings Saved",
      description: "Your profile visibility settings have been updated.",
    })
  }

  return (
    <Card className="w-full-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Profile Visibility Settings</CardTitle>
        <CardDescription>Control who can see your profile information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Always Public</h3>
          <p className="text-sm text-muted-foreground">These details are always visible to everyone</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">First Name</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Username</span>
            </div>
          </div>
        </div>
        <Separator />
        {settings.map((setting) => (
          <div key={setting.id} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <Label htmlFor={setting.id} className="text-base">
                  {setting.label}
                </Label>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <Select
                value={setting.value}
                onValueChange={(value: VisibilitySetting) => handleSettingChange(setting.id, value)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Public
                    </div>
                  </SelectItem>
                  <SelectItem value="all-members">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      All Members
                    </div>
                  </SelectItem>
                  <SelectItem value="only-me">
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-2" />
                      Only Me
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveChanges} className="ml-auto">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}