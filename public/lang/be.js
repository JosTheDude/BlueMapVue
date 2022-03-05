export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "মেনু",
        tooltip: "মেনু"
    },
    maps: {
        title: "মানচিত্র",
        button: "মানচিত্র",
        tooltip: "মানচিত্র-তালিকা"
    },
    markers: {
        title: "চিহ্নিতকারী",
        button: "চিহ্নিতকারী",
        tooltip: "মার্কার তালিকা",
        marker: "মার্কার / চিহ্নিতকারী",
        markerSet: "মার্কার - সেট / মার্কার-সেট",
        searchPlaceholder: "অনুসন্ধান...",
        followPlayerTitle: "প্লেয়ার অনুসরণ করুন"
    },
    settings: {
        title: "সেটিংস",
        button: "সেটিংস"
    },
    goFullscreen: {
        button: "পূর্ণপর্দা যান"
    },
    resetCamera: {
        button: "ক্যামেরা রিসেট করুন",
        tooltip: "ক্যামেরা ও অবস্থান পুনরায় সেট করুন"
    },
    updateMap: {
        button: "আপডেট মানচিত্র",
        tooltip: "টাইল ক্যাশে সাফ করুন"
    },
    lighting: {
        title: "আলো",
        dayNightSwitch: {
            tooltip: "দিন/রাত"
        },
        sunlight: "সূর্যালোক",
        ambientLight: "পরিবেষ্টনকারী-আলো"
    },
    resolution: {
        title: "রেজোলিউশন",
        high: "উচ্চ (SSAA, x2)",
        normal: "স্বাভাবিক (স্থানীয়, x1)",
        low: "নিম্ন (আপস্কেলিং, x0.5)"
    },
    freeFlightControls: {
        title: "ফ্রি-ফ্লাইট নিয়ন্ত্রণ",
        mouseSensitivity: "মাউস-সংবেদনশীলতা",
        invertMouseY: "বিপরীত মাউস ওয়াই"
    },
    renderDistance: {
        title: "দূরত্ব রেন্ডার",
        hiresLayer: "স্তর স্তর",
        lowersLayer: "নিম্ন স্তর"
    },
    theme: {
        title: "Theme",
        default: "Default (System/Browser)",
        dark: "Dark",
        light: "Light"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Reset All Settings"
    },
    players: {
        title: "Players",
        tooltip: "Player-List"
    },
    compass: {
        tooltip: "Compass / Face North"
    },
    controls: {
        title: "View / Controls",
        perspective: {
            button: "Perspective",
            tooltip: "Perspective-View"
        },
        flatView: {
            button: "Flat",
            tooltip: "Orthographic / Flat-View",
        },
        freeFlight: {
            button: "Free-Flight",
            tooltip: "Free-Flight / Spectator Mode"
        }
    },
    language: {
        title: "Language",
    },
    blockTooltip: {
        block: "Block",
        position: "Position",
        chunk: "Chunk",
        region: {
            region: "Region",
            file: "File"
        },
        light: {
            light: "Light",
            sun: "Sun",
            block: "Block",
        }
    },
    info: {
        title: "Info",
        button: "Info",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Mouse-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>left-click</kbd> + drag</td></tr>
		<tr><th>zoom</th><td><kbd>mousewheel</kbd> (scroll)</td></tr>
		<tr><th>rotate / tilt</th><td><kbd>right-click</kbd> + drag</td></tr>
	</table>
</p>
<p>
	<h2>Keyboard-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>wasd</kbd> / <kbd>arrow-keys</kbd></td></tr>
		<tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>rotate / tilt</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Touch-Controls:</h2>
	<table>
		<tr><th>move</th><td>touch + drag</td></tr>
		<tr><th>zoom</th><td>touch with two fingers + pinch</td></tr>
		<tr><th>rotate / tilt</th><td>touch with two fingers + rotate / move up/down</td></tr>
	</table>
</p>
<br><hr>
<p>
	This map has been generated with &#9829; using <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
};
