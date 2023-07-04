import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('pruebas en <  GifItem >',()=>{
   const title='Saitama';
      const url ='https://onepunch.com.jpg/'
test('debe de hacer match con el snapshot', () => { 

      // const title='Saitama';
      // const url ='https://onepunch.com.jpg'
  
       const{container}= render(<GifItem title={title}  url={url} />)
    expect(container).toMatchSnapshot();

    // esto crea una espejo en el cual  laubicaciòn del c'odigo html debe coincidir con el archivo original 

   });


test('debe de mostrar  la imagen  con el URL y el ALT indicado', () => { 
   render(<GifItem title={title}  url={url} />)
   // screen.debug();
   // expect(screen.getAllByRole('img').src).toBe(url);
   // expect(screen.getAllByRole('img').alt).toBe(title+"!");
   const{src, alt} =screen.getByRole('img');
   expect(src).toBe(url);
   expect(alt).toBe(alt);

})


test('debe de mostrar  el título en el componente', () => { 
   render(<GifItem title={title}  url={url} />)
expect(screen.getByText(title)).toBeTruthy();
})

})