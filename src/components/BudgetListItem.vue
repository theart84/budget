<template>
  <div class="list-item">
    <span class="budget-comment"><i :class="icon"></i>{{ comment }}</span>
    <span class="budget-value" :style="colorBalance">{{ value }}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(id)">Delete</ElButton>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    comment: {
      type: String
    },
    value: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  data: () => ({}),
  methods: {
    deleteItem(id) {
      let isConfirm = confirm('Are you sure you want to delete the transaction?')
      if (isConfirm) {
        this.$emit('deleteItem', id);
      }
    }
  },
  computed: {
    icon() {
      if (this.value > 0) {
        return `el-icon-top`;
      }
      return `el-icon-bottom`;
    },
    colorBalance() {
      if (this.value > 0) {
        return `color: green`;
      } else if (this.value < 0) {
        return `color: red`;
      }
      return `color: black`;
    }

  }
}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>