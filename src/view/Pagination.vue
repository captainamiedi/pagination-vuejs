<template>
  <div id="app">
    <h1>Pagination</h1>
    <div class="pag">
    <DataLoader :endpoint="`https://api.github.com/orgs/vuejs`">
      <template #loaded="{data}">
        <VPagination :totalItems="data.public_repos">
          <template #data="{pageNumber}">
            <DataLoader
              :endpoint="`https://api.github.com/orgs/vuejs/repos?page=${pageNumber}&per_page=20`"
            >
              <template #loaded="{data}">
                  <Items :items="data" />
              </template>
            </DataLoader>
          </template>
        </VPagination>
      </template>
    </DataLoader>
    </div>
  </div>
</template>


<script>
import DataLoader from "../components/DataLoader";
import VPagination from "../components/VPagination";
import Items from '../components/Items'
export default {
  name: "Pagination",
  components: {
    DataLoader,
    VPagination,
    Items,
  },
};
</script>

<style lang="scss" scoped>
#app{
// display: flex;
// justify-content: center;
// }
// .pag{
//   display: flex;
// justify-content: center;  
}
</style>