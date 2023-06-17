const $c = (tag,props,children) => {
    const a = document.createElement("tag");
    for (const prop in props) {
        if (Object.hasOwnProperty.call(props, prop)) {
            const element = props[prop];
            a[prop] = props[prop];
            
        }
    }

    for (const i of children) {
        const b = children[i];

        if (b instanceof HTMLElement) {
            a.appendChild(b);
        } else {
            a.innerHTML += b;
        }
    }

    return a;
},
$ = (selector) => {
    const a = document.querySelectorAll(selector);
    if (a.length === 1) {
        return a[0];
    } else {
        return a;
    }
};
var root = $("#root");


//Screen navigator code
const MainMenu = $("#MainMenu"),
CreditsScreen = $("#CreditsScreen"),
PackGeneratorScreen = $("#PackGeneratorScreen"),
ColorConverterScreen = $("#ColorConverterScreen"),
screens = [MainMenu,CreditsScreen,PackGeneratorScreen,ColorConverterScreen];

function openScreen(which) {
    screens.forEach((v,i) => {
        v.style.display = "none";
    })
    which.style.removeProperty("display");
}

openScreen(MainMenu);

function toggleFullscreen() {
    if(document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
}

function uuid() {
    let a = "",
    b = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");

    for (let i = 0; i < 8; i++) {
        const c = b[Math.floor(Math.random() * b.length)];
        a += c;
    }
    a+= "-";
    for (let i = 0; i < 4; i++) {
        const c = b[Math.floor(Math.random() * b.length)];
        a += c;
    }
    a+= "-";
    for (let i = 0; i < 4; i++) {
        const c = b[Math.floor(Math.random() * b.length)];
        a += c;
    }
    a+= "-";
    for (let i = 0; i < 4; i++) {
        const c = b[Math.floor(Math.random() * b.length)];
        a += c;
    }
    a+= "-";
    for (let i = 0; i < 12; i++) {
        const c = b[Math.floor(Math.random() * b.length)];
        a += c;
    }

    return a;
}

//Pack Generator code
function GenerateManifestBedrock() {
    const NameInput = PackGeneratorScreen.children[1],
    DescInput = PackGeneratorScreen.children[2],
    TypeInput = PackGeneratorScreen.children[3];

    PackGeneratorScreen.children[5].innerText = JSON.stringify({
        format_version: 2,
        header: {
            name: NameInput.value,
            description: DescInput.value,
            pack_version: [ 1, 0, 0 ],
            min_engine_version: [ 1, 20, 0 ],
            uuid: uuid()
        },
        modules: [
            {
                description: DescInput.value,
                type: TypeInput.value,
                uuid: uuid(),
                min_engine_version: [ 0, 0, 1]
            }
        ]
    },2)
}

function convertColor() {
    const Red = (parseFloat(ColorConverterScreen.children[1].value) !== null) ? parseFloat(ColorConverterScreen.children[1].value) : 255.0;
    const Green = (parseFloat(ColorConverterScreen.children[2].value) !== null) ? parseFloat(ColorConverterScreen.children[2].value) : 255.0;
    const Blue = (parseFloat(ColorConverterScreen.children[3].value) !== null) ? parseFloat(ColorConverterScreen.children[3].value) : 255;
    const Alpha = (parseFloat(ColorConverterScreen.children[4].value) !== null) ? parseFloat(ColorConverterScreen.children[4].value) : 255;

    ColorConverterScreen.children[6].innerText = JSON.stringify([ Red / 255, Green / 255, Blue / 255, Alpha / 255]);
}

function convertColorBackwards() {
    const vec = JSON.parse(ColorConverterScreen.children[6].innerText);

    ColorConverterScreen.children[1].value = Math.floor(vec[0])*255;
    ColorConverterScreen.children[2].value = Math.floor(vec[1])*255;
    ColorConverterScreen.children[3].value = Math.floor(vec[2])*255;
    ColorConverterScreen.children[4].value = Math.floor(vec[3])*255;
}