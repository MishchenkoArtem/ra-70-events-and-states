export default function ProjectList ({ dataElements }) {
    return (
        <div className="portfolio">
            {dataElements.map((item) => {
                return (
                    <img
                        className="portfolio__image"
                        src={item.img}
                        alt={item.category}
                    />
                );
            })};
        </div>
    );
}