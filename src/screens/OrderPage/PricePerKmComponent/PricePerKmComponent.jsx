import React from "react";
import "./PricePerKmComponent.scss";

const PricePerKmComponent = ({ order, price, round, type }) => {
    const pricePerKm = round(parseInt(price) / order.distance, 2).toFixed(2);

    const getBackgroundColor = () => {
        if (pricePerKm < 1) {
            return "#FF0000"; // red
        } else if (pricePerKm >= 1 && pricePerKm < 1.1999) {
            return "blue"; // orange
        } else if (pricePerKm >= 1.2 && pricePerKm < 1.2999) {
            return "rgb(234, 230, 15)"; // yellow
        } else if (pricePerKm >= 1.3) {
            return "green"; // green
        }
    };

    const getTextColor = () => {
        if (pricePerKm < 1) {
            return "white"; // red
        } else if (pricePerKm >= 1 && pricePerKm < 1.1999) {
            return "white"; // orange
        } else if (pricePerKm >= 1.2 && pricePerKm < 1.2999) {
            return "black"; // yellow
        } else if (pricePerKm >= 1.3) {
            return "white"; // green
        }
    };

    return (
        <>
            {type === "price" && (
                <div
                    className="order-details__priceperkm"
                    style={{
                        backgroundColor: getBackgroundColor(),
                        color: getTextColor(),
                    }}
                >
                    <span className="order-details__priceperkm_text">
                        {pricePerKm} Eur/km
                    </span>
                </div>
            )}
            {type === "table" && (
                <div
                    className="order-details__priceperkm"
                    style={{
                        backgroundColor: getBackgroundColor(),
                        color: getTextColor(),
                    }}
                >
                    <span className="order-details__priceperkm_text">
                        {pricePerKm}
                    </span>
                </div>
            )}
            {/* {type === "table" && <div>{pricePerKm}</div>} */}
        </>
    );
};

export default PricePerKmComponent;