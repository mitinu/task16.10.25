<template>
  <div>
    <input
        type="text"
        list="recordType"
        :value="value"
        @change="changeValue"
        maxlength="100"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RecordTypeInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods:{
    changeValue(event: Event): void{
      this.$emit("changeValue", (event.target as HTMLSelectElement).value)
    },
  }
})
</script>

<style scoped lang="scss">
input{
  width: 100%;
  height: 30px;
  background-color: white;
  border: black solid 1px;
  border-radius: 4px;
  margin: 10px;
}


</style>