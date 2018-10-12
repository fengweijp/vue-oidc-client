import Vue from 'vue';
import { createOidcAuth, SignInType } from '@/lib/VueOidcClient';

const loco = window.location;
const appRootUrl = `${loco.protocol}//${loco.host}${process.env.BASE_URL}`;

var mainOidc = createOidcAuth(SignInType.Popup, {
  authority: 'https://demo.identityserver.io/',
  client_id: 'implicit', // 'implicit.shortlived',
  response_type: 'id_token token',
  scope: 'openid profile email api',
  post_logout_redirect_uri: appRootUrl,
  // test use
  prompt: 'login',
  login_hint: 'bob'

  // staleStateAge?: number;
  // clockSkew?: number;
  // stateStore?: StateStore;
  // ResponseValidatorCtor?: ResponseValidatorCtor;
  // MetadataServiceCtor?: MetadataServiceCtor;
});
Vue.use(mainOidc);
export default mainOidc;
