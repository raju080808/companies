export default function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>Location: {company.location}</p>
      <p>Industry: {company.industry}</p>
      <p>Size: {company.size}</p>
    </div>
  );
}