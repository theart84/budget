<template>
  <div class="total-value" :style="colorBalance">Balance: {{ total }}</div>
</template>

<script>
export default  {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    colorBalance() {
      if (this.total > 0) {
        return `color: green`;
      } else if (this.total < 0) {
        return `color: red`;
      }
      return `color: black`;
    }
  }
}
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>