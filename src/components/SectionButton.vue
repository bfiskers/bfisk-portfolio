<script>
export default {
  props: {
    name: String
  }
}
</script>

<template>
  <div class="sectionButton">
    <text class="buttonText">{{ name }}</text>
  </div>
</template>

<style scoped>
.sectionButton {
    font-size: 60px;
    border: grey 1px solid;
    border-radius: 20px;
    width: 40%;
    padding-top: 60px;
    padding-bottom: 60px;
    box-shadow: 1px 1px;
    margin: 10px;
    min-width: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/bee.png');
    background-size: cover;
    min-height: 150px;
    background-position: center center;
    opacity: 0.5;
    font-weight: bold;
}

.sectionButton:hover {
    opacity: 1;
}
</style>
