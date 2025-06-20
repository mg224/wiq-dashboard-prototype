export interface Nurse {
  id: string
  name: string
  score: number
  riskLevel: "high" | "moderate" | "low"
  avatar: string
  basicInfo: {
    role: string
    tenure: string
    employmentType: string
    scheduleType: string
    education: string
    licensure: string
  }
  financialImpact: {
    valueToEnterprise: number
    retainMultiplier: number
    breakdown: {
      committeeLeadContribution: number
      preceptorContribution: number
      specialtyContribution: number
    }
    recommendation: string
  }
  riskAnalytics: {
    riskOutcomes: Array<{ time: number; hazard: number }>
    riskDrivers: {
      overtimeHours: number
      workload: number
      patientAcuity: number
      workEnvironment: number
      other: number
    }
    sdohInsights: Array<{
      category: string
      score: number
      color: string
    }>
  }
  retentionPlan: string[]
  interventions: string[]
}

// Mock data for different nurses
export const nursesData: Record<string, Nurse> = {
  "jane-doe": {
    id: "jane-doe",
    name: "Jane Doe",
    score: 95,
    riskLevel: "high",
    avatar: "/placeholder.svg?height=80&width=80",
    basicInfo: {
      role: "Nurse",
      tenure: "5 years",
      employmentType: "Full-Time",
      scheduleType: "Rotating Shifts",
      education: "BSN, CCRN",
      licensure: "Active RN License (State GA)",
    },
    financialImpact: {
      valueToEnterprise: 144934,
      retainMultiplier: 1.9,
      breakdown: {
        committeeLeadContribution: 1.3,
        preceptorContribution: 1.45,
        specialtyContribution: 1.15,
      },
      recommendation: "Proactive retention to avoid financial loss.",
    },
    riskAnalytics: {
      riskOutcomes: [
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
      ],
      riskDrivers: {
        overtimeHours: 40,
        workload: 25,
        patientAcuity: 20,
        workEnvironment: 10,
        other: 5,
      },
      sdohInsights: [
        { category: "Socioeconomic", score: 70, color: "bg-orange-400" },
        { category: "Household Composition and Disability", score: 92, color: "bg-red-500" },
        { category: "Minority Status and Language", score: 65, color: "bg-orange-400" },
        { category: "Housing Type and Transportation", score: 97, color: "bg-red-500" },
      ],
    },
    retentionPlan: [
      "Flexible shift scheduling",
      "Competitive compensation and bonuses",
      "Mental health and wellness support",
      "Work-life balance initiatives",
    ],
    interventions: [
      "Workload and recognition conversation",
      "Childcare Support",
      "Transportation Support",
      "Shift Redistribution Using Software Insights",
      "Schedule Adjustments to Prioritize Rest",
    ],
  },
  "lana-steiner": {
    id: "lana-steiner",
    name: "Lana Steiner",
    score: 92,
    riskLevel: "high",
    avatar: "/placeholder.svg?height=80&width=80",
    basicInfo: {
      role: "Senior Nurse",
      tenure: "8 years",
      employmentType: "Full-Time",
      scheduleType: "Day Shifts",
      education: "MSN, CCRN, CEN",
      licensure: "Active RN License (State GA)",
    },
    financialImpact: {
      valueToEnterprise: 167500,
      retainMultiplier: 2.1,
      breakdown: {
        committeeLeadContribution: 1.5,
        preceptorContribution: 1.6,
        specialtyContribution: 1.25,
      },
      recommendation: "High-value employee requiring immediate retention focus.",
    },
    riskAnalytics: {
      riskOutcomes: [
        { time: 0, hazard: 0.15 },
        { time: 1, hazard: 0.22 },
        { time: 2, hazard: 0.28 },
        { time: 3, hazard: 0.35 },
        { time: 4, hazard: 0.42 },
        { time: 5, hazard: 0.48 },
        { time: 6, hazard: 0.55 },
        { time: 7, hazard: 0.62 },
        { time: 8, hazard: 0.68 },
        { time: 9, hazard: 0.72 },
        { time: 10, hazard: 0.75 },
        { time: 11, hazard: 0.78 },
        { time: 12, hazard: 0.8 },
        { time: 13, hazard: 0.82 },
        { time: 14, hazard: 0.85 },
        { time: 15, hazard: 0.87 },
        { time: 16, hazard: 0.88 },
        { time: 17, hazard: 0.9 },
        { time: 18, hazard: 0.91 },
        { time: 19, hazard: 0.92 },
        { time: 20, hazard: 0.93 },
      ],
      riskDrivers: {
        overtimeHours: 35,
        workload: 30,
        patientAcuity: 25,
        workEnvironment: 8,
        other: 2,
      },
      sdohInsights: [
        { category: "Socioeconomic", score: 45, color: "bg-yellow-400" },
        { category: "Household Composition and Disability", score: 78, color: "bg-orange-400" },
        { category: "Minority Status and Language", score: 32, color: "bg-green-400" },
        { category: "Housing Type and Transportation", score: 88, color: "bg-red-500" },
      ],
    },
    retentionPlan: [
      "Leadership development opportunities",
      "Advanced certification support",
      "Mentorship program participation",
      "Flexible PTO policy",
    ],
    interventions: [
      "Career advancement discussion",
      "Workload redistribution",
      "Professional development funding",
      "Stress management resources",
      "Team leadership role assignment",
    ],
  },
  "jessica-brown": {
    id: "jessica-brown",
    name: "Jessica Brown",
    score: 90,
    riskLevel: "high",
    avatar: "/placeholder.svg?height=80&width=80",
    basicInfo: {
      role: "Charge Nurse",
      tenure: "6 years",
      employmentType: "Full-Time",
      scheduleType: "Night Shifts",
      education: "BSN, CCRN",
      licensure: "Active RN License (State GA)",
    },
    financialImpact: {
      valueToEnterprise: 152800,
      retainMultiplier: 1.95,
      breakdown: {
        committeeLeadContribution: 1.4,
        preceptorContribution: 1.35,
        specialtyContribution: 1.2,
      },
      recommendation: "Critical night shift leader - retention essential.",
    },
    riskAnalytics: {
      riskOutcomes: [
        { time: 0, hazard: 0.18 },
        { time: 1, hazard: 0.24 },
        { time: 2, hazard: 0.31 },
        { time: 3, hazard: 0.38 },
        { time: 4, hazard: 0.44 },
        { time: 5, hazard: 0.5 },
        { time: 6, hazard: 0.56 },
        { time: 7, hazard: 0.61 },
        { time: 8, hazard: 0.66 },
        { time: 9, hazard: 0.7 },
        { time: 10, hazard: 0.74 },
        { time: 11, hazard: 0.77 },
        { time: 12, hazard: 0.79 },
        { time: 13, hazard: 0.81 },
        { time: 14, hazard: 0.83 },
        { time: 15, hazard: 0.85 },
        { time: 16, hazard: 0.86 },
        { time: 17, hazard: 0.87 },
        { time: 18, hazard: 0.88 },
        { time: 19, hazard: 0.89 },
        { time: 20, hazard: 0.9 },
      ],
      riskDrivers: {
        overtimeHours: 45,
        workload: 20,
        patientAcuity: 15,
        workEnvironment: 15,
        other: 5,
      },
      sdohInsights: [
        { category: "Socioeconomic", score: 55, color: "bg-yellow-400" },
        { category: "Household Composition and Disability", score: 85, color: "bg-red-500" },
        { category: "Minority Status and Language", score: 40, color: "bg-yellow-400" },
        { category: "Housing Type and Transportation", score: 75, color: "bg-orange-400" },
      ],
    },
    retentionPlan: [
      "Night shift differential increase",
      "Childcare assistance program",
      "Transportation vouchers",
      "Wellness program enrollment",
    ],
    interventions: [
      "Night shift support group",
      "Family support services",
      "Sleep hygiene education",
      "Shift pattern optimization",
      "Leadership recognition program",
    ],
  },
}

// Add more nurses with different risk levels
export const allNurses = [
  // High risk nurses
  { id: "jane-doe", name: "Jane Doe", score: 95, riskLevel: "high" as const },
  { id: "lana-steiner", name: "Lana Steiner", score: 92, riskLevel: "high" as const },
  { id: "jessica-brown", name: "Jessica Brown", score: 90, riskLevel: "high" as const },
  { id: "emily-davis", name: "Emily Davis", score: 88, riskLevel: "high" as const },
  { id: "karen-white", name: "Karen White", score: 86, riskLevel: "high" as const },
  { id: "phoenix-baker", name: "Phoenix Baker", score: 86, riskLevel: "high" as const },
  { id: "demi-wilkinson", name: "Demi Wilkinson", score: 83, riskLevel: "high" as const },
  { id: "candice-wu", name: "Candice Wu", score: 82, riskLevel: "high" as const },
  { id: "natali-craig", name: "Natali Craig", score: 81, riskLevel: "high" as const },

  // Moderate risk nurses
  { id: "michael-johnson", name: "Michael Johnson", score: 79, riskLevel: "moderate" as const },
  { id: "sarah-wilson", name: "Sarah Wilson", score: 75, riskLevel: "moderate" as const },
]

export function getNurseById(id: string): Nurse | null {
  return nursesData[id] || null
}

export function getNurseByName(name: string): Nurse | null {
  const id = name.toLowerCase().replace(/\s+/g, "-")
  return getNurseById(id)
}

// Generate default data for nurses not in the detailed dataset
export function generateDefaultNurseData(
  id: string,
  name: string,
  score: number,
  riskLevel: "high" | "moderate" | "low",
): Nurse {
  return {
    id,
    name,
    score,
    riskLevel,
    avatar: "/placeholder.svg?height=80&width=80",
    basicInfo: {
      role: "Nurse",
      tenure: `${Math.floor(Math.random() * 10) + 1} years`,
      employmentType: Math.random() > 0.2 ? "Full-Time" : "Part-Time",
      scheduleType: ["Day Shifts", "Night Shifts", "Rotating Shifts"][Math.floor(Math.random() * 3)],
      education: ["BSN", "ADN", "MSN"][Math.floor(Math.random() * 3)],
      licensure: "Active RN License (State GA)",
    },
    financialImpact: {
      valueToEnterprise: Math.floor(Math.random() * 50000) + 100000,
      retainMultiplier: Math.round((Math.random() * 1 + 1.5) * 100) / 100,
      breakdown: {
        committeeLeadContribution: Math.round((Math.random() * 0.5 + 1.0) * 100) / 100,
        preceptorContribution: Math.round((Math.random() * 0.5 + 1.2) * 100) / 100,
        specialtyContribution: Math.round((Math.random() * 0.3 + 1.0) * 100) / 100,
      },
      recommendation: riskLevel === "high" ? "Immediate retention action required." : "Monitor and support as needed.",
    },
    riskAnalytics: {
      riskOutcomes: Array.from({ length: 21 }, (_, i) => ({
        time: i,
        hazard: Math.min(0.95, (score / 100) * 0.8 + Math.random() * 0.2),
      })),
      riskDrivers: {
        overtimeHours: Math.floor(Math.random() * 50) + 10,
        workload: Math.floor(Math.random() * 30) + 10,
        patientAcuity: Math.floor(Math.random() * 25) + 5,
        workEnvironment: Math.floor(Math.random() * 20) + 5,
        other: Math.floor(Math.random() * 10) + 2,
      },
      sdohInsights: [
        { category: "Socioeconomic", score: Math.floor(Math.random() * 40) + 40, color: "bg-orange-400" },
        {
          category: "Household Composition and Disability",
          score: Math.floor(Math.random() * 50) + 30,
          color: "bg-red-500",
        },
        {
          category: "Minority Status and Language",
          score: Math.floor(Math.random() * 60) + 20,
          color: "bg-yellow-400",
        },
        {
          category: "Housing Type and Transportation",
          score: Math.floor(Math.random() * 40) + 50,
          color: "bg-red-500",
        },
      ],
    },
    retentionPlan: [
      "Flexible scheduling options",
      "Professional development support",
      "Wellness program participation",
      "Recognition and rewards program",
    ],
    interventions: [
      "Regular check-in meetings",
      "Workload assessment",
      "Support resource referral",
      "Team building activities",
    ],
  }
}
