import VueI18n from 'vue-i18n';
import en from './en';
import Vue from 'vue';

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	messages: { en }
});

export default i18n;