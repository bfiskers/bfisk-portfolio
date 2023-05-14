<script>
import SectionButton from './SectionButton.vue';

export default {
    components: { SectionButton }
}
</script>

<template>
  <div id="sectionsContainer">
    <SectionButton name="hello hello hello hello hellohello"/>
    <SectionButton name="hello2"/>
    <SectionButton name="hello3"/>
  </div>
</template>

<style scoped>
#sectionsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
