export default function Toolbar (props) {
    return (
        <div className="toolbar">
            <button
                onClick={props.onSelectFilter}
                className={`toolbar__button ${props.selected.classValue}`}
                type="button">
                    All
            </button>
            <button
                onClick={props.onSelectFilter}
                className={`toolbar__button ${props.selected.classValue}`}
                type="button">
                    Websites
            </button>
            <button
                onClick={props.onSelectFilter}
                className={`toolbar__button ${props.selected.classValue}`}
                type="button">
                    Flayers
            </button>
            <button
                onClick={props.onSelectFilter}
                className={`toolbar__button ${props.selected.classValue}`}
                type="button">
                    Business Cards
            </button>
        </div>
    );
};
