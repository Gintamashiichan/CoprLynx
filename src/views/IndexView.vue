<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-700">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl sm:text-5xl font-bold">CoprLynx</h1>
          <p class="py-6">一键查询你的版权作品是否被出道，，，</p>
          <form
            class="flex flex-col sm:flex-row items-center justify-center w-full mx-auto mb-6"
          >
            <input
              type="text"
              placeholder="Type here"
              class="input w-full mb-4 sm:mb-0 sm:mx-3"
              v-model="query"
            />
            <button class="btn btn-primary" @click="handleSubmit">
              Get Started
            </button>
          </form>
          <resultTable :res="res" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { execSql } from "../libs/common";
import resultTable from "../components/resultTable.vue";

export default {
  data() {
    return {
      query: ref(""),
      res: new Array(),
    };
  },
  components: {
    resultTable,
  },
  methods: {
    async handleSubmit(_event: Event) {
      _event.preventDefault();
      this.res = await execSql(this.query);
    },
  },
};
</script>
