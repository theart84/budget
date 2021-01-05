<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="left">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME"/>
          <ElOption label="Outcome" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment"/>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>
      <ElButton @click="onSumbit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>


<script>
export default {
  name: 'Form',
  // data: () => ({
  //   formData: {
  //     type: 'INCOME',
  //     comment: '',
  //     value: 0
  //   },
  //   rules: {
  //     type: [{required: true, message: 'Please select type', trigger: 'blur'}],
  //     comment: [{required: true, message: 'Please input comment', trigger: 'change'}],
  //     value: [{validator: this.checkValue, trigger: 'change'}]
  //   }
  // }),
  data() {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0
      },
      rules: {
        type: { required: true, message: 'Required', trigger: 'change' },
        comment: { required: true, message: 'Required', trigger: 'change' },
        value: {validator: this.checkValue, trigger: 'change'}, //custom validation
      },
    }
  },
  methods: {
    checkValue(rule, value, callback) {
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value === 0) {
            callback(new Error('The value must not be zero'));
          } else {
            callback();
          }
        }
      }, 1000);
    },
    onSumbit() {
      this.$refs.addItemForm.validate((valid) => {
        const newFormData = {...this.formData};
        if (newFormData.type === 'OUTCOME') {
          newFormData.value = -Math.abs(newFormData.value);
        }
        if (valid) {
          this.$emit('submitForm', newFormData);
          this.$refs.addItemForm.resetFields();
        }
      })
    }
  }
}
</script>


<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>