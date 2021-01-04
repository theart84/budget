<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance" />
    <SortButtons @viewAllTransactions="allTransactions"
                 @viewIncomeTransactions="incomeTransactions"
                 @viewOutcomeTransactions="outcomeTransactions"/>
    <BudgetList  :list="transaction"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import SortButtons from "@/components/SortButtons";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    SortButtons,
  },
  data: () => ({
    list: {},
    transaction: {},
  }),
  computed: {
    totalBalance() {
      return Object.values(this.transaction).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: Math.random()
      };
      this.$set(this.list, newObj.id, newObj);
      this.allTransactions();
    },
    allTransactions() {
      return this.transaction = {...this.list};
    },
    incomeTransactions() {
      const newObj = Object.entries(this.list).reduce((acc, [key, value]) => {
        if (value.type === 'INCOME') {
          acc[key] = value;
        }
        return acc;
      }, {});
      return this.transaction = {...newObj};
    },
    outcomeTransactions() {
      const newObj = Object.entries(this.list).reduce((acc, [key, value]) => {
        if (value.type === 'OUTCOME') {
          acc[key] = value;
        }
        return acc;
      }, {});
      return this.transaction = {...newObj};
    }
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
