<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">SR</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesome icon="bars"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                    <router-link to="/">Home</router-link>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <router-link to="/food">Foods</router-link>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <router-link to="/drink">Drinks</router-link>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <router-link to="/sweet">Sweets</router-link>
                </a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="scss">
nav {
    padding: 30px;
    position: sticky;
    top: 0;

    a {
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;

        &.router-link-exact-active {
            color: #f37500;
        }
    }

    .navbar-brand {
        color: #f37500;
        font-size: 2rem;
    }

    .navbar-toggler {
        color: #f37500;
        border: 1px solid #f37500;
    }
}
</style>