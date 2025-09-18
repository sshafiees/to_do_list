import Overview from '@/components/overview';
import Filters from './../components/filter';
import Search from '@/components/search';
import TasksList from '@/components/tasks';
export default function Home() {
  return (
    <div className="container mx-auto">
      <Filters />
      <Search />
      <Overview />
      <TasksList />
    </div>
  );
}
