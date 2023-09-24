import { Link } from "react-router-dom";
import s from "./CarItem.module.scss";

export const CarItem = ({ id, name, price, image }) => {
    return (
        <>
            <div key={id} className={s.article_block}>
                <div>
                    <div className={s.image_item}>
                        <img src={image} alt={name} />
                    </div>
                    <div className={s.article_info}>
                        <h2>{name}</h2>
                        <p>
                            Price:{" "}
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                currencyDisplay: "narrowSymbol",
                            }).format(price)}
                        </p>
                    </div>
                </div>

                <Link to={`/car/${id}`}>
                    <button>Read more</button>
                </Link>
            </div>
        </>
    );
};
