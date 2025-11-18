import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Shield, FileText, MessageSquare } from "lucide-react"

export function Account() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center">
                    <User className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <Button variant="outline">Change Photo</Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input defaultValue="Citizen" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input defaultValue="User" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" defaultValue="user@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input type="tel" defaultValue="+977 98XXXXXXXX" />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Project Updates</div>
                        <div className="text-sm text-muted-foreground">Get notified when tracked projects are updated</div>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Comments & Replies</div>
                        <div className="text-sm text-muted-foreground">Receive notifications for comments and replies</div>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">News & Updates</div>
                        <div className="text-sm text-muted-foreground">Stay informed about governance news</div>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Manage your privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium mb-1">Anonymous Reporting</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      Your reports are always anonymous. No personal information is collected or stored.
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                      ✓ Active and Protected
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Data Privacy</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    We respect your privacy. Your data is encrypted and only used to provide transparency services.
                  </div>
                  <Button variant="outline">Download My Data</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Account Security</div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Enable Two-Factor Authentication
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>Your recent activity on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-1">Report Submitted</div>
                    <div className="text-sm text-muted-foreground">Corruption report #1234 - 2 days ago</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-1">Project Commented</div>
                    <div className="text-sm text-muted-foreground">Kathmandu-Bhaktapur Road Expansion - 5 days ago</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-1">Photo Uploaded</div>
                    <div className="text-sm text-muted-foreground">Waste Management Initiative - 1 week ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

