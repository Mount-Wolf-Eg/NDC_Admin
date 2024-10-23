<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="row d-flex flex-row">
        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Job Name :</label>
          <input
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="slideEn"
            :value="job.title"
          />
        </span>

        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Job Description :</label>
          <input
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="slideEn"
            :value="job.description"
          />
        </span>

        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Job Content :</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1.5rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
              height: 10rem;
              overflow: auto;
            "
            disabled
            id="slideEn"
            :value="job.content"
          ></textarea>
        </span>
        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Created at:</label>
          <input
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="slideEn"
            :value="timeDate"
          />
        </span>

        <div
          class="col-12 center-col my-3 align-items-start justify-content-end ps-5 pb-2"
        >
          <div
            style="
              background-color: white;
              width: fit-content;
              padding: 1rem;
              border-radius: 9px;
            "
          >
            <img
              :src="job.image"
              alt="partner"
              style="width: 10rem; background-color: #ccc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useJobsStore } from "@/stores/jobs/jobsStore";
import { storeToRefs } from "pinia";
import moment from "moment";

const { job } = storeToRefs(useJobsStore());

const route = useRoute();
const router = useRouter();
const timeDate = ref();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "Jobs" });
  let res = await useJobsStore().getJob({ id: route.params.id });
  if (res)
    timeDate.value = moment(new Date(job.value.created_at)).format(
      "DD-MM-YYYY"
    );
  if (!res) router.push({ name: "Jobs" });
});
</script>

<style lang="scss" scoped></style>
