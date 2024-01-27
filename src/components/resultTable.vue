<template>
  <div class="overflow-x-auto h-auto max-md:hidden">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>InputTime</th>
          <th>Inputer</th>
          <th>InputerID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(item, index) in res" :key="index">
          <th>{{ index }}</th>
          <td>{{ item.ID }}</td>
          <td>{{ item.InputTime }}</td>
          <td>{{ item.Inputer }}</td>
          <td>{{ item.InputerID }}</td>
          <td>{{ item.Name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { SqlResp } from "../types/execSqlResp";
export default {
  props: {
    res: Array<SqlResp>,
  },
};
</script>
