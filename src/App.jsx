import React from 'react'
import Header from './components/Header'
import Icongrid from './components/Icongrid'
import Image_show from './components/Image_show'
import Testimonial from './components/Testimonial'
import CallofAction from './components/CallofAction'
import Fotter from './components/Fotter'
import image1 from '../src/assets/img/bg-showcase-1.jpg'
import image2 from '../src/assets/img/bg-showcase-2.jpg'
import image3 from '../src/assets/img/bg-showcase-3.jpg'
import pic1 from '../src/assets/img/testimonials-3.jpg'
import pic2 from '../src/assets/img/testimonials-2.jpg'
import pic3 from '../src/assets/img/testimonials-1.jpg'

function App() {
  let data = [
{
    title :"Fully Responsive",
    description :"This theme will look great on any device, no matter the size!",
    icon : "bi-window"
},
{
    title :"Bootstrap 5 Ready",
    description :"Featuring the latest build of the new Bootstrap 5 framework!",
    icon:"bi-layers"
},
{   
    title :"Easy to Use",
    description :"Ready to use with your own content, or customize the source files!",
    icon:"bi-terminal"
}
]
   let imagedata = [
    {
     title :"Fully Responsive Design",
      description :"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      image : image1
    },
    {
      title :"Updated For Bootstrap 5",
      description :"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      image : image2
    },
    {
      title :"Easy to Use & Customize",
      description :"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      image : image3
    }
  ]
  let testimonialdata = [
    {
      pic: pic1,
      name:"Sarah W.",
      desc:"Thanks so much for making these free resources available to us!"
    },
    {
        pic: pic2,
        name:"Fred S.",
        desc:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
   
    {
      pic: pic3,
      name:"Margaret E.",
      desc:"This is fantastic! Thanks so much guys!"
  }]

  return <>
    <Header/>
     {/* <!-- Icons Grid--> */}
          <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                      {
                        data.map((e,i)=>(
                            <Icongrid data ={e} key={i} />
                            // console.log(data)
                        ))
                       
                      }
                    </div>
                </div>
          </section>
          {/*<!-- Image Showcases--> */}
              <section className="showcase">
                  <div className="container-fluid p-0">
                    {
                    imagedata.map((imgdata,i)=>(
                      <Image_show imagedata={imgdata} key={i}/>
                      // console.log(imagedata)
                    ))
                    }
                    
                  </div>
              </section>
              {/* <!-- Testimonials--> */}
                   <section className="testimonials text-center bg-light">
                        <div className="container">
                          <h2 className="mb-5">What people are saying...</h2>
                             <div className="row">
                              {
                                testimonialdata.map((test,i)=>(
                                  <Testimonial testimonialdata={test} key={i}/>
                                ))
                              }
                              </div>
                        </div>
                    </section>
                  {/* <!-- Call to Action--> */}
                    <CallofAction/>
                  {/* <!-- Footer--> */}
                  <Fotter/>
  </>
}

export default App