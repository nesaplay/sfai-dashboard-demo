import { OverviewData, OverviewItem } from "@/public/data/types"
import { MetricCard } from "@/components/metric-card"
import ItemsList from "./items-list"

interface OverviewProps {
  data: OverviewData
}

const Overview = ({ data }: OverviewProps) => {
  const { Slider, MostFavorableItems, MostUnfavorableItems, MostImprovedItems } =
    data.Overview.items
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Slider.map((item: OverviewItem) => (
          <MetricCard
            key={item.dimensionId}
            title={item.dimensionName}
            year="2025" // This seems to be static
            percentage={item.overallFavorable}
            favorable={item.overallFavorable > 60} // Arbitrary logic
            change={item.column1 || 0}
            responseCount={item.datalineResponseCount}
            prevYear={item.overallFavorable - (item.column1 || 0)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MostFavorableItems && (
          <ItemsList items={MostFavorableItems} title="Most Favorable" />
        )}
        {MostUnfavorableItems && (
          <ItemsList items={MostUnfavorableItems} title="Most Unfavorable" />
        )}
        {MostImprovedItems && (
          <ItemsList items={MostImprovedItems} title="Most Improved" />
        )}
      </div>
    </div>
  )
}

export default Overview 