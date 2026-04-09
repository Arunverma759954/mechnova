import categoryDataEn from '../category-en.json'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  if (slug === 'chainsaw') {
    return {
      title: "Chainsaw Machine: Best Petrol Wood Cutting Machine in India",
      description: "Explore the best chainsaw machine in India. Discover petrol engine wood cutting machines for tree cutting, farming, and heavy-duty use.",
      openGraph: {
        title: "Chainsaw Machine: Best Petrol Wood Cutting Machine in India",
        description: "Explore the best chainsaw machine in India. Discover petrol engine wood cutting machines for tree cutting, farming, and heavy-duty use.",
        url: `https://mechnova.in/products/${slug}`,
        siteName: 'Mechnova Machines',
        images: [
          {
            url: '/mechnova/products/chainsaw/hero-chainsaw.webp',
            width: 1200,
            height: 630,
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
    }
  }

  // Fallback metadata logic
  let productName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
  
  // Try to find the real name from category data
  for (const category of Object.values(categoryDataEn)) {
    if (category.products && category.products[slug]) {
      productName = category.products[slug].name
      break
    }
  }

  return {
    title: `${productName} | Mechnova Machines`,
    description: `High-quality ${productName} for agriculture, gardening, and forestry. Professional performance and durability from Mechnova.`,
  }
}

export default function ProductLayout({ children }) {
  return children
}
