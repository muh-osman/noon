import BasicTable from "./../MUI/Table";
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

export default function Web3Auth() {

  const data = useContext(DataContext)

  return (
    <BasicTable data={data[29]}/>
  )
}