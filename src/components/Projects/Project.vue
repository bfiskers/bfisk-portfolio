<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: {
        project: Object,
        active: Boolean
    },
    methods: {
        scrollImage(project, ind) {
            project.imageScroller = ind;
            project.manualScroll = true;
        }
    },
    components: { RouterLink, RouterView }
}
</script>

<template>
  <div class="projectContainer" :style="'--rgb: ' + project.color + ';'">
    <div v-if="active">
      <div class="projectImage">
        <div class="projectImageHolder" :style="'left: ' + (project.imageScroller ? '' + (project.imageScroller * -100) + '%' : '0px')">
          <div v-for="im in project.image" class="imageHolder">
            <img :src="im"/>
          </div>
        </div>
        <div class="slideshowButtonsHolder">
          <button class="slideshowButton" v-for="(im, ind) in project.image" @click="scrollImage(project, ind)" :style="'background-color: ' + (project.imageScroller === ind ? 'white; opacity: 1;' : 'black')"></button>
        </div>
      </div>
      <div class="projectDesc">
        <h2>{{ project.name }}</h2>
        <p v-for="paragraph in project.text">{{ paragraph }}</p>
        <div class="tagHolder">
          <div v-for="tag in project.tags" class="projectTag">{{ tag }}</div>
        </div>
      </div>
    </div>
    <div v-else class="flexContainer">
      <div class="projectImage flexImage">
        <img :src="project.image[0]"/>
      </div>
      <div class="flexDesc">
        <h2>{{ project.name }}</h2>
        <p>{{ project.blurb }}</p>
        <div class="tagHolder">
          <div v-for="tag in project.tags" class="projectTag">{{ tag }}</div>
        </div>
      </div>
    </div>
    <button v-if="project.text" class="expandButton" @click="() => this.$emit('setActiveProject')">
      <svg v-if="!active" class="expandSvg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
      <svg v-else class="expandSvg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
    </button>
    <RouterLink v-if="project.route" :to="project.route">
      <button class="expandButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
.projectContainer {
  background-color: rgba(var(--rgb), 0.7);
  margin: auto;
  margin-bottom: 40px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1000px;
  border: 1px solid black;
  filter: drop-shadow(5px 5px 6px grey);
}

.projectContainer:hover{
  background-color: rgba(var(--rgb), 1.0);
  filter: drop-shadow(5px 5px 12px grey);
}

.projectDesc {
  padding: 10px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.projectDesc::-webkit-scrollbar {
  display: none;
}

.projectImage {
  align-self: center;
  overflow: hidden;
  width: 60%;
  margin: auto;
}

.projectImageHolder {
  left: 0px;
  display: flex;
  align-items: center;
  position: relative;
  -webkit-transition: left 2s;
  -moz-transition: left 2s;
  -o-transition: left 2s;
  transition: left 2s;
}

.slideshowButton {
  background-color: black;
  transition: all 0.5s;
  border-radius: 100%;
  height: 17px;
  width: 17px;
  padding: 0;
  margin: 0;
  border: none;
  margin: 3px;
  opacity: 0.6;
  cursor: pointer;
}

.slideshowButton:hover {
  opacity: 1;
}

.slideshowButtonsHolder {
  display: flex;
  justify-content: center;
}

.imageHolder {
  min-width: 100%;
}

img {
  width: 100%;
  max-width: 100%;
}

.projectTag {
  background-color: skyblue;
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;
  font-size: 14px;
  margin-right: 4px;
  font-family: 'IBM Plex Mono', monospace;
}

.tagHolder {
  display: flex;
}

@media only screen and (max-width : 700px) {
  .projectContainer {
    width: 85%;
  }
  .projectImage {
    width: 100%;
  }
}

.flexContainer {
  display: flex;
}

@media only screen and (max-width : 500px) {
  .flexContainer {
    display: block;
  }
}

.flexImage {
  flex: 4 1 0;
}

.flexDesc {
  flex: 7 1 0;
  padding: 10px;
}

.expandButton {
  width: 100%;
  border: none;
  background-color: rgba(255,255,255,0.3);
  height: 20px;
  margin-top: 5px;
  cursor: pointer;
}

.expandButton:hover {
  background-color: rgba(255,255,255,0.6);
}

.expandSvg {
  height: 100%;
}
</style>
