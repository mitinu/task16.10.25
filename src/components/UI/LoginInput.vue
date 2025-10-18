<template>
  <div>
    <input
        type="text"
        :value="value"
        @change="changeValue"
        :class="{ 'error': loginError }"
        @blur="validate"
        maxlength="100"
        placeholder="Введите логин"
    >
    <div v-if="loginError" class="error-message">{{ loginError }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loginError: '' as string
    }
  },
  methods:{
    changeValue(event: Event): void{
      this.$emit("changeValue", (event.target as HTMLSelectElement).value)
    },
    validate(event: Event) {
      this.loginError = ''
      const login = (event.target as HTMLSelectElement).value.trim() as string
      if (!login) {
        this.loginError = 'Логин - обязательное поле для заполнения'
        return false
      }
      return true
    }
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

  &.error {
    border-color: #dc3545;
    }
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
}
</style>