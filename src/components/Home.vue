<script>
import SectionButton from './SectionButton.vue';
import bee from '../assets/images/bee.png';
import ray from '../assets/images/Ray Tracing/sphereroom.png';
import prof from '../assets/images/ProfessionalPic.png';

export default {
    components: { SectionButton },
    data: () => {
      return {
        bee, ray, prof
      }
    }
}
</script>

<template>
  <div id="sectionsContainer">
    <SectionButton name="Projects" :image='ray' path="/projects"/>
    <SectionButton name="Experience" :image='prof' path="/experience"/>
    <SectionButton name="Hobbies" :image='bee' path="/hobbies"/>
  </div>
</template>

<style scoped>
#sectionsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
