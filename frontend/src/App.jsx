import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateBooks from '../pages/CreateBooks'
import EditBook from '../pages/EditBook'
import DeleteBook from '../pages/DeleteBook'
import Showbook from '../pages/ShowBook'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBooks/>}/>
        <Route path='/books/details/:id' element={<Showbook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
