import { Suspense } from "react"
import WarrantyClient from "./WarrantyClient"

export default function WarrantyPage() {
  return (
    <Suspense fallback={null}>
      <WarrantyClient />
    </Suspense>
  )
}
