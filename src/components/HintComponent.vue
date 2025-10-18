<template>
  <div class="hint" :style="{ backgroundColor: backgroundColor }">
  <div class="hint__circle">{{ sign }}</div>
  <span>{{ text }}</span>
</div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'

export default defineComponent({
  name: 'HintComponent',
  props: {
    sign: {type: String, required: true},
    text: {type: String, required: true},
    backgroundColor: {type: String, required: true}
  }
})
</script>

<style scoped lang="scss">
.hint{
  border-radius: 4px;
  padding: 10px;
  &__circle{
    display: inline-block;
    border-radius: 50%;
    border: black solid 1px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
  }
  span{
    margin-left: 10px;
  }
}
</style>