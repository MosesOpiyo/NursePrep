'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Globe, Lock, Users } from "lucide-react"
import EditableProfilePic from "../EditableProfilePic/EditableProfilePic"
import EditableCoverImage from "../EditableCoverImg/EditableCoverImg"

type Visibility = 'public' | 'members' | 'private'

interface ProfileState {
  firstName: string
  lastName: string
  username: string
  joinDate: string
  onlineStatus: string
  coverImage: string
  profileImage: string
  lastNameVisibility: Visibility
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileState>({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    joinDate: "January 2023",
    onlineStatus: "online",
    coverImage: "/dosage-large.jpg",
    profileImage: "https://github.com/shadcn.png",
    lastNameVisibility: 'private'
  })

  const [editProfile, setEditProfile] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    username: profile.username,
    lastNameVisibility: profile.lastNameVisibility
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value })
  }

  const handleStatusChange = (value: string) => {
    setProfile({ ...profile, onlineStatus: value })
  }

  const handleLastNameVisibilityChange = (value: Visibility) => {
    setEditProfile({ ...editProfile, lastNameVisibility: value })
  }

  const handleSaveChanges = () => {
    setProfile({ ...profile, ...editProfile })
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    })
  }

  const handleCoverImageChange = (image: string) => {
    setProfile(prevProfile => ({ ...prevProfile, coverImage: image }))
  }

  const handleProfileImageChange = (image: string) => {
    setProfile(prevProfile => ({ ...prevProfile, profileImage: image }))
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <Card className="w-full">
        <CardContent className="p-0">
          <EditableCoverImage
            onImageChange={handleCoverImageChange}
            initialImage={profile.coverImage}
          />
          <div className="px-6 pb-6">
            <div className="flex items-end -mt-12 mb-4">
              <EditableProfilePic onImageChange={handleProfileImageChange} initialImage={profile.profileImage} />
              <div className="ml-4 flex-grow">
                <h2 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h2>
                <p className="text-muted-foreground">@{profile.username}</p>
              </div>
              <Select value={profile.onlineStatus} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Set status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                  <SelectItem value="away">Away</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Joined {profile.joinDate}</span>
              <span className="flex items-center">
                {profile.onlineStatus === 'online' && <span className="h-2 w-2 rounded-full bg-green-500 mr-1" />}
                {profile.onlineStatus === 'offline' && <span className="h-2 w-2 rounded-full bg-gray-500 mr-1" />}
                {profile.onlineStatus === 'away' && <span className="h-2 w-2 rounded-full bg-red-500 mr-1" />}
                {profile.onlineStatus === 'online' ? 'Online now' : profile.onlineStatus === 'offline' ? 'Last seen recently' : 'Away'}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Make changes to your profile here. Click save when you&apos;re done.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={editProfile.firstName}
              onChange={handleProfileChange}
            />
            <p className="text-sm text-muted-foreground flex items-center">
              <Globe className="h-4 w-4 mr-1" /> Publicly visible
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <div className="flex space-x-2">
              <Input
                id="lastName"
                name="lastName"
                value={editProfile.lastName}
                onChange={handleProfileChange}
              />
              <Select value={editProfile.lastNameVisibility} onValueChange={handleLastNameVisibilityChange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Public
                    </div>
                  </SelectItem>
                  <SelectItem value="members">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      All Members
                    </div>
                  </SelectItem>
                  <SelectItem value="private">
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-2" />
                      Only Me
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={editProfile.username}
              onChange={handleProfileChange}
            />
            <p className="text-sm text-muted-foreground flex items-center">
              <Globe className="h-4 w-4 mr-1" /> Publicly visible
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}