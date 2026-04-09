import categoryDataEn from '../category-en.json'

export async function generateMetadata({ params }) {
  // Await params for Next.js 15/16 compatibility
  const resolvedParams = await params
  const slug = resolvedParams?.slug
  
  const siteUrl = "https://mechnova.in"
  const metadataBase = new URL(siteUrl)

  if (slug === 'chainsaw') {
    return {
      metadataBase,
      title: "Chainsaw Machine: Best Petrol Wood Cutting Machine in India",
      description: "Explore the best chainsaw machine in India. Discover petrol engine wood cutting machines for tree cutting, farming, and heavy-duty use.",
      openGraph: {
        title: "Chainsaw Machine: Best Petrol Wood Cutting Machine in India",
        description: "Explore the best chainsaw machine in India. Discover petrol engine wood cutting machines for tree cutting, farming, and heavy-duty use.",
        url: `${siteUrl}/products/${slug}`,
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

  if (slug === 'brushcutter') {
    return {
      metadataBase,
      title: "Brush Cutter Machine: Best Grass Cutting Tool for Farming",
      description: "Explore brush cutter machines for farming. Learn about petrol brush cutters, backpack and side pack types, and efficient grass cutting tools.",
      openGraph: {
        title: "Brush Cutter Machine: Best Grass Cutting Tool for Farming",
        description: "Explore brush cutter machines for farming. Learn about petrol brush cutters, backpack and side pack types, and efficient grass cutting tools.",
        url: `${siteUrl}/products/${slug}`,
        siteName: 'Mechnova Machines',
        images: [
          {
            url: '/mechnova/products/brushcutter/hero-brushcutter.webp',
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
  let productName = slug ? (slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')) : 'Product'
  
  // Robust check for category data
  if (slug && categoryDataEn) {
    const categories = Object.values(categoryDataEn)
    for (const category of categories) {
      if (category && category.products && category.products[slug]) {
        productName = category.products[slug].name
        break
      }
    }
  }

  return {
    metadataBase,
    title: `${productName} | Mechnova Machines`,
    description: `High-quality ${productName} for agriculture, gardening, and forestry. Professional performance and durability from Mechnova.`,
  }
}

export default function ProductLayout({ children }) {
  return children
}
