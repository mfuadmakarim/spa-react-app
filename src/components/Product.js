import React from 'react';

export default ({ product: { nmModifGrp, idModif, arrModif}, onClick }) => {
    return(
        <div>
            <span onClick={() => onClick(idModif)}>{ nmModifGrp } 
            ({arrModif.map(arr => arr.nmModif)})
            </span>
        </div>
    )
}