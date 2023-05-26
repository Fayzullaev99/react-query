import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { HomePage } from './components/Home.page';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries.page';
import DynamicParallel from './components/DynamicParallel.page';
import DependentQueries from './components/DependentQueries.page';
import PaginatedQueries from './components/PaginatedQueries.page';
import InfiniteQueries from './components/InfiniteQueries.page';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/super-heroes'}>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to={'/rq-super-heroes'}>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/rq-infinite' element={<InfiniteQueries />} />
          <Route path='/rq-paginated' element={<PaginatedQueries />} />
          <Route path='/rq-dependent' element={<DependentQueries email='sanjarfayzullaev99@gmail.com' />} />
          <Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1,3]} />} />
          <Route path='/rq-parallel' element={<ParallelQueries />} />
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"  />
    </QueryClientProvider>
  );
}

export default App;
