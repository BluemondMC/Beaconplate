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
screens = [MainMenu,CreditsScreen];

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