import React from 'react';

export const DataItem = (props) => {
    return (
        <button className="searchDataItem">
            {props.text}
        </button>
    )
}