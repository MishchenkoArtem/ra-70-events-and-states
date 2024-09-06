import { data } from '../constans';

export default function ProjectList () {
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
