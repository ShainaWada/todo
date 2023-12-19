// eslint-disable-next-line react/prop-types
const Filter = ({ onFilterChange }) => {
  const handleChange = (event) => {
    const newFilter = event.target.value;
    onFilterChange(newFilter);
  };
  return (
    <>
      <div className="todo-filter">
        <input
          type="radio"
          name="filter"
          value="all"
          defaultChecked
          onChange={handleChange}
        />
        <label>All</label>
        <input
          type="radio"
          name="filter"
          value="todo"
          onChange={handleChange}
        />
        <label>ToDo</label>
        <input
          type="radio"
          name="filter"
          value="done"
          onChange={handleChange}
        />
        <label>Done</label>
      </div>
    </>
  );
};

export default Filter;
