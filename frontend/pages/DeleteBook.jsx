import React,{useState} from 'react'
import BackButton from '../component/BackButton';
import Spinners from '../component/Spinners';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack'


export default function DeleteBook() {
  const [loading,setLoading]=useState(false)
   const navigate=useNavigate()
   const {id}=useParams()
    const {enqueueSnackbar}=useSnackbar()

   const handleDeleteBook=()=>{
    setLoading(true);
    axios.
    delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/')
      enqueueSnackbar('Book Deleted Successfully',{varient:'sucess'});
    }).catch((error)=>{
      setLoading(false)
      enqueueSnackbar('Error',{varient:'error'})

    })

   }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinners/> : ''}
      <div className='flex flex-col ittems-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You Want To Delte This Book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' 
        onClick={handleDeleteBook}>
            Yes,Delete It
        </button>
      </div>
    </div>
  )
}
