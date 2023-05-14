<script>
import SectionButton from './SectionButton.vue';

export default {
    components: { SectionButton }
}
</script>

<template>
  <div id="sectionsContainer">
    <SectionButton name="Projects" image='/src/assets/images/sphereroom.png' path="/projects"/>
    <SectionButton name="Experience" image='/src/assets/images/ProfessionalPic.jpg' path="/experience"/>
    <SectionButton name="Hobbies" image='/src/assets/images/bee.png' path="/hobbies"/>
  </div>
</template>

<style scoped>
#sectionsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
