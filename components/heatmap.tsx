import { HeatmapData, HeatmapColumn, HeatmapRow } from "@/app/types"

interface HeatmapProps {
  data: HeatmapData
}

const Heatmap = ({ data }: HeatmapProps) => {
  const { columns, rows } = data.Heatmap

  // A simple function to get a color based on the value
  const getColor = (value: number) => {
    if (value > 80) return "bg-green-500 text-white"
    if (value > 60) return "bg-green-300"
    if (value > 40) return "bg-yellow-300"
    if (value > 20) return "bg-orange-300"
    return "bg-red-300"
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="sticky left-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider z-10"
            >
              Question
            </th>
            {columns.map((col: HeatmapColumn, index: number) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row: HeatmapRow) => (
            <tr key={row.questionId}>
              <td className="sticky left-0 bg-white px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 z-10">
                {row.questionText}
              </td>
              {row.scores.map((score: number, index: number) => (
                <td
                  key={index}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-center ${getColor(
                    score
                  )}`}
                >
                  {score > 0 ? `${score}%` : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Heatmap 