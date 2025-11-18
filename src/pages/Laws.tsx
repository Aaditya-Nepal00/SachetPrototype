import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, BookOpen, FileText, HelpCircle } from "lucide-react"

const laws = [
  {
    id: 1,
    title: "Public Procurement Act, 2063",
    titleNepali: "सार्वजनिक खरिद ऐन, २०६३",
    category: "Procurement",
    summary: "Regulates government procurement processes, ensuring transparency and fair competition in public sector purchasing.",
    summaryNepali: "सरकारी खरिद प्रक्रियाहरू नियमन गर्दछ, सार्वजनिक क्षेत्रको खरिदमा पारदर्शिता र निष्पक्ष प्रतिस्पर्धा सुनिश्चित गर्दछ।",
    examples: [
      "All tenders must be published publicly",
      "Bidding process must be open and transparent",
      "Contract awards must be justified",
    ],
    relatedLaws: ["Right to Information Act", "Anti-Corruption Act"],
    faq: [
      {
        q: "What is the minimum threshold for open bidding?",
        a: "Projects above Rs. 5 million must go through open bidding process.",
      },
    ],
  },
  {
    id: 2,
    title: "Right to Information Act, 2064",
    titleNepali: "सूचनाको हक ऐन, २०६४",
    category: "Transparency",
    summary: "Grants citizens the right to access government information, promoting transparency and accountability.",
    summaryNepali: "नागरिकहरूलाई सरकारी सूचनामा पहुँचको हक दिन्छ, पारदर्शिता र जवाफदेहिता बढाउँछ।",
    examples: [
      "Request project documents",
      "Access budget information",
      "Review meeting minutes",
    ],
    relatedLaws: ["Public Procurement Act", "Good Governance Act"],
    faq: [
      {
        q: "How long does the government have to respond?",
        a: "Information must be provided within 15 days of the request.",
      },
    ],
  },
  {
    id: 3,
    title: "Anti-Corruption Act, 2059",
    titleNepali: "भ्रष्टाचार निवारण ऐन, २०५९",
    category: "Anti-Corruption",
    summary: "Defines corruption offenses and establishes penalties, strengthening anti-corruption measures.",
    summaryNepali: "भ्रष्टाचार अपराधहरू परिभाषित गर्दछ र सजायहरू स्थापना गर्दछ, भ्रष्टाचार निवारण उपायहरू मजबूत बनाउँछ।",
    examples: [
      "Bribery is punishable by up to 5 years",
      "Embezzlement requires full restitution",
      "Whistleblowers are protected",
    ],
    relatedLaws: ["Public Procurement Act", "Right to Information Act"],
    faq: [
      {
        q: "How can I report corruption anonymously?",
        a: "You can use this platform's anonymous reporting feature to submit reports safely.",
      },
    ],
  },
]

export function Laws() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedLaw, setSelectedLaw] = useState<typeof laws[0] | null>(null)
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const filteredLaws = laws.filter((law) => {
    const matchesSearch = language === "en" 
      ? law.title.toLowerCase().includes(searchTerm.toLowerCase()) || law.summary.toLowerCase().includes(searchTerm.toLowerCase())
      : law.titleNepali.includes(searchTerm) || law.summaryNepali.includes(searchTerm)
    const matchesCategory = categoryFilter === "all" || law.category.toLowerCase() === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...Array.from(new Set(laws.map(l => l.category.toLowerCase())))]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Simplified Nepali Laws</h1>
            <p className="text-muted-foreground">
              Easy-to-understand summaries of key governance laws
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={language === "en" ? "default" : "outline"}
              onClick={() => setLanguage("en")}
              size="sm"
            >
              English
            </Button>
            <Button
              variant={language === "ne" ? "default" : "outline"}
              onClick={() => setLanguage("ne")}
              size="sm"
            >
              नेपाली
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={language === "en" ? "Search laws..." : "कानुन खोज्नुहोस्..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.filter(c => c !== "all").map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Law Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLaws.map((law) => (
            <Card
              key={law.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedLaw(law)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <Badge>{law.category}</Badge>
                </div>
                <CardTitle className="text-lg">
                  {language === "en" ? law.title : law.titleNepali}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {language === "en" ? law.summary : law.summaryNepali}
                </CardDescription>
                <Button variant="ghost" className="mt-4 w-full">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Law Detail Dialog */}
        {selectedLaw && (
          <Dialog open={!!selectedLaw} onOpenChange={() => setSelectedLaw(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {language === "en" ? selectedLaw.title : selectedLaw.titleNepali}
                </DialogTitle>
                <DialogDescription>
                  <Badge>{selectedLaw.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="summary" className="mt-4">
                <TabsList>
                  <TabsTrigger value="summary">
                    {language === "en" ? "Summary" : "सारांश"}
                  </TabsTrigger>
                  <TabsTrigger value="examples">
                    {language === "en" ? "Examples" : "उदाहरणहरू"}
                  </TabsTrigger>
                  <TabsTrigger value="related">
                    {language === "en" ? "Related Laws" : "सम्बन्धित कानुनहरू"}
                  </TabsTrigger>
                  <TabsTrigger value="faq">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    FAQ
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">AI Summary</h3>
                      <p className="text-muted-foreground">
                        {language === "en" ? selectedLaw.summary : selectedLaw.summaryNepali}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="mt-4">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-semibold mb-4">Key Examples</h3>
                      {selectedLaw.examples.map((example, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <FileText className="h-5 w-5 text-primary mt-0.5" />
                          <p>{example}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="related" className="mt-4">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-semibold mb-4">Related Laws</h3>
                      {selectedLaw.relatedLaws.map((related, index) => (
                        <div key={index} className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                          {related}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faq" className="mt-4">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                      {selectedLaw.faq.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="font-medium text-primary">Q: {item.q}</h4>
                          <p className="text-muted-foreground pl-4">A: {item.a}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}

