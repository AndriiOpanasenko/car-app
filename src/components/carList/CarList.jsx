import { CarItem } from "../carItem/CarItem";
import s from "./CarList.module.scss";

export const CarList = ({ carsData }) => {
    return (
        <div className={s.list_wrapper}>
            {carsData.length
                ? carsData.map(({ id, name, price, image }) => (
                      <CarItem
                          key={id}
                          id={id}
                          name={name}
                          price={price}
                          image={image}
                      />
                  ))
                : "Not Found..."}
        </div>
    );
};
