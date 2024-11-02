import axios from "axios"
import {QueryFunctionContext} from "@tanstack/react-query"

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export async function getPosts({queryKey}:QueryFunctionContext){
    const [_, largePk, mediumPk, smallPk, boardPk] = queryKey;
    const response = await instance.get(`posts/board/${boardPk}`)
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