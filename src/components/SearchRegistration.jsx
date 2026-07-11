import React from 'react'

const SearchRegistration = () => {
  return (
    <div>

        <h2><center>Search Registration</center></h2>
        <div className="container">

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
    </div>
  )
}

export default SearchRegistration