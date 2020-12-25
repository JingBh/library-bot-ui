<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img class="shrink" src="images/lab_logo.svg"
                 alt="CSLab Logo" contain width="36"
                 v-bind="attrs" v-on="on" />
        </template>
        <span>一个清华附中高研实验室项目</span>
      </v-tooltip>

    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container style="max-width: 50rem;">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const title = '图书馆室内引导机器人'

@Component({
  metaInfo: {
    title
  }
})
export default class App extends Vue {
  get title () {
    return title
  }
}
</script>
