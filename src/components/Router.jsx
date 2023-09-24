import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home/Home";
import { CarDetail } from "./screens/car-detail/CarDetail";
import { useState } from "react";
import { cars as carsData } from "../api/cars.data";
import { Header } from "./header/Header";
import { About } from "./screens/about/About";
import { Contacts } from "./screens/contacts/Contacts";

export const Router = () => {
    const [cars, setCars] = useState(carsData);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home setCars={setCars} cars={cars} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route
                        path="/car/:id"
                        element={<CarDetail cars={cars} />}
                    />
                    <Route path="*" element={<div>Not Found...</div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
