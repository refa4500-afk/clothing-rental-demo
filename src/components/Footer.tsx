import { useRouter } from '@/router';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-ink text-ivory mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-display font-700 tracking-tightest">نِستا</span>
              <span className="text-2xs tracking-widest2 text-stone-400 mt-2">NESTA</span>
            </div>
            <p className="text-stone-400 text-sm leading-loose max-w-md">
              نِستا، اولین پلتفرم اجاره لباس مراسم در ایران. لباس‌های خاص را برای مراسم‌های خاص
              بپوش، بدون اینکه مجبور باشی آنها را برای همیشه بخری.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest2 text-stone-400 mb-5">کاوش</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigate({ name: 'home' })} className="hover:text-beige-300 transition-colors">
                  خانه
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ name: 'catalog' })} className="hover:text-beige-300 transition-colors">
                  کمد لباس
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ name: 'catalog', category: 'عروسی' })} className="hover:text-beige-300 transition-colors">
                  عروسی
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ name: 'catalog', category: 'مهمانی' })} className="hover:text-beige-300 transition-colors">
                  مهمانی
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest2 text-stone-400 mb-5">تماس</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>تهران، خیابان فرشته</li>
              <li dir="ltr" className="text-right">۰۲۱ ۲۲۸۸ ۱۲۳۴</li>
              <li>hello@nesta.ir</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-600/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xs text-stone-500 tracking-wide">
            © ۱۴۰۵ نِستا. تمام حقوق محفوظ است.
          </p>
          <p className="text-2xs text-stone-500 tracking-wide">
            ساخته‌شده برای نمایش سرمایه‌گذار
          </p>
        </div>
      </div>
    </footer>
  );
}
