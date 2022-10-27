import { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'
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
        <h1><Link to="/"><img src="/logo.svg" alt="론론"/></Link></h1>
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
        <Route path="/about" element={ <About></About> } />
        <Route path="/detail/:id" element={ <Detail item={item}></Detail> } />
      </Routes>
      
      <footer className="footer">
        <div className="menu">    
            <ul>
                <li><Link to="/shopinfo/company.html">About us</Link></li>
                <li><Link to="/member/mall_agreement.html">Terms and Conditions</Link></li>
                <li><Link to="/member/privacy.html">Privacy Policy</Link></li>
                <li><Link to="/shopinfo/guide.html">Guide</Link></li>
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
      <Link to={{ pathname: `/detail/${props.item.id}` }}><img src={props.item.img} alt={props.item.title}/></Link>
      <dl>
        <dt>{props.item.title}</dt>
        <dd className='beforePrice'>{props.item.beforePrice}원</dd>
        <dd className='currentPrice'>{props.item.currentPrice}원</dd>
      </dl>
      
    </li>
  )
}

function About(){
  return (
    <section className="about">
      <h3>About</h3>
      <b>론론(RONRON)은 고양dd이가 행복감을 느낄 때 내는 <br />'갸르릉' 거리는 소리를 표현한 프랑스어입니다</b>
      <p>론론(RONRON)은 고양이가 행복감을 느낄 때 내는 <br />'갸르릉' 거리는 소리를 표현한 프랑스어입니다.<br />익숙하지만 새로움을, 새롭지만 편안함을 주는 브랜드로 <br />데일리룩으로 선택하기 쉬운 디자인을 통해 <br />론론만의 미니멀하지만 유니크한 룩을 제공합니다. <br />Update the casual look with RONRON.</p>
      <img src="/about1.jpg" alt="론론 옷을 입은 모델"/>
      <p>RONRON means ‘the sound a cat makes when he/she feels comfortable’ in French. <br />Offering simple yet unique essentials, <br />we create pieces that is easy to choose for its daily look. <br />Be (you) with RONRON in daily life / every days / every moments <br />Update the casual look with RONRON.</p>
    </section>
  )
}
function Detail(props){
  let {id} = useParams();
  return (
    <section className="detail">
      <article className="img">
        <img src={props.item[id].img} alt={props.item[id].title}/>
      </article>
      <article className="info">
        <dl>
          <dt>{props.item[id].title}</dt>
          <dd className='beforePrice'><span>Retail Price</span> {props.item[id].beforePrice}원</dd>
          <dd className='currentPrice'><span>Price</span> {props.item[id].currentPrice}원</dd>
        </dl>
        <div className="btns">
          <button type="button">Buy Nuw</button>            
        </div>
        <div className="btns double">
          <button type="button" className="black">Add to Cart</button>
          <button type="button" className="black">Add to Wish</button>
        </div>
      </article>
      
    </section>

  )
}

export default App;
