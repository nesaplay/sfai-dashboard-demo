type EmployeesByStateProps = {
  states: {
    rank: number
    state: string
    employees: number
  }[]
}

export function EmployeesByState({ states }: EmployeesByStateProps) {
  // Find the maximum number of employees to calculate percentages
  const maxEmployees = Math.max(...states.map((state) => state.employees))

  return (
    <div className="w-full">
      {states.map((item) => (
        <div key={item.rank} className="flex items-center mb-2">
          <div className="w-6 text-xs font-medium">{item.rank}</div>
          <div className="w-28 text-xs">{item.state}</div>
          <div className="flex-1">
            <div
              className="bg-[#93c5fd] h-5"
              style={{ width: `${Math.min(100, (item.employees / maxEmployees) * 100)}%` }}
            ></div>
          </div>
          <div className="w-16 text-xs text-right">{item.employees.toLocaleString()}</div>
        </div>
      ))}
    </div>
  )
}
