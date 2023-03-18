import BasicTable from "./../MUI/Table";
import { useContext } from "react"
import { DataContext } from "../context/DataProvider" 

export default function MyCrypto() {

  const data = useContext(DataContext)

  return (
    <BasicTable data={data[15]}/>
  )
}