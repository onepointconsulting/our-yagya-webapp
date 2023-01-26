import { createContext, useReducer } from 'react'
import i18n from 'i18next'

export const OurYagyaContext = createContext({})

export const OUR_YAGYA_ACTIONS = {
    SET_LANGUAGE: 'SET_LANGUAGE'
}

const languageReducer = (state, action) => {
    switch (action.type) {
        case OUR_YAGYA_ACTIONS.SET_LANGUAGE:
            i18n.changeLanguage(action.payload.currentLanguage);
            return {
                ...state,
                currentLanguage: action.payload.currentLanguage
            }
    }
}

export const OurYagyaContextProvider = props => {
    const [languageData, dispatchLanguageData] = useReducer(
        languageReducer, {
            currentLanguage: "en"
        }
    )
    return (
        <OurYagyaContext.Provider value={{
            languageData, dispatchLanguageData
        }}>
            {props.children}
        </OurYagyaContext.Provider>
    )
}