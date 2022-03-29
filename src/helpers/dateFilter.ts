// import { items } from "../data/items";
import { Item } from "../types/Item";

export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (date: string, fullList: Item[]): Item[] =>{
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in fullList){
        if(
            fullList[i].date.getFullYear() === parseInt(year) &&
            (fullList[i].date.getMonth() + 1) === parseInt(month)
 
        ){
            newList.push(fullList[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date):string =>{
    let year = date.getFullYear();
    let month = String(date.getMonth()).length < 2 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    let day = String(date.getDay()).length < 2 ? `0${date.getDay()}` : date.getDay();
    return `${day}/${month}/${year}`;
}

export const convertDate = (date: string):string =>{
    let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return `${months[ Number(date.split('-')[1]) - 1]} de ${date.split('-')[0]}`;
}

export const newDateAdjusted = (dateField: string)=>{
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}