<template>
  <div>
    <button><wastebasketIcon/></button>
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import WastebasketIcon from "@/components/svg/WastebasketIcon.vue";

export default defineComponent({
  name: 'ButtonDelete.vue',
  components: {
    WastebasketIcon
  }

})
</script>

<style scoped lang="scss">
button{
  background-color: rgba(255,255,255,0);
  border: none;
  cursor: pointer;
}
</style>