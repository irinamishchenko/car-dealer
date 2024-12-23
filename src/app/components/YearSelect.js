const YearSelect = ({ selectedYear, setSelectedYear }) => {
  const years = [];

  for (let i = 2015; i <= 2024; i++) {
    years.push(i);
  }

  return (
    <div className="flex items-center gap-10">
      <label htmlFor="year-select">Select the year:</label>
      <select
        id="year-select"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
