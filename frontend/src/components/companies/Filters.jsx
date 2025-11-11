import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './companiesReducer';
const INDUSTRY_OPTIONS = [
  '',
  'Information Technology (IT) / Software Development',
  'Healthcare & Pharmaceuticals',
  'Finance & Banking',
  'Education & Training',
  'E-Commerce & Retail',
];
export default function Filters() {
  const filters = useSelector(state => state.companies.filters);
  const dispatch = useDispatch();

  return (
    <div className="filters-section">
      <input
        type="text"
        placeholder="Search company name"
        value={filters.name}
        onChange={e => dispatch(setFilter({ name: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={e => dispatch(setFilter({ location: e.target.value }))}
      />
     
        <select
        value={filters.industry}
        onChange={e => dispatch(setFilter({ industry: e.target.value }))}
      >
        {INDUSTRY_OPTIONS.map((industry) => (
          <option key={industry} value={industry}>
            {industry === '' ? 'All Industries' : industry}
          </option>
        ))}
      </select>
    </div>
  );
}
