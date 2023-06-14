<script>
import bee from '../../assets/images/bee.png';
import ray1 from '../../assets/images/Ray Tracing/sphereroom.png';
import ray2 from '../../assets/images/Ray Tracing/listpos1.png';
import ray3 from '../../assets/images/Ray Tracing/clearAndMirrors.png';
import ray4 from '../../assets/images/Ray Tracing/bothlights.png';
import ray5 from '../../assets/images/Ray Tracing/refract.png';
import prof from '../../assets/images/ProfessionalPic.png';
import dd1 from '../../assets/images/DungeonDef/DungeonDefense1.png';
import dd2 from '../../assets/images/DungeonDef/DungeonDefense2.png';
import Project from './Project.vue';

export default {
    data: () => {
      return {
        projects: [
          {
            name: "Dungeon Defense",
            text: [`
              Under Construction
            `],
            blurb: "A rogue-like game developed in Unity. Features include random generation, timed power-ups, and a wide variety of enemy types.",
            color: "56, 161, 199",
            image: [dd1, dd2],
            tags: ["Unity", "C#", "Libresprite"]
          },
          {
            name: "Ray Tracing Scenes",
            text: [`
              A project in WebGL that consists of a series of scenes that can be ray traced with a variety of
              parameters to produce high-quality images. Each scene has one or more point light sources and 
              objects are rendered with phong lightning. Super-sampling and jitter are added for anti-aliasing.
              There are a variety of shaped included such as rectangular prisms, spheres, and cylinders. Additionally, shapes
              can be reflective and/or transparent to imitate glass or mirrors. When multiple reflective objects
              are present, reflections can be recursive up to a user-chosen threshold.
            `,`
              Made for Intermediate Graphics (CS 351-2) at Northwestern University`],
            color: "201, 58, 82",
            image: [ray1, ray3, ray4, ray5, ray2],
            tags: ["WebGL", "JavaScript", "HTML"]
          },
          {
            name: "Space Evaders",
            text: [`
              Under Construction
            `],
            color: "240, 199, 17",
            image: [bee, ray1],
            tags: ["Unity", "Hello", "HTML"]
          },
        ],
        activeProject: null
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
      setActiveProject(ind) {
        if (this.activeProject === ind) {
          this.activeProject = null;
        } else {
          this.activeProject = ind;
        }
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
    components: {Project}
}
</script>

<template>
  <div class="padding">
    <Project v-for="(project, ind) in projects" :project="project" @setActiveProject="setActiveProject(ind)" :active="activeProject === ind"/>
  </div>
</template>

<style scoped>
.padding {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
