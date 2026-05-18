import { useState } from 'react'
import axios from 'axios'
import Spinners from '../component/Spinners'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { useEffect } from 'react';
import BooksTable from '../home/BooksTable';
import BookCard from '../home/BookCard';


export default function Home() {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false);
    const [showType,setShowtype]=useState('')

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data)
                setLoading(false)

            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }, [])
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg 
                    ' onClick={() => { setShowtype('table') }}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg 
                    ' onClick={() => { setShowtype('card') }}>
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? <Spinners/> : showType === 'table' ?(<BooksTable books={books}/>):(
                <BookCard books={books}/>
            )}
        </div>
    )
}
