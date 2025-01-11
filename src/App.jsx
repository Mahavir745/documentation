import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from "react-router-dom"
import "./App.css"
import DataStoreProvider from './store/AllDataStore'

const App = () => {
  return (
    <DataStoreProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </DataStoreProvider>
  )
}

export default App