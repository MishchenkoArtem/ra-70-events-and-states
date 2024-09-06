export default function Toolbar (props) {
    
    return (
        <div className="toolbar">
            <button
                onClick={props.onSelectFilter}
                className="toolbar__button active"
                type="button">
                    All
            </button>
            <button
                onClick={props.onSelectFilter}
                className="toolbar__button"
                type="button">
                    Websites
            </button>
            <button
                onClick={props.onSelectFilter}
                className="toolbar__button" 
                type="button">
                    Flayers
            </button>
            <button
                onClick={props.onSelectFilter}
                className="toolbar__button" 
                type="button">
                    Business Cards
            </button>
        </div>
    );
};
