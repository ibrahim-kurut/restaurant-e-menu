<template lang="">
     <div class="container">
        <div class="btns">
          <button type="button" @click="toFoodPage()" class="btn">Food</button>
          <button type="button" @click="toDrinksPage()" class="btn">Drinks</button>
          <button type="button" @click="toSweetsPage()" class="btn">Sweets</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BtnLink',
    methods: {
        toFoodPage() {
            this.$router.push({ name: 'food' })
        },
        toDrinksPage() {
            this.$router.push({ name: 'drink' })
        },
        toSweetsPage() {
            this.$router.push({ name: 'sweet' })
        }
    },
}
</script>
<style>
.btns {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 75%;
    left: 45%;
    transform: translate(-50%, -50%);
}

.btns button {
    background-color: #d5942f;
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
}

.btns button:hover {
    background-color: #704e16 !important;
    color: #ffffff !important;
}

.btns button:nth-child(2) {
    margin: 0 15px;
}
</style>