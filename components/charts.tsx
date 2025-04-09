"use client"

type LineChartProps = {
  hiringTrend: {
    year: number
    months: number[]
  }[]
}

export function LineChart({ hiringTrend }: LineChartProps) {
  return (
    <div className="relative w-full h-[200px]">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
        <div>60</div>
        <div>40</div>
        <div>20</div>
        <div>0</div>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-10 right-0 flex justify-between text-xs text-gray-500">
        {hiringTrend.map((year) => (
          <div key={year.year}>{year.year}</div>
        ))}
      </div>

      {/* Chart area with light blue line */}
      <div className="absolute left-10 top-0 right-0 bottom-5 bg-gray-50">
        <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
          <path
            d="M0,140 C10,130 20,135 30,120 C40,110 50,100 60,105 C70,110 80,100 90,95 C100,90 110,100 120,85 C130,70 140,80 150,75 C160,70 170,80 180,75 C190,70 200,60 210,65 C220,70 230,60 240,55 C250,50 260,60 270,55 C280,50 290,60 300,55"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

type DonutChartProps = {
  gender: {
    male: number
    female: number
    nonConforming: number
    total: number
  }
}

export function DonutChart({ gender }: DonutChartProps) {
  // Calculate stroke-dasharray values based on percentages
  const maleOffset = gender.male * 2.51 // 251.2 is the circumference (2πr where r=40)
  const femaleOffset = gender.female * 2.51
  const nonConformingOffset = gender.nonConforming * 2.51

  return (
    <div className="relative w-full h-[200px] flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Donut chart */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Male segment */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeDasharray={`${maleOffset} 100`}
            strokeDashoffset="0"
          />

          {/* Female segment */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#93c5fd"
            strokeWidth="20"
            strokeDasharray={`${femaleOffset} 100`}
            strokeDashoffset={`-${maleOffset}`}
          />

          {/* Non-Conforming segment */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#1f2937"
            strokeWidth="20"
            strokeDasharray={`${nonConformingOffset} 100`}
            strokeDashoffset={`-${maleOffset + femaleOffset}`}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-sm font-semibold">{gender.total.toLocaleString()}</div>
          <div className="text-xs">EMPLOYEES</div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-[#1f2937] mr-1"></span>
          <span>Non-Conforming: {gender.nonConforming}%</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-[#93c5fd] mr-1"></span>
          <span>Female: {gender.female}%</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-[#e5e7eb] mr-1"></span>
          <span>Male: {gender.male}%</span>
        </div>
      </div>
    </div>
  )
}

type DepartmentBarChartProps = {
  departments: {
    name: string
    value: number
    color: string
  }[]
}

export function DepartmentBarChart({ departments }: DepartmentBarChartProps) {
  return (
    <div className="w-full">
      {departments.map((dept, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between text-xs mb-1">
            <span>{dept.name}</span>
          </div>
          <div className="w-full bg-gray-100 h-5">
            <div className={`h-full ${dept.color}`} style={{ width: `${dept.value}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

type AgeBarChartProps = {
  ageGroups: {
    range: string
    value: number
    color: string
    count?: number
  }[]
}

export function AgeBarChart({ ageGroups }: AgeBarChartProps) {
  return (
    <div className="w-full h-[200px] flex items-end justify-between">
      {ageGroups.map((age, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={`w-8 ${age.color}`} style={{ height: `${age.value}%` }}></div>
          <div className="text-xs mt-1">{age.range}</div>
        </div>
      ))}
    </div>
  )
}
