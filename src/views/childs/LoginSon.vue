<template>
  <div>
    Login 的子组件
    <el-form ref="ruleFormRef" :model="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" clearable type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" clearable type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import axios from "axios"

export default defineComponent({
  setup() {
    let ruleForm: any = reactive({
      username: "",
      password: "",
    });
    function submitForm(): void {
      console.log(ruleForm.username)
      console.log(ruleForm.password)
      // axios.post("",{})
    }
    return {
      ruleForm,
      submitForm
    };
  },
});
</script>

<style scoped>
</style>