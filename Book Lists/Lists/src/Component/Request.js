import React from "react";


function Request(){
    return(
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
    )
}


export default Request