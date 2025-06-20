"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Bell, ChevronRight, Plus, MoreHorizontal } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import Link from "next/link"

const supplyDemandData = [
  { day: 1, supply: 750, demand: 800 },
  { day: 2, supply: 780, demand: 820 },
  { day: 3, supply: 820, demand: 850 },
  { day: 4, supply: 800, demand: 900 },
  { day: 5, supply: 850, demand: 920 },
  { day: 6, supply: 900, demand: 950 },
  { day: 7, supply: 920, demand: 980 },
  { day: 8, supply: 880, demand: 940 },
  { day: 9, supply: 860, demand: 920 },
  { day: 10, supply: 900, demand: 960 },
  { day: 11, supply: 920, demand: 980 },
  { day: 12, supply: 940, demand: 1000 },
  { day: 13, supply: 960, demand: 1020 },
  { day: 14, supply: 980, demand: 1000 },
  { day: 15, supply: 1000, demand: 980 },
  { day: 16, supply: 1020, demand: 960 },
  { day: 17, supply: 1000, demand: 940 },
  { day: 18, supply: 980, demand: 920 },
  { day: 19, supply: 960, demand: 900 },
  { day: 20, supply: 940, demand: 880 },
  { day: 21, supply: 920, demand: 860 },
  { day: 22, supply: 900, demand: 840 },
  { day: 23, supply: 880, demand: 820 },
  { day: 24, supply: 860, demand: 800 },
  { day: 25, supply: 880, demand: 820 },
  { day: 26, supply: 900, demand: 840 },
  { day: 27, supply: 920, demand: 860 },
  { day: 28, supply: 940, demand: 880 },
  { day: 29, supply: 960, demand: 900 },
  { day: 30, supply: 980, demand: 920 },
]

const turnoverData = [
  { month: "Jan", rate: 10 },
  { month: "Feb", rate: 15 },
  { month: "Mar", rate: 20 },
  { month: "Apr", rate: 18 },
  { month: "May", rate: 22 },
  { month: "Jun", rate: 24 },
  { month: "Jul", rate: 23 },
  { month: "Aug", rate: 21 },
  { month: "Sep", rate: 20 },
  { month: "Oct", rate: 22 },
  { month: "Nov", rate: 24 },
  { month: "Dec", rate: 25 },
]

const highRiskNurses = [
  { name: "Jane Doe", score: 95, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Lana Steiner", score: 92, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Jessica Brown", score: 90, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Emily Davis", score: 88, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Karen White", score: 86, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Phoenix Baker", score: 86, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Demi Wilkinson", score: 83, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Candice Wu", score: 82, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Natali Craig", score: 81, avatar: "/placeholder.svg?height=32&width=32" },
]

const moderateRiskNurses = [
  { name: "Jane Doe", score: 79, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Lana Steiner", score: 75, avatar: "/placeholder.svg?height=32&width=32" },
]

export default function Component() {
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Nurses</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">High risk</h3>
                  <div className="space-y-2">
                    {highRiskNurses.map((nurse, index) => (
                      <Link
                        key={index}
                        href={`/nurse/${nurse.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={nurse.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {nurse.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{nurse.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-100">
                            {nurse.score}
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Moderate risk</h3>
                  <div className="space-y-2">
                    {moderateRiskNurses.map((nurse, index) => (
                      <Link
                        key={index}
                        href={`/nurse/${nurse.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={nurse.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {nurse.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{nurse.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                            {nurse.score}
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Workforce Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Workforce Overview</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
                    30 day
                  </Button>
                  <Button variant="outline" size="sm">
                    3 months
                  </Button>
                  <Button variant="outline" size="sm">
                    12 months
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Custom
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1"># of Nurses</div>
                      <div className="text-3xl font-bold">62</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">External Contractors</div>
                      <div className="text-3xl font-bold">12</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">FTE Count</div>
                      <div className="text-3xl font-bold">56</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">External Contract Hours</div>
                      <div className="text-3xl font-bold">645</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1"># Hours Worked (Monthly)</div>
                      <div className="text-3xl font-bold">8,736</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1"># on Leave</div>
                      <div className="text-3xl font-bold">3</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Overtime Hours</div>
                      <div className="text-3xl font-bold">743</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Supply/Demand Ratio</div>
                      <div className="text-3xl font-bold">0.97</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Supply and Demand</h3>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600">Supply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-gray-600">Demand</span>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={supplyDemandData}>
                        <XAxis
                          dataKey="day"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                          domain={[500, 1100]}
                        />
                        <Line type="monotone" dataKey="supply" stroke="#3B82F6" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="demand" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">Days</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turnover Analytics */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Turnover Analytics</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
                    30 day
                  </Button>
                  <Button variant="outline" size="sm">
                    3 months
                  </Button>
                  <Button variant="outline" size="sm">
                    12 months
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Custom
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1"># of Nurses at risk</div>
                      <div className="text-3xl font-bold">9</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Time to fill (weeks)</div>
                      <div className="text-3xl font-bold">15</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Turnover rate</div>
                      <div className="text-3xl font-bold">24.6%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Average vacancy duration (weeks)</div>
                      <div className="text-3xl font-bold">23</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Average tenure on exit</div>
                      <div className="text-3xl font-bold">1.4 Years</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Acuity-adjusted turnover rate</div>
                      <div className="text-3xl font-bold">22.2%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Turnover breakdown</div>
                      <div className="text-3xl font-bold">
                        84% <span className="text-base font-normal text-gray-600">Voluntary</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Turnover rate</h3>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={turnoverData}>
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                          domain={[0, 30]}
                        />
                        <Line type="monotone" dataKey="rate" stroke="#3B82F6" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">Month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
