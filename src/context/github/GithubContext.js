import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({ children }) => {
    
    
    const initialState = {
        users: [],
        user: {},
        repos:[],
        loading: false
        
    }
    
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // set loading to true
    const setLoading = () => {
        dispatch({
            type:'SET_LOADING',
        })
    }
    // search inputed users
    const searchUsers = async ( text ) => {
        setLoading()

        const params = new URLSearchParams({
            q:text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })

        
        const {items} = await response.json()
        
        
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // get selected user
    const getUser = async ( login ) => {
        setLoading()

        

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })
        
        if(response.status === 404) {

            window.location ='/notfound'
        } else{
            
            const data = await response.json()
            
        
            dispatch({
                    type: 'GET_USER',
                    payload: data,
                })
        }
        
        
    }

    const clearUsers = () => {
        dispatch({
            type:'CLEAR_USERS',
            })
    }

    
    // get  user repos
    const getUserRepos = async ( login ) => {
        
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })

        
        
        if(response.status === 404) {

            window.location ='/notfound'
        } else{
            
            const data = await response.json()
            console.log(data);
        
            dispatch({
                    type: 'GET_USER_REPOS',
                    payload: data,
                })
        }
        
        
    }

    


    return (
        <GithubContext.Provider value={{
            ...state,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            { children }
        </GithubContext.Provider>
    )
}
export default GithubContext