import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default ({ product: { nmModifGrp, idModif, arrModif}, onClick }) => {
    return(
        <TableRow>
            <TableCell>
                <span onClick={() => onClick(idModif)}>{ nmModifGrp }</span>
            </TableCell>
            <TableCell>
                {arrModif.map(arr => arr.nmModif+', ')}
            </TableCell>
        </TableRow>
    )
}