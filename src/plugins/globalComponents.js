import BaseAlertMessage from "../components/BaseAlertMessage"
import BaseLoadingBar from "../components/BaseLoadingBar"

export default {
    install(Vue) {
        Vue.component(BaseAlertMessage.name, BaseAlertMessage)
        Vue.component(BaseLoadingBar.name, BaseLoadingBar)
    }
}