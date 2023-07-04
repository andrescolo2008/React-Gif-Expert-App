import { render,renderHook,screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import {onNewCategory} from '../src/components/AddCategory';
import { useState } from "react";



describe('pruebas en < GifExpertApp>',()=>{
test(' evaluar  onNewCategory useStates ', () => { 

render(<GifExpertApp onNewCategory={onNewCategory} />)

const {result}=renderHook(() =>GifExpertApp ('One Punch ') );
// screen.debug()
// console.log(result);
const {any} =result.current;

expect(any).toBe(undefined)

})

});