import React, { useState, useEffect } from 'react';

export const recipientSearchBar = (props) => {

    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetch('/api/recipient')
        .then(res => res.json)
        .then(data => setSearchData(data))
    })

    return (
        <form>
            <label>recipients (optional):
                    <input type="text" onChange={handleFilter}/>
                </label>
                {filteredData.length!== 0 && (
                    <div className="dataResult">
                    {filteredData.map(() => {
                        return (
                            <dataItem onClick={replaceInput} />
                        )
                    })}
                </div>)}
        </form>
    )
}