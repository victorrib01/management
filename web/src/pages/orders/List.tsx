import React from 'react';

import ListComponent from '../../components/ListComponent';

function List() {
    return (
        <div id="page-orders">
            <ListComponent route="orders" columns={[{name:'id'},{name: 'total'},{name: 'cliente'},]} />
        </div>
    )
}

export default List;
