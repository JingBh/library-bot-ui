<template>
  <div class="my-4 my-md-8 my-lg-16">
    <v-text-field outlined clearable autofocus hide-details
                  label="搜索" placeholder="搜索你想看的书..."
                  prepend-inner-icon="mdi-book-search"
                  :loading="loading" v-model="queryValue" />
    <v-radio-group row hide-details mandatory dense
                   label="搜索类型：" v-model="queryType">
      <v-radio v-for="searchType of searchTypes"
               :key="'search-type-' + searchType.value"
               :label="searchType.label"
               :value="searchType.value" />
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { debounce } from 'lodash'

import { SearchType, searchTypes } from '@/library'

@Component
export default class HomePage extends Vue {
  loading = false

  queryType: SearchType = 'TITLE'
  queryValue = ''

  _search (queryType: SearchType, queryValue: string) {
    queryType = queryType.toUpperCase()
    console.log(queryType, queryValue)
    this.loading = false
  }

  search = debounce(this._search, 1000)

  get searchTypes () {
    return searchTypes
  }

  @Watch('value', { imidiate: true })
  onValueChange (val: string) {
    this.loading = true
    this.search(val)
  }
}
</script>
