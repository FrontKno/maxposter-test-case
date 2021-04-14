# testcase_maxposter

Создано через vue-cli, использовал vue2 с typescript шаблоно, из дополнительно использованных библиотек:

1) tailwindcss - для верстки, сейчас на хайпе, захотел попробовать. В целом пока не заценил, библиотека либо на любителя, либо требует привычки.
2) axios - тут говорить нечего :)
3) vuex-module-decorators - тут самое интересное, оказалось что подружить typescript и vuex не такое простое дело, вроде как в четвертой версии они улучшили совместимость, но в третьей, сохранить типизацию нативными средствами у меня не получилось. Поэтому воспользовался одним из готовых решений, это вроде наиболее популярное и действительно неплохое, хотя все равно потребовало плясок с бубном для нормальной работы модулей.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
