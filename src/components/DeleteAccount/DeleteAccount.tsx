"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import '../../styles/globals.css'
import { AlertTriangle, Trash2, ExternalLink } from "lucide-react"

export default function DeleteAccountTab() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleDeleteAccount = () => {
    if (!isConfirmed) {
      toast({
        title: "Confirmation Required",
        description: "Please confirm that you have read and understood the warnings before deleting your account.",
        variant: "destructive",
      })
      return
    }

    // In a real application, you would send a request to your backend to delete the account
    console.log("Deleting account")
    toast({
      title: "Account Deletion Initiated",
      description: "Your account deletion request has been received. You will receive a confirmation email shortly.",
    })
  }

  return (
    <Card className="w-full mt-8 mx-auto">
      <CardHeader>
        <CardTitle className="text-destructive">Delete Your Account</CardTitle>
        <CardDescription>Permanently remove your account and all associated data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning: This action is irreversible</AlertTitle>
          <AlertDescription>
            Deleting your account will permanently remove all your data from our systems. This action cannot be undone.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Before you delete your account:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Cancel any active subscriptions from the{" "}
              <Link href="/dashboard/subscriptions" className="text-primary hover:underline inline-flex items-center">
                subscriptions page
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </li>
            <li>Download any data you wish to keep, as it will be completely irrecoverable after deletion</li>
            <li>Understand that all content you have created will be permanently deleted</li>
            <li>Consider the impact on any collaborative projects or shared resources</li>
          </ul>
        </div>

        <Alert>
          <AlertTitle>What happens when you delete your account:</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside space-y-1">
              <li>All your personal information will be removed from our systems</li>
              <li>Your username and email will become available for use by others</li>
              <li>You will lose access to all services and features tied to your account</li>
              <li>Any content you&apos;ve posted in public forums may remain, but will be anonymized</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="confirm" 
            checked={isConfirmed} 
            onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
          />
          <label
            htmlFor="confirm"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and understood the warnings above, and I want to proceed with deleting my account.
          </label>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="destructive" 
          onClick={handleDeleteAccount} 
          disabled={!isConfirmed}
          className="w-full"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete My Account
        </Button>
      </CardFooter>
    </Card>
  )
}