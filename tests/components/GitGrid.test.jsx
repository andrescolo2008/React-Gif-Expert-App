const { render, screen } = require("@testing-library/react")
import {GitGrid} from '../../src/components/GitGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en < GitGrid>',()=>{
const category= 'One Punch'

useFetchGifs.mockReturnValue({
    images:[],
    isLoading:true
    
    });

    test('debe de mostrar un loading inicialmente ', () => { 

  


        render (< GitGrid category={category}  />);
// screen.debug();
expect(screen.getByText('Cargando...'));
expect(screen.getByText(category));

})

test('debe de mostrar  items cuando se cargan las imágenes  de useFetchGifs  ', () => { 
   
const gifs =[{
    id:'abc',
    title:'Saitama',
    url:'https//localhost/saitama.jpg'
},
{
    id:'123',
    title:'dragon ball',
    url:'https//localhost/dragon-ball.jpg'
},
]

    useFetchGifs.mockReturnValue({
        images:gifs,
        isLoading:false
        });
   
    render (< GitGrid category={category}  />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
    
    
    })

})