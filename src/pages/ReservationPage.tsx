import { useState } from 'react';
import { getDressById, formatPrice } from '@/data/dresses';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { Check, ChevronLeft, PartyPopper } from 'lucide-react';

export function ReservationPage({
  id,
  startDate,
  endDate,
}: {
  id: string;
  startDate?: string;
  endDate?: string;
}) {
  const { navigate } = useRouter();
  const dress = getDressById(id);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [reservationNumber] = useState('NS-10482');

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

  const total = dress.rentalPrice + dress.deposit;
  const canSubmit = fullName.trim() && phone.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitted) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center px-6">
        <Reveal>
          <div className="max-w-lg mx-auto text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-green-50 rounded-full animate-scale-in">
              <Check size={36} className="text-green-700" strokeWidth={1.5} />
            </div>

            <p className="text-2xs tracking-widest2 text-stone-400 mb-4">تأیید شد</p>
            <h1 className="font-display text-3xl md:text-4xl font-700 text-ink tracking-tightest mb-4">
              رزرو شما با موفقیت ثبت شد.
            </h1>
            <p className="text-base text-stone-500 mb-10">
              جزئیات رزرو به شماره موبایل شما ارسال خواهد شد.
            </p>

            <div className="bg-cream/60 px-8 py-6 mb-10 inline-block">
              <p className="text-2xs tracking-widest2 text-stone-400 mb-2">شماره رزرو</p>
              <p className="font-display text-2xl font-600 text-ink tracking-wider" dir="ltr">
                {reservationNumber}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate({ name: 'catalog' })}
                className="bg-ink text-ivory px-8 py-4 text-sm tracking-wide hover:bg-charcoal transition-colors duration-300"
              >
                بازگشت به لباس‌ها
              </button>
              <button
                onClick={() => navigate({ name: 'home' })}
                className="border border-beige-300 text-ink px-8 py-4 text-sm tracking-wide hover:bg-cream transition-colors duration-300"
              >
                بازگشت به خانه
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-6">
        <button
          onClick={() => navigate({ name: 'product', id: dress.id })}
          className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-ink transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          بازگشت به لباس
        </button>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-12">
        <Reveal>
          <p className="text-2xs tracking-widest2 text-stone-400 mb-4">آخرین مرحله</p>
          <h1 className="font-display text-4xl md:text-5xl font-700 text-ink tracking-tightest mb-16">
            تکمیل رزرو
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-display text-xl font-500 text-ink mb-6">
                    اطلاعات تماس
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="text-2xs tracking-widest2 text-stone-400 block mb-2">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: نگار محمدی"
                        className="w-full bg-cream/40 border border-beige-200 px-5 py-4 text-base text-ink placeholder:text-stone-400 focus:outline-none focus:border-beige-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-2xs tracking-widest2 text-stone-400 block mb-2">
                        شماره موبایل
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷"
                        dir="ltr"
                        className="w-full bg-cream/40 border border-beige-200 px-5 py-4 text-base text-ink placeholder:text-stone-400 focus:outline-none focus:border-beige-400 transition-colors text-right"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-beige-200">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`w-full py-5 text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 ${
                      canSubmit
                        ? 'bg-ink text-ivory hover:bg-charcoal'
                        : 'bg-beige-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    {canSubmit && <PartyPopper size={18} />}
                    ثبت رزرو
                  </button>
                  {!canSubmit && (
                    <p className="text-2xs text-stone-400 text-center mt-3">
                      برای ثبت رزرو، نام و شماره موبایل را وارد کن.
                    </p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Reveal delay={100}>
              <div className="bg-cream/50 p-6 md:p-8 lg:sticky lg:top-28">
                <h2 className="font-display text-lg font-500 text-ink mb-6">خلاصه رزرو</h2>

                {/* Dress */}
                <div className="flex gap-4 mb-6 pb-6 border-b border-beige-200">
                  <div className="w-24 h-32 overflow-hidden bg-cream flex-shrink-0">
                    <img
                      src={dress.images[0]}
                      alt={dress.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-base font-500 text-ink mb-1">{dress.name}</h3>
                    <p className="text-sm text-stone-500">{dress.brand}</p>
                    <p className="text-sm text-stone-500">سایز {dress.size}</p>
                  </div>
                </div>

                {/* Dates */}
                <div className="space-y-4 mb-6 pb-6 border-b border-beige-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">تاریخ دریافت</span>
                    <span className="text-ink" dir="ltr">
                      {startDate || '—'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">تاریخ بازگشت</span>
                    <span className="text-ink" dir="ltr">
                      {endDate || '—'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">مدت اجاره</span>
                    <span className="text-ink">۳ روز</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">هزینه اجاره</span>
                    <span className="text-ink">{formatPrice(dress.rentalPrice)} تومان</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">ودیعه (قابل بازگشت)</span>
                    <span className="text-ink">{formatPrice(dress.deposit)} تومان</span>
                  </div>
                </div>

                <div className="border-t border-beige-300 pt-4 flex justify-between items-baseline">
                  <span className="font-display text-lg font-500 text-ink">مجموع</span>
                  <span className="font-display text-2xl font-600 text-ink">
                    {formatPrice(total)}
                    <span className="text-sm font-400 text-stone-500 mr-2">تومان</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
