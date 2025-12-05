import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const ProductCardSkeleton = () => {
  return (
    <Card className="w-full py-3 rounded-xl shadow-sm bg-card border border-border">
      <CardContent className="px-3">
        <CardTitle className="mb-1">
          <div className="rounded-md bg-muted mb-2">
            <Skeleton className="w-full h-48 rounded-md bg-primary/10" />
          </div>
        </CardTitle>

        <div className="mb-2 space-y-1">
          <Skeleton className="h-3 w-full bg-primary/10" />
          <Skeleton className="h-3 w-2/3 bg-primary/10" />
        </div>

        <div className="mb-2">
          <Skeleton className="h-3 w-24 bg-primary/10" />
        </div>

        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-5 w-16 bg-primary/10" />
          <Skeleton className="h-7 w-20 rounded-md bg-primary/10" />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCardSkeleton