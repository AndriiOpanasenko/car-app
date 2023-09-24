/* eslint-disable react-hooks/exhaustive-deps */

import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./CarDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const CarDetail = ({ cars }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const filteredCarItem = useMemo(
        () => cars.filter((car) => car.id == id),
        [cars]
    );

    return (
        <>
            {filteredCarItem.length
                ? filteredCarItem.map(({ id, name, price, image }) => (
                      <div key={id} className={s.preview_page}>
                          <img src={image} alt={name} />
                          <div className="container">
                              <div className={s.preview_page_info}>
                                  <button
                                      className={s.back_btn}
                                      onClick={() => {
                                          navigate(-1);
                                      }}
                                  >
                                      <FontAwesomeIcon icon={faArrowLeft} />
                                      Back
                                  </button>
                                  <h2>{name}</h2>
                                  <p>
                                      {new Intl.NumberFormat("en-US", {
                                          style: "currency",
                                          currency: "USD",
                                          currencyDisplay: "narrowSymbol",
                                      }).format(price)}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))
                : "Not Found..."}
        </>
    );
};
