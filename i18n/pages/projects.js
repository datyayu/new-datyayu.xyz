export default {
  en: {
    projects: {
      title: "Projects",
      subtitle: `
        A collection of my favorite side-projects I've
        created.`,
      projects: [
        {
          name: "yayu.dev",
          date: "2017 - Ongoing",
          imagePrefix: "datyayu-xyz",
          url: "https://yayu.dev",
          github: "https://github.com/datyayu/new-datyayu.xyz",
          isIframe: true,
          description: `
This site :D.

Created originally using pug and Sass but later on they were replaced by simple Vue.js components and plain css. It features route transitions, vuex for state management, i18n support for multilanguage (spanish and english), code-splitting, rendering optimization, server-side rendering and the use of service worker for offline support.

Currently scores 100/100 on google's lighthouse test for Progressive Web Apps.

This is also an example of how JAMStack sites can work using only a CDN for static files, resulting in a fully functional app with great experience, without the need to roll you own server (thanks netlify! :D).`,
        },
        {
          name: "tachiagare!",
          date: "2017 - Ongoing",
          imagePrefix: "tachiagare",
          url: "https://livecalls.yayu.pro",
          isIframe: true,
          description: `
A karaoke app for idol music. It's intended to be used as a practice tool for japanese idol events and features custom calls and embedded guide video on each song.

It uses only plain javascript to keep track of the player as well as to keep the lyrics in-sync and scroll as needed. If you want a full overview of the front-end code, I also made a screencast here:
https://www.youtube.com/watch?v=iQ5GuiF9Dko (sorry about the static noise :P).`,
        },
        {
          name: "risu-moe",
          date: "2017",
          imagePrefix: "risu-moe",
          url: "https://risu.yayu.pro",
          github: "https://github.com/datyayu/risu-moe",
          isIframe: true,
          description: `
A shared sync music player. Basically you drop an audio file, then it gets uploaded and played in sync for all the connected users. Built using react, redux and typescript and also pretty new technologies like the Web Audio API and firebase's cloud functions.

It's currently on the first alpha release so expect a lot of new features coming soon.
`,
        },
        {
          name: "Weetrack 2.0",
          date: "2016 - Ongoing",
          imagePrefix: "weetrack2",
          url: "https://track.yayu.pro/",
          github: "https://github.com/datyayu/weetrack",
          isIframe: false,
          description: `
An automated anime release tracker built using react, redux, SASS and Gulp for the frontend. Both the frontend and the backend are written using ES6.

Part of the logic for listening the rss feeds, which the application uses as data source, was extracted onto a separate module (feed-watcher) and published on Github and npm to help other people to deal with that problem.`,
        },
        {
          name: "raji",
          date: "2016",
          imagePrefix: "raji",
          url: "https://raji-demo.herokuapp.com",
          github: "https://github.com/datyayu/raji-net-frontend",
          isIframe: false,
          description: `
Music player app for anisongs. Built using react, redux, RWD, Sass and webpack. The backend is written using .NET Core and Web API Core. It also features responsive design, rendering layers optimization and screen-size-based experience.

This project also ended up generating a separate project, a module that makes easier to work with the Web Audio API called ongaku which is available on github and npm.

Currently paused, but I'll probably going to retake this project on the future.`,
        },
        {
          name: "fbot-mk2",
          date: "2016",
          imagePrefix: "fbot2",
          github: "https://github.com/datyayu/fbot",
          isIframe: false,
          description: `
Second version of fbot. It uses node.js, as the first one does, but this version uses the Messenger Platform API instead of the old basic Messenger API.

This was an experiment created on the same day facebook launched the Messenger Platform API during the F8 event, in order to understand how the platform was going to work.`,
        },
        {
          name: "fbot",
          date: "2016",
          imagePrefix: "fbot",
          github: "https://github.com/datyayu/fbot",
          isIframe: false,
          description: `
A facebook bot who google things. Built using node and the facebook messenger API.`,
        },
        {
          name: "color-blind",
          date: "2016",
          imagePrefix: "color-blind",
          github: "https://github.com/datyayu/color-blind",
          isIframe: false,
          description: `
A platform game with similar mechanics than Color Symphony.

Built from scratch using java.`,
        },
        {
          name: "YayuJS",
          date: "2016 - 2017",
          imagePrefix: "yayujs",
          github: "https://github.com/datyayu/yayul-theme",
          isIframe: false,
          description: `
Blog built with ghost, deployed using a custom theme created from scratch for this site (Available now at github at datyayu/yayul-theme).

It was the first version of yayu.dev, but focused only on the blogging side of this site.`,
        },
        {
          name: "rental",
          date: "2016",
          imagePrefix: "rental",
          url: "https://datyayu.github.io/rental-frontend/views/home.html",
          github: "https://github.com/datyayu/rental-frontend",
          isIframe: true,
          description: `
A demo concept for a rental site. Built as a part of an internship to prove my skills using existing css frameworks (like materialize) and javascript libraries (like jQuery).`,
        },
        {
          name: "Weeselect",
          date: "2015 - 2016",
          imagePrefix: "weeselect",
          url: "https://weeselect.herokuapp.com/",
          github: "https://github.com/datyayu/weeselect",
          isIframe: true,
          description: `
A Single-page application built using angular 1.3 and node. It picks you a character for League of Legends from your custom pool and automatically it gives you a optimal item set for that character based on real match data (using Champion.gg).

This app is no longer being maintained.`,
        },
        {
          name: "Weesong",
          date: "2015",
          imagePrefix: "weesong",
          github: "https://github.com/datyayu/weesong",
          isIframe: false,
          description: `
Frontend-only SPA music player, targeted for anisongs. Built using angular 1.3, node, stylus and gulp. It uses advanced responsive web design techniques and browser APIs interaction like local-storage and Audio API.`,
        },
        {
          name: "Weetrack Mobile",
          date: "2014 - 2015",
          imagePrefix: "weetrack-mobile",
          github: "https://github.com/datyayu/weetrack-mobile",
          isIframe: false,
          description: `
A mobile client for weetrack's original version created using the ionic framework angular 1.3 and Sass. It includes styles and specific logic to ensure a more friendly mobile experience.

No longer mantained.`,
        },
        {
          name: "Weetrack",
          date: "2014 - 2015",
          imagePrefix: "weetrack",
          github:
            "https://github.com/datyayu/weetrack/tree/ae836bff72f7c9782c3086c5e8f799e07baa75dc",
          isIframe: false,
          description: `
An automated anime release tracker built with stylus, angular 1.3 and gulp. The backend was written in node.js using coffescript.

Replaced by weetrack 2.0.`,
        },
        {
          name: "StartPage",
          date: "2010",
          imagePrefix: "start-page",
          url: "https://datyayu.github.io/StartPage/index.html",
          github: "https://github.com/datyayu/StartPage",
          isIframe: true,
          description: `
Nothing really cool here. Just and old broken static page. However this was the first site I've ever created and I still love to come back and look at it.

Isn't it beautiful?`,
        },
      ],
    },
  },

  es: {
    projects: {
      title: "Proyectos",
      subtitle: `
        Una colección de mis proyectos favoritos que
        he creado.`,
      projects: [
        {
          name: "yayu.dev",
          date: "2017 - Actual",
          imagePrefix: "datyayu-xyz",
          url: "https://yayu.dev",
          github: "https://github.com/datyayu/new-datyayu.xyz",
          isIframe: true,
          description: `
Este sitio :D. Creado originalmente usando pug y Sass, pero posteriormente remplazados por simples componentes de Vue.js y css. Incluye transiciones entre rutas, manejo de estado con Vuex, soporte de i18n para multiples lenguajes (español e ingles), code-splitting, optimización de renderizado, server-side rendering y el uso de service worker para soporte offline.

Actualmente obtiene 100/100 puntos en el test lighthouse de google para Progressive Web Apps.

Este también es un ejemplo de como un sitio creado con el JAMStack pude funcionar usando solamente un CDN para montar la aplicación, resultando en una experiencia completamenta y de alta calidad, sin necesidad de tener un servidor corriendo.`,
        },
        {
          name: "tachiagare!",
          date: "2017 - Actual",
          imagePrefix: "tachiagare",
          url: "https://livecalls.yayu.pro",
          github: "https://github.com/datyayu/tachiagre",
          isIframe: true,
          description: `
Un app de karaoke para musica idol. Esta diseñada como una herramienta de practica para eventos de jp idols e incluye calls y video de guía en cada canción.

Usa unicament javascript plano (sin frameworks / librerias) para analizar el reproductor de audio, así como para mantener las letras en sincronía y hacer scroll cuando es requerido. Si quieres ver una vista general del codigo de frontend, también tengo un screencast donde lo explico en ingles:
https://www.youtube.com/watch?v=iQ5GuiF9Dko (Perdón por la estática :P).`,
        },
        {
          name: "risu-moe",
          date: "2017",
          imagePrefix: "risu-moe",
          url: "https://risu.yayu.pro",
          github: "https://github.com/datyayu/risu-moe",
          isIframe: true,
          description: `
Un reproductor sincronizado/compartido. Basicamente arrastras un archivo de audio, y este se sube a firebase y reproducido de manera sincronizada para todos los usuarios conectados. Creado usando react, redux y typescript, en conjuncto con otras herramientas como el Web Audio API y las cloud functions de firebase.

Actualmente se encuentra en la primera alpha, así que espera muchas funcionalidades nuevas muy pronto.`,
        },
        {
          name: "Weetrack 2.0",
          date: "2016 - Actual",
          imagePrefix: "weetrack2",
          url: "https://track.yayu.pro",
          github: "https://github.com/datyayu/weetrack",
          isIframe: false,
          description: `
Un rastreador automático de lanzamientos de episodios de anime creado react, redux, SASS y Gulp para el frontend. Tanto el frontend como el backend están escritos usando ES6.

Parte de la lógica para escuchar a los feeds de RSS, los cuáles usa la aplicación como fuente de datos, fue extraída en un módulo separado publicado libremente en github y npm (feed-watcher) para ayudar a otros a resolver ese problema.`,
        },
        {
          name: "raji",
          date: "2016",
          imagePrefix: "raji",
          url: "https://raji-demo.herokuapp.com",
          github: "https://github.com/datyayu/raji-net-frontend",
          isIframe: false,
          description: `
Aplicación de musica para anisongs. Creado usando react, redux, RWD, Sass y webpack. El backend esta escrito usando .NET Core y Web API Core. También incluye diseño responsivo, optimización de renderizado y experiencias basada en el tamaño de pantalla.

Esta aplicación también terminó generando un proyecto separado, un módulo para usar el Web Audio API de manera sencilla llamado ongaku, el cual está disponible en github y npm.

Actualmente en pausa, pero definitivamente planeo retomarlo en un futuro.`,
        },
        {
          name: "fbot-mk2",
          date: "2016",
          imagePrefix: "fbot2",
          github: "https://github.com/datyayu/fbot",
          isIframe: false,
          description: `
Segunda versión de fbot. Utiliza node.js, como su predecesor, pero esta versión usa el API de Messenger Platform en lugar del viejo API básico de Messenger.

Este proyecto fue creado el mismo día que facebook lanzó la Messenger Platform durante el evento F8, para comprender como iba a funcionar la plataforma.`,
        },
        {
          name: "fbot",
          date: "2016",
          imagePrefix: "fbot",
          github: "https://github.com/datyayu/fbot",
          isIframe: false,
          description: `
Un bot de facebook que googlea cosas. Creado usando node y el API de Messenger de facebook.`,
        },
        {
          name: "color-blind",
          date: "2016",
          imagePrefix: "color-blind",
          github: "https://github.com/datyayu/color-blind",
          isIframe: false,
          description: `
Un juego de plataforma con mecánicas similares a Color Symphony.

Creado desde cero usando java.`,
        },
        {
          name: "YayuJS",
          date: "2016 - 2017",
          imagePrefix: "yayujs",
          github: "https://github.com/datyayu/yayul-theme",
          isIframe: false,
          description: `
Blog construido con ghost, publicado usando un tema personalizado creado desde cero para este sitio (disponible actualmente en github como datyayu/yayul-theme).

Fue la primera versión de yayu.dev, pero enfocado sólo en la parte de blogging del sitio.`,
        },
        {
          name: "rental",
          date: "2016",
          imagePrefix: "rental",
          url: "https://datyayu.github.io/rental-frontend/views/home.html",
          github: "https://github.com/datyayu/rental-frontend",
          isIframe: true,
          description: `
Un concepto demo para un sitio de rentas.

Creado como parte de mis prácticas profesionales para demostrar mis habilidades usando frameworks de css (como materialize) y librerías de javascript (como jQuery).`,
        },
        {
          name: "Weeselect",
          date: "2015 - 2016",
          imagePrefix: "weeselect",
          url: "https://weeselect.herokuapp.com/",
          github: "https://github.com/datyayu/weeselect",
          isIframe: true,
          description: `
Una aplicacion construida usando angular 1.3 y node. Selecciona un personaje para League of Legends al azar de tu lista de seleccionados y automáticamente te da un set de items óptimo para ese personaje basado en datos de partidas reales (usando Champion.gg).

Ya no es mantenido.
          `,
        },
        {
          name: "Weesong",
          date: "2015",
          imagePrefix: "weesong",
          github: "https://github.com/datyayu/weesong",
          isIframe: false,
          description: `
Reproductor de música, dirigido en especifico para anisongs. Creado usando angular 1.3, node, stylus y gulp. Utiliza tecnicas avanzadas de diseño responsivo e interacciones con APIs del navegador como local-storage y Audio API.`,
        },
        {
          name: "Weetrack Mobile",
          date: "2015 - 2016",
          imagePrefix: "weetrack-mobile",
          github: "https://github.com/datyayu/weetrack-mobile",
          isIframe: false,
          description: `
Un cliente móvil para la versión original de weetrack, creado usando el framework Ionic, angular 1.3 y Sass. Incluye estilos y lógica especificas para garantizar una experiencia más amigable para móvil.

Ya no es mantenida.`,
        },
        {
          name: "Weetrack",
          date: "2014 - 2015",
          imagePrefix: "weetrack",
          github:
            "https://github.com/datyayu/weetrack/tree/ae836bff72f7c9782c3086c5e8f799e07baa75dc",
          isIframe: false,
          description: `
Un rastreador automático de lanzamientos de anime creado usando stylus, angular 1.3 y gulp. El backend fue escrito en node.js usando coffescript.

Replazado por weetrack 2.0.`,
        },
        {
          name: "StartPage",
          date: "2010",
          imagePrefix: "start-page",
          url: "https://datyayu.github.io/StartPage/index.html",
          github: "https://github.com/datyayu/StartPage",
          isIframe: true,
          description: `
Nada fancy aqui. Sólo una vieja página rota. Sin embargo, este fue el primer sitio que creé y aún me encanta regresar y mirarlo.

¿Acaso no es hermoso?`,
        },
      ],
    },
  },
}
