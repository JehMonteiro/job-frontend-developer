<template>
  <section class="newsletter">
    <div>
      <h2>Fique por dentro</h2>
      <p>Receba todas as novidades em seu e-mail</p>
    </div>

    <form>
      <div class="input">
        <input class="input" type="text" name="name" placeholder="Nome" />
      </div>
      <div class="input">
        <input class="input" type="text" name="email" placeholder="Email" />
      </div>
      <div class="send">
        <a href="#"><img src="img/send.png" /></a>
      </div>
    </form>
  </section>
  
</template>

<script>
export default {
  name: "Newsletter",
  props: ["logo", "alt"],
};
</script>

<style lang="scss" scoped>
.newsletter {
  display: flex;
  background-color: var(--color-background-nav);
  padding: 50px 90px;
  color: var(--color-secondary);
  justify-content: space-around;

  img {
  width: 35px;
  margin: 8px;
}
}

form {
  display: flex;
}

input {
  border: none;
  border-radius: 47px;
  padding: 12px 100px;
  width: 90%;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
    background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
    box-shadow 500ms linear;
  border: 3px solid var(--color-secondary);

  &:hover {
  transform: scale(1.1);
  background-position: -100px;
}
&:active {
  transform: scale(1);
  background-position: 800px;
}
&::placeholder {
  opacity: 0.5;
  padding-left: -20px;
  font-family: "Exo", sans-serif;
  font-size: 15px;
}
}

@media screen and (max-width: 700px) {
  .newsletter  {
    flex-wrap: wrap;
    display: block;
    padding: 15px 20px;
    height: 250px;
  }
  form {
    flex-wrap: wrap;
    height: max-content;
    display: block;
  }
  p {
    margin-bottom: 16px;
  }
  input{
    width: 300px;
  }
  .send{
    float: right;
  }
}
@media screen and (max-width: 800px) {
 
  form {
    flex-wrap: wrap;
    height: max-content;
    display: block;
  }
  p {
    margin-right: 20px;
  }
  input{
    width: 300px;
    margin-bottom: 5px;
  }
  .send{
    float: right;
  }
}
</style>