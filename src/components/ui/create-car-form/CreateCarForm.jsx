import { useState } from "react";
import s from "./CreateCarForm.module.scss";

const clearData = {
    name: "",
    price: "",
    image: "",
};

export const CreateCarForm = ({ setCars }) => {
    const [data, setData] = useState(clearData);

    const createCar = (e) => {
        e.preventDefault();

        if (data.name.length) {
            setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);

            setData(clearData);
        } else {
            alert("Please fill the fields above");
        }
    };

    return (
        <form className={s.main_form}>
            <input
                type="text"
                placeholder="Add name of your car"
                onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                }
                value={data.name}
            />
            <input
                type="text"
                placeholder="Add price"
                onChange={(e) =>
                    setData((prev) => ({ ...prev, price: e.target.value }))
                }
                value={data.price}
            />
            <input
                type="text"
                placeholder="Add a link to a photo of the car"
                onChange={(e) =>
                    setData((prev) => ({ ...prev, image: e.target.value }))
                }
                value={data.image}
            />
            <button onClick={(e) => createCar(e)}>Create car</button>
        </form>
    );
};
