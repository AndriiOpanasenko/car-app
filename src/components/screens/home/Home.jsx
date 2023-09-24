// import s from "./Home.module.scss";

import { CarList } from "../../carList/CarList";
import { CreateCarForm } from "../../ui/create-car-form/CreateCarForm";

export const Home = ({ setCars, cars }) => {
    return (
        <>
            <div className="container">
                <CreateCarForm setCars={setCars} />
                <CarList carsData={cars} />
            </div>
        </>
    );
};
