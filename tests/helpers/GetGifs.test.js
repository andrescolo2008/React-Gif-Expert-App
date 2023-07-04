
import { number } from "prop-types";
import {getGifs} from "../../src/helpers/getGifs"
describe('pruebas en < GetGif.jsx >',()=>{

test('debe de retornar un arreglo de gifs', async () => { 

    const gifs= await getGifs('One Punch ')
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
//     expect(gifs[0]).toEqual({
// id:expect.any(String),
// title:expect.any(String),
// url:expect.any(String)
    })
    
})


test('debe de coincidir  el tipo de dato ', async () => { 

    const gifs= await getGifs('One Punch ')
    // console.log(gifs);
  
    expect(gifs[0]).toEqual({
id:expect.any(String),
title:expect.any(String),
url:expect.any(String)
    })
    
})



