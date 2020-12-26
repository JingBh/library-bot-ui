<template>
  <div
    class="my-4 mt-sm-8 mt-md-16 mx-auto"
    style="max-width: 40rem;"
  >
    <v-slide-y-transition>
      <v-alert
        v-if="error"
        prominent
        type="error"
        class="mb-4"
      >
        <div class="title">
          错误
        </div>
        <p class="mb-0">
          无法向服务器发起请求，请检查网络连接并稍后重试。
        </p>
        <v-btn
          small
          color="secondary"
          class="float-right"
          :loading="loading"
          :disabled="loading"
          @click="search"
        >
          重试
        </v-btn>
      </v-alert>
    </v-slide-y-transition>
    <v-text-field
      v-model="queryValue"
      outlined
      clearable
      autofocus
      hide-details
      label="搜索"
      placeholder="搜索你想看的书..."
      prepend-inner-icon="mdi-book-search"
      :loading="loading"
    />
    <v-radio-group
      v-model="queryType"
      row
      hide-details
      mandatory
      dense
      label="搜索类型："
    >
      <v-radio
        v-for="searchType of searchTypes"
        :key="searchType.value"
        :label="searchType.label"
        :value="searchType.value"
      />
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { debounce } from 'lodash'
import { AxiosResponse } from 'axios'

import { SearchBookResult, SearchType, searchTypes } from '@/library'

@Component
export default class HomePage extends Vue {
  loading = false
  error = false

  queryType: SearchType = 'TITLE'
  queryValue = ''

  result: SearchBookResult | null = null

  _requestSearch (query: string) {
    this.error = false
    const url = `/searchbookreutndetaildata/${query}`
    this.$http.get(url).then(({ data }: AxiosResponse<SearchBookResult>) => {
      this.result = data
    }).catch((error) => {
      console.error(error)
      this.error = true
    }).finally(() => {
      this.loading = false
    })
  }

  requestSearch = debounce(this._requestSearch, 2000)

  search () {
    this.loading = true
    let query = encodeURIComponent((this.queryValue || '').trim())
    if (query.length > 0) {
      query = `${this.queryType}/${query}`
      this.requestSearch(query)
    } else this.loading = false
  }

  get searchTypes () {
    return searchTypes
  }

  @Watch('queryType')
  @Watch('queryValue', { immediate: true })
  onQueryChange () {
    this.error = false
    this.loading = true
    this.search()
  }
}
</script>
