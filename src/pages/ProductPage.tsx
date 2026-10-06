import { useState } from 'react';
import { getDressById, formatPrice } from '@/data/dresses';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { Check, ChevronLeft, Calendar } from 'lucide-react';

export function ProductPage({ id }: { id: string }) {
  const { navigate } = useRouter();
  const dress = getDressById(id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (!dress) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="font-display text-2xl text-ink mb-4">لباس پیدا نشد</p>
        <button
          onClick={() => navigate({ name: 'catalog' })}
          className="text-sm text-ink underline underline-offset-4"
        >
          بازگشت به کمد لباس
        </button>
      </div>
    );
  }

  const datesSelected = startDate && endDate;
  const total = dress.rentalPrice + dress.deposit;

  const handleReserve = () => {
    navigate({ name: 'reservation', id: dress.id, startDate, endDate });
  };

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-6">
        <button
          onClick={() => navigate({ name: 'catalog' })}
          className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-ink transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          بازگشت به کمد لباس
        </button>
      </div>

      {/* Main layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <Reveal>
              <div className="relative overflow-hidden bg-cream aspect-[3/4]">
                <img
                  src={dress.images[selectedImage]}
                  alt={dress.name}
                  className="w-full h-full object-cover animate-fade-in"
                  key={selectedImage}
                />
              </div>
            </Reveal>
            <div className="grid grid-cols-4 gap-3">
              {dress.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative overflow-hidden bg-cream aspect-[3/4] transition-all duration-300 ${
                    selectedImage === i
                      ? 'ring-2 ring-ink ring-offset-2 ring-offset-ivory'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <Reveal delay={100}>
              <p className="text-2xs tracking-widest2 text-stone-400 mb-4">{dress.brand}</p>
              <h1 className="font-display text-3xl md:text-5xl font-700 text-ink tracking-tightest mb-8">
                {dress.name}
              </h1>

              <p className="text-base text-stone-500 leading-loose mb-10 max-w-md">
                {dress.description}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 py-8 border-y border-beige-200">
                <div>
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1.5">برند</p>
                  <p className="text-base text-ink">{dress.brand}</p>
                </div>
                <div>
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1.5">سایز</p>
                  <p className="text-base text-ink">{dress.size}</p>
                </div>
                <div>
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1.5">رنگ</p>
                  <p className="text-base text-ink">{dress.color}</p>
                </div>
                <div>
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1.5">مناسب برای</p>
                  <p className="text-base text-ink">{dress.categories.join('، ')}</p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-10">
                <div>
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1">هزینه اجاره</p>
                  <p className="font-display text-3xl font-600 text-ink">
                    {formatPrice(dress.rentalPrice)}
                    <span className="text-base font-400 text-stone-500 mr-2">تومان</span>
                  </p>
                </div>
                <div className="mr-auto text-right">
                  <p className="text-2xs tracking-widest2 text-stone-400 mb-1">ودیعه</p>
                  <p className="text-base text-stone-600">{formatPrice(dress.deposit)} تومان</p>
                </div>
              </div>

              {/* Date selection */}
              <div className="bg-cream/60 p-6 md:p-8 mb-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar size={18} className="text-stone-500" />
                  <h3 className="font-display text-lg font-500 text-ink">انتخاب تاریخ اجاره</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="text-2xs tracking-widest2 text-stone-400 block mb-2">
                      تاریخ دریافت
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-ivory border border-beige-200 px-4 py-3 text-sm text-ink focus:outline-none focus:border-beige-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-2xs tracking-widest2 text-stone-400 block mb-2">
                      تاریخ بازگشت
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-ivory border border-beige-200 px-4 py-3 text-sm text-ink focus:outline-none focus:border-beige-400 transition-colors"
                    />
                  </div>
                </div>

                {datesSelected ? (
                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-3 animate-slide-down">
                    <Check size={16} />
                    این لباس برای تاریخ انتخاب‌شده موجود است ✓
                  </div>
                ) : (
                  <p className="text-sm text-stone-400">
                    برای ادامه، تاریخ دریافت و بازگشت را انتخاب کن.
                  </p>
                )}
              </div>

              {/* Summary */}
              {datesSelected && (
                <div className="space-y-3 mb-8 animate-slide-down">
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>مدت اجاره</span>
                    <span>۳ روز</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>هزینه اجاره</span>
                    <span>{formatPrice(dress.rentalPrice)} تومان</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>ودیعه (قابل بازگشت)</span>
                    <span>{formatPrice(dress.deposit)} تومان</span>
                  </div>
                  <div className="border-t border-beige-200 pt-3 flex justify-between items-baseline">
                    <span className="font-display text-lg font-500 text-ink">مجموع</span>
                    <span className="font-display text-2xl font-600 text-ink">
                      {formatPrice(total)}
                      <span className="text-sm font-400 text-stone-500 mr-2">تومان</span>
                    </span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <button
                onClick={handleReserve}
                disabled={!datesSelected}
                className={`w-full py-4 text-sm tracking-wide transition-all duration-300 ${
                  datesSelected
                    ? 'bg-ink text-ivory hover:bg-charcoal'
                    : 'bg-beige-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                رزرو لباس
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
