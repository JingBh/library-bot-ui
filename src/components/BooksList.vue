<template>
  <v-card
    v-if="hasData"
    elevation="1"
    outlined
  >
    <v-list>
      <template v-for="({ fields: book }, i) in data">
        <template v-if="book.LocalList && book.LocalList.fields.FCount">
          <v-list-item
            :key="i + '-item'"
            @click="bookDetails(data[i])"
          >
            <v-list-item-content>
              <v-row>
                <v-col cols="auto">
                  <h6 class="text-body-1 font-weight-bold mb-1">
                    {{ book.BTitle }}
                  </h6>
                  <p class="text-body-2 text--secondary mb-0">
                    {{ book.BAuther }}
                  </p>
                </v-col>
                <v-col class="text-right pr-5">
                  <p class="text-body-1 text--secondary mb-1">
                    <span v-if="book.BPublish">
                      {{ book.BPublish }}
                    </span>
                    <span v-if="book.BPublish && book.BPublishDay">
                      /
                    </span>
                    <span v-if="book.BPublishDay">
                      {{ book.BPublishDay }}
                    </span>
                  </p>
                  <p
                    v-if="book.BCallNo"
                    class="text-caption text--disabled mb-0"
                  >
                    索书号：{{ book.BCallNo }}
                  </p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="i < data.length - 1"
            :key="i"
            class="my-1"
          />
        </template>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { BookInfo } from '@/library'

@Component
export default class BooksList extends Vue {
  @Prop(Array) readonly data!: BookInfo[] | undefined

  get hasData () {
    return !!this.data
  }

  bookDetails (book: BookInfo) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const barCode = book.fields.LocalList!.fields.FItems[0].fields.BarCode
    this.$router.push(`/book/${encodeURIComponent(barCode)}`)
  }
}
</script>
