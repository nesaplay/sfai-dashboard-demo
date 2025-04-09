type DiversityTableProps = {
  diversity: {
    race: string
    female: number
    male: number
    nonConforming: number
  }[]
}

export function DiversityTable({ diversity }: DiversityTableProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 text-xs font-medium">
        <div className="w-1/2"></div>
        <div className="w-1/6 text-center">Female</div>
        <div className="w-1/6 text-center">Male</div>
        <div className="w-1/6 text-center">Non-Conforming</div>
      </div>

      {diversity.map((item, index) => (
        <div key={index} className="flex justify-between mb-2 text-xs">
          <div className="w-1/2 truncate">{item.race}</div>
          <div className="w-1/6 text-center flex justify-center">
            <div className="bg-[#93c5fd] px-2 rounded-sm">{item.female}</div>
          </div>
          <div className="w-1/6 text-center flex justify-center">
            <div className="bg-gray-200 px-2 rounded-sm">{item.male}</div>
          </div>
          <div className="w-1/6 text-center flex justify-center">
            <div className="px-2">{item.nonConforming}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
