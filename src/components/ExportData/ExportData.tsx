"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import { Download, Mail, ShieldCheck, Clock } from "lucide-react"
import '../../styles/globals.css'

export default function ExportDataTab() {
  const [requestStatus, setRequestStatus] = useState<"idle" | "pending" | "approved" | "rejected">("idle")

  const handleExportRequest = () => {
    // In a real application, you would send this request to your backend
    console.log("Requesting data export")
    setRequestStatus("pending")
    toast({
      title: "Export Request Submitted",
      description: "We've received your request. Please check your email for verification.",
    })
  }

  return (
    <Card className="w-full mt-8 mx-auto">
      <CardHeader>
        <CardTitle>Export Your Data</CardTitle>
        <CardDescription>Request a copy of all the data you&apos;ve created on our platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Export Process</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li className="flex items-start">
              <span className="mr-2">
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <Download className="h-4 w-4" />
                </Button>
              </span>
              <span>Click the &quot;Request Data Export&quot; button below to start the process.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <Mail className="h-4 w-4" />
                </Button>
              </span>
              <span>We&apos;ll send you an email to verify your request. Please check your inbox and follow the instructions.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <ShieldCheck className="h-4 w-4" />
                </Button>
              </span>
              <span>Our admin team will review your request to ensure data privacy and security.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <Mail className="h-4 w-4" />
                </Button>
              </span>
              <span>If approved, we&apos;ll generate a zip file containing your data and email it to you.</span>
            </li>
          </ol>
        </div>
        
        {requestStatus === "idle" && (
          <Alert>
            <Clock className="h-4 w-4" />
            <AlertTitle>No Active Request</AlertTitle>
            <AlertDescription>
              You haven&apos;t requested a data export yet. Use the button below to start the process.
            </AlertDescription>
          </Alert>
        )}

        {requestStatus === "pending" && (
          <Alert>
            <Clock className="h-4 w-4" />
            <AlertTitle>Request Pending</AlertTitle>
            <AlertDescription>
              Your data export request is being processed. Please check your email for updates.
            </AlertDescription>
          </Alert>
        )}

        {requestStatus === "approved" && (
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Request Approved</AlertTitle>
            <AlertDescription>
              Your data export has been approved. You should receive an email with the download link soon.
            </AlertDescription>
          </Alert>
        )}

        {requestStatus === "rejected" && (
          <Alert variant="destructive">
            <AlertTitle>Request Rejected</AlertTitle>
            <AlertDescription>
              Your data export request has been rejected. Please contact support for more information.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleExportRequest} 
          disabled={requestStatus !== "idle"}
          className="w-full"
        >
          Request Data Export
        </Button>
      </CardFooter>
    </Card>
  )
}