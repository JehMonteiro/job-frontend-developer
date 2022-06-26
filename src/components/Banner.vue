<template>
    <div id="main-container">
        <img src="img/banner-secundario.png" alt="alt" id="banner">
    </div>
</template>

<script>
    export default{
        name: 'Main', 
    }
</script>

<style scoped>
    #main-container{
        margin: 50px 100px;
        min-height: 250px;
        border: 2px;
        flex-wrap: wrap;
        padding: 0;
        margin:0;
        background-size: cover;
    }

    #main-container img{
        position: relative;
        height: 65vh;
        width: 100vw;
   
    
    background-size: cover;
    }

</style>