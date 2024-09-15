export default function Toolbar ({ selected, filters, onSelectFilter }) {
    return (
        <div className="toolbar">
            { filters.map((item) => {
                return (
                    <button
                        className={`toolbar__button ${selected === item.title || selected.selected === item.title ? 'active' : 'All'}`}
                        onClick={ onSelectFilter }
                    >
                        {item.title}
                    </button>
                );
            })}
        </div>
    );
}