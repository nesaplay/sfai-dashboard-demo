import { DimensionsData, Dimension } from "@/app/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DimensionsProps {
  data: DimensionsData
}

const Dimensions = ({ data }: DimensionsProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Dimension</TableHead>
          <TableHead className="text-right">Favorable</TableHead>
          <TableHead className="text-right">Neutral</TableHead>
          <TableHead className="text-right">Unfavorable</TableHead>
          <TableHead className="text-right">Trend</TableHead>
          <TableHead className="text-right">Responses</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.Dimensions.map((item: Dimension) => (
          <TableRow key={item.dimensionId}>
            <TableCell className="font-medium">{item.dimensionName}</TableCell>
            <TableCell className="text-right text-green-600">
              {item.overallFavorable}%
            </TableCell>
            <TableCell className="text-right text-yellow-600">
              {item.neutral}%
            </TableCell>
            <TableCell className="text-right text-red-600">
              {item.overallUnfavorable}%
            </TableCell>
            <TableCell className="text-right">
              {item.column1 !== null
                ? `${item.column1 > 0 ? "+" : ""}${item.column1}%`
                : "N/A"}
            </TableCell>
            <TableCell className="text-right">
              {item.datalineResponseCount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Dimensions 