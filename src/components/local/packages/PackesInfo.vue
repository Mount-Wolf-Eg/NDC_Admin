<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="row d-flex flex-row">
        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Name en:</label>
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
            :value="packag.name?.en"
          />
        </span>

        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">Name ar:</label>
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
            :value="packag.name?.ar"
          />
        </span>
        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">description en:</label>
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
            :value="packag.description?.en"
          />
        </span>

        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">description ar:</label>
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
            :value="packag.description?.ar"
          />
        </span>

        <span class="col-12 center-row my-3" style="gap: 10rem">
          <span>
            <p class="user-name" for="slideEn">Included Services</p>
            <ul class="card-list" style="color: var(--col-text)">
              <li
                v-for="(ser, j) in replaceData(packag.included_services?.en)"
                :key="j"
              >
                {{ ser }}
              </li>
            </ul>
          </span>
          <span>
            <p class="user-name" for="slideEn">الخدمات المشمولة:</p>
            <ul class="card-list" style="color: var(--col-text)">
              <li
                v-for="(ser, j) in replaceData(packag.included_services?.ar)"
                :key="j"
              >
                {{ ser }}
              </li>
            </ul>
          </span>
        </span>
        <span class="col-12 center-row my-3" style="gap: 12rem">
          <span>
            <p class="user-name" for="slideEn">Target Group</p>
            <ul class="card-list" style="color: var(--col-text)">
              <li
                v-for="(ser, j) in replaceData(packag.target_group?.ar)"
                :key="j"
              >
                {{ ser }}
              </li>
            </ul>
          </span>
          <span>
            <p class="user-name" for="slideEn">الفئة المستهدفة :</p>
            <ul class="card-list" style="color: var(--col-text)">
              <li
                v-for="(ser, j) in replaceData(packag.target_group?.en)"
                :key="j"
              >
                {{ ser }}
              </li>
            </ul>
          </span>
        </span>

        <!-- <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">content en:</label>
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
            :value="packag.content?.en"
          />
        </span>

        <span class="col-12 center-col my-3">
          <label class="user-name" for="slideEn">content ar:</label>
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
            :value="packag.content?.ar"
          />
        </span> -->

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
              :src="packag.image"
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
import { ref, onBeforeMount, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { usePackageStore } from "@/stores/settings/packageStore";
import moment from "moment";

const { packag } = storeToRefs(usePackageStore());

const route = useRoute();
const router = useRouter();
const timeDate = ref();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "packagePage" });
  let res = await usePackageStore().getPackage({ id: route.params.id });
  if (res)
    timeDate.value = moment(new Date(packag.value.created_at)).format(
      "DD-MM-YYYY"
    );
  if (!res) router.push({ name: "packagePage" });
});

const replaceData = (ser) => {
  if (ser) {
    return JSON.parse(ser.replace(/'/g, '"'));
  }
};
</script>

<style lang="scss" scoped></style>
