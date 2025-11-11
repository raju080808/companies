import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies, showMore, showAll } from './companiesReducer';
import CompanyCard from './CompanyCard';

// List, paging and error/loading UI
export default function CompaniesList() {
  const { all, status, error, filters, displayCount } = useSelector(state => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getCompanies());
  }, [status, dispatch]);

const filtered = all.filter(c =>
  (c.name || '').toLowerCase().includes((filters.name || '').toLowerCase()) &&
  (c.location || '').toLowerCase().includes((filters.location || '').toLowerCase()) &&
  (
    !filters.industry || (c.industry || '') === filters.industry
  )
);

  const visible = filtered.slice(0, displayCount);

  if (status === 'loading') return <div className="loading">Loading companies...</div>;
  if (status === 'failed') return <div className="error">{error}</div>;
 
  return (
    <div>
      <div className="companies-list">
        {visible.map(company => <CompanyCard key={company.id} company={company} />)}
      </div>
      <div className="button-row">
        {displayCount < filtered.length && (
          <button onClick={() => dispatch(showMore())}>Show More</button>
        )}
        {displayCount < filtered.length && (
          <button onClick={() => dispatch(showAll())}>Show All</button>
        )}
      </div>
    </div>
  );
}
