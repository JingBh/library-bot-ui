<template>
  <div>Book</div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { BookInfo, SearchBookResult } from '@/library'
import { AxiosResponse } from 'axios'

@Component
export default class BookPage extends Vue {
  get barCode () {
    return this.$route.params.id
  }

  data: BookInfo | null = null

  error = false
  loading = true

  @Watch('barCode', { immediate: true })
  async fetchData () {
    const url = `/searchbookreutndetaildata/BARCODE/${this.barCode}`
    try {
      const result: AxiosResponse<SearchBookResult> = await this.$http.get(url)
      this.data = result.data.result[0].fields.Data.fields.FItems[0]
    } catch (e) {
      console.error('')
      this.error = true
    }
    this.loading = false
  }
}
</script>
