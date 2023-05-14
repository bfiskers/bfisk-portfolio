<script>
import { VueElement, nextTick } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    props: {
        name: String,
        image: String,
        path: String
    },
    components: { RouterLink }
}
</script>

<template>

    <RouterLink :to="path" class="sectionButton" :style="'--bg-image: url(\'' + image + '\');'">
    <text class="buttonText" a = "bbbb">{{ name }}</text>
    </RouterLink>

</template>

<style scoped>
.sectionButton {
  all: unset;
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
  min-height: 150px;
  position: relative;
  font-weight: bold;
  cursor: pointer;
}

.sectionButton::before {
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center center;
  filter: brightness(50%);
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  border-radius: 20px;
}

.sectionButton:hover::before {
  opacity: 1;
  filter: brightness(70%);
}

.buttonText {
  color: white;
  z-index: 1;
}
</style>
