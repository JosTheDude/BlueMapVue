export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Меню",
        tooltip: "Меню"
    },
    maps: {
        title: "Карти",
        button: "Карти",
        tooltip: "Список карт"
    },
    markers: {
        title: "Мітки",
        button: "Мітки",
        tooltip: "Список міток",
        marker: "маркер | маркери",
        markerSet: "набір маркерів | набори маркерів",
        searchPlaceholder: "Пошук...",
        followPlayerTitle: "Слідкувати за гравцем"
    },
    settings: {
        title: "Налаштування",
        button: "Налаштування"
    },
    goFullscreen: {
        button: "Перейти в повноекранний режим"
    },
    resetCamera: {
        button: "Скинути камеру",
        tooltip: "Скинути камеру та позицію"
    },
    updateMap: {
        button: "Оновити карту",
        tooltip: "Очистити кеш тайлів"
    },
    lighting: {
        title: "Освітлення",
        dayNightSwitch: {
            tooltip: "День/Ніч"
        },
        sunlight: "Сонячне світло",
        ambientLight: "Навколишнє світло"
    },
    resolution: {
        title: "Роздільна здатність",
        high: "Висока (SSAA, x2)",
        normal: "Нормальна (Системна, x1)",
        low: "Низька (\"Upscale\", x0.5)"
    },
    freeFlightControls: {
        title: "Налаштування вільного польоту",
        mouseSensitivity: "Чутливість миші",
        invertMouseY: "Вертикальне інвертування миші"
    },
    renderDistance: {
        title: "Відстань промальовки",
        hiresLayer: "Високодеталізований шар",
        lowersLayer: "Низькодеталізований шар"
    },
    theme: {
        title: "Тема",
        default: "За замовчуванням (Браузерна)",
        dark: "Темна",
        light: "Світла"
    },
    debug: {
        button: "Відлагоджувальний режим"
    },
    resetAllSettings: {
        button: "Скинути всі налаштування"
    },
    players: {
        title: "Гравці",
        tooltip: "Список гравців"
    },
    compass: {
        tooltip: "Компас / Повернути на північ"
    },
    controls: {
        title: "Налаштування відображення",
        perspective: {
            button: "Перспектива",
            tooltip: "Перспективна проекція"
        },
        flatView: {
            button: "Пласка карта",
            tooltip: "Ортографічна / Пласка проекція",
        },
        freeFlight: {
            button: "Вільний політ",
            tooltip: "Вільний політ / \"Spectator mode\""
        }
    },
    language: {
        title: "Мова",
    },
    blockTooltip: {
        block: "Блок",
        position: "Позиція",
        chunk: "Чанк",
        region: {
            region: "Регіон",
            file: "Файл"
        },
        light: {
            light: "Освітлення",
            sun: "Сонце",
            block: "Блок",
        }
    },
    info: {
        title: "Інформація",
        button: "Інформація",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Керування-мишею:</h2>
	<table>
		<tr><th>рух</th><td><kbd>лівий-клік</kbd> + пересування</td></tr>
		<tr><th>приближення</th><td><kbd>колесико-миші</kbd> (прокрутити)</td></tr>
		<tr><th>повернути / повернути</th><td><kbd>правий-клік</kbd> + пересування</td></tr>
	</table>
</p>
<p>
	<h2>Керування-клавіатурою:</h2>
	<table>
		<tr><th>рух</th><td><kbd>wasd</kbd> / <kbd>стрілки-клавіатури</kbd></td></tr>
		<tr><th>приблизити</th><td>Цифроблок: <kbd>+</kbd>/<kbd>-</kbd> або <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>повернути / нахилити</th><td><kbd>Лівий-Alt</kbd> + <kbd>wasd</kbd> / <kbd>стрілки-клавіатури</kbd> або <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Сенсорна-панель:</h2>
	<table>
		<tr><th>рух</th><td>дотик + перетягування</td></tr>
		<tr><th>приблизити</th><td>дотик двома пальцями + зсув доверху</td></tr>
		<tr><th>поворот / нахил</th><td>дотик двома пальцями + поворот / зсув доверху / донизу</td></tr>
	</table>
</p>
<br><hr>
<p>
	Цю карту було згенеровано з &#9829; використовуючи <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
}
//Переклав Y0shioSato
