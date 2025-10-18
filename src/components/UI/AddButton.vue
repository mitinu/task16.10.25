<template>
  <div>
    <button>＋</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'

export default defineComponent({
  name: 'addButton'

})
</script>

<style scoped lang="scss">
button{
  width: 32px;
  height: 32px;
  margin-left: 20px;
  background-color: white;
  border: black solid 1px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  text-box: auto;
}
</style>