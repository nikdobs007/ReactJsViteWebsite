import React, { useContext, useReducer, useEffect }  from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const API = "https://dummyjson.com/products";

const initialState = {
    name: "",
    image: "",
    services: [],
};


const AppProvider =  ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "ReactJs Website",
                    image: "./images/hero.svg",
                }
            }
        )
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "Nikunj Dobariya",
                    image: "./images/about1.svg",
                }
            }
        )
    }
    
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type:"GET_SERVICES", payload:data.products })
        } catch (error) {
            console.log(error);
        }
    }

    // Call API 
    useEffect(() => {
       getServices(API);
    }, [])
    


    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext};