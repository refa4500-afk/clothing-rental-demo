export type Category = 'عروسی' | 'نامزدی' | 'مهمانی' | 'مراسم رسمی';

export interface Dress {
  id: string;
  name: string;
  brand: string;
  size: number;
  color: string;
  categories: Category[];
  rentalPrice: number;
  deposit: number;
  images: string[];
  description: string;
  popular?: boolean;
}

const img = (url: string) => url;

export const dresses: Dress[] = [
  {
    id: 'black-satin',
    name: 'Black Satin Dress',
    brand: 'Zara',
    size: 38,
    color: 'مشکی',
    categories: ['عروسی', 'مهمانی', 'مراسم رسمی'],
    rentalPrice: 890000,
    deposit: 2000000,
    images: [
      img('https://images.pexels.com/photos/33365173/pexels-photo-33365173.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/33365174/pexels-photo-33365174.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/36655752/pexels-photo-36655752.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/15272931/pexels-photo-15272931.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس ساتن مشکی با برش ساده و افتادگی شرمی‌دار؛ انتخابی هوشمندانه برای مراسم‌های رسمی و مهمانی‌های شبانه. پارچه مرغوب و دوخت تمیز، حس لوکس و در عین حال مینیمال می‌دهد.',
    popular: true,
  },
  {
    id: 'emerald-evening',
    name: 'Emerald Evening Dress',
    brand: 'Mango',
    size: 40,
    color: 'سبز زمردی',
    categories: ['عروسی', 'مهمانی', 'مراسم رسمی'],
    rentalPrice: 1150000,
    deposit: 2400000,
    images: [
      img('https://images.pexels.com/photos/33417650/pexels-photo-33417650.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/33417644/pexels-photo-33417644.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/30254625/pexels-photo-30254625.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/32503004/pexels-photo-32503004.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'گاون زمردی با طراحی کلاسیک و رنگی که جلب توجه می‌کند. مناسب برای عروس‌های مدرن و مهمانی‌های خاص که می‌خواهی متفاوت بدرخشی.',
    popular: true,
  },
  {
    id: 'champagne-gold',
    name: 'Champagne Dress',
    brand: 'Massimo Dutti',
    size: 38,
    color: 'شامپاینی',
    categories: ['نامزدی', 'مهمانی'],
    rentalPrice: 980000,
    deposit: 2100000,
    images: [
      img('https://images.pexels.com/photos/6236645/pexels-photo-6236645.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/20009866/pexels-photo-20009866.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/20009870/pexels-photo-20009870.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/6236122/pexels-photo-6236122.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس شامپاینی با درخشش ملایم و برش ظریف؛ برای شب‌هایی که می‌خواهی لوکس و در عین حال ملایم ظاهر شوی.',
    popular: true,
  },
  {
    id: 'velvet-black',
    name: 'Velvet Black Dress',
    brand: 'Reserved',
    size: 36,
    color: 'مشکی',
    categories: ['مهمانی', 'مراسم رسمی'],
    rentalPrice: 1200000,
    deposit: 2500000,
    images: [
      img('https://images.pexels.com/photos/36957122/pexels-photo-36957122.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/34427647/pexels-photo-34427647.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/34427639/pexels-photo-34427639.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/27816936/pexels-photo-27816936.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس مخمل مشکی با بافتی غنی و حسی از فاخر بودن. انتخابی بی‌نقص برای شب‌های سرد و مراسم‌های خاص.',
    popular: true,
  },
  {
    id: 'crimson-gown',
    name: 'Crimson Gown',
    brand: 'Mango',
    size: 40,
    color: 'قرمز',
    categories: ['عروسی', 'نامزدی', 'مهمانی'],
    rentalPrice: 1350000,
    deposit: 2600000,
    images: [
      img('https://images.pexels.com/photos/29625329/pexels-photo-29625329.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/29080965/pexels-photo-29080965.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/27874233/pexels-photo-27874233.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/7615906/pexels-photo-7615906.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'گاون قرمز دراماتیک با برش جسورانه و رنگی که همه نگاه‌ها را به خود جلب می‌کند. برای شب‌هایی که می‌خواهی فراموش‌نشدنی باشی.',
  },
  {
    id: 'midnight-blue',
    name: 'Midnight Blue Dress',
    brand: 'Zara',
    size: 38,
    color: 'سرمه‌ای',
    categories: ['مراسم رسمی', 'مهمانی'],
    rentalPrice: 920000,
    deposit: 2000000,
    images: [
      img('https://images.pexels.com/photos/30661278/pexels-photo-30661278.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/27677905/pexels-photo-27677905.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/27677909/pexels-photo-27677909.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/37015072/pexels-photo-37015072.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس سرمه‌ای با درخشش ملایم و رنگی شبیه آسمان شب؛ انتخابی شیک و آرام برای مراسم‌های رسمی.',
  },
  {
    id: 'ivory-bride',
    name: 'Ivory Bridal Gown',
    brand: 'Massimo Dutti',
    size: 38,
    color: 'عاجی',
    categories: ['عروسی', 'نامزدی'],
    rentalPrice: 1800000,
    deposit: 3500000,
    images: [
      img('https://images.pexels.com/photos/9004584/pexels-photo-9004584.png?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/27269998/pexels-photo-27269998.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/9936328/pexels-photo-9936328.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'گوان عروسی عاجی با تور ظریف و دوخت دستی؛ برای روزی که می‌خواهی مانند رویا بدرخشی. این لباس حس کلاسیک و مدرن را همزمان دارد.',
  },
  {
    id: 'rose-soiree',
    name: 'Rose Soirée Dress',
    brand: 'Reserved',
    size: 40,
    color: 'ورمیلیون',
    categories: ['نامزدی', 'مهمانی'],
    rentalPrice: 1050000,
    deposit: 2200000,
    images: [
      img('https://images.pexels.com/photos/32628117/pexels-photo-32628117.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/32628116/pexels-photo-32628116.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/32628115/pexels-photo-32628115.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/31589274/pexels-photo-31589274.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس صورتی پاستلی با طراحی کوتور و حس رمانتیک؛ مناسب برای نامزدی و مهمانی‌های بهاری.',
  },
  {
    id: 'noir-classic',
    name: 'Noir Classic Dress',
    brand: 'Zara',
    size: 36,
    color: 'مشکی',
    categories: ['مهمانی', 'مراسم رسمی'],
    rentalPrice: 780000,
    deposit: 1800000,
    images: [
      img('https://images.pexels.com/photos/5010636/pexels-photo-5010636.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/5010638/pexels-photo-5010638.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/36134135/pexels-photo-36134135.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/17631432/pexels-photo-17631432.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس مشکی کلاسیک با برش تمیز و خطی مینیمال؛ انتخابی همیشگی و مطمئن برای هر مراسمی.',
  },
  {
    id: 'golden-aura',
    name: 'Golden Aura Gown',
    brand: 'Mango',
    size: 42,
    color: 'طلایی',
    categories: ['نامزدی', 'مهمانی', 'مراسم رسمی'],
    rentalPrice: 1450000,
    deposit: 2800000,
    images: [
      img('https://images.pexels.com/photos/32678845/pexels-photo-32678845.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/20009888/pexels-photo-20009888.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/20009858/pexels-photo-20009858.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/20009882/pexels-photo-20009882.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'گاون طلایی با درخشش خیره‌کننده و حس جشن؛ برای شب‌هایی که می‌خواهی همانند خورشید بدرخشی.',
  },
  {
    id: 'emerald-sequin',
    name: 'Emerald Sequin Dress',
    brand: 'Massimo Dutti',
    size: 38,
    color: 'سبز زمردی',
    categories: ['مهمانی', 'مراسم رسمی'],
    rentalPrice: 1280000,
    deposit: 2500000,
    images: [
      img('https://images.pexels.com/photos/32065400/pexels-photo-32065400.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/13577766/pexels-photo-13577766.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/32503004/pexels-photo-32503004.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/26615811/pexels-photo-26615811.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس زمردی پولک‌دوزی‌شده با درخشش فراوان؛ برای مهمانی‌هایی که می‌خواهی زیر نورها بدرخشی.',
  },
  {
    id: 'black-pearl',
    name: 'Black Pearl Dress',
    brand: 'Reserved',
    size: 40,
    color: 'مشکی',
    categories: ['عروسی', 'مهمانی', 'مراسم رسمی'],
    rentalPrice: 1100000,
    deposit: 2300000,
    images: [
      img('https://images.pexels.com/photos/34427639/pexels-photo-34427639.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/3926175/pexels-photo-3926175.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/17152010/pexels-photo-17152010.jpeg?auto=compress&cs=tinysrgb&w=1200'),
      img('https://images.pexels.com/photos/36029250/pexels-photo-36029250.jpeg?auto=compress&cs=tinysrgb&w=1200'),
    ],
    description:
      'لباس مشکی مرواریدی با جزئیات ظریف و حس وینتیج؛ انتخابی شیک برای مراسم‌های رسمی و مهمانی‌های خاص.',
  },
];

export const categories: { name: Category; subtitle: string; image: string }[] = [
  {
    name: 'عروسی',
    subtitle: 'لباس‌های عروس و مهمان',
    image: 'https://images.pexels.com/photos/27603890/pexels-photo-27603890.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    name: 'نامزدی',
    subtitle: 'شب‌های خاص و دلبرانه',
    image: 'https://images.pexels.com/photos/32628117/pexels-photo-32628117.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    name: 'مهمانی',
    subtitle: 'برای درخشش در جمع',
    image: 'https://images.pexels.com/photos/36655752/pexels-photo-36655752.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    name: 'مراسم رسمی',
    subtitle: 'شیک و حرفه‌ای',
    image: 'https://images.pexels.com/photos/33365174/pexels-photo-33365174.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

export const sizes: number[] = [36, 38, 40, 42];

export const priceRanges = [
  { label: 'همه', min: 0, max: Infinity },
  { label: 'زیر ۱ میلیون', min: 0, max: 999999 },
  { label: '۱ تا ۱.۵ میلیون', min: 1000000, max: 1500000 },
  { label: 'بیش از ۱.۵ میلیون', min: 1500001, max: Infinity },
];

export function formatPrice(price: number): string {
  return price.toLocaleString('fa-IR');
}

export function getDressById(id: string): Dress | undefined {
  return dresses.find((d) => d.id === id);
}
