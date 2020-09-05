import Vue from 'vue'
import Router from 'vue-router'
import store from './store/'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

import { AmplifyEventBus } from 'aws-amplify-vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules)

let user;

// ユーザー管理
getUser().then((user, error) => {
    if (user) {
      router.push({ path: "/" },()=>{});
    }
    if (error) {
      console.error(error);
    }
});

AmplifyEventBus.$on("authState", async state => {
    if (state === "signedOut") {
      user = null;
      store.commit("setUser", null);
      router.push({ path: "/login" });
    } else if (state === "signedIn") {
      user = await getUser();
      router.push({ path: "/" });
    }
});



// ログイン状態管理
AmplifyEventBus.$on('authState', async(state) => {
    if (state === 'signedOut') {
        user = null;
        store.commit('setUser', null);
        router.push({ path: '/login' });
    } else if (state === 'signedIn') {
        user = await getUser();
        router.push({ path: '/' });
    }
});

function getUser() {
    return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then(data => {
        if (data && data.signInUserSession) {
          store.commit("setUser", data);
          return data;
        }
      })
      .catch(e => {
        console.info(e);
        store.commit("setUser", null);
        return null;
      });
}
  

// ルーティング設定
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            // ログインページ
            path: '/login',
            name: 'Authenticator',
            component: Login,
            meta: { requiresAuth: false }
        },
        {
            // トップページ
            path: '/',
            name: 'home',
            component: Home,
            mata: { requiresAuth: false }
        }
    ]
});

// リダイレクト設定
router.beforeResolve(async(to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        user = await getUser();
        if (!user) {
            return next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
        return next()
    }
    return next()
});

export default router