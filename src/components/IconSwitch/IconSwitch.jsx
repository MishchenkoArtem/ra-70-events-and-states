export default function IconSwitch ({ icon, onSwitch }) {
    return (
        <div className="material__container">
            <span 
                className="material-icons"
                onClick={onSwitch}
            >
                {icon.icon}
            </span>
        </div>
    );
};
