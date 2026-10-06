import { RouterProvider, useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ProductPage } from '@/pages/ProductPage';
import { ReservationPage } from '@/pages/ReservationPage';

function Pages() {
  const { route } = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {route.name === 'home' && <HomePage />}
        {route.name === 'catalog' && <CatalogPage initialCategory={route.category} />}
        {route.name === 'product' && <ProductPage id={route.id} />}
        {route.name === 'reservation' && (
          <ReservationPage id={route.id} startDate={route.startDate} endDate={route.endDate} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  );
}
