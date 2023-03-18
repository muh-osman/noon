import BasicTable from "./../MUI/Table";
import { useContext } from "react"
import { DataContext } from "../context/DataProvider" 

export default function CoinWallet() {

  const data = useContext(DataContext)

  return (
    <BasicTable data={data[6]}/>
  )
}