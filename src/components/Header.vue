<template>
    <header>
        <router-link to="/">Main</router-link>
        <router-link to="/fantasy">Fantasy</router-link>
        <router-link to="/shooter">Shooter</router-link>
        <router-link to="/strategy">Racing</router-link>
        <router-link to="/royale">Open-world</router-link>
        <router-link to="/rpg">Rpg</router-link>
        <router-link to="/anime">Anime</router-link>
        <router-link to="/voxel">Voxel</router-link>
    </header>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-evenly;
    background: darkblue;
    padding: 20px;
    font-size: 24px;
    color: rgb(255, 255, 255);
}
.router-link-active{
    color: white
}
</style>