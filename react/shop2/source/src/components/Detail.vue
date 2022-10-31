<template>
    <section class="content">
        <div class="map_detail">
            <div class="bg" :style="{ backgroundImage : `url(${items[$route.params.id].repPhoto.photoid.imgpath})`}">
                <div class="item" v-if="itemShow">   
                    <button @click="$router.go(-1)" class="btn_back"> 뒤로가기</button>                     
                    <b>{{ items[$route.params.id].title }}</b>
                    <p>{{ items[$route.params.id].introduction }}</p>
                    <hr />
                    <p>{{ items[$route.params.id].roadaddress }}  <span v-if="items[$route.params.id].postcode !== null" class="ico_postcode">{{ items[$route.params.id].postcode }}</span></p>
                    <p>{{ items[$route.params.id].region1cd.label }} > {{ items[$route.params.id].region2cd.label }}</p>  
                    
                    <p>#{{ items[$route.params.id].tag }}</p>   
                    <p v-if="items[$route.params.id].phoneno !== null">전화번호 {{ items[$route.params.id].phoneno }}</p>
                    <div>
                        <a :href="`https://map.kakao.com/link/search/${items[$route.params.id].title}`" target="_blank" class="btn">카카오맵 보기</a> 
                    </div>
                </div>            
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'detail-vue',
    data() {
        return {
            num : 0,
            itemShow : false
        }
    },
    props:{ 
        items : Array,   
        index : Number,
    },
    mounted(){
        this.itemShow =  true      
    },
}
</script>