
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
      count: localStorage.getItem("count")==null? 0: localStorage.getItem("count")
  },
  mutations: {
    increment (state) {
      state.count++
      localStorage.setItem("count",state.count)
    },
    decrement(state){
        state.count--
        localStorage.setItem("count",state.count)
    },
    reset(state){
      state.count=0;
      localStorage.setItem("count",state.count=0);
    }
  },
  actions:{
    
  }
})



