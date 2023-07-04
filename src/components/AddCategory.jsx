import { useState } from "react"
 import PropTypes from 'prop-types'

export const AddCategory = ( {onNewCategory}) =>{

 const [ inputValue ,setInputValue ] = useState('')

const onInputChange=({target}) =>{
    setInputValue(target.value);
}

const onSubmit = (event ) =>{


    event.preventDefault();
    if (inputValue.trim().length<=1) return;// esto evita quealpresionar entre o escribir unaletra  se cree un espacio vacío
    
    //console.log(inputValue);
    //setCategories (..... inpValue)
    // setCategory(categories =>[ inputValue,...categories])
    setInputValue(''); // al ingresar el nombre del gif se borra del input y ahora este queda limpio. 
    onNewCategory(inputValue.trim() );

}
    return(

        <h1> ¿Qué Gif Quiere buscar ?

<form onSubmit={onSubmit } aria-label="form" >

<input 
        type="text "
        placeholder= {'Introduzca el nombre aquí '}
        value=  {inputValue}
        onChange={onInputChange}
        />
</form>
        </h1>
       
    )
}

AddCategory.protoTypes ={
    onNewCategory:PropTypes.func.isRequired,
} 