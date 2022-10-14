<template lang="">
    <div class="drink h-100">
        <NavBar />
        <div class="drinkBg">
        <div class="container">
            <div class="row pt-4 pb-4">
            <ShowDrinkBlok />
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import ShowDrinkBlok from '@/components/front-end/ShowDrinkBlok.vue';
import DrinkData from '@/mydata/drinks.json';
export default {
    name: 'DrinkPage',
    components: { NavBar, ShowDrinkBlok },
    provide() {
        return {
            drinks: DrinkData
        }
    }
}
</script>
<style>
.drinkBg {
    background: linear-gradient(rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)),
        url(../../assets/dring/bg-drink.jpg);
}

@media only screen and (min-width: 992px) {
    .drinkBg {
        height: 100vh;
    }
}
</style>