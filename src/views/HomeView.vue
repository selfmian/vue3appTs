<template>
  <div class="home">
    <h3>{{ mess }}</h3>
    <el-button type="primary" round>Primary</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    
  },
  data() {
    return {
      mess: "hello seec1",
    };
  },
  methods: {
    say(): string {
      return "22";
    },
  },
});
</script>
