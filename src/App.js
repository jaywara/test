import './style/style.css'
import Transection from './components/Transection'
import FormComponent from './components/FormComponent'
import { useState,useEffect } from 'react'
import DataContext from './components/DataContext'
import ReportComponent from './components/ReportComponent'

function App() {
  const initdata = [
    {id:"1",title:"ค่ารักษาพยาบาล",amount:20000},
    {id:"2",title:"ค่าน้ำมัน",amount:-2000},
    {id:"3",title:"ค่าอาหาร",amount:-2000},
    {id:"4",title:"ค่ารถ",amount:200},
  ]
  const [items,setItems] = useState(initdata)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
      return[newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map( items => items.amount )
    const income = amounts.filter(element => element>=0).reduce((total,element)=>total+=element,0)
    const expense = amounts.filter(element => element<0).reduce((total,element)=>total+=element,0)
    setReportIncome(income)
    setReportExpense(expense)
  },[items,setReportIncome,setReportExpense])
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
        <h1> โปรแกรมบัญชีรายรับ-รายจ่าย </h1>
        <ReportComponent/>  
        <FormComponent onAddItem={onAddNewItem}/>
        <Transection items = {items}/>
      </div>
    </DataContext.Provider>
  )
}

export default App;
