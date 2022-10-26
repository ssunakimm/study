import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import data from './data.js'
import Slider from "react-slick";



function App() {
  let [item] = useState(data);
  const [isHovering, setIsHovering] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    fade : true,
    infinite: true,
    speed: 500,
    
  };

  return (
    <div className="wrapper">
      <header className='header'>
        <h1><a href="dd"><img src="/logo.svg" alt="론론"/></a></h1>
        <nav onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
              {
                isHovering ? 
                <ul className='subDep'>
                  <li><Link to="/newIn">New in</Link></li>
                  <li><Link to="/outer">Outer</Link></li>
                  <li><Link to="/top">Top</Link></li>
                  <li><Link to="/bottom">Bottom</Link></li>
                </ul> : null
              }
              
            </li>
            <li>
              <Link to="/board">Board</Link>
              {
                isHovering ? 
                <ul className='subDep'>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/qna">Q&A</Link></li>
                  <li><Link to="/review">Review</Link></li>
                </ul> : null
              }
              
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={ 
          <>
            <section className='visual'>
              <Slider {...settings}>
                <div><img src="/visual1.jpg" alt="메인 비주얼 슬라이드"/></div>
                <div><img src="/visual2.jpg" alt="메인 비주얼 슬라이드"/></div>
                <div><img src="/visual3.jpg" alt="메인 비주얼 슬라이드"/></div>
              </Slider>        
            </section>
            <section className='content'>
              <ul>
                  {
                    item.map((item,i)=>{
                      return <Item item={item} key={item.id}></Item>
                    })    
                  }
                  
                </ul>
            </section>
          </>
         } />
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
      
      <footer className="footer">
        <div className="menu">    
            <ul>
                <li><a href="/shopinfo/company.html">About us</a></li>
                <li><a href="/member/mall_agreement.html">Terms and Conditions</a></li>
                <li><a href="/member/privacy.html">Privacy Policy</a></li>
                <li><a href="/shopinfo/guide.html">Guide</a></li>
            </ul>
        </div>
                
        <div className="info">
          <ul>
            <li className="tel">
              <a href="tel:032-246-6011">T.032-246-6011</a>
            </li>
            <li>Mon-Fri 11:00~16:00<br />
                Lunch 12:00~14:00<br />
                Weekend, Holiday off<br />
                <br />
                신한 140-013-540220 <br />
                주식회사 빅트리코퍼레이션 배가영 
            </li>
            <li><address>인천광역시 연수구 인천타워대로 323 (송도동) 송도센트로드 D308호</address></li>
          </ul>                       
          <p className="copyright">Copyright© RONRON All Rights Reserved &amp; Hosting by Cafe24</p>
        </div>
      </footer>
    </div>
  );
}


function Item(props){
  return (
    <li>
      <a href="aa">
        <img src={props.item.img} alt={props.item.title}/>
      </a>
      <dl>
        <dt>{props.item.title}</dt>
        <dd className='beforePrice'>{props.item.beforePrice}원</dd>
        <dd className='currentPrice'>{props.item.currentPrice}원</dd>
      </dl>
      
    </li>
  )
}

export default App;
