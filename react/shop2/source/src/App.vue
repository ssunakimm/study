<template>
  <div id="app">
    <div class="wrapper">
      <header class="header">
        <h1>          
          <a>
            <img src="./assets/img/logo.png" alt="떠나자 제주" />
          </a>          
        </h1>       
      </header>
      <!--[S]카테고리와 지도 UI-->
      <section class="content" >
        <div class="map_info">          
          <ul class="category">
            <li v-for="(name, i) in category" :key="i" @click="categoryChange(i)" :class="{'on' : i == categoryOn }"><a>{{name}}</a></li>
          </ul>
          <ul class="item">
            <li v-for="(items,i) in items" :key="i">
              <a @click="displayMap(i)" >
                <img :src="`${items.repPhoto.photoid.imgpath}`" />
                <b>{{ items.title }}</b>
                <p>{{ items.introduction }}</p>
              </a>              
              <p>{{ items.region1cd.label }} > {{ items.region2cd.label }}</p>              
            </li>
          </ul>
        </div>
        <div class="map_box"  id="map">
          <div id="popupMap" v-if="modalShow">
            <b>{{ items[index].title }}</b> <span>{{ items[index].contentscd.label}}</span>
            <p>{{ items[index].address}}</p>
            <router-link :to="{ name: 'detail', params: { id: index, post: items }}" class="btn">자세히보기</router-link>
        </div>
        </div>
      </section>      
      <!--[E]카테고리와 지도 UI-->
      
      <!--[S]디테일 페이지 UI-->
      <router-view :items="items" ></router-view>            
      <!--[E]디테일 페이지 UI-->

    </div>
  </div>
</template>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=690cafe0559fae1b6885179a941d08f0"></script>
<script>
import "./assets/css/style.css"
import axios from 'axios';

export default {
  
  name: 'App',
  data(){
    return {
      items : [],
      MapArray : [],
      index : 0,
      category : ['관광지','맛집','숙박'],
      categoryOn : 0,
      modalShow : false

    }
  },
  mounted(){
    //mounted 되지마자 api를 불러온다.
    axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=upjklivhbhz6cz9n&locale=kr&category=c1&page=1&pageSize=10')
      .then( result => {
        let item_copy = result.data;
        this.items.push(...item_copy.items)

        this.items.splice(9,90) //api중 10개만 불러온다..
        this.MapArray.push(this.items);
      }
    )
    
    //기본 카카오 맵 api
    this.initMap(); 
     
  },
  methods : {    
    initMap() {
      var mapContainer = document.getElementById('map'),
      mapOption = { 
          center: new kakao.maps.LatLng(33.36489602671088, 126.58970398197701),
          level: 9 // 지도의 확대 레벨
      };
      var map = new kakao.maps.Map(mapContainer, mapOption);
    },
    displayMap(i) {
      
      this.index = i
      var mapContainer = document.getElementById('map'),
      mapOption = { 
          center: new kakao.maps.LatLng(33.36489602671088, 126.58970398197701),
          level: 9 
      };
      var map = new kakao.maps.Map(mapContainer, mapOption);

      
      var imageSrc = 'https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/gojeju/img/icon_map.png?raw=true',  
          imageSize = new kakao.maps.Size(20, 25), 
          imageOption = {offset: new kakao.maps.Point(15, 75)}; 
      
      
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
          markerPosition  = new kakao.maps.LatLng(this.items[i].latitude, this.items[i].longitude); 

      

      // 마커를 생성
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage  
      });

      // 마커가 지도 위에 표시되도록 설정
      marker.setMap(map);

      // content HTMLElement 생성
      let content = document.createElement('div');
      content.id = 'popupMap';

      let title = document.createElement('b');
      let label = document.createElement('span');
      let address = document.createElement('p');
      let btn = document.createElement('router-link');
      btn.className   = 'btn';
      btn.onclick = () => {
          this.$router.push({ name: 'detail', params: { id: this.index, post: this.items }});
      }
      title.appendChild(document.createTextNode(this.items[i].title));
      label.appendChild(document.createTextNode(this.items[i].contentscd.label));
      address.appendChild(document.createTextNode(this.items[i].address));
      btn.appendChild(document.createTextNode('자세히보기'));

      content.appendChild(title);
      content.appendChild(label);
      content.appendChild(address);
      content.appendChild(btn);

      var position  = new kakao.maps.LatLng(this.items[i].latitude, this.items[i].longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성
      var customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1 
      });
      
      map.panTo(markerPosition);

      //클릭 시 인포윈도우 보여주기
      this.modalShow = true

      
    },
    categoryChange(i) {
      this.categoryOn = i;

      //num값에 따라 불러오는 api 종류가 달라진다.
      let num = 0;       
      if(i == 0) num = 1 
      else if(i == 1) num = 4 
      else if(i == 2) num = 3

      axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=upjklivhbhz6cz9n&locale=kr&category=c'+num+'&page=1&pageSize=10')
      .then( result => {
          let item_copy = result.data;

          this.items = '[]';

          let array = []
          array.push(...item_copy.items);

          this.items = array;
          this.items.splice(9,90)


        }
      )

    }

  }
}


</script>


<style>

</style>