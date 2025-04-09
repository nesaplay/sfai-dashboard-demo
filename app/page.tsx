"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { MetricCard } from "@/components/metric-card"
import { LawImpactChart } from "@/components/law-impact-chart"
import { FavorableItems } from "@/components/favorable-items"
import { Sidebar } from "@/components/sidebar"

// Declare the ChatWidget type on the window object
declare global {
  interface Window {
    ChatWidget?: {
      sendData: (data: any) => void;
    };
  }
}

// Define our data structure
type DashboardData = {
  metrics: {
    overallValue: {
      percentage: number
      favorable: boolean
      change: number
      responseCount: number
      prevYear: number
    }
    coreDeliverables: {
      percentage: number
      favorable: boolean
      change: number
      responseCount: number
      prevYear: number
    }
    serviceDimensions: {
      percentage: number
      favorable: boolean
      change: number
      responseCount: number
      prevYear: number
    }
    impact: {
      percentage: number
      favorable: boolean
      change: number
      responseCount: number
      prevYear: number
    }
  }
  impactChart: {
    categories: string[]
    currentYear: number[]
    previousYear: number[]
  }
  favorableItems: {
    id: string
    name: string
    score: number
    gap: number
  }[]
  unfavorableItems: {
    id: string
    name: string
    score: number
    gap: number
  }[]
}

export default function Dashboard() {
  // Centralized data state
  const [data, setData] = useState<DashboardData>({
    metrics: {
      overallValue: {
        percentage: 78,
        favorable: true,
        change: 13,
        responseCount: 1326,
        prevYear: 65,
      },
      coreDeliverables: {
        percentage: 74,
        favorable: true,
        change: 9,
        responseCount: 1188,
        prevYear: 65,
      },
      serviceDimensions: {
        percentage: 69,
        favorable: true,
        change: 8,
        responseCount: 1245,
        prevYear: 61,
      },
      impact: {
        percentage: 56,
        favorable: true,
        change: 4,
        responseCount: 1099,
        prevYear: 51,
      },
    },
    impactChart: {
      categories: ["Financial cost", "Business value", "Business goals", "Improved work", "Breakthrough in"],
      currentYear: [48, 72, 53, 49, 52],
      previousYear: [43, 64, 45, 42, 45],
    },
    favorableItems: [
      { id: "L11", name: "Integrity and compliance", score: 85, gap: 2 },
      { id: "L12", name: "Intellectual property", score: 83, gap: 1 },
      { id: "L21", name: "Possesses required knowledge and skills (LAW)", score: 82, gap: 2 },
    ],
    unfavorableItems: [
      { id: "L27", name: "Financial cost savings", score: 21, gap: -3 },
      { id: "L31", name: "Breakthrough initiatives", score: 19, gap: -5 },
      { id: "L30", name: "Improved working capital", score: 16, gap: -4 },
    ],
  })

  useEffect(() => {
    if (window.ChatWidget) {
      console.log("ChatWidget is available");
      window.ChatWidget.sendData({ data });
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Region: EMEA</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome to OrgView</span>
            <button className="text-sm text-blue-600">Log out</button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Law Overall Value"
            year="2025"
            percentage={data.metrics.overallValue.percentage}
            favorable={data.metrics.overallValue.favorable}
            change={data.metrics.overallValue.change}
            responseCount={data.metrics.overallValue.responseCount}
            prevYear={data.metrics.overallValue.prevYear}
          />

          <MetricCard
            title="Law Core Deliverables"
            year="2025"
            percentage={data.metrics.coreDeliverables.percentage}
            favorable={data.metrics.coreDeliverables.favorable}
            change={data.metrics.coreDeliverables.change}
            responseCount={data.metrics.coreDeliverables.responseCount}
            prevYear={data.metrics.coreDeliverables.prevYear}
          />

          <MetricCard
            title="Law Service Dimensions"
            year="2025"
            percentage={data.metrics.serviceDimensions.percentage}
            favorable={data.metrics.serviceDimensions.favorable}
            change={data.metrics.serviceDimensions.change}
            responseCount={data.metrics.serviceDimensions.responseCount}
            prevYear={data.metrics.serviceDimensions.prevYear}
          />

          <MetricCard
            title="Law Impact"
            year="2025"
            percentage={data.metrics.impact.percentage}
            favorable={data.metrics.impact.favorable}
            change={data.metrics.impact.change}
            responseCount={data.metrics.impact.responseCount}
            prevYear={data.metrics.impact.prevYear}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Law Impact</h3>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Expand</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[350px]">
              <LawImpactChart
                categories={data.impactChart.categories}
                currentYear={data.impactChart.currentYear}
                previousYear={data.impactChart.previousYear}
              />
            </div>
          </Card>

          <div className="grid grid-rows-2 gap-6">
            <Card className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Most Favorable Items</h3>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Expand</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
              <FavorableItems items={data.favorableItems} type="favorable" />
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Most Unfavorable Items</h3>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Expand</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
              <FavorableItems items={data.unfavorableItems} type="unfavorable" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
