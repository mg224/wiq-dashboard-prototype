"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Bell, ChevronRight, MoreHorizontal } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import Link from "next/link"

const riskOutcomesData = [
  { time: 0, hazard: 0.2 },
  { time: 1, hazard: 0.25 },
  { time: 2, hazard: 0.3 },
  { time: 3, hazard: 0.28 },
  { time: 4, hazard: 0.32 },
  { time: 5, hazard: 0.35 },
  { time: 6, hazard: 0.4 },
  { time: 7, hazard: 0.38 },
  { time: 8, hazard: 0.42 },
  { time: 9, hazard: 0.45 },
  { time: 10, hazard: 0.48 },
  { time: 11, hazard: 0.52 },
  { time: 12, hazard: 0.55 },
  { time: 13, hazard: 0.58 },
  { time: 14, hazard: 0.62 },
  { time: 15, hazard: 0.65 },
  { time: 16, hazard: 0.68 },
  { time: 17, hazard: 0.72 },
  { time: 18, hazard: 0.75 },
  { time: 19, hazard: 0.78 },
  { time: 20, hazard: 0.82 },
]

const sdohData = [
  { category: "Socioeconomic", score: 70, color: "bg-orange-400" },
  { category: "Household Composition and Disability", score: 92, color: "bg-red-500" },
  { category: "Minority Status and Language", score: 65, color: "bg-orange-400" },
  { category: "Housing Type and Transportation", score: 97, color: "bg-red-500" },
]

interface NurseProfileProps {
  nurseId?: string
}

export default function NurseProfile({ nurseId = "jane-doe" }: NurseProfileProps) {
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
          <span className="bg-blue-900 text-white px-3 py-1 rounded-md font-medium">Jane Doe</span>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white border-r p-6">
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold mb-2">Jane Doe</h2>
              <Badge variant="destructive" className="bg-red-100 text-red-700">
                High risk: 95
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
                  <span className="font-medium">Nurse</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Tenure: </span>
                  <span className="font-medium">5 years</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Employment Type: </span>
                  <span className="font-medium">Full-Time</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Schedule Type: </span>
                  <span className="font-medium">Rotating Shifts</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Education: </span>
                  <span className="font-medium">BSN, CCRN</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Licensure: </span>
                  <span className="font-medium">Active RN License (State GA)</span>
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
                    <div className="text-2xl font-bold">$144,934</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Retain Multiplier</div>
                    <div className="text-2xl font-bold">1.90x</div>
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
                      <span className="font-medium">1.30x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Preceptor Contribution</span>
                      <span className="font-medium">1.45x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">CRRT/ECMO Specialty</span>
                      <span className="font-medium">1.15x</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Recommendation:</div>
                  <div className="text-sm">Proactive retention to avoid financial loss.</div>
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
                            <LineChart data={riskOutcomesData}>
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
                              <div className="bg-blue-900 h-full rounded-l" style={{ width: "40%" }}></div>
                              <div className="bg-blue-400 h-full" style={{ width: "25%" }}></div>
                              <div className="bg-blue-200 h-full" style={{ width: "20%" }}></div>
                              <div className="bg-gray-400 h-full" style={{ width: "10%" }}></div>
                              <div className="bg-black h-full rounded-r" style={{ width: "5%" }}></div>
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
                        External factors influencing Jane's risk profile based on CDC Social Vulnerability Index (SVI).
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                          <span>Category</span>
                          <span></span>
                          <span>Score (0-100)</span>
                        </div>
                        {sdohData.map((item, index) => (
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
                      <div className="text-center text-gray-500">Turnover analytics content would go here</div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="burnout">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center text-gray-500">Burnout analytics content would go here</div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
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
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">1.</span>
                      <span className="text-sm">Flexible shift scheduling</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">2.</span>
                      <span className="text-sm">Competitive compensation and bonuses</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">3.</span>
                      <span className="text-sm">Mental health and wellness support</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">4.</span>
                      <span className="text-sm">Work-life balance initiatives</span>
                    </div>
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
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">1.</span>
                      <span className="text-sm">Workload and recognition conversation</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">2.</span>
                      <span className="text-sm">Childcare Support</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">3.</span>
                      <span className="text-sm">Transportation Support</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">4.</span>
                      <span className="text-sm">Shift Redistribution Using Software Insights</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm font-medium">5.</span>
                      <span className="text-sm">Schedule Adjustments to Prioritize Rest</span>
                    </div>
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
