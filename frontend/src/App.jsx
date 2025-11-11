
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Filters from './components/companies/Filters';
import CompaniesList from './components/companies/CompaniesList';
import './styles.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Companies Directory</h1>
        <Filters />
        <CompaniesList />
      </div>
    </Provider>
  );
}

