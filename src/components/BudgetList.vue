<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div v-for="(item, prop) in list" :key="prop">
          <BudgetListItem :comment="item.comment" :value="item.value" :id="item.id" @deleteItem="onDeleteItem"/>
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty list',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  width: 500px;
  margin: auto;
}
</style>