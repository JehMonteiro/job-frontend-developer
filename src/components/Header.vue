<template>
    <header id="nav">
        <router-link to="/">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>

        <div class="input-pesquisa">
            <input type="text" placeholder="O que está procurando?">
        </div>

        <div class="carrinho">
            <a href="/Carrinho">
                <img src="img/carrinho-compras.png" alt="Carrinho de compras">
                <p> 3 itens<br>
                R$1.000,00</p>
            </a>
        </div>
                
    </header>
    
   <nav class="link">
        <router-link to="/"><li>Eletrônicos</li></router-link>
        <router-link to="/"><li>Acessórios</li></router-link>
        <router-link to="/"><li>Homens</li></router-link>
        <router-link to="/"><li>Mulheres</li></router-link>
    </nav>
</template>



<script>
    export default{
        name: 'Header',
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    #nav{
        background-color: #F3F4F6;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 170px;
        width: 100%;
    }

    #nav img{
        margin-left: 100px;
        height: 130px;
        width: 200px;
    }
    #nav input{
        padding: 10px 200px;
        margin: 10px 150px;
        border-radius: 20px;
        border: 2px solid #FF1A73;
        text-align: left;

    }
    #nav input:hover{
        border: 2px solid #773CBC;
    }

    .link{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #F3F4F6;
        border-bottom: 1px solid #783cbc3b;
    }

    .link li{
        list-style: none;
        font-size: 18px;
        color: #773CBC;
        
    }

    .link li:hover{
        color: #FF1A73;
        transition-duration: .3s;
    
    }

    #nav .carrinho{
        display: block;
        align-items: center;
        padding: 20px 40px;
        margin-right: 100px;
        background: #EFF0F2;
        box-shadow: 0 8px 32px 0 rgba(100, 33, 163, 0.281);
        border-radius: 10px;
        
    }
    #nav .carrinho img{
        height: 40px;
        width: 50px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
    .carrinho p {
        text-align: center;
        color:#4b4848;
        padding-top: 10px
    }
  
    
</style>



