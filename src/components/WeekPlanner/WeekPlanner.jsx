import { getISOWeek } from "date-fns";
import { useState } from "react";
import "./WeekPlanner.scss";
// import { generateDatesArray } from "./dateFunctions";

export const WeekPlanner = () => {
    const date = new Date();
    const [week, setWeek] = useState(getISOWeek(date));
    const [datesArray, setDatesArray] = useState(
        generateDatesArray(date, week)
    );

    const handleWeekChange = (newWeek) => {
        setWeek(newWeek);
        setDatesArray(generateDatesArray(date, newWeek));
    };

    return (
        <>
            <h1>Week planner</h1>

            <div className="week-number">
                <div className="week-number__container">
                    <button
                        type="button"
                        className="week-number__btn"
                        onClick={() => handleWeekChange(week - 1)}
                    >
                        &lt;
                    </button>
                    <div className="week-number__number">{week}</div>
                    <button
                        type="button"
                        className="week-number__btn"
                        onClick={() => handleWeekChange(week + 1)}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className="week">
                <div className="week__day-list">
                    <div className="row">
                        {datesArray.map(([day, date]) => (
                            <div className="col week__day-container">
                                <div className="week__day text-center">
                                    {day}
                                </div>
                                <div className="week__date text-center">
                                    {date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// Function to generate the array of dates based on the week number
export const generateDatesArray = (currentDate, currentWeek) => {
    const weekDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const weekStartDate =
        currentDate.getDate() -
        currentDate.getDay() +
        1 +
        (currentWeek - getISOWeek(currentDate)) * 7;

    return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(currentDate);
        day.setDate(weekStartDate + i);
        return [weekDayNames[i], formatDate(day)];
    });
};

// Function to format the date as "YYYY-MM-DD"
export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
    }`;
};
