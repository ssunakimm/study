import { useState } from 'react';
import './App.css';
import data from './data.js'
import Slider from "react-slick";



function App() {
  let [item] = useState(data)
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
        <nav>
          <ul>
            <li>
              <a href="dd">About</a>
            </li>
            <li>
              <a href="dd">Shop</a>
              <ul className='subDep'>
                <li><a href="dd">New in</a></li>
                <li><a href="dd">Outer</a></li>
                <li><a href="dd">Top</a></li>
                <li><a href="dd">Bottom</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">Board</a>
              <ul className='subDep'>
                <li><a href="dd">News</a></li>
                <li><a href="dd">Q&A</a></li>
                <li><a href="dd">Review</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
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
      <footer className='footer'>

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
