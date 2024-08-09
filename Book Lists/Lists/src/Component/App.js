import React , {useState , useEffect} from 'react'
import './style.css'
import View from './View'
const getDataFromLs = () => {
    const data = localStorage.getItem('books')
    if(data){
        return JSON.parse(data)
    }else{
        return [] ;
    }
}


function App(){
    const [books , setBooks] = useState(getDataFromLs())

    const [title , setTitle] = useState('')
    const [author , setAuthor] = useState('')
    const [number , setNumber] = useState('')

    const deleteBook = (number) => {
        const filterBooks = books.filter((element , index ) => {
            return element.number !== number
        })
        setBooks(filterBooks)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let book = {
            title ,
            author ,
            number
        }

        setBooks([...books , book])
        // console.log(books);
    }

    useEffect(() => {
        localStorage.setItem('books' , JSON.stringify(books))
    } , [books])

    return(
        <div className="wrapper">
            <h2>
        لیست کتاب ها
            </h2>
            <p>
            کتاب های جدید خود را وارد کنید.
            </p>
            <div className="main">
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>عنوان</label>
                            <input  type="text"
                             className="form-control" 
                             required
                             onChange={(e) => setTitle(e.target.value)}

                             />
                        </div>
                        <div className="form-group mt-4">
                            <label>نویسنده</label>
                            <input  type="text"
                             className="form-control" 
                             required
                             onChange={(e) => setAuthor(e.target.value)}
                             />
                        </div>
                        <div className="form-group mt-4">
                            <label>شماره # </label>
                            <input  type="text" 
                            className="form-control" 
                            required
                            onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <button type="submit" className="btn btn btn-success btn-md">افزودن</button>
                        </div>
                    </form>
                </div>
                <div className="view-container">
                    {
                        books.length > 0 && <>
                        <div className="table-responsive w-100">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>شماره #</th>
                                    <th>عنوان</th>
                                    <th>نویسنده</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <View books={books} deleteBook={deleteBook} />
                            </tbody>
                        </table>
                    </div>
                        </> 
                    }
                    <button className='btn btn-danger btn-md' onClick={() => setBooks([])}>حذف همه</button>
                    {
                        books.length < 1 && <div>کتابی در کتابخانه نداریم.</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default App ; 