import { useState } from "react";
import { AddCategory,GitGrid } from "./components";



export const GifExpertApp= ()=>{

   const [categories, setCategories ] = useState([' One punch ']);

   const onAddCategory = (newCategory ) =>{

    if( categories.includes(newCategory)) return;
    
console.log(newCategory);

    // console.log('valorant');
// 1ra forma para introducir un nueva categoría//
  setCategories([newCategory])
// 2da forma de  introducir una nueva categoría setCategories( cat =>[...cat,'valorant'])
}
    
  
    return (
        <>
        <h1>GifExpertApp</h1>

           < AddCategory 
       
               onNewCategory={(newCategory)=>onAddCategory(newCategory)}
           />
                {
                categories.map((category )=> (
                        <GitGrid 
                        key={category}
                        category={category}
                        />
                       ))
                }
        </>
    )
};

