import Vue from "vue";
import RegexHelper from "./RegexHelper.vue";

const Components = {
	RegexHelper,
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name]);
});

export default Components;