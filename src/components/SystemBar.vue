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
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { ipcRenderer } = require('electron')
      ipcRenderer.invoke('get-battery').then((result: {
        hasbattery: boolean;
        acconnected: boolean;
        ischarging: boolean;
        percent: number;
      }) => {
        if (result.hasbattery) {
          this.batteryPercent = result.percent
          const baseIconNumber = Math.floor(result.percent / 10) * 10
          if (result.ischarging || result.acconnected) {
            if (baseIconNumber === 0) {
              this.battery = 'mdi-battery-charging-outline'
            } else {
              this.battery = `mdi-battery-charging-${baseIconNumber}`
            }
          } else {
            if (baseIconNumber === 0) {
              this.battery = 'mdi-battery-alert-variant-outline'
            } else if (baseIconNumber === 100) {
              this.battery = 'mdi-battery'
            } else {
              this.battery = `mdi-battery-${baseIconNumber}`
            }
          }
        } else {
          this.battery = 'mdi-power-plug'
          this.batteryPercent = 0
        }
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
      window.setInterval(this.updateNetwork, 500)
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
