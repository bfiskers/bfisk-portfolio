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
            image: [ray1, bee, prof],
            tags: ["html", "css"]
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
              Made for Intermediate Graphics (CS 351-2) at Northwestern University`],
            color: "201, 58, 82",
            imageLeft: false,
            image: [ray1, ray3, ray4, ray5, ray2],
            tags: ["WebGL", "JavaScript", "HTML"]
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
            tags: ["Unity", "Hello", "HTML"]
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
    width: 90%;
  }

  .projectDesc {
    max-height: unset;
  }

  .projectImage {
    width: 100%;
  }
}
</style>
