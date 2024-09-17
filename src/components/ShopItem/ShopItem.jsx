export default function ShopItem ({cards, icon}) {
    console.log(icon)
    const renderBlock = cards.map((item) => {
        return (
            <div className="card__container card__container_block">
                <h2 className="card__title">{item.name}</h2>
                <h3 className="card__subtitle">{item.color}</h3>
                <img className="card__image" src={item.img} alt={item.name} />
                <div className="card__wrapper">
                    <span className="card__price">{`$${item.price}`}</span>
                    <button className="card__button">Add to card</button>
                </div>
            </div>
        );
    });

    const renderHorizont = cards.map((item) => {
        return (
            <div className="card__container card__container_horizont">
                <img className="card__image card__image_horizont" src={item.img} alt={item.name} />
                <h2 className="card__title">{item.name}</h2>
                <h3 className="card__subtitle">{item.color}</h3>
                <span className="card__price">{`$${item.price}`}</span>
                <button className="card__button">Add to card</button>
            </div>
        );
    });

    return (
        <div className="card">
            {icon.icon === 'view_list' ? renderBlock : renderHorizont}
        </div>
    );
};
