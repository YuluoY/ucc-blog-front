export declare interface UApp {
  // 根字体大小
  rootFontSize: number
}

window.UApp = reactive({
  rootFontSize: parseInt(document.documentElement.style.fontSize)
})
