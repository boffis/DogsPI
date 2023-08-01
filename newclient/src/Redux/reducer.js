import { FILTER_SOURCE,FILTER_TEMPER, ORDER_ALPH, ORDER_WEIGHT, ADD_DOG, ADD_TEMPERS } from "./types";

const initialState = {
    allDogs : [],
    sourceFilter : [],
    temperFilter : [],
    dogsShown : [],
    temperaments : []
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case FILTER_SOURCE:{
            let toFilter = []
            let done = []

            if (action.payload === "showAll") {
                toFilter = [...state.allDogs];
                done = toFilter.filter(dog=>{
                    state.temperFilter.some(dog2=>dog.id===dog2.id)
                })
            }
            else {
                toFilter = state.allDogs.filter((dog)=>!isNaN(dog.id))
                done = toFilter.filter(dog =>{
                    state.temperFilter.some(dog2=>dog.id===dog2.id)
                })
            }

            return({...state, sourceFilter:toFilter, dogsShown:done})
        }

        case FILTER_TEMPER:{
            let toFilter = []
            let done = []

            if (action.payload === "showAll") {
                toFilter = [...state.allDogs];
                done = toFilter.filter(dog=>{
                    state.temperFilter.some(dog2=>dog.id===dog2.id)
                })
            }
            else{
                toFilter = state.allDogs.filter((dog)=>{
                    dog.temperaments.includes(action.payload)
                })
                done = toFilter.filter(dog=>{
                    state.sourceFilter.some(dog2=>dog.id===dog2.id)
                })
            }

            return({...state, temperFilter:toFilter, dogsShown:done})
        }

        case ORDER_ALPH:{
            let orderedDogs = [...state.dogsShown]
            if (action.payload==='a'){
                orderedDogs.sort ((a,b) => {
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0
                })
            }
            else {
                orderedDogs.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); 
                    const nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0
                }
                )
            }

            return({
                ...state, dogsShown:orderedDogs
            })
        }

        case ORDER_WEIGHT:{
            let orderedDogs = [...state.dogsShown]
            if (action.payload==='a'){
                orderedDogs.sort((a,b)=>{
                    let weightsA = a.weight.split(' - ');
                    let avgA = weightsA.reduce((sum,num)=>{return(parseInt(sum)+parseInt(num))}, 0) / weightsA.length;
                    let weightsB = b.weight.split(' - ');
                    let avgB = weightsB.reduce((sum,num)=>{return(parseInt(sum)+parseInt(num))}, 0) / weightsB.length;
                    if (avgA<avgB){
                        return 1
                    }
                    if (avgA>avgB){
                        return -1
                    }
                    return 0
                })
            } else {
                
                orderedDogs.sort((a,b)=>{
                    let weightsA = a.weight.split(' - ');
                    let avgA = weightsA.reduce((sum,num)=>{return(parseInt(sum)+parseInt(num))}, 0) / weightsA.length;
                    let weightsB = b.weight.split(' - ');
                    let avgB = weightsB.reduce((sum,num)=>{return(parseInt(sum)+parseInt(num))}, 0) / weightsB.length;
                    if (avgA>avgB){
                        return 1
                    }
                    if (avgA<avgB){
                        return -1
                    }
                    return 0
                })
            
            return({
                ...state, dogsShown:orderedDogs
            })
            }
        }

        case ADD_DOG:{
            const copyAll = [...state.allDogs, ...action.payload]
            const copySource = [...state.sourceFilter, ...action.payload]
            const copyTemper = [...state.temperFilter, ...action.payload]
            const copyShown = [...state.dogsShown, ...action.payload]

            return({
                ...state, allDogs:copyAll, sourceFilter:copySource, temperFilter:copyTemper, dogsShown:copyShown
            })
        }

        case ADD_TEMPERS:{
            return (
                {...state, temperaments:action.payload}
            )
        }
        
        default:return{...state}
    }
}

export default reducer