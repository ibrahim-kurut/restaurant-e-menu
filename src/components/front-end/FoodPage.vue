<template lang="">
    <div class="food h-100">
        <NavBar />
        <div class="foodBg">
            <div class="container">
        <div class="row pt-4 pb-4">
            <ShowFoodBlock />
        </div>
        </div>
        </div>  
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import foodData from '@/mydata/food.json';
import ShowFoodBlock from '@/components/front-end/ShowFoodBlok.vue'
export default {
    name: 'FoodPage',
    components: { NavBar, ShowFoodBlock },
    provide() {
        return {
            foods: foodData
        }
    }
}
</script>

<style>
.food {
    background: linear-gradient(rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)),
        url(../../assets/food/menu1.jpg);
}

@media only screen and (min-width: 992px) {
    .foodBg {
        height: 100vh;
    }
}
</style>