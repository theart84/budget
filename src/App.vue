<template>
  <div id="app">
    <Form/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({}),
  computed: {
    ...mapGetters('transactionsStore', ['transactionsList']),
    totalBalance() {
      return Object.values(this.transactionsList).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
