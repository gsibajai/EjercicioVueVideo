# Enrutar Vue

1. Creamos una carpeta llamada router que este dentro de src de nuestro proyecto de vue.
2. Instalamos router en el proyecto ```npm install vue-router```

3. Dentro de ella creamos un archivo llamado ```index.js```.
4. Copiamos el siguiente código.
```java
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import PersonalData from '@/views/PersonalData'
import BrowseView from '@/views/BrowseView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home 
  },
  {
    path: '/ui/personal-data',
    name: 'personal-data',
    component: PersonalData
  }, 
  {
    path: '/ui/browse',
    name: 'browse',
    component: BrowseView
  }
]

const router = createRouter({ 
  history: createWebHistory(), 
  scrollBehavior: () => ({ y: 0 }),
  routes 
})

export default router
```
4. El archivo App.vue debe contener el siguiente código:
```java
<template>
  <div id="app">
      <router-view /> 
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script> 
```

5. Con esto listo podemos agregar la etiqueta de router en el template de App.vue.

6. El archivo main.js debe contener el siguiente código:

```java
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app
.use(router)
.mount('#app')
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
