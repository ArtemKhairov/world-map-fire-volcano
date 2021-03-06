# World Map wildfire and volcano 🔥🌋

Этот проект создан при помощи [Create React App](https://github.com/facebook/create-react-app).

## Доступные скрипты

В папке проекта вы можете запустить:

### `npm start`

Запустить приложение в режиме разработки.\
Открыть [http://localhost:3000](http://localhost:3000) чтобы посмотреть проект.

Страница автоматически перезагрузится если вы сделаете изменения.\
Все ошибки будут показаны в консоли.



### `npm run build`

Собирает ваше приложение для продакшена в папке `build` .\
Сборка оптимизируется для достижения максимальной производительности


## Что умеет это SPA ?

- Показывает карту мира [(Google-maps-api)][google]
- На карте показывает пожары и вулканы в режиме онлайн
- Данные предоставлены [Nasa][nasa]
- Каждому природному явлению присвоен уникальный айди и местоположение


## Интерфейс 



Отсутствуют яркие и броские цвета 

Внешний вид приложения:

![gif]


## Использование 

Для корректной работы приложения вам необходимо иметь учетную запись [Nasa-api][nasa]

Либо же воспользоваться демо ключом предоставляемым без регистрации

В компоненте Map.js необходимо вставить ключ

```js
<GoogleMapReact
        bootstrapURLKeys={{ key: ' Ваш ключ ' }}
        defaultCenter={center}
        defaultZoom={zoom}
        >
```


## Технологии

- [React][react]
- [Nasa open Api][nasa]
- [Google Maps][google]


## Сотрудничество

Если вы нашли ошибку или хотите помочь сделать это SPA лучше,оптимизированней или добавить функционал, то свяжитесь со мной :)


[gif]:https://media.giphy.com/media/qXd1XKyvejcGwfebfU/giphy.gif
[nasa]:https://api.nasa.gov/
[react]:https://ru.reactjs.org/
[google]:https://console.cloud.google.com/?hl=ru
