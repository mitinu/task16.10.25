<template>
  <div class="input">
    <input :type="showPassword ? 'text' : 'password'"  :value="value" @change="changeValue">
    <button type="button" @click.stop="swapShowPassword" class="toggle-btn">
        <span class="showPassword">
          <template v-if="showPassword"><eyeOpenIcon/></template>
          <template v-else><eyeClosedIcon/></template>
        </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EyeClosedIcon from "@/components/svg/EyeClosedIcon.vue";
import EyeOpenIcon from "@/components/svg/EyeOpenIcon.vue";

export default defineComponent({
  name: 'PasswordInput',
  components: {
    EyeOpenIcon,
    EyeClosedIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      showPassword: false as boolean
    }
  },
  methods:{
    changeValue(event: Event): void{
      this.$emit("changeValue", (event.target as HTMLSelectElement).value)
    },
    swapShowPassword(): void{
      this.showPassword = !this.showPassword
    }
  }
})
</script>

<style scoped lang="scss">
.input{
  position: relative;
  input{
    width: 100%;
    height: 30px;
    background-color: white;
    border: black solid 1px;
    border-radius: 4px;
    margin: 10px;
  }
  button{
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }
}


</style>