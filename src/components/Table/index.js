import React, { useContext } from "react";
import Body from "../Body";
import AreaContext from "../../utils/AreaContext";

const Table = () => {
    const context = useContext(AreaContext);

    return (

        <div className="table mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <Body />
            </table>
        </div>
    );
}

export default Table;