<template>
  <listAccount/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ListAccount from './form/ListAccount/ListAccount.vue';

@Options({
  components: {
    ListAccount
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
