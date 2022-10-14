<template lang="">
    <div class="sweet h-100">
        <NavBar />
        <div class="sweetBg">
            <div class="container">
                <div class="row pt-4 pb-4">
            <ShowSweetBlok />
        </div>
            </div>
        </div>   
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import ShowSweetBlok from '@/components/front-end/ShowSweetBlok.vue';
import sweetData from '@/mydata/sweet.json';
export default {
    name: 'SweetsPage',
    components: { NavBar, ShowSweetBlok },
    provide() {
        return {
            sweets: sweetData
        }
    }
}
</script>
<style>
.sweetBg {
    background: linear-gradient(rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)),
        url(../../assets/sweet/sweet.jpg);
}

@media only screen and (min-width: 992px) {
    .sweetBg {
        height: 100vh;
    }
}
</style>