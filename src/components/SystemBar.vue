<template>
  <v-system-bar
    app
    color="indigo"
    dark
    style="-webkit-app-region: drag"
  >
    <span>{{ title }}</span>
    <v-spacer />
    <v-icon v-if="network">
      {{ network }}
    </v-icon>
    <span v-if="battery">
      <v-icon>{{ battery }}</v-icon>
      <span
        v-if="batteryPercent"
        class="ml-n1 mr-2"
      >{{ batteryPercent }}%</span>
    </span>
    <span>{{ time }}</span>
  </v-system-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DateTime } from 'luxon'

import packageMeta from '@/../package.json'

@Component
export default class SystemBar extends Vue {
  timers: number[] = []

  network = ''
  battery = ''
  batteryPercent = 0
  time = ''

  get title () {
    return packageMeta.title
  }

  updateNetwork () {
    this.network = navigator.onLine
      ? 'mdi-check-network' : 'mdi-close-network'
  }

  updateBattery () {
    if (process.type === 'renderer') {
      import('electron').then(({ ipcRenderer }) => {
        ipcRenderer.invoke('get-battery').then((result: {
          hasbattery: boolean;
          ischarging: boolean;
          percent: number;
        }) => {
          if (result.hasbattery) {
            this.batteryPercent = result.percent
            const baseIconNumber = Math.floor(result.percent / 10) * 10
            const baseIcon = baseIconNumber === 0 ? 'outline' : String(baseIconNumber)
            if (result.ischarging) {
              this.battery = `mdi-battery-charging-${baseIcon}`
            } else {
              this.battery = `mdi-battery-${baseIcon}`
            }
          } else {
            this.battery = 'mdi-power-plug'
          }
        })
      })
    }
  }

  updateTime () {
    const now = DateTime.local()
    this.time = now.toLocaleString(DateTime.TIME_SIMPLE)
  }

  mounted () {
    this.timers = [
      window.setInterval(this.updateTime, 1000),
      window.setInterval(this.updateBattery, 5000),
      window.setInterval(this.updateNetwork, 5000)
    ]
    this.updateTime()
    this.updateBattery()
    this.updateNetwork()
  }

  beforeDestroy () {
    for (const timer of this.timers) {
      clearInterval(timer)
    }
  }
}
</script>
