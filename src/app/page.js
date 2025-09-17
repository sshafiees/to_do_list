import Overview from '@/components/overview';
import Filters from './../components/filter';
import Search from '@/components/search';
export default function Home() {
  return (
    <div className="container mx-auto">
      <Filters />
      <Search />
      <Overview />
    </div>
  );
}
