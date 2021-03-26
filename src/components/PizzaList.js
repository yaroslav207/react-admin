/**
 * Created by админ on 21.03.2021.
 */
import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditVutton,
    DeleteAdmin
} from 'react-admin'

const PizzaList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='_id' />
            <TextField source='name' />
            <TextField source='url' />

        </Datagrid>
    </List>
}

export default PizzaList

