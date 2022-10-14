<template lang="">
    <div>
        <div class="d-lg-flex">
            <div class="mycard" v-for="sweet in sweets" :key="sweet.id" >
            <img :src="sweet.img" alt="">
                <div class="title">
                    <h3>{{sweet.sweetName}}</h3>
                </div>
                <div class="body">
                    <p>{{sweet.discription}}</p>
                </div>
                <div class="price">
                    <p>price : {{sweet.price}}$</p>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShowSweetBlok',
    inject: ['sweets']

}
</script>
<style>
.mycard {
    color: aliceblue;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    height: fit-content;
    background-color: #1a1a1a;
}



.mycard img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

.mycard h3 {
    color: #f9ac64;
    text-transform: capitalize;
}

.mycard p {
    color: #6b6b6b;
    text-transform: capitalize;
}

.price p {
    color: #f89c46;
    font-size: 1.2rem;
}
</style>