export function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
          type="button"
          className={`filters-btn${selected === filter ? " filters-btn--active" : ""}`}
          key={filter}
          onClick={() => onSelectFilter(filter)}
          aria-pressed={selected === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}