import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function EditorialBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid items-stretch gap-0 overflow-hidden rounded-sm border border-border md:grid-cols-2">
        <div className="relative min-h-80 bg-muted">
          <Image
            src="/editorial/category-knitwear.png"
            alt="The cashmere edit"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 bg-card px-8 py-14 md:px-14">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            The cashmere edit
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-balance md:text-4xl">
            The softest layers for the season ahead
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Our Grade-A Mongolian cashmere is spun for exceptional softness and
            longevity. Timeless knits designed to become the pieces you reach for
            again and again.
          </p>
          <div>
            <Link
              href="/products?category=Knitwear"
              className={cn(buttonVariants({ variant: 'default' }), 'h-12 px-8 text-sm')}
            >
              Shop knitwear
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
