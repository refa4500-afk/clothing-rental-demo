import { categories, dresses } from '@/data/dresses';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { DressCard } from '@/components/DressCard';

const heroImage =
  'https://images.pexels.com/photos/33365173/pexels-photo-33365173.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function HomePage() {
  const { navigate } = useRouter();
  const popularDresses = dresses.filter((d) => d.popular).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="لباس مراسم"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/60 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/20" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-end pb-20 md:pb-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-2xs tracking-widest2 text-ivory/70 mb-6">
              اجاره لباس مراسم · ایران
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-700 text-ivory leading-[1.15] tracking-tightest text-balance">
              برای هر مراسم،
              <br />
              یک لباس جدید.
            </h1>
            <p className="text-base md:text-lg text-ivory/80 leading-relaxed mt-8 max-w-lg">
              لباس‌های خاص را برای مراسم‌های خاص بپوش؛ بدون اینکه مجبور باشی آنها را برای همیشه
              بخری.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => navigate({ name: 'catalog' })}
                className="bg-ivory text-ink px-8 py-4 text-sm tracking-wide hover:bg-cream transition-colors duration-300"
              >
                مشاهده لباس‌ها
              </button>
              <button
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-ivory/40 text-ivory px-8 py-4 text-sm tracking-wide hover:bg-ivory/10 transition-colors duration-300"
              >
                چطور کار می‌کند؟
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/60">
          <span className="text-2xs tracking-widest2">اسکرول کن</span>
          <div className="w-px h-12 bg-ivory/30 animate-pulse" />
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-beige-200 py-4 overflow-hidden bg-cream">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-2xs tracking-widest2 text-stone-500">
              <span>اجاره لباس عروس</span>
              <span className="text-beige-400">✦</span>
              <span>لباس مهمانی</span>
              <span className="text-beige-400">✦</span>
              <span>لباس نامزدی</span>
              <span className="text-beige-400">✦</span>
              <span>مراسم رسمی</span>
              <span className="text-beige-400">✦</span>
              <span>برندهای معتبر</span>
              <span className="text-beige-400">✦</span>
              <span>تحویل سریع</span>
              <span className="text-beige-400">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-2xs tracking-widest2 text-stone-400 mb-4">دسته‌بندی</p>
          <h2 className="font-display text-3xl md:text-5xl font-600 text-ink tracking-tightest mb-16">
            برای چه مراسمی لباس می‌خواهی؟
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 100}>
              <button
                onClick={() => navigate({ name: 'catalog', category: cat.name })}
                className="group relative overflow-hidden aspect-[3/4] block w-full hover-zoom"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-5 md:p-7 text-right">
                  <h3 className="font-display text-xl md:text-2xl font-600 text-ivory mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-2xs md:text-sm text-ivory/70">{cat.subtitle}</p>
                  <div className="mt-4 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-2xs tracking-widest2 text-ivory">مشاهده</span>
                    <span className="text-ivory">←</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured dresses */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 bg-cream/40">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-2xs tracking-widest2 text-stone-400 mb-4">منتخب</p>
              <h2 className="font-display text-3xl md:text-5xl font-600 text-ink tracking-tightest">
                محبوب‌ترین لباس‌ها
              </h2>
            </div>
            <button
              onClick={() => navigate({ name: 'catalog' })}
              className="hidden md:inline-flex items-center gap-2 text-sm text-stone-600 hover:text-ink transition-colors group"
            >
              مشاهده همه
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {popularDresses.map((dress, i) => (
            <Reveal key={dress.id} delay={i * 100}>
              <DressCard dress={dress} />
            </Reveal>
          ))}
        </div>

        <div className="md:hidden text-center mt-12">
          <button
            onClick={() => navigate({ name: 'catalog' })}
            className="inline-flex items-center gap-2 text-sm text-stone-600"
          >
            مشاهده همه ←
          </button>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-2xs tracking-widest2 text-stone-400 mb-4 text-center">روند ساده</p>
          <h2 className="font-display text-3xl md:text-5xl font-600 text-ink tracking-tightest text-center mb-20">
            چطور کار می‌کند
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {[
            {
              num: '01',
              title: 'لباس را انتخاب کن',
              desc: 'از میان لباس‌های خاص و برندهای معتبر، آنچه را که دوست داری پیدا کن.',
            },
            {
              num: '02',
              title: 'تاریخ اجاره را انتخاب کن',
              desc: 'تاریخ دریافت و بازگشت لباس را تعیین کن و موجود بودن را بررسی کن.',
            },
            {
              num: '03',
              title: 'رزرو کن و لباس را دریافت کن',
              desc: 'رزرو را تکمیل کن و لباس را در زمان مقرر تحویل بگیر.',
            },
          ].map((step, i) => (
            <Reveal key={step.num} delay={i * 120}>
              <div className="text-center md:text-right">
                <div className="font-display text-5xl md:text-6xl font-200 text-beige-400 mb-6">
                  {step.num}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-500 text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-stone-500 leading-loose">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/34160661/pexels-photo-34160661.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="نِستا"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-600 text-ivory tracking-tightest mb-6 max-w-2xl text-balance">
              لباس مناسب مراسمت را پیدا کن
            </h2>
            <p className="text-ivory/70 max-w-md mb-10">
              بیش از ۱۰۰ لباس خاص از برندهای معتبر، آماده اجاره.
            </p>
            <button
              onClick={() => navigate({ name: 'catalog' })}
              className="bg-ivory text-ink px-10 py-4 text-sm tracking-wide hover:bg-cream transition-colors duration-300"
            >
              مشاهده لباس‌ها
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
