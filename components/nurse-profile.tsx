"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Bell, ChevronRight, MoreHorizontal } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import Link from "next/link"
import { getNurseById, generateDefaultNurseData, allNurses, type Nurse } from "../lib/nurse-data"
import { useEffect, useState } from "react"

interface NurseProfileProps {
  nurseId: string
}

export default function NurseProfile({ nurseId }: NurseProfileProps) {
  const [nurse, setNurse] = useState<Nurse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    const fetchNurseData = async () => {
      setLoading(true)

      // Try to get nurse from detailed data first
      let nurseData = getNurseById(nurseId)

      // If not found, try to find in the all nurses list and generate default data
      if (!nurseData) {
        const nurseInfo = allNurses.find((n) => n.id === nurseId)
        if (nurseInfo) {
          nurseData = generateDefaultNurseData(nurseInfo.id, nurseInfo.name, nurseInfo.score, nurseInfo.riskLevel)
        }
      }

      // If still not found, create a fallback
      if (!nurseData) {
        nurseData = generateDefaultNurseData(
          nurseId,
          nurseId
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          75,
          "moderate",
        )
      }

      setNurse(nurseData)
      setLoading(false)
    }

    fetchNurseData()
  }, [nurseId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading nurse profile...</p>
        </div>
      </div>
    )
  }

  if (!nurse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Nurse not found</p>
          <Link href="/" className="text-blue-600 hover:underline mt-2 inline-block">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-900 rounded"></div>
            </div>
            <span className="text-lg font-medium">Emory Healthcare</span>
          </div>

          <h1 className="text-2xl font-semibold">6G Complex Medicine Unit</h1>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>WB</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">William Bodner</div>
                <div className="text-blue-200">Unit Director (EUH 6G)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="bg-blue-900 text-white px-3 py-1 rounded-md font-medium">{nurse.name}</span>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white border-r p-6">
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={nurse.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-xl">
                  {nurse.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold mb-2">{nurse.name}</h2>
              <Badge
                variant={nurse.riskLevel === "high" ? "destructive" : "secondary"}
                className={nurse.riskLevel === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}
              >
                {nurse.riskLevel === "high" ? "High" : "Moderate"} risk: {nurse.score}
              </Badge>
            </div>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Basic information</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm text-gray-600">Role: </span>
                  <span className="font-medium">{nurse.basicInfo.role}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Tenure: </span>
                  <span className="font-medium">{nurse.basicInfo.tenure}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Employment Type: </span>
                  <span className="font-medium">{nurse.basicInfo.employmentType}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Schedule Type: </span>
                  <span className="font-medium">{nurse.basicInfo.scheduleType}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Education: </span>
                  <span className="font-medium">{nurse.basicInfo.education}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Licensure: </span>
                  <span className="font-medium">{nurse.basicInfo.licensure}</span>
                </div>
              </CardContent>
            </Card>

            {/* Financial Impact */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Financial Impact</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Value to Enterprise</div>
                    <div className="text-2xl font-bold">
                      ${nurse.financialImpact.valueToEnterprise.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Retain Multiplier</div>
                    <div className="text-2xl font-bold">{nurse.financialImpact.retainMultiplier}x</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Breakdown by Retention Roles</span>
                    <span className="text-gray-600">Impact</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Committee Lead Contribution</span>
                      <span className="font-medium">{nurse.financialImpact.breakdown.committeeLeadContribution}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Preceptor Contribution</span>
                      <span className="font-medium">{nurse.financialImpact.breakdown.preceptorContribution}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Specialty Contribution</span>
                      <span className="font-medium">{nurse.financialImpact.breakdown.specialtyContribution}x</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Recommendation:</div>
                  <div className="text-sm">{nurse.financialImpact.recommendation}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Risk Analytics */}
            <div className="col-span-2">
              <Tabs defaultValue="risk-analytics" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="risk-analytics">Risk Analytics</TabsTrigger>
                  <TabsTrigger value="turnover">Turnover</TabsTrigger>
                  <TabsTrigger value="burnout">Burnout</TabsTrigger>
                </TabsList>

                <TabsContent value="risk-analytics" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Risk Outcomes */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Outcomes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={nurse.riskAnalytics.riskOutcomes}>
                              <XAxis
                                dataKey="time"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "#6B7280" }}
                              />
                              <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "#6B7280" }}
                                label={{ value: "Predicted Hazard", angle: -90, position: "insideLeft" }}
                              />
                              <Line
                                type="monotone"
                                dataKey="hazard"
                                stroke="#1E40AF"
                                strokeWidth={2}
                                dot={{ fill: "#1E40AF", strokeWidth: 2, r: 4 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-2">Time</div>
                      </CardContent>
                    </Card>

                    {/* Risk Drivers */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Drivers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-end text-sm text-gray-600 mb-4">100%</div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                              <span className="text-sm">Overtime hours</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                              <span className="text-sm">Workload</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                              <span className="text-sm">Patient acuity</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                              <span className="text-sm">Work environment</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-black"></div>
                              <span className="text-sm">Other</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="h-8 bg-gray-200 rounded flex">
                              <div
                                className="bg-blue-900 h-full rounded-l"
                                style={{ width: `${nurse.riskAnalytics.riskDrivers.overtimeHours}%` }}
                              ></div>
                              <div
                                className="bg-blue-400 h-full"
                                style={{ width: `${nurse.riskAnalytics.riskDrivers.workload}%` }}
                              ></div>
                              <div
                                className="bg-blue-200 h-full"
                                style={{ width: `${nurse.riskAnalytics.riskDrivers.patientAcuity}%` }}
                              ></div>
                              <div
                                className="bg-gray-400 h-full"
                                style={{ width: `${nurse.riskAnalytics.riskDrivers.workEnvironment}%` }}
                              ></div>
                              <div
                                className="bg-black h-full rounded-r"
                                style={{ width: `${nurse.riskAnalytics.riskDrivers.other}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* SDOH Insight */}
                  <Card>
                    <CardHeader>
                      <CardTitle>SDOH Insight</CardTitle>
                      <p className="text-sm text-gray-600">
                        External factors influencing {nurse.name.split(" ")[0]}'s risk profile based on CDC Social
                        Vulnerability Index (SVI).
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                          <span>Category</span>
                          <span></span>
                          <span>Score (0-100)</span>
                        </div>
                        {nurse.riskAnalytics.sdohInsights.map((item, index) => (
                          <div key={index} className="grid grid-cols-3 gap-4 items-center">
                            <span className="text-sm">{item.category}</span>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                  className={`h-2 rounded-full ${item.color}`}
                                  style={{ width: `${item.score}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="text-sm font-medium">{item.score}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="turnover">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center text-gray-500">Turnover analytics for {nurse.name} would go here</div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="burnout">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center text-gray-500">Burnout analytics for {nurse.name} would go here</div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <div className="py-[200px] border bg-red-200">hello</div>
              {/* Retention Plan */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Retention Plan</CardTitle>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nurse.retentionPlan.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interventions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Interventions</CardTitle>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nurse.interventions.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
