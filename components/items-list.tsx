import { MostFavorableItem } from "@/app/types"

interface ItemsListProps {
  items: MostFavorableItem[]
  title: string
}

const ItemsList = ({ items, title }: ItemsListProps) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="p-4 border rounded-lg">
      <h4 className="font-medium mb-2 text-lg">{title}</h4>
      <ul className="space-y-2">
        {items.map(item => (
          <li
            key={item.questionId}
            className="flex justify-between items-center text-sm"
          >
            <span className="truncate pr-4">{item.questionText}</span>
            <span className="font-bold whitespace-nowrap">
              {item.overallFavorable}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList 