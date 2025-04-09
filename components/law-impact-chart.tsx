"use client"

interface LawImpactChartProps {
  categories: string[]
  currentYear: number[]
  previousYear: number[]
}

export function LawImpactChart({ categories, currentYear, previousYear }: LawImpactChartProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between pr-4 text-xs text-gray-500 py-4">
          <div>100</div>
          <div>80</div>
          <div>60</div>
          <div>40</div>
          <div>20</div>
          <div>0</div>
        </div>

        {/* Chart area */}
        <div className="flex-1 relative">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-t border-gray-200 w-full h-0"></div>
            ))}
          </div>

          {/* Bars container */}
          <div className="absolute inset-0 flex justify-around pt-4 pb-16">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center justify-end h-full">
                <div className="flex space-x-2 h-full items-end">
                  {/* Current year bar */}
                  <div
                    className="w-6 bg-blue-600"
                    style={{
                      height: `${currentYear[index]}%`,
                      maxHeight: "100%",
                    }}
                  ></div>

                  {/* Previous year bar */}
                  <div
                    className="w-6 bg-gray-400"
                    style={{
                      height: `${previousYear[index]}%`,
                      maxHeight: "100%",
                    }}
                  ></div>
                </div>

                {/* X-axis label */}
                <div className="absolute bottom-0 text-xs text-gray-500 transform -rotate-45 origin-top-left whitespace-nowrap mt-4">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
