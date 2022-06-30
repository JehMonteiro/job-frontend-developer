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
      <div>
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
  background-color: #f3f4f6;
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


@media screen and (max-width: 1199px) {
  .newsletter-form .input-default {
    max-width: 171px;
  }
  .newsletter-text span {
    font-size: 14px;
    line-height: 21px;
  }
  .newsletter-form .btn-default {
    font-weight: 600;
  }
 
}
@media screen and (max-width: 991px) {
  .newsletter input {
    margin-left: 0;
  }
}
@media screen and (max-width: 767px) {
  .newsletter .container {
    flex-wrap: wrap;
  }
  .newsletter-form {
    flex-wrap: wrap;
    height: max-content;
  }
  .newsletter-text {
    margin-bottom: 16px;
  }
  .newsletter-form .input-default,
  .newsletter-form .btn-default {
    max-width: 100%;
  }
  .newsletter-form .btn-default {
    padding: 16px 28px;
  }
  .newsletter input {
    margin-left: -5px;
  }
}
@media screen and (max-width: 375px) {
  .newsletter form {
    flex-direction: column;
    gap: 0.5rem;
  }
  .newsletter form > div {
    flex: 1;
    width: 100%;
  }
  .newsletter form .col-2 {
    display: flex;
    justify-content: flex-end;
  }
}
</style>