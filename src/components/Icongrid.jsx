import React from 'react'

function Icongrid({data}) {
    const {title,icon,description} = data
  return<>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className={`${icon} m-auto text-primary`}></i></div>
                                    <h3>{title}</h3>
                                        <p className="lead mb-0">{description}</p>
                            </div>
                        </div>
  </>
}

export default Icongrid
