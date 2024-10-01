"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import '../../styles/globals.css'

export default function LoginInfoTab() {
  const [username, setUsername] = useState("johndoe")
  const [email, setEmail] = useState("johndoe@example.com")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleUpdateUsername = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this update to your backend
    console.log("Updating username to:", username)
    toast({
      title: "Username Updated",
      description: "Your username has been successfully updated.",
    })
  }

  const handleUpdateEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPassword) {
      toast({
        title: "Error",
        description: "Current password is required to update email.",
        variant: "destructive",
      })
      return
    }
    // In a real application, you would verify the current password and send this update to your backend
    console.log("Updating email to:", email)
    toast({
      title: "Email Updated",
      description: "Your email has been successfully updated.",
    })
    setCurrentPassword("")
  }

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPassword) {
      toast({
        title: "Error",
        description: "Current password is required to update password.",
        variant: "destructive",
      })
      return
    }
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirm password do not match.",
        variant: "destructive",
      })
      return
    }
    // In a real application, you would verify the current password and send this update to your backend
    console.log("Updating password")
    toast({
      title: "Password Updated",
      description: "Your password has been successfully updated.",
    })
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="space-y-6 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Login Information</CardTitle>
          <CardDescription>Manage your account login details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleUpdateUsername} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <User className="h-5 w-5" />
                </span>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="rounded-l-none"
                />
              </div>
            </div>
            <Button type="submit">Update Username</Button>
          </form>

          <Separator />

          <form onSubmit={handleUpdateEmail} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Mail className="h-5 w-5" />
                </span>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="rounded-l-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-password-email">Current Password (required to update email)</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Lock className="h-5 w-5" />
                </span>
                <Input
                  id="current-password-email"
                  type={showPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                  className="rounded-l-none"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={toggleShowPassword}
                  className="ml-2"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit">Update Email</Button>
          </form>

          <Separator />

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Lock className="h-5 w-5" />
                </span>
                <Input
                  id="current-password"
                  type={showPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                  className="rounded-l-none"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={toggleShowPassword}
                  className="ml-2"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <Button type="submit">Update Password</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link" className="px-0">
            Lost your password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}