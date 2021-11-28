import instance from "../Config/axios"

export function getAll(){
    return instance.get("sites/MLA/search?category=MLA1055")
}

export function getById(id){
    return instance.get("items/"+id)
}