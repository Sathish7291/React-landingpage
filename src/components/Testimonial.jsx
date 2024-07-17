import React from 'react'

function Testimonial({testimonialdata}) {
        const {pic,name,desc} = testimonialdata
  return<>
        
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={`${pic}`} alt="..." />
                            <h5>{name}</h5>
                            <p className="font-weight-light mb-0">{desc}</p>
                        </div>
                    </div>
  </>
}

export default Testimonial

