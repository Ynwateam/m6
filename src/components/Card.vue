<script setup>
defineProps({
    game: Object,
});
    </script>

<template>
    <div>
        <img src="https://sun9-45.userapi.com/impg/4sY6-_rjCZrOXkfXm7N236S3sG_F0pzccDRUdA/FvpGIYpTuwM.jpg?size=525x604&quality=95&sign=3701e0dd83e1bfa7a76e03df5d7e641e&type=album"/>
        <h2>Заголовок</h2>
        <p>
            Очень красивый текст гвинт гвинт Геральт. Смотрите я черешня.

        </p>
        {{game}}
    </div>
</template>

<style scoped>
div{
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background: grey;
    color:antiquewhite;
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
}
p{
    text-align: center;
    width: 100%;
    margin: 10px 0;
    font-size: 30px;
    color: white;

}
</style>