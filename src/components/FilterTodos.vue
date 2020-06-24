<template>
  <div>
    Filter Todos:
    <Select v-model="selected" @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </Select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Select from "./elements/Select";
export default {
  name: "FilterTodos",
  components: {
    Select,
  },
  data: function() {
    return { selected: "200" };
  },
  methods: mapActions(["filterTodos"]),
};
</script>
