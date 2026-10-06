import { formatPrice, type Dress } from '@/data/dresses';
import { useRouter } from '@/router';

export function DressCard({ dress }: { dress: Dress }) {
  const { navigate } = useRouter();

  return (
    <button
      onClick={() => navigate({ name: 'product', id: dress.id })}
      className="group text-right block w-full"
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4 hover-zoom">
        <img
          src={dress.images[0]}
          alt={dress.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {dress.popular && (
          <span className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-sm text-2xs tracking-widest2 text-ink px-3 py-1.5">
            محبوب
          </span>
        )}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-flex items-center gap-2 bg-ivory/95 backdrop-blur-sm px-5 py-2.5 text-sm text-ink tracking-wide">
            مشاهده لباس
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-display text-lg font-500 text-ink leading-tight">{dress.name}</h3>
        <p className="text-sm text-stone-500">{dress.brand}</p>
        <p className="text-sm text-stone-500">سایز {dress.size}</p>
        <p className="text-base font-500 text-ink pt-1">{formatPrice(dress.rentalPrice)} تومان</p>
      </div>
    </button>
  );
}
