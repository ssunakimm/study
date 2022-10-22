import { useState } from 'react';
import './App.css';
import data from './data.js'

function App() {
  let [item] = useState(data)
  return (
    <div className="wrapper">
      <header className='header'>
        <nav>
          <ul>
            <li>
              <a href="dd">About</a>
              <ul>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
            <li>
              <a href="dd">About</a>
              <ul>
                <li><a href="dd">안뇽</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <ul>
          {
            item.map((item,i)=>{
              return <Item item={item} key={item.id}></Item>
            })    
          }
          
        </ul>
      </div>
      <footer className='footer'>

      </footer>
    </div>
  );
}

function Item(props){
  return (
    <li>
      <a href="aa">
        <img src="aa" />
        <b>{props.item.title}</b>
      </a>
      <ul>
        <li className='beforePrice'>{props.item.beforePrice}</li>
        <li className='currentPrice'>{props.item.currentPrice}</li>
      </ul>
      
    </li>
  )
}

export default App;
