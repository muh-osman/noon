import BasicTable from "./../MUI/Table";
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

export default function Rainbow() {

  const data = useContext(DataContext)

  return (
    <BasicTable data={data[20]}/>
  )
}