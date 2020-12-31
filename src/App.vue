<template>
  <v-app>
    <system-bar />

    <v-main class="grey lighten-4">
      <v-container>
        <v-slide-x-transition>
          <keep-alive include="HomePage">
            <router-view />
          </keep-alive>
        </v-slide-x-transition>
      </v-container>
    </v-main>

    <v-footer
      app
      absolute
      padless
      class="grey lighten-3 grey--text text--darken-3"
    >
      <v-col class="text-center">
        <span class="small">By JingBh / 一个清华附中高研实验室项目</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SystemBar from '@/components/SystemBar.vue'
import packageMeta from '@/../package.json'

const title = packageMeta.title

@Component({
  components: {
    SystemBar
  },
  metaInfo: {
    title
  }
})
export default class App extends Vue {

}
</script>
