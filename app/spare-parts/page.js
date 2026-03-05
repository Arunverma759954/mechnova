import { Suspense } from "react"
import SparePartClient from "./SparePartClient"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SparePartClient />
    </Suspense>
  )
}
