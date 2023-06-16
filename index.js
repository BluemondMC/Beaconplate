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
screens = [MainMenu,CreditsScreen,PackGeneratorScreen];

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
    DescInput = PackGeneratorScreen.children[2];

    PackGeneratorScreen.children[4].innerText = JSON.stringify({
        header: {
            name: NameInput.value,
            description: DescInput.value,
            pack_version: [ 1, 0, 0 ],
            uuid: uuid()
        }
    },2)
}