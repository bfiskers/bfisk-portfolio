<script>
import bee from '../assets/images/bee.png';
import ray1 from '../assets/images/Ray Tracing/sphereroom.png';
import ray2 from '../assets/images/Ray Tracing/listpos1.png';
import ray3 from '../assets/images/Ray Tracing/clearAndMirrors.png';
import ray4 from '../assets/images/Ray Tracing/bothlights.png';
import ray5 from '../assets/images/Ray Tracing/refract.png';
import prof from '../assets/images/ProfessionalPic.png';

export default {
    data: () => {
      return {
        projects: [
          {
            name: "Dungeon Defense",
            text: [`
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello 
            `],
            color: "56, 161, 199",
            imageLeft: true,
            image: [bee, ray1, prof],
          },
          {
            name: "Ray Tracing Scenes",
            text: [`
              A project in WebGL that consists of a series of scenes that can be ray traced with a variety of
              parameters to produce high-quality images. Each scene has one or more point light sources and 
              objects are rendered with phong lightning. Super-sampling and jitter are added for anti-aliasing.
              There are a variety of shaped inclued such as rectangular prisms, spheres, and cylinders. Additionally, shapes
              can be reflective and/or transparent to imitate glass or mirrors. When multiple reflective objects
              are present, reflections can be recursive up to a user-chosen threshhold.
            `,`
              Made for Intermediate Graphics (CS 351-2) at Northwestern University
            `, `Tools: WebGL, Javascript, HTML`],
            color: "201, 58, 82",
            imageLeft: false,
            image: [ray1, ray3, ray4, ray2, ray5],
          },
          {
            name: "Space Evaders",
            text: [`
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
              hello hello hello hello hello hello hello hello hello hello hello hello 
            `],
            color: "240, 199, 17",
            imageLeft: true,
            image: [bee, ray1],
          },
        ]
      }
    },
    methods: {
      advancePictures() {
        this.projects.forEach(proj => {
          if (proj.manualScroll) {
            proj.manualScroll = false;
            return;
          }
          proj.imageScroller = (proj.imageScroller + 1) % proj.image.length;
        })
      },
      scrollImage(project, ind) {
        project.imageScroller = ind;
        project.manualScroll = true;
      }
    },
    mounted () {
      this.projects.forEach(proj => {
        proj.manualScroll = false;
        proj.imageScroller = 0;
      });
      this.timer = setInterval(() => {
        this.advancePictures();
      }, 4500)
    },
}
</script>

<template>
  <div>
    <div v-for="project in projects" class="projectContainer" :style="'--rgb: ' + project.color + '; flex-direction: ' + (project.imageLeft ? 'unset' : 'row-reverse')">
      <div class="projectImage">
        <div class="projectImageHolder" :style="'left: ' + (project.imageScroller ? '' + (project.imageScroller * -100) + '%' : '0px')">
          <img v-for="im in project.image" :src="im"/>
        </div>
        <div class="slideshowButtonsHolder">
          <button class="slideshowButton" v-for="(im, ind) in project.image" @click="scrollImage(project, ind)" :style="'background-color: ' + (project.imageScroller === ind ? 'white' : 'black')"></button>
        </div>
      </div>
      <div class="projectDesc">
        <h2>{{ project.name }}</h2>
        <p v-for="paragraph in project.text">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projectContainer {
  background-color: rgba(var(--rgb), 0.7);
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  width: 80%;
  max-width: 1000px;
}

.projectContainer:hover{
  background-color: rgba(var(--rgb), 1.0);
}

.projectDesc {
  flex: 7 1 0;
  padding: 10px;
  max-height: 300px;
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
  border-radius: 100%;
  height: 17px;
  width: 17px;
  padding: 0;
  margin: 0;
  border: none;
  margin: 3px;
}

.slideshowButtonsHolder {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
}

@media only screen and (max-width : 700px) {
  .projectContainer {
    width: 100%;
    display: block;
  }

  .projectDesc {
    max-height: unset;
  }

  img {
    width: -webkit-fill-available;
  }
}
</style>
