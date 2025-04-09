import { Card } from "@/components/ui/card"
import { ArrowUp, Minus } from "lucide-react"

interface MetricCardProps {
  title: string
  year: string
  percentage: number
  favorable: boolean
  change: number
  responseCount: number
  prevYear: number
}

export function MetricCard({ title, year, percentage, favorable, change, responseCount, prevYear }: MetricCardProps) {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-xs">{year}</span>
      </div>
      <div className="p-4 bg-blue-50">
        <div className="text-sm text-gray-600 mb-1">Favorable</div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-3xl font-bold text-gray-800">{percentage}%</div>
          <div className="flex items-center">
            <div className="flex items-center text-green-600 mr-2">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+{change}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Minus className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <div>Response Count</div>
          <div>2018 Fav</div>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <div>{responseCount}</div>
          <div>{prevYear}</div>
        </div>
      </div>
    </Card>
  )
}
