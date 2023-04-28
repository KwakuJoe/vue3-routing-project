import {createWebHistory, createRouter} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import NotFound from './components/pages/NotFound.vue'
import axios from 'axios';


// this is the baseURL
axios.defaults.baseURL = 'https://jsonplaceholder.ir';



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name:"home", redirect:'/posts', },
    { path: '/posts', name:"posts", component: Posts },
    { path: '/post/:id', name:"post", component: PostItem, props:true },
    { path: '/create-post', name:"create-post", component: CreatePost, beforeEnter: () => {
        console.log(console.log('Route before enter fired .....!'))
    }},
    { path: '/:pathMatch(.*)*', name:"not-found", component: NotFound },

  ]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
  linkActiveClass:'active'
   // short for `routes: routes`
})

// route gurading
router.beforeEach((to, from) => {
    console.log(from);
    console.log(to);

    // if( !authenticated) ...
        // do something ..
    // ...

    // this disables routing
    // next(false)
    // explicitly return false to cancel the navigation
    // return false
  })


  router.afterEach((to, from) => {
    console.log(from);
    console.log(to);

    // if( !authenticated) ...
        // do something ..
    // ...

    // this disables routing
    // next(false)
    // explicitly return false to cancel the navigation
    // return false
  })


// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount('#app');

// Now the app has started!
