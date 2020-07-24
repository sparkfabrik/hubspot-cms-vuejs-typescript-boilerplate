import Vue from 'vue';
import App from './App.vue';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './index.scss';

Vue.config.productionTip = false;

const targetModulesData: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.hubspot-cms-vuejs-typescript-boilerplate > script[type="application/json"]',
);
targetModulesData.forEach(({ dataset, textContent }) => {
  new Vue({
    render(h) {
      return h(App, { props: { config: this.$data } });
    },
    data: {
      portalId: dataset.portalId,
      moduleData: JSON.parse(textContent ?? ''),
      moduleInstance: dataset.moduleInstance,
      logoUrl: dataset.assetsLogo,
    },
  }).$mount(`#App--${dataset.moduleInstance}`);
});
