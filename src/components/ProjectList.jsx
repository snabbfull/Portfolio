export function ProjectList({ list, selected }) {
  if (selected === "All") {
    return (
      <div className="items-container">
        {list.map((item) => (
          <img className="list-img" key={item.id} src={item.img} />
        ))}
      </div>
    );
  } else {
    const filteredItems = list.filter((item) => item.type === selected);
    return (
      <div className="items-container">
        {filteredItems.map((item) => (
          <img className="list-item" key={item.id} src={item.img} />
        ))}
      </div>
    );
  }
}
