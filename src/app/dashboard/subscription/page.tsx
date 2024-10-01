"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download } from "lucide-react"
import { FaCcPaypal, FaCcVisa } from "react-icons/fa6";
import './page.css'
import '../../../styles/globals.css'

export default function BillingSubscriptionTab() {
  const [currentPlan, setCurrentPlan] = useState("Monthly")
  const [paymentMethod, setPaymentMethod] = useState("Visa")

  const planDetails = {
    type: currentPlan,
    cost: "$29.99",
    expiry: "July 31, 2024",
    created: "August 1, 2023",
    nextBilling: "August 1, 2024",
  }

  const invoices = [
    { date: "2023-07-01", status: "Paid", amount: "$29.99", plan: "Monthly", paymentMethod: "Visa", invoiceNumber: "INV-001" },
    { date: "2023-06-01", status: "Paid", amount: "$29.99", plan: "Monthly", paymentMethod: "Visa", invoiceNumber: "INV-002" },
    { date: "2023-05-01", status: "Paid", amount: "$29.99", plan: "Monthly", paymentMethod: "Visa", invoiceNumber: "INV-003" },
  ]

  const handleUpgrade = () => {
    // Implement upgrade logic
    console.log("Upgrading plan")
  }

  const handleCancel = () => {
    // Implement cancellation logic
    console.log("Cancelling plan")
  }

  const handleChangePaymentMethod = () => {
    // Implement change payment method logic
    console.log("Changing payment method")
  }

  const handleDownloadInvoice = (invoiceNumber: string) => {
    // Implement download logic for a single invoice
    console.log(`Downloading invoice ${invoiceNumber}`)
  }

  const handleDownloadAllInvoices = () => {
    // Implement download all invoices logic
    console.log("Downloading all invoices")
  }

  return (
    <div className="container mx-auto space-y-8">
      <Card className="subscription-header shadow-none border-none p-8 flex flex-col gap-2">
        <CardTitle className="text-5xl font-normal mb-6">Subscription & Billing</CardTitle>
        <CardDescription>Manage your subscription and billing details here. Stay updated on your current plan, view payment history, and easily update your payment methods.</CardDescription>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Plan Details</CardTitle>
          <CardDescription>
            Your current plan and billing information
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Plan Type:</span>
            <Badge variant="secondary">{planDetails.type}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Plan Cost:</span>
            <span>{planDetails.cost} / month</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Subscription:</span>
            <span>Enabled</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Active:</span>
            <Badge variant="secondary">Yes</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Expiry Date:</span>
            <span>{planDetails.expiry}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Created On:</span>
            <span>{planDetails.created}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Next Billing Date:</span>
            <span>{planDetails.nextBilling}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancel Plan
          </Button>
          <Button onClick={handleUpgrade}>Upgrade Plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Your current payment method on file</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            {paymentMethod === "Visa" ? (
              <FaCcVisa className="h-6 w-6" />
            ) : (
              <FaCcPaypal className="h-6 w-6" />
            )}
            <div>
              <p className="font-semibold">{paymentMethod}</p>
              <p className="text-sm text-gray-500">
                {paymentMethod === "Visa"
                  ? "Ending in 1234"
                  : "example@email.com"}
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Expiry: 12/2025</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={handleChangePaymentMethod}>
            Change Payment Method
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>
            Your billing history and invoice downloads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoiceNumber}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid" ? "secondary" : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.plan}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>{invoice.invoiceNumber}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleDownloadInvoice(invoice.invoiceNumber)
                      }
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleDownloadAllInvoices}>
            <Download className="h-4 w-4 mr-2" />
            Download All Invoices
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}