import { QuestionsData, Question } from "@/app/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface QuestionsTableProps {
  data: QuestionsData
}

const QuestionsTable = ({ data }: QuestionsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Dimension</TableHead>
            <TableHead className="text-right">Favorable</TableHead>
            <TableHead className="text-right">Neutral</TableHead>
            <TableHead className="text-right">Unfavorable</TableHead>
            <TableHead className="text-right">vs. Trend</TableHead>
            <TableHead className="text-right">vs. Overall</TableHead>
            <TableHead className="text-right">vs. Norm</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.Questions.map((q: Question) => (
            <TableRow key={q.questionId}>
              <TableCell className="font-medium">{q.questionText}</TableCell>
              <TableCell>{q.dimensionName}</TableCell>
              <TableCell className="text-right text-green-600">
                {q.overallFavorable}%
              </TableCell>
              <TableCell className="text-right text-yellow-600">
                {q.neutral}%
              </TableCell>
              <TableCell className="text-right text-red-600">
                {q.overallUnfavorable}%
              </TableCell>
              <TableCell className="text-right">
                {q.column1 !== null
                  ? `${q.column1 > 0 ? "+" : ""}${q.column1}`
                  : "N/A"}
              </TableCell>
              <TableCell className="text-right">
                {q.column2 !== null
                  ? `${q.column2 > 0 ? "+" : ""}${q.column2}`
                  : "N/A"}
              </TableCell>
              <TableCell className="text-right">
                {q.column3 !== null
                  ? `${q.column3 > 0 ? "+" : ""}${q.column3}`
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default QuestionsTable 