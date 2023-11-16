import React from 'react'
import Slider from 'react-slick';

const HomePartners = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };


  return (
    <div className='HomePartners'>
      <div className='route'>
        <div className='route-container' style={{zIndex:2}}>
        </div>
        <div className='route-content' style={{textAlign:"center"}}>
            <h2 style={{fontSize:"24px"}}>Định hướng và Chuẩn hoá lộ trình học tập</h2>
            <p style={{margin:"20px 0", fontSize:"30px"}}>Học Thật, Dự Án Thật, Mentor Tận Tâm</p>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button className='buttonStyle'>Danh sách khóa học</button>
                <button className='buttonStyle' style={{marginLeft:"10px"}}>Tư vấn lộ trình</button>
            </div>
        </div>
      </div>
      <div className='partners' style={{textAlign:"center", margin:"20px auto", width:"80%", padding:"40px 0"}}>
        <h1>Nhận được sự tin tưởng của các đối tác</h1>
        <Slider {...settings}>
          <div>
            <img style={{width:"230px", height:"100px"}} src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp" alt="" srcset="" />
          </div>
          <div>
            <img style={{width:"230px", height:"100px"}} src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp" alt="" srcset="" />
          </div>
          <div>
            <img style={{width:"230px", height:"100px"}} src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp" alt="" srcset="" />
          </div>
          <div>
            <img style={{width:"230px", height:"100px"}} src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp" alt="" srcset="" />
          </div>
          <div>
            <img style={{width:"230px", height:"100px"}} src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp" alt="" srcset="" />
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default HomePartners
