<script>
import { RouterView } from 'vue-router'

export default {
    props: {
        project: Object
    },
    methods: {
        scrollImage(project, ind) {
            project.imageScroller = ind;
            project.manualScroll = true;
        }
    }
}
</script>

<template>
  <div class="projectContainer" :style="'--rgb: ' + project.color + '; flex-direction: ' + (project.imageLeft ? 'unset' : 'row-reverse')">
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
  flex: 7 1 0;
  padding: 10px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.projectDesc::-webkit-scrollbar {
  display: none;
}

.projectImage {
  flex: 4 1 0;
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
</style>
