interface FavorableItemsProps {
  items: {
    id: string
    name: string
    score: number
    gap: number
  }[]
  type: "favorable" | "unfavorable"
}

export function FavorableItems({ items, type }: FavorableItemsProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-medium text-gray-500">
        <div className="col-span-5">Item</div>
        <div className="col-span-3 text-right">Score</div>
        <div className="col-span-4 text-right">Gap Vs. Honeywell Overall</div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-2 py-3 border-t border-gray-100 text-sm">
          <div className="col-span-5 flex items-center">
            <span className="font-medium text-gray-600 mr-2">{item.id}.</span>
            <span className="text-gray-800">{item.name}</span>
          </div>
          <div className="col-span-3 flex justify-end items-center">
            {type === "favorable" ? (
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                <span className="font-medium">{item.score}%</span>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-1"></div>
                <span className="font-medium">{item.score}%</span>
              </div>
            )}
          </div>
          <div className="col-span-4 text-right font-medium">{item.gap > 0 ? `+${item.gap}` : item.gap}</div>
        </div>
      ))}
    </div>
  )
}
