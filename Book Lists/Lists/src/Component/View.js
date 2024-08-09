import React from "react";

function View({books , deleteBook}){
    // console.log(books)
    return books.map((book) => {
        <tr key={book.number}>
            <td>{book.number}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={() => deleteBook(book.number)}>
                delete
            </td>
        </tr>
    })
       
    
}

export default View