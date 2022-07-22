<template>
  <div>
    <h3 @click="fn">登录页{{ mess }}</h3>
    <login-son></login-son>
    <p ref="pp">{{ asd }}</p>
    <input type="text" v-model="my" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import LoginSon from "./childs/LoginSon.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginSon,
  },
  setup() {
    // data
    let mess: any = ref(" Hello ");
    // methods
    function fn(): void {
      mess.value = " seec1";
    }
    // computed
    let asd: any = computed(() => {
      return mess.value + "TypeScript";
    });
    // watch
    let my: any = ref("MyMess");
    watch(my, (n, o) => {
      console.log(n, o);
    });
    // 钩子   没有 create
    function myAjax() {
      axios.get("xxx").then();
    }
    // myAjax();
    let pp = ref(null)
    onMounted(() => {
      // console.log(pp.value);
      (pp.value  as HTMLParagraphElement).style.background = "red"
      
    });
    return {
      mess,
      fn,
      asd,
      my,
      pp
    };
  },
});
</script>

<style lang="scss" scoped>
</style>