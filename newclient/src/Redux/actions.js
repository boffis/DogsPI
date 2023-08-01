import { FILTER_SOURCE,FILTER_TEMPER, ORDER_ALPH, ORDER_WEIGHT, ADD_DOG, ADD_TEMPERS } from "./types";

export const filterSource = (source) =>{
    return({
        type:FILTER_SOURCE,
        payload:source
    })
}
export const filterTemper = (temper) =>{
    return({
        type:FILTER_TEMPER,
        payload:temper
    })
}
export const orderAlph = (direction) =>{
    return({
        type:ORDER_ALPH,
        payload:direction
    })
}
export const orderWeight = (direction) =>{
    return({
        type:ORDER_WEIGHT,
        payload:direction
    })
}
export const addDog = (dog) =>{
    return({
        type:ADD_DOG,
        payload:dog
    })
}
export const addTempers = (tempers) =>{
    return({
        type:ADD_TEMPERS,
        payload:tempers
    })
}