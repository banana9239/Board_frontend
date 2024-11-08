
import axios from "axios"
import {QueryFunctionContext} from "@tanstack/react-query"
import Cookies from "js-cookie";



const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true,
})

const getCSRFToken = ():string | undefined => {
    return Cookies.get('csrftoken');
}



export async function getPosts({queryKey}:QueryFunctionContext){
    const [_, largePk, mediumPk, smallPk, boardPk] = queryKey;
    const response = await instance.get(`posts/board/${boardPk}`)
    return response.data;
}

export async function getPost({queryKey}:QueryFunctionContext){
    const [_, postPk] = queryKey;
    const response = await instance.get(`posts/${postPk}`)
    return response.data;
}

export async function getLargeCategories(){
    const response = await instance.get('boards/largeCategoryList')
    return response.data;
}

export async function getMediumCategories({queryKey}:QueryFunctionContext){
    const [_,largePk] = queryKey;
    const response = await instance.get(`boards/${largePk}/mediumCategoryList`)
    return response.data;
}

export async function getSmallCategories({queryKey}:QueryFunctionContext){
    const [_, largePk, mediumPk] = queryKey;
    const response = await instance.get(`boards/${mediumPk}/smallCategoryList`)
    return response.data;
}

export async function getboards({queryKey}:QueryFunctionContext){
    const [_, largePk, mediumPk, smallPk] = queryKey;
    const response = await instance.get(`boards/${smallPk}/boards`)
    return response.data;
}

export async function getComments({queryKey}:QueryFunctionContext){
    const [_, postPk] = queryKey;
    const response = await instance.get(`posts/${postPk}/comment`)
    return response.data;
}

export const getMe = () => instance.get('users/me').then(res => res.data);

export const logOut = () => instance.post(
    'users/log-out',
    null,
    {
        headers: {
            'X-CSRFToken': getCSRFToken(),
        }
    }
).then(res => res.data);

export const githubLogin = (code:string) => instance.post(
    'users/github',
    {code},
    {
        headers: {
            'X-CSRFToken': getCSRFToken(),
        }
    }
).then(res => res.status);