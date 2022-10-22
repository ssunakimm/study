import { useState } from 'react';
import './App.css';
import data from './data.js'

function App() {
  let [item] = useState(data)
  return (
    <div className="wrapper">
      <header className='header'>
        <h1><a href="dd">론론</a></h1>
        <nav>
          <ul>
            <li>
              <a href="dd">About</a>
              <ul className='subDep'>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul className='subDep'>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul className='subDep'>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul className='subDep'>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <section className='visual'></section>
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
