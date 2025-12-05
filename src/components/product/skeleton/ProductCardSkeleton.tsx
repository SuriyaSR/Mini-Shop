import { Skeleton } from "@/components/ui/skeleton"

const ProductCardSkeleton = () => {
  return (
<div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>  )
}

export default ProductCardSkeleton
