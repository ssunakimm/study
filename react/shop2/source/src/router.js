import Vue from 'vue'
import VueRouter from 'vue-router';
import Detail from './components/Detail.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/detail/:id',
        name : 'detail',
        component : Detail,
        props: true,
        
    }
]


const router = new VueRouter({
	mode:'history', //해쉬값 제거 방식
    base : process.env.BASE_URL,
    routes
});

export default router;