import React from 'react'

function Image_show({imagedata}) {
    const {title,description,image} = imagedata
  return <>
       
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage:`url('${image}')`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{title}</h2>
                        <p className="lead mb-0">{description}</p>
                    </div>
                </div>
  </>
}

export default Image_show