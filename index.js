const MainMenu = {
  DOMElement: document.getElementById('MainMenu'),
  GenerateManifestButton: document.getElementById('GenerateManifestButton'),
  ColorConverterButton: document.getElementById('ColorConverterButton'),
  CreditsButton: document.getElementById('CreditsButton'),
  display: () => {
    MainMenu.DOMElement.hidden = false;
  },
  hide: () => {
    MainMenu.DOMElement.hidden = true;
  },
  back: () => {
    MainMenu.display();
    ManifestScreen.hide();
    ColorConverterScreen.hide();
    CreditsScreen.hide();
  }
},
CreditsScreen = {
  DOMElement: document.getElementById('CreditsScreen'),
  display: () => {
    CreditsScreen.DOMElement.hidden = false;
  },
  hide: () => {
    CreditsScreen.DOMElement.hidden = true;
  },
  back: () => {
    MainMenu.display();
    ManifestScreen.hide();
    ColorConverterScreen.hide();
    CreditsScreen.hide();
  }
},
ColorConverterScreen = {
  DOMElement: document.getElementById('ColorConverterScreen'),
  RedText: document.querySelector("#ColorConverterScreen > input#Red"),
  GreenText: document.querySelector("#ColorConverterScreen > input#Green"),
  BlueText: document.querySelector("#ColorConverterScreen > input#Blue"),
  Viewport: document.querySelector("#ColorConverterScreen > div#Viewport"),
  Red: 0,
  Green: 0,
  Blue: 0,
  display: () => {
    ColorConverterScreen.DOMElement.hidden = false;
  },
  hide: () => {
    ColorConverterScreen.DOMElement.hidden = true;
  },
  Generate: () => {
    ColorConverterScreen.Viewport.innerText = JSON.stringify([ ColorConverterScreen.Red, ColorConverterScreen.Green, ColorConverterScreen.Blue ]);
  },
  back: () => {
    MainMenu.display();
    ColorConverterScreen.hide();
  }
},
ManifestScreen = {
  DOMElement: document.getElementById('ManifestScreen'),
  NameText: document.getElementById('ManifestPackName'),
  DescriptionText: document.getElementById('ManifestPackDescription'),
  Viewport: document.querySelector("#ManifestScreen > #Viewport"),
  GenerateButton: document.querySelector("#ManifestScreen > #Generate"),
  display: () => {
    ManifestScreen.DOMElement.hidden = false;
  },
  hide: () => {
    ManifestScreen.DOMElement.hidden = true;
  },
  Generate: () => {
    const Obj = {
      "format_version": 2,
      "header": {
        name: ManifestScreen.NameText.value,
        description: ManifestScreen.DescriptionText.value,
        version: [ 0, 0, 1 ],
        min_engine_version: [ 1, 13, 0 ],
        uuid: (() => {
          let str = "",
          charArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f" ];
          
          for (let i = 0; i < 8; i++) {
            str += charArray[Math.floor(Math.random() * charArray.length)];
          }
          str += "-"
          for (let i = 0; i < 4; i++) {
            str += charArray[Math.floor(Math.random() * charArray.length)];
          }
          str += "-"
          for (let i = 0; i < 4; i++) {
            str += charArray[Math.floor(Math.random() * charArray.length)];
          }
          str += "-"
          for (let i = 0; i < 4; i++) {
            str += charArray[Math.floor(Math.random() * charArray.length)];
          }
          str += "-"
          for (let i = 0; i < 12; i++) {
            str += charArray[Math.floor(Math.random() * charArray.length)];
          }
          
          return str;
        })()
      },
      "modules": [
        {
          "description": "",
          "version": [ 0, 0, 1 ],
          "type": "resources",
          "uuid": (() => {
            let str = "",
            charArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f" ];
            
            for (let i = 0; i < 8; i++) {
              str += charArray[Math.floor(Math.random() * charArray.length)];
            }
            str += "-"
            for (let i = 0; i < 4; i++) {
              str += charArray[Math.floor(Math.random() * charArray.length)];
            }
            str += "-"
            for (let i = 0; i < 4; i++) {
              str += charArray[Math.floor(Math.random() * charArray.length)];
            }
            str += "-"
            for (let i = 0; i < 4; i++) {
              str += charArray[Math.floor(Math.random() * charArray.length)];
            }
            str += "-"
            for (let i = 0; i < 12; i++) {
              str += charArray[Math.floor(Math.random() * charArray.length)];
            }
            
            return str;
          })()
        }
      ]
    }
    
    ManifestScreen.Viewport.innerText = JSON.stringify(Obj);
  }
};

//Main Menu
MainMenu.GenerateManifestButton.onclick = () => {
  MainMenu.hide();
  ManifestScreen.display();
}
MainMenu.ColorConverterButton.onclick = () => {
  MainMenu.hide();
  ColorConverterScreen.display();
}
MainMenu.CreditsButton.onclick = () => {
  MainMenu.hide();
  CreditsScreen.display();
}

//Manifest Screen
ManifestScreen.GenerateButton.onclick = ManifestScreen.Generate;

//Color Converter Screen
ColorConverterScreen.Generate();
ColorConverterScreen.RedText.oninput = () => {
  ColorConverterScreen.Red = parseFloat(ColorConverterScreen.RedText.value) / 255;
  if (ColorConverterScreen.RedText.value === "") {
    ColorConverterScreen.Red = 0;
  }
  ColorConverterScreen.Generate();
}
ColorConverterScreen.GreenText.oninput = () => {
  ColorConverterScreen.Green = parseFloat(ColorConverterScreen.GreenText.value) / 255;
  if (ColorConverterScreen.GreenText.value === "") {
    ColorConverterScreen.Green = 0;
  }
  ColorConverterScreen.Generate();
}
ColorConverterScreen.BlueText.oninput = () => {
  ColorConverterScreen.Blue = parseFloat(ColorConverterScreen.BlueText.value) / 255;
  if (ColorConverterScreen.BlueText.value === "") {
    ColorConverterScreen.Blue = 0;
  }
  ColorConverterScreen.Generate();
}

for (let i = 0; i < document.querySelectorAll("#back").length; i++) {
  document.querySelectorAll("#back")[i].onclick = MainMenu.back;
}
for (let i = 0; i < document.querySelectorAll("#RequestFullscreen").length; i++) {
  document.querySelectorAll("#RequestFullscreen")[i].onclick = () => {
    if((window.fullScreen) ||
       (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
}

(() => {
  ManifestScreen.hide();
  ColorConverterScreen.hide();
  CreditsScreen.hide();
})();

(() => {
  const background = document.getElementById("background"),
  image = document.createElement('img'),
  ctx = background.getContext("2d");
  image.src = 'dirt.png';
  let imgX = 0;
  
  image.onload = () => setInterval(() => {
    imgX += 0.1;
    if (imgX >= 96) {
      imgX = 0;
    }
    for (let x = 0; x < Math.ceil((background.offsetWidth+96) / 96); x++) {
      for (let y = 0; y < Math.ceil((background.offsetHeight+96) / 96); y++) {
        ctx.drawImage(image, x*96 - imgX,y*96 - imgX,96,96)
      }
    }
    ctx.imageSmoothingEnabled = false;
  }, 7);
  image.addEventListener("load", () => {
    ctx.imageSmoothingEnabled = false;
  })
  background.width = background.offsetWidth;
  background.height = background.offsetHeight;
  window.onresize = () => {
    background.width = background.offsetWidth;
    background.height = background.offsetHeight;
  }
})();

const music = document.getElementById("music"),
musicSrcArray = [
  "assets/music/creative1.ogg",
  "assets/music/creative2.ogg",
  "assets/music/creative3.ogg",
  "assets/music/creative4.ogg",
  "assets/music/creative5.ogg",
  "assets/music/creative6.ogg"
];
window.onload = () => {
  music.src = musicSrcArray[Math.floor(Math.random() * musicSrcArray.length)];
  music.load();
  setTimeout(() => {
    music.play();
    music.loop = true;
  }, 20);
};
