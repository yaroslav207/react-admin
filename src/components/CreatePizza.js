/**
 * Created by админ on 24.03.2021.
 */
import React from 'react'
import './App.css';
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';



function CreatePizza(props) {
    return (
        <Creat title="Create Pizza" {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="url"/>
            </SimpleForm>
        </Creat>
    )
}
exports default CreatePizza