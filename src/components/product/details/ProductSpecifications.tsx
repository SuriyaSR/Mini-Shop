import type { Product } from "@/types/product"

const ProductSpecifications = ({product}:{product: Product}) => {

  const formatDimensions = () => {
    const w = product.dimensions?.width;
    const h = product.dimensions?.height;
    const d = product.dimensions?.depth;
    if(w!=null && h!=null && d!=null)
      return `${w} x ${h} x ${d}`;
    return "N/A";
  }

  const rows: Array<{label: string; value?: string | number}> = [
    { label: "Brand", value: product.brand},
    { label: "Category", value: product.category},
    { label: "Weight", value: product.weight},
    { label: "Dimensions", value: formatDimensions()},
    { label: "Shipping Info", value: product.shippingInfo},
    { label: "Warranty", value: product.warrantyInfo},
    { label: "Return Policy", value: product.returnPolicy},
    { label: "Min. Order Quantity", value: product.minOrderQuantity},
    { label: "SKU", value: product.sku},
    { label: "Barcode", value: product.barCode},
  ]

  return (
    <div className="border rounded-xl p-4 bg-background shadow-sm space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2">
        Specifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {rows.map(({label, value}) => {
          if(value === undefined || value==="" || value === "") {
            return null;
          }            
          return (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSpecifications
