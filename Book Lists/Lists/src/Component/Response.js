import React from "react";
import { FaTrash } from "react-icons/fa";


function Response(){
    return(
        <div className="Response mt-5 circle rounded ms-5 bg-secondary p-4 text-white" style={{height:"300px"}} >
                <h2 className="text-start mb-4">
                    Results : 
                </h2>
                <table border={1} className="border-white" width={550}>
                    <tr className="border-1 bg-white text-dark">
                    <th className="border-1 ps-2">#Code</th>
                    <th className="border-1 ps-2">Name</th>
                    <th className="border-1 ps-2">Author</th>
                    <th className="border-1 ps-2 text-danger">Delete</th>

                    </tr>
                    <tr className="border-1">
                    <td className="border-1 ps-2 pt-1 pb-1">Alfreds Futterkiste</td>
                    <td className="border-1 ps-2 pt-1 pb-1">Maria Anders</td>
                    <td className="border-1 ps-2 pt-1 pb-1">Germany</td>
                    <td className="border-1 ps-2 pt-1 pb-1 text-center bg-danger text-white"> <FaTrash/> </td> 
                    </tr>
                </table>
                <button className="btn mt-2 btn-danger w-100">Delete All</button>
            </div>
    )
}

export default Response