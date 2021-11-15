import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')


    const handleInputChange = (e) => {

            // console.log();
            setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{

            e.preventDefault();
            console.log('Submit hecho');
        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue,...cat]);
            setinputValue('');
        }
    }
    return (
        
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>
            <input 
                type="text"
                value = { inputValue }
                onChange = {handleInputChange}
            />
        </form>
        
    )
}

// para validar que se reciba siempre el setcategory
AddCategory.propTypes = { 
    setCategories : PropTypes.func.isRequired
}