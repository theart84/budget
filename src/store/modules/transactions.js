import Vue from "vue";

const transactionsStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'INCOME',
        comment: 'Some comment',
        value: 100,
        id: 1
      },
    },
  },
  getters: {
    transactionsList: ({list}) => list
  },
  mutations: {
    ADD_TRANSACTION(state, data) {
      Vue.set(state.list, data.id, data)
    },
    DELETE_TRANSACTION(state, id) {
      Vue.delete(state.list, id);
    },

  },
  actions: {
    addTransactions: ({commit}, data) => {
      const newTransaction = {
        ...data,
        id: String(Math.random()),
      };
      commit('ADD_TRANSACTION', newTransaction);
    },
    delTransaction: ({commit}, id) => {
      commit('DELETE_TRANSACTION', id)
    },
  }
}
export default transactionsStore;
