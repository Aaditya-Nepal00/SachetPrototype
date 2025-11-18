import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, DollarSign, FileText } from "lucide-react"

const tenders = [
  {
    id: 1,
    title: "Construction of Rural Health Center - Province 2",
    description: "Design, construction, and furnishing of a 20-bed rural health center with modern medical facilities.",
    category: "Infrastructure",
    budget: "Rs. 45M",
    deadline: "2024-04-15",
    status: "open",
    submissions: 12,
  },
  {
    id: 2,
    title: "IT Infrastructure Upgrade for Government Offices",
    description: "Upgrading IT systems and network infrastructure across 50 government offices nationwide.",
    category: "Technology",
    budget: "Rs. 125M",
    deadline: "2024-04-20",
    status: "open",
    submissions: 8,
  },
  {
    id: 3,
    title: "Solar Panel Installation - Mustang Region",
    description: "Installation of 500kW solar panel system across 10 remote villages in Mustang district.",
    category: "Energy",
    budget: "Rs. 85M",
    deadline: "2024-03-30",
    status: "closed",
    submissions: 15,
    awarded: "Green Energy Solutions Pvt. Ltd.",
  },
  {
    id: 4,
    title: "Road Maintenance Equipment Procurement",
    description: "Procurement of road maintenance equipment including graders, compactors, and trucks.",
    category: "Infrastructure",
    budget: "Rs. 200M",
    deadline: "2024-05-01",
    status: "open",
    submissions: 5,
  },
]

export function Tenders() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Active Tenders</h1>
          <p className="text-muted-foreground">
            Government tenders and procurement opportunities
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tenders..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tenders List */}
        <div className="grid grid-cols-1 gap-6">
          {tenders.map((tender) => (
            <Card key={tender.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge>{tender.category}</Badge>
                      <Badge variant={tender.status === "open" ? "success" : "secondary"}>
                        {tender.status.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{tender.title}</CardTitle>
                    <CardDescription>{tender.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Budget</div>
                      <div className="font-semibold">{tender.budget}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Deadline</div>
                      <div className="font-semibold">{new Date(tender.deadline).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Submissions</div>
                      <div className="font-semibold">{tender.submissions}</div>
                    </div>
                  </div>
                </div>
                {tender.status === "closed" && tender.awarded && (
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg mb-4">
                    <div className="text-sm font-medium text-green-700 dark:text-green-300">
                      Awarded to: {tender.awarded}
                    </div>
                  </div>
                )}
                {tender.status === "open" && (
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors">
                      Download Documents
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

