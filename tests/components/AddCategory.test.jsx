import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en < AddCategory>',()=>{
test('debe de cambiar  el valor de la caja de texto', () => { 

render(<AddCategory onNewCategory={()=>{}} />);
const input= screen.getByRole('textbox');
fireEvent.input(input,{target:{value:'Saitama'}});

expect(input.value).toBe('Saitama');
// screen.debug()

   });

   test('debe de llamar onNewCategory si el input tiene un valor ', () => { 
const imputValue = 'Saitama';
const onNewCategory=jest.fn()

//TODO
      render(<AddCategory onNewCategory={onNewCategory} />);
      
      const input= screen.getByRole('textbox');
      const form= screen.getByRole('form');
      
      fireEvent.input(input,{target:{value:imputValue}});
      fireEvent.submit(form);

      // screen.debug()

      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(imputValue);
      
         });

         test('No debe de llamar onNewCategory si el input està vacío  ', () => {

            const onNewCategory=jest.fn()

            //TODO
                  render(<AddCategory onNewCategory={onNewCategory} />);

                  const form= screen.getByRole('form');
                  fireEvent.submit(form);
                  expect(onNewCategory).toHaveBeenCalledTimes(0)
                  expect(onNewCategory).not.toHaveBeenCalled();



         });
})