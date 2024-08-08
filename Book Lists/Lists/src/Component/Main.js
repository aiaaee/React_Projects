import React from "react";
import { FaTrash } from "react-icons/fa";
function Main(){
    return(
        <div className="d-flex">
            <div style={{width:"40%"}} className="Request ms-5 bg-secondary mt-5 circle rounded text-white ">
                <form className="pt-3 pb-3">
                    <fieldset className=" w-75 m-auto">
                        
                        <legend  className="border-bottom pb-2  ">Search Box</legend>
                            <div className="m-auto text-start">
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" style={{marginLeft:"55px"}} class=" form-label">Name:</label>
                                    <input type="text" class="m-auto w-75  form-control" id="formGroupExampleInput" placeholder="input book name"  />
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput2" style={{marginLeft:"55px"}} class="form-label">Author:</label>
                                    <input type="text" class="w-75 form-control m-auto" id="formGroupExampleInput2"  placeholder="input author name" />
                                </div>
                                
                                <div class="mb-3">
                                    <label for="formGroupExampleInput3" style={{marginLeft:"55px"}} class="form-label">Code:</label>
                                    <input type="text" class="w-75 form-control m-auto" id="formGroupExampleInput3"  placeholder="input the code of book" />
                                </div>
                                <div className="mb-2">
                                    <button className="btn btn-success form-control mt-3 w-75" style={{marginLeft:"55px"}} type="submit">Submit</button>
                                </div>
                            </div>
                    </fieldset>
                </form>
            </div>
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
        </div>
    )
}

export default Main;