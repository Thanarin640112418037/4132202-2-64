import React from "react";

const getTable = (car) => {};

function Table () {
    const Car = [

        {id: 1, brand : "toyota", year: 2010}
        {id: 1, brand : "mazda", year: 2012}
    ];

    return (
        <table>
            <tbody>{getTable(car)}</tbody>
        </table>
    );


}

export default Table
    



