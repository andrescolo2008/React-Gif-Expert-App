
import { renderHook, waitFor } from '@testing-library/react'
import{useFetchGifs} from '../../src/hooks/useFetchGifs'
describe('pruebas en < UseFetchGifs >',()=>{
test(' debe de regresar el estado inical de useFetchGifs', () => { 

const {result}=renderHook(() => useFetchGifs('One Punch ') );
// console.log(result);
const {images,isLoading} =result.current;

expect(images.length).toBe(0); //  0 porque el estado inicial del Hook es 0
expect(isLoading).toBeTruthy(); //  0 porque el estado inicial del Hook es 0
});

test(' debe de retornar un arreglo  de imágenes y isLoading en False', async () => { 

    const {result}=renderHook(() => useFetchGifs('One Punch ') );

await waitFor(
()=> expect (result.current.images.length).toBeGreaterThan(0)
);

    const {images,isLoading} =result.current;
    
    expect(images.length).toBeGreaterThan(0); //  0 porque el estado inicial del Hook es 0
    expect(isLoading).toBeFalsy(); //  0 porque el estado inicial del Hook es 0
    });

})