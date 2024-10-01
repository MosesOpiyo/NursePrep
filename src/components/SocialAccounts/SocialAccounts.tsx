"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { Link2, Unlink } from "lucide-react"
import React from "react"

interface SocialAccount {
  id: string
  name: string
  icon: React.ReactNode
  isLinked: boolean
}

export default function SocialAccountsTab() {
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([
    {
      id: "facebook",
      name: "Facebook",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      isLinked: false,
    },
    {
      id: "google",
      name: "Google",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
        </svg>
      ),
      isLinked: true,
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      isLinked: false,
    },
    {
      id: "github",
      name: "GitHub",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      isLinked: true,
    },
  ])

  const handleLinkAccount = (id: string) => {
    // In a real application, you would initiate the OAuth flow here
    console.log(`Linking account: ${id}`)
    setSocialAccounts(accounts =>
      accounts.map(account =>
        account.id === id ? { ...account, isLinked: true } : account
      )
    )
    toast({
      title: "Account Linked",
      description: `Your ${id} account has been successfully linked.`,
    })
  }

  const handleUnlinkAccount = (id: string) => {
    // In a real application, you would send a request to your backend to unlink the account
    console.log(`Unlinking account: ${id}`)
    setSocialAccounts(accounts =>
      accounts.map(account =>
        account.id === id ? { ...account, isLinked: false } : account
      )
    )
    toast({
      title: "Account Unlinked",
      description: `Your ${id} account has been successfully unlinked.`,
    })
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Social Accounts</CardTitle>
        <CardDescription>Link your social media accounts for easier login and sharing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {socialAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  {account.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{account.name}</h3>
                  <p className="text-sm text-gray-500">
                    {account.isLinked ? "Connected" : "Not connected"}
                  </p>
                </div>
              </div>
              <Button
                variant={account.isLinked ? "destructive" : "default"}
                onClick={() => account.isLinked ? handleUnlinkAccount(account.id) : handleLinkAccount(account.id)}
              >
                {account.isLinked ? (
                  <>
                    <Unlink className="mr-2 h-4 w-4" />
                    Unlink
                  </>
                ) : (
                  <>
                    <Link2 className="mr-2 h-4 w-4" />
                    Link
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}