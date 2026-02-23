import { Suspense } from "react"
import WarrantyClient from "./warrantyClient"

export default function WarrantyPage() {
  return (
    <Suspense fallback={null}>
      <WarrantyClient />
    </Suspense>
  )
}
