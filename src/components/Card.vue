<script setup>
defineProps({
    game: Object,
});
    </script>

<template>
    <div>
        <img :src="game.thumbnail">
        <h2>{{game.title}}</h2>
        <p>{{game.short_description}}</p>
        <h3>Платформа: {{game.platform}}</h3>
        <h3>Релиз: {{game.release_date}}</h3>
        <a :href="game.freetogame_profile_url">Перейти на сайт</a>
    </div>
</template>

<style scoped>
div{
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background: grey;
    color:rgb(255, 255, 255);
    transition: all 0.5s;
    text-align: center;
    display: flex !important;
    flex-direction: column;
}
img{
    aspect-ratio: 16/9;
    object-fit: cover;

}
h2{
    text-align: center;
    width: 100%;
    margin: 20px 0;
    font-size: 40px;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    line-height: 1.5;
}
p{
    text-align: center;
    width: 100%;
    margin: 20px 0;
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin-top: 15px;
    line-height: 1.5;
}
h3{
    margin: 15px 0;

    text-align: center;
    text-align: left;
    font: 15px;
}
a{
    background: blue;
    padding: 15px;
    font-size: 20px;
    border-radius: 16px;
    margin-top: auto;
}
</style>