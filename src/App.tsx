import * as C from './App.styles';
import { useState, useEffect } from 'react';
import { TableArea } from './components/TableArea';
import {Item} from './types/Item';
import { categories } from './data/categories';
import { InfoArea } from './components/InfoArea';
import { AddItemComponent } from './components/AddItemCompoent';
import { getCurrentMonth,filterListByMonth } from './helpers/dateFilter';

const App = () => {
  const [list,setList] = useState<Item[]>([]);
  const [filteredList,setFilteredList] = useState<Item[]>([]);
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);

  const handleMonthChange = (newMonth: string)=>{
    setCurrentMonth(newMonth);
  }
  const handleAddItem = (item: Item)=>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(()=>{
    setFilteredList(filterListByMonth(currentMonth,list));
  },[list,currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount+=filteredList[i].value;
      }else{
        incomeCount+=filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filteredList]);

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth = {currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <AddItemComponent onAdd={handleAddItem}/>

        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;