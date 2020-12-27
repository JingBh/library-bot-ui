module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.jingbh.library-bot-ui',
        productName: '图书馆室内引导机器人',
        mac: {
          category: 'public.app-category.education',
          target: {
            target: 'dmg',
            arch: 'x64'
          }
        },
        win: {
          target: {
            target: 'nsis',
            arch: 'x64'
          }
        },
        linux: {
          category: 'Education',
          target: {
            target: 'deb',
            arch: 'armv7l'
          }
        }
      },
      mainProcessFile: 'src/background.ts',
      nodeIntegration: true,
      rendererProcessFile: 'src/main.ts'
    }
  }
}
