<template>
    <footer id="footer">
        <router-link to="/">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>

        <div class="menu">
        <p>Institucional</p>
            <router-link to="/"><li>Quem somos</li></router-link>
            <router-link to="/"><li>Política de privacidade</li></router-link>
            <router-link to="/"><li>Política de compra</li></router-link>
            <router-link to="/"><li>Política de troca e devolução</li></router-link>
            <router-link to="/"><li>Nossas lojas</li></router-link>
        </div>

        <div class="menu">
            <p>Ajuda</p>
            <router-link to="/"><li>Fale conosco</li></router-link>
            <router-link to="/"><li>Perguntas frequentes</li></router-link>
        </div>

        <div class="redes-sociais">
            <p>Siga nossas redes sociais</p>
            <a href="#"><img src="img/redes-sociais.png" alt="Redes-sociais"></a>
        </div>
    </footer>
</template>

<script>
  export default{
        name: 'Footer',
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    #footer{
        display: flex;
        background-color: #F3F4F6;
        justify-content: space-around;
        padding: 0 12vw;
        height: 170px;
        width: 100%;
        
    }
    #footer img{
        width: 200px;
        margin-top: 20px;
        
    }
    #footer .menu{
        color: #FF1A73;
        padding-top: 10px;
        margin-left:auto;
    }
    #footer .menu li{
        list-style: none;
        margin-bottom: 4px;
        font-size: 15px;
    }
    #footer .menu li:hover{
        color: #FF1A73;
        transition-duration: .3s;
    }
    #footer p{
        margin: 12px 0px;
        font-size: 18px;
    }
    #footer .redes-sociais{
        margin:auto;
    }
    #footer .redes-sociais p{
        color: #FF1A73;
        margin-top: 20px;
    }
    #footer .redes-sociais a img{
        width: 170px;
        margin: 8px 20px;
    }

</style>