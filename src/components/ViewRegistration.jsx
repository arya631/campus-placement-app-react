import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewRegistrations = () => {

  const [data, changeData] = useState([])
  const fetchData = () => {
    axios
      .get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <h2 className="text-center mb-4">
              View All Registrations
            </h2>

            <div className="row g-3">

              {data.map((value, index) => {
                return (
                  <div
                    
                    className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                  >

                    <div className="card h-100 shadow">

                      <div className="card-body">

                        <h5 className="card-title">
                          {value.fullName}
                        </h5>

                        <p className="card-text">
                          <strong>Registration Number:</strong> {value.registrationNumber}
                        </p>

                        <p className="card-text">
                          <strong>Branch:</strong> {value.branch}
                        </p>

                        <p className="card-text">
                          <strong>SSLC Mark:</strong> {value.sslcMark}
                        </p>

                        <p className="card-text">
                          <strong>Plus Two Mark:</strong> {value.plusTwoMark}
                        </p>

                        <p className="card-text">
                          <strong>UG Mark:</strong> {value.ugMark}
                        </p>

                        <p className="card-text">
                          <strong>PG Mark:</strong> {value.pgMark}
                        </p>

                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRegistrations