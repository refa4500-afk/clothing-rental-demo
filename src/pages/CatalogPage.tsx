import { useMemo, useState, useEffect } from 'react';
import { dresses, sizes, priceRanges, type Category } from '@/data/dresses';
import { useRouter } from '@/router';
import { DressCard } from '@/components/DressCard';
import { Reveal } from '@/components/Reveal';
import { Search, X, SlidersHorizontal } from 'lucide-react';

const allCategories: (Category | 'همه')[] = ['همه', 'عروسی', 'نامزدی', 'مهمانی', 'مراسم رسمی'];

export function CatalogPage({ initialCategory }: { initialCategory?: string }) {
  const { navigate } = useRouter();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'همه'>(
    initialCategory ? (initialCategory as Category) : 'همه'
  );
  const [size, setSize] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory as Category);
    }
  }, [initialCategory]);

  const filtered = useMemo(() => {
    return dresses.filter((d) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !d.name.toLowerCase().includes(q) &&
          !d.brand.toLowerCase().includes(q) &&
          !d.color.includes(search)
        )
          return false;
      }
      if (category !== 'همه' && !d.categories.includes(category as Category)) return false;
      if (size !== null && d.size !== size) return false;
      const range = priceRanges[priceRange];
      if (d.rentalPrice < range.min || d.rentalPrice > range.max) return false;
      return true;
    });
  }, [search, category, size, priceRange]);

  const clearAll = () => {
    setSearch('');
    setCategory('همه');
    setSize(null);
    setPriceRange(0);
  };

  const hasFilters = search || category !== 'همه' || size !== null || priceRange !== 0;

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-12">
        <Reveal>
          <p className="text-2xs tracking-widest2 text-stone-400 mb-4">کاوش</p>
          <h1 className="font-display text-4xl md:text-6xl font-700 text-ink tracking-tightest mb-4">
            کمد لباس
          </h1>
          <p className="text-lg text-stone-500">لباس مناسب مراسمت را پیدا کن.</p>
        </Reveal>
      </section>

      {/* Search + filters bar */}
      <section className="sticky top-16 z-30 bg-ivory/95 backdrop-blur-md border-y border-beige-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجوی لباس یا برند..."
                className="w-full bg-cream/60 border border-beige-200 text-sm py-3 pr-10 pl-4 text-ink placeholder:text-stone-400 focus:outline-none focus:border-beige-400 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ink"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="md:hidden flex items-center gap-2 text-sm text-ink border border-beige-200 px-4 py-3"
            >
              <SlidersHorizontal size={16} />
              فیلتر
            </button>

            {/* Result count */}
            <div className="hidden md:block text-sm text-stone-500 mr-auto">
              {filtered.length} لباس
            </div>
          </div>

          {/* Filters — desktop */}
          <div className="hidden md:flex items-center gap-8 mt-4 flex-wrap">
            {/* Category */}
            <div className="flex items-center gap-3">
              <span className="text-2xs tracking-widest2 text-stone-400">دسته‌بندی</span>
              <div className="flex gap-1.5 flex-wrap">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-sm px-3.5 py-1.5 transition-colors ${
                      category === cat
                        ? 'bg-ink text-ivory'
                        : 'text-stone-500 hover:text-ink border border-beige-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex items-center gap-3">
              <span className="text-2xs tracking-widest2 text-stone-400">سایز</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSize(null)}
                  className={`text-sm px-3 py-1.5 transition-colors ${
                    size === null
                      ? 'bg-ink text-ivory'
                      : 'text-stone-500 hover:text-ink border border-beige-200'
                  }`}
                >
                  همه
                </button>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`text-sm px-3 py-1.5 transition-colors ${
                      size === s
                        ? 'bg-ink text-ivory'
                        : 'text-stone-500 hover:text-ink border border-beige-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xs tracking-widest2 text-stone-400">قیمت</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="text-sm bg-cream/60 border border-beige-200 px-3 py-1.5 text-ink focus:outline-none focus:border-beige-400 cursor-pointer"
              >
                {priceRanges.map((r, i) => (
                  <option key={i} value={i}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-sm text-stone-500 hover:text-ink transition-colors mr-auto flex items-center gap-1.5"
              >
                <X size={14} />
                پاک کردن فیلترها
              </button>
            )}
          </div>
        </div>

        {/* Filters — mobile dropdown */}
        {showFilters && (
          <div className="md:hidden border-t border-beige-200 bg-ivory animate-slide-down">
            <div className="px-6 py-5 space-y-5">
              <div>
                <span className="text-2xs tracking-widest2 text-stone-400 block mb-2">
                  دسته‌بندی
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`text-sm px-3.5 py-1.5 ${
                        category === cat
                          ? 'bg-ink text-ivory'
                          : 'text-stone-500 border border-beige-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-2xs tracking-widest2 text-stone-400 block mb-2">سایز</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setSize(null)}
                    className={`text-sm px-3 py-1.5 ${
                      size === null ? 'bg-ink text-ivory' : 'text-stone-500 border border-beige-200'
                    }`}
                  >
                    همه
                  </button>
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`text-sm px-3 py-1.5 ${
                        size === s ? 'bg-ink text-ivory' : 'text-stone-500 border border-beige-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-2xs tracking-widest2 text-stone-400 block mb-2">قیمت</span>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full text-sm bg-cream/60 border border-beige-200 px-3 py-2 text-ink"
                >
                  {priceRanges.map((r, i) => (
                    <option key={i} value={i}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="text-sm text-stone-500 flex items-center gap-1.5"
                >
                  <X size={14} /> پاک کردن فیلترها
                </button>
              )}
              <div className="text-sm text-stone-500">{filtered.length} لباس</div>
            </div>
          </div>
        )}
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-display text-2xl text-ink mb-3">لباسی پیدا نشد</p>
            <p className="text-sm text-stone-500 mb-8">فیلترها را تغییر بده یا پاک کن.</p>
            <button
              onClick={clearAll}
              className="text-sm text-ink underline underline-offset-4 hover:text-stone-600"
            >
              پاک کردن فیلترها
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filtered.map((dress, i) => (
              <Reveal key={dress.id} delay={(i % 4) * 80}>
                <DressCard dress={dress} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
