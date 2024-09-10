export default function ProjectList ({data}) {
    const portfolioItem = data.map(function (currentValue) {
        return (
            <img className="portfolio__image" src={currentValue.img} alt="" />
        );
    });

    return (
        <div className='portfolio'>
            {portfolioItem}
        </div>
    );
};
