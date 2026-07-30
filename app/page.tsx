import { Hero } from '@/components/home/hero'
import { CategoryGrid } from '@/components/home/category-grid'
import { ProductRail } from '@/components/home/product-rail'
import { ValueProps } from '@/components/home/value-props'
import { EditorialBanner } from '@/components/home/editorial-banner'
import { getFeaturedProducts, getNewArrivals } from '@/lib/products'

export default async function HomePage() {
  const [featured, newArrivals] = await Promise.all([
    getFeaturedProducts(4),
    getNewArrivals(4),
  ])

  return (
    <>
      <Hero />
      <ProductRail
        eyebrow="Most wanted"
        title="Bestsellers"
        viewAllHref="/products"
        products={featured}
        priority
      />
      <CategoryGrid />
      <EditorialBanner />
      <ProductRail
        eyebrow="Just arrived"
        title="New arrivals"
        viewAllHref="/products?sort=newest"
        products={newArrivals}
      />
      <ValueProps />
    </>
  )
}
