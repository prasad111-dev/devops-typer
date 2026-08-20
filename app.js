(() => {
  "use strict";

  // ============================================================
  //  Parse modules (ported from kbsim parseModules.js)
  // ============================================================
  function parseEscapedChars(str) {
    let parsedStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "\\" && i !== str.length - 1) {
        i++;
      }
      parsedStr += str.charAt(i);
    }
    return parsedStr;
  }

  function parseSpecialSymbol(char) {
    switch (char) {
      case "~": return "TILDE";
      case "`": return "BACK_QUOTE";
      case "!": return "EXCLAMATION";
      case "@": return "AT";
      case "#": return "HASH";
      case "$": return "DOLLAR";
      case "%": return "PERCENT";
      case "^": return "CIRCUMFLEX";
      case "&": return "AMPERSAND";
      case "*": return "ASTERISK";
      case "(": return "OPEN_PAREN";
      case ")": return "CLOSE_PAREN";
      case "-": return "HYPHEN";
      case "_": return "UNDERSCORE";
      case "=": return "EQUALS";
      case "+": return "ADD";
      case "\\": return "BACK_SLASH";
      case "{": return "OPEN_CURLY_BRACKET";
      case "[": return "OPEN_BRACKET";
      case "}": return "CLOSE_CURLY_BRACKET";
      case "]": return "CLOSE_BRACKET";
      case "|": return "PIPE";
      case ":": return "COLON";
      case ";": return "SEMICOLON";
      case '"': return "DOUBLE_QUOTE";
      case "'": return "QUOTE";
      case "<": return "LESS_THAN";
      case ",": return "COMMA";
      case ">": return "GREATER_THAN";
      case ".": return "PERIOD";
      case "?": return "QUESTION";
      case "/": return "SLASH";
      case "\u2191": return "UP";
      case "\u2190": return "LEFT";
      case "\u2193": return "DOWN";
      case "\u2192": return "RIGHT";
      default: return;
    }
  }

  function parseLegends(toplegend, bottomlegend) {
    let formatTop = toplegend.replace(/\s/g, "").toUpperCase();
    if (formatTop.length === 1 && !formatTop.match(/^[a-z0-9]+$/i)) {
      formatTop = parseSpecialSymbol(formatTop);
    }
    let formatBottom = bottomlegend.replace(/\s/g, "").toUpperCase();
    if (formatBottom.length === 1 && !formatBottom.match(/^[a-z0-9]+$/i)) {
      formatBottom = parseSpecialSymbol(formatBottom);
    }
    let ansiKey = formatTop + "\u0000" + formatBottom;
    if (ansiMap[ansiKey] !== undefined) {
      return ansiMap[ansiKey];
    }
    return undefined;
  }

  // map of legend pairs to canonical key names (same as kbsim ansiMap)
  const ansiMap = {
    "ESC\u0000": "ESC",
    "F1\u0000": "F1", "F2\u0000": "F2", "F3\u0000": "F3", "F4\u0000": "F4",
    "F5\u0000": "F5", "F6\u0000": "F6", "F7\u0000": "F7", "F8\u0000": "F8",
    "F9\u0000": "F9", "F10\u0000": "F10", "F11\u0000": "F11", "F12\u0000": "F12",
    "PRTSC\u0000": "PRTSC", "SCROLLLOCK\u0000": "SCROLLLOCK", "PAUSE\u0000BREAK": "SCROLLLOCK",
    "TILDE\u0000BACK_QUOTE": "BACK_QUOTE",
    "EXCLAMATION\u00001": "1", "AT\u00002": "2", "HASH\u00003": "3", "DOLLAR\u00004": "4",
    "PERCENT\u00005": "5", "CIRCUMFLEX\u00006": "6", "AMPERSAND\u00007": "7", "ASTERISK\u00008": "8",
    "OPEN_PAREN\u00009": "9", "CLOSE_PAREN\u00000": "0",
    "UNDERSCORE\u0000HYPHEN": "MINUS", "ADD\u0000EQUALS": "EQUALS",
    "BACKSPACE\u0000": "BACKSPACE", "INSERT\u0000": "INSERT", "HOME\u0000": "HOME", "PGUP\u0000": "PGUP",
    "NUMLOCK\u0000": "NUMLOCK", "SLASH\u0000": "SLASH", "ASTERISK\u0000": "ASTERISK", "HYPHEN\u0000": "MINUS",
    "TAB\u0000": "TAB",
    "Q\u0000": "Q", "W\u0000": "W", "E\u0000": "E", "R\u0000": "R", "T\u0000": "T",
    "Y\u0000": "Y", "U\u0000": "U", "I\u0000": "I", "O\u0000": "O", "P\u0000": "P",
    "OPEN_CURLY_BRACKET\u0000OPEN_BRACKET": "OPEN_BRACKET",
    "CLOSE_CURLY_BRACKET\u0000CLOSE_BRACKET": "CLOSE_BRACKET",
    "PIPE\u0000BACK_SLASH": "BACK_SLASH",
    "DELETE\u0000": "DELETE", "END\u0000": "END", "PGDN\u0000": "PGDN",
    "7\u0000HOME": "NUMPAD7", "8\u0000UP": "NUMPAD8", "9\u0000PGUP": "NUMPAD9", "ADD\u0000": "ADD",
    "CAPSLOCK\u0000": "CAPSLOCK",
    "A\u0000": "A", "S\u0000": "S", "D\u0000": "D", "F\u0000": "F", "G\u0000": "G",
    "H\u0000": "H", "J\u0000": "J", "K\u0000": "K", "L\u0000": "L",
    "COLON\u0000SEMICOLON": "SEMICOLON", "DOUBLE_QUOTE\u0000QUOTE": "QUOTE",
    "ENTER\u0000": "ENTER",
    "4\u0000LEFT": "NUMPAD4", "5\u0000": "NUMPAD5", "6\u0000RIGHT": "NUMPAD6",
    "SHIFT\u0000": "SHIFT",
    "Z\u0000": "Z", "X\u0000": "X", "C\u0000": "C", "V\u0000": "V", "B\u0000": "B",
    "N\u0000": "N", "M\u0000": "M",
    "LESS_THAN\u0000COMMA": "COMMA", "GREATER_THAN\u0000PERIOD": "PERIOD",
    "QUESTION\u0000SLASH": "SLASH",
    "UP\u0000": "UP",
    "1\u0000END": "NUMPAD1", "2\u0000DOWN": "NUMPAD2", "3\u0000PGDN": "NUMPAD3",
    "CTRL\u0000": "CTRL", "WIN\u0000": "WIN", "ALT\u0000": "ALT",
    "\u0000": "SPACE",
    "MENU\u0000": "MENU",
    "LEFT\u0000": "LEFT", "DOWN\u0000": "DOWN", "RIGHT\u0000": "RIGHT",
    "0\u0000INS": "NUMPAD0", "PERIOD\u0000DEL": "NUMPAD_DECIMAL"
  };

  function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);
    R = Math.min(255, parseInt((R * (100 + percent)) / 100));
    G = Math.min(255, parseInt((G * (100 + percent)) / 100));
    B = Math.min(255, parseInt((B * (100 + percent)) / 100));
    let RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
    let GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
    let BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);
    return "#" + RR + GG + BB;
  }

  // ============================================================
  //  State
  // ============================================================
  const keySize = 46;
  const defaultKeyColor = "#ffffff";
  const defaultTextColor = "#000";
  let raceTime = 60000;

  let layout = [];
  let keyLocations = {};
  let keyboardStyle = {};
  let pressedKeys = [];
  let muted = false;
  let currentTheme = "dark";
  let currentSwitch = "0";

  // typing test state
  let words = [];
  let wordIndex = 0;
  let inputVal = "";
  let timeLeft = 60;
  let started = false;
  let finished = false;
  let ticker = null;
  let stats = {
    wpm: 0,
    keystrokes: { correct: 0, incorrect: 0 },
    accuracy: 0,
    words: { correct: 0, incorrect: 0 },
  };

  // passage (interview Q&A) typing mode
  let passageMode = false;
  let commandsMode = false;
  let currentPassage = null;
  let currentQuestion = null;
  let currentCategory = Object.keys(interviewQA)[0];
  // line-based command typing mode
  let commands = [];
  let commandIndex = 0;
  let commandQueue = [];

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ============================================================
  //  KLE parser (ported from kbsim keySimulatorSlice.js)
  // ============================================================
  function parseKLE(kleInput) {
    let inputLayout = kleInput.split(/\r\n|\r|\n/);
    for (let i = 0; i < inputLayout.length; i++) {
      if (inputLayout[i] === "") {
        inputLayout.splice(i, 1);
        i--;
        continue;
      }
      let matches = inputLayout[i].match(/(["'])(?:(?=(\\?))\2.)*?\1|([{])(?:(?=(\\?))\2.)*?([}])/g);
      if (!matches) return false;
      inputLayout[i] = matches;
    }

    let keycount = 0;
    let keyInfo = {
      keyid: keycount, class: "", legend: "", sublegend: "",
      x: 0.0, y: 0.0, width: 1.0, height: 1.0,
      keytopcolor: shadeColor(defaultKeyColor, 10),
      keybordercolor: defaultKeyColor,
      textcolor: defaultTextColor, pressed: false,
    };

    for (let r = 0; r < inputLayout.length; r++) {
      let formatNextKey = false;
      if (r !== 0) {
        keyInfo = {
          keyid: keycount, class: "", legend: "", sublegend: "",
          x: 0.0, y: keyInfo.y + 1, width: 1.0, height: 1.0,
          keytopcolor: keyInfo.keytopcolor,
          keybordercolor: keyInfo.keybordercolor,
          textcolor: keyInfo.textcolor, pressed: false,
        };
      }
      for (let c = 0; c < inputLayout[r].length; c++) {
        if (!formatNextKey && c !== 0) {
          keyInfo = {
            keyid: keycount, class: "", legend: "", sublegend: "",
            x: keyInfo.x + keyInfo.width, y: keyInfo.y, width: 1.0, height: 1.0,
            keytopcolor: keyInfo.keytopcolor,
            keybordercolor: keyInfo.keybordercolor,
            textcolor: keyInfo.textcolor, pressed: false,
          };
        }
        let token = inputLayout[r][c];
        if (token.charAt(0) === "{" && token.charAt(token.length - 1) === "}") {
          let keyFormat = token.substring(1, token.length - 1).replace(/\s/g, "");
          let formatInfo = keyFormat.split(",");
          for (let f = 0; f < formatInfo.length; f++) {
            let tuple = formatInfo[f].split(":");
            if (tuple.length === 2) {
              switch (tuple[0]) {
                case "w": keyInfo.width = parseFloat(tuple[1]); break;
                case "h": keyInfo.height = parseFloat(tuple[1]); break;
                case "x": keyInfo.x += parseFloat(tuple[1]); break;
                case "y": keyInfo.y += parseFloat(tuple[1]); break;
                case "c":
                  if (tuple[1].charAt(0) === '"' && tuple[1].charAt(tuple[1].length - 1) === '"') {
                    tuple[1] = tuple[1].substring(1, tuple[1].length - 1);
                  }
                  keyInfo.keybordercolor = tuple[1];
                  keyInfo.keytopcolor = shadeColor(tuple[1], 10);
                  break;
                case "t":
                  if (tuple[1].charAt(0) === '"' && tuple[1].charAt(tuple[1].length - 1) === '"') {
                    tuple[1] = tuple[1].substring(1, tuple[1].length - 1);
                  }
                  keyInfo.textcolor = tuple[1];
                  break;
              }
            }
          }
          formatNextKey = true;
        } else if (token.charAt(0) === '"' && token.charAt(token.length - 1) === '"') {
          let legends = token.substring(1, token.length - 1).split("\\n");
          if (legends.length === 2) {
            keyInfo.sublegend = parseEscapedChars(legends[1]);
          }
          keyInfo.legend = parseEscapedChars(legends[0]);
          formatNextKey = false;
          keycount += 1;
          inputLayout[r][c] = keyInfo;
        } else {
          return false;
        }
      }
    }

    // remove formatting tokens
    for (let r = 0; r < inputLayout.length; r++) {
      for (let c = 0; c < inputLayout[r].length; c++) {
        if (typeof inputLayout[r][c] === "string") {
          inputLayout[r].splice(c, 1);
          c--;
        }
      }
    }

    let keyboardWidth = 0;
    let keyboardHeight = 0;
    keyLocations = {};

    for (let r = 0; r < inputLayout.length; r++) {
      for (let c = 0; c < inputLayout[r].length; c++) {
        let k = inputLayout[r][c];
        let keyX = k.x + k.width;
        if (keyboardWidth < keyX) keyboardWidth = keyX;
        let keyY = k.y + k.height;
        if (keyboardHeight < keyY) keyboardHeight = keyY;

        let primaryLegend = parseLegends(k.legend, k.sublegend);
        if (primaryLegend) {
          k.class = primaryLegend;
          if (!keyLocations[primaryLegend]) {
            keyLocations[primaryLegend] = [[r, c]];
          } else {
            keyLocations[primaryLegend].push([r, c]);
          }
          k.pressed = pressedKeys.includes(primaryLegend);
        } else {
          k.class = "unsupported";
        }
      }
    }

    let borderWidth = 0.25;
    let borderHeight = 0.25;
    keyboardStyle = {
      width: (keyboardWidth + borderWidth * 2) * keySize,
      minWidth: (keyboardWidth + borderWidth * 2) * keySize,
      minHeight: (keyboardHeight + borderHeight * 3.25) * keySize,
      paddingTop: borderHeight * keySize * 1.75,
      paddingBottom: borderHeight * keySize,
      paddingLeft: borderWidth * keySize,
      paddingRight: borderWidth * keySize,
    };

    layout = inputLayout;
    return true;
  }

  function setKeyboardColor(background) {
    keyboardStyle.background = background;
  }

  // ============================================================
  //  Key rendering
  // ============================================================
  function renderKeyboard() {
    const container = $("#keyboard");
    container.innerHTML = "";
    const dims = [
      "width", "minWidth", "minHeight", "paddingTop",
      "paddingBottom", "paddingLeft", "paddingRight",
    ];
    dims.forEach((d) => {
      if (keyboardStyle[d]) container.style[d] = keyboardStyle[d] + "px";
    });
    if (keyboardStyle.background) {
      container.style.background = keyboardStyle.background;
    }

    layout.forEach((row) => {
      row.forEach((k) => {
        const keyEl = document.createElement("div");
        keyEl.className = "keycap";
        keyEl.setAttribute("data-name", k.class);

        const border = document.createElement("div");
        border.className = "keyborder";
        border.style.left = k.x * keySize + "px";
        border.style.top = k.y * keySize + "px";
        border.style.width = k.width * keySize + "px";
        border.style.height = k.height * keySize + "px";
        border.style.backgroundColor = k.keybordercolor;

        const top = document.createElement("div");
        top.className = "keytop";
        top.style.left = k.x * keySize + keySize / 9 + "px";
        top.style.top = k.y * keySize + keySize / 18 + "px";
        top.style.width = k.width * keySize - (keySize * 2) / 9 + "px";
        top.style.height = k.height * keySize - (keySize * 2) / 9 + "px";
        top.style.backgroundColor = k.pressed ? k.keybordercolor : k.keytopcolor;

        const legends = document.createElement("div");
        legends.className = "keylegends";
        legends.style.left = k.x * keySize + keySize / 9 + "px";
        legends.style.top = k.y * keySize + keySize / 18 + "px";
        legends.style.width = k.width * keySize - (keySize * 2) / 9 + "px";
        legends.style.height = k.height * keySize - (keySize * 2) / 9 + "px";

        const legendEl = document.createElement("div");
        legendEl.className = "keylegend";
        legendEl.style.width = k.width * keySize - (keySize * 3) / 9 + "px";
        legendEl.style.maxWidth = k.width * keySize - (keySize * 3) / 9 + "px";
        legendEl.style.height = k.height * keySize - (keySize * 3) / 9 + "px";
        const legendInner = document.createElement("div");
        legendInner.style.width = k.width * keySize - (keySize * 3) / 9 + "px";
        legendInner.style.height = k.height * keySize - (keySize * 3) / 9 + "px";
        legendInner.style.color = k.textcolor;
        legendInner.textContent = k.legend;
        legendEl.appendChild(legendInner);
        legends.appendChild(legendEl);

        if (k.sublegend) {
          const subEl = document.createElement("div");
          subEl.className = "keysublegend";
          subEl.style.width = k.width * keySize - (keySize * 3) / 9 + "px";
          subEl.style.height = k.height * keySize - (keySize * 3) / 9 + "px";
          subEl.style.position = "absolute";
          subEl.style.left = 0;
          subEl.style.bottom = 0;
          const subInner = document.createElement("div");
          subInner.style.width = k.width * keySize - (keySize * 3) / 9 + "px";
          subInner.style.height = k.height * keySize - (keySize * 3) / 9 + "px";
          subInner.style.color = k.textcolor;
          subInner.textContent = k.sublegend;
          subEl.appendChild(subInner);
          legends.appendChild(subEl);
        }

        keyEl.appendChild(border);
        keyEl.appendChild(top);
        keyEl.appendChild(legends);

        keyEl.addEventListener("mousedown", (e) => {
          e.preventDefault();
          handleKeyMouseDown(k.class, k);
        });
        keyEl.addEventListener("mouseup", () => handleKeyMouseUp(k.class, k));
        keyEl.addEventListener("mouseleave", () => {
          if (k.pressed) handleKeyMouseUp(k.class, k);
        });

        container.appendChild(keyEl);
      });
    });

    fitKeyboard();
  }

  function fitKeyboard() {
    const kb = $("#keyboard");
    const wrapper = $("#keyboardWrapper");
    if (!kb || !wrapper) return;
    kb.style.transform = "";
    const naturalW = kb.offsetWidth;
    const naturalH = kb.offsetHeight;
    if (!naturalW) return;
    const box = $("#typingcontainer");
    const target = box ? box.clientWidth - 8 : wrapper.clientWidth;
    const scale = Math.max(0.4, Math.min(1.4, target / naturalW));
    if (Math.abs(scale - 1) > 0.001) {
      kb.style.transform = "scale(" + scale + ")";
      wrapper.style.height = Math.round(naturalH * scale) + "px";
    } else {
      wrapper.style.height = "auto";
    }
  }

  function updateKeyPress(primaryLegend, pressed) {
    if (!keyLocations[primaryLegend]) return;
    keyLocations[primaryLegend].forEach(([r, c]) => {
      const k = layout[r][c];
      k.pressed = pressed;
      const keyEl = document.querySelector(`.keycap[data-name="${primaryLegend}"]`);
      if (keyEl) {
        const top = keyEl.querySelector(".keytop");
        if (top) top.style.backgroundColor = pressed ? k.keybordercolor : k.keytopcolor;
      }
    });
  }

  // ============================================================
  //  Audio synthesis
  // ============================================================
  let audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playSwitchSound(profileKey, type, isSpecial, row) {
    if (muted) return;
    try {
      const ctx = getAudioCtx();
      if (ctx.state === "suspended") ctx.resume();
      const profile = switchProfiles[profileKey] || switchProfiles.cream;
      const t = ctx.currentTime;

      let mult = 1.0;
      if (isSpecial) {
        mult = 0.6;
      } else {
        switch (parseInt(row)) {
          case 0: mult = 1.35; break;
          case 1: mult = 1.2; break;
          case 2: mult = 1.0; break;
          case 3: mult = 0.85; break;
          case 4: mult = 0.7; break;
        }
      }

      const freq = profile.freq * mult;
      const dur = profile.dur * (type === "release" ? 0.6 : 1);

      const bufferSize = Math.floor(ctx.sampleRate * 0.05);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = profile.filter * mult;
      filter.Q.value = profile.q;

      const gain = ctx.createGain();
      const peak = profile.gain * (type === "release" ? 0.35 : 1);
      gain.gain.setValueAtTime(peak, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(t);
      noise.stop(t + dur);

      if (profile.click > 0) {
        const osc = ctx.createOscillator();
        osc.type = "square";
        osc.frequency.setValueAtTime(freq * 1.5, t);
        const og = ctx.createGain();
        const oPeak = profile.click * 0.4 * (type === "release" ? 0.5 : 1);
        og.gain.setValueAtTime(oPeak, t);
        og.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        osc.connect(og);
        og.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.035);
      }
    } catch (e) {}
  }

  // special keys that play their own sound
  const specialKeys = {
    SPACE: true, BACKSPACE: true, ENTER: true, SHIFT: true, TAB: true,
    CAPSLOCK: true, DELETE: true, INSERT: true, HOME: true, END: true,
    PGUP: true, PGDN: true, PRTSC: true, SCROLLLOCK: true, ESC: true,
    CTRL: true, ALT: true, WIN: true, MENU: true, UP: true, DOWN: true,
    LEFT: true, RIGHT: true, F1: true, F2: true, F3: true, F4: true,
    F5: true, F6: true, F7: true, F8: true, F9: true, F10: true,
    F11: true, F12: true,
  };

  // map an e.key value to canonical key name
  function keyNameFromEvent(key) {
    if (key.length === 1 && /[a-zA-Z0-9]/.test(key)) return key.toUpperCase();
    switch (key) {
      case "`": case "~": return "BACK_QUOTE";
      case "-": case "_": return "MINUS";
      case "=": case "+": return "EQUALS";
      case "[": case "{": return "OPEN_BRACKET";
      case "]": case "}": return "CLOSE_BRACKET";
      case "\\": case "|": return "BACK_SLASH";
      case ";": case ":": return "SEMICOLON";
      case "'": case '"': return "QUOTE";
      case ",": case "<": return "COMMA";
      case ".": case ">": return "PERIOD";
      case "/": case "?": return "SLASH";
      case " ": return "SPACE";
      case "Shift": return "SHIFT";
      case "Control": return "CTRL";
      case "Alt": return "ALT";
      case "Meta": return "WIN";
      case "Tab": return "TAB";
      case "Enter": return "ENTER";
      case "CapsLock": return "CAPSLOCK";
      case "Backspace": return "BACKSPACE";
      case "ArrowUp": return "UP";
      case "ArrowDown": return "DOWN";
      case "ArrowLeft": return "LEFT";
      case "ArrowRight": return "RIGHT";
      case "Delete": return "DELETE";
      case "Insert": return "INSERT";
      case "Home": return "HOME";
      case "End": return "END";
      case "PageUp": return "PGUP";
      case "PageDown": return "PGDN";
      case "Escape": return "ESC";
      default: return key.toUpperCase();
    }
  }

  function handleKeyDown(e) {
    if (e.keyCode === 18 || (e.keyCode >= 112 && e.keyCode <= 123)) {
      e.preventDefault();
    }
    const name = keyNameFromEvent(e.key);
    const locations = keyLocations[name];
    if (locations) {
      for (const [r, c] of locations) {
        layout[r][c].pressed = true;
      }
      updateKeyPress(name, true);
    }
    if (locations && !pressedKeys.includes(name)) {
      pressedKeys.push(name);
      const isSpecial = !!specialKeys[name];
      const row = locations[0][0];
      playSwitchSound(switchList[parseInt(currentSwitch)].key, "press", isSpecial, row);
    }
  }

  function handleKeyUp(e) {
    const name = keyNameFromEvent(e.key);
    const locations = keyLocations[name];
    if (locations) {
      for (const [r, c] of locations) {
        layout[r][c].pressed = false;
      }
      updateKeyPress(name, false);
    }
    if (locations) {
      let idx = pressedKeys.indexOf(name);
      if (idx > -1) pressedKeys.splice(idx, 1);
      const isSpecial = !!specialKeys[name];
      const row = locations[0][0];
      playSwitchSound(switchList[parseInt(currentSwitch)].key, "release", isSpecial, row);
    }
  }

  function handleKeyMouseDown(primaryLegend) {
    const locations = keyLocations[primaryLegend];
    if (!locations) return;
    for (const [r, c] of locations) layout[r][c].pressed = true;
    updateKeyPress(primaryLegend, true);
    if (!pressedKeys.includes(primaryLegend)) {
      pressedKeys.push(primaryLegend);
      const isSpecial = !!specialKeys[primaryLegend];
      const row = locations[0][0];
      playSwitchSound(switchList[parseInt(currentSwitch)].key, "press", isSpecial, row);
    }
  }

  function handleKeyMouseUp(primaryLegend) {
    const locations = keyLocations[primaryLegend];
    if (!locations) return;
    for (const [r, c] of locations) layout[r][c].pressed = false;
    updateKeyPress(primaryLegend, false);
    let idx = pressedKeys.indexOf(primaryLegend);
    if (idx > -1) pressedKeys.splice(idx, 1);
    const isSpecial = !!specialKeys[primaryLegend];
    const row = locations[0][0];
    playSwitchSound(switchList[parseInt(currentSwitch)].key, "release", isSpecial, row);
  }

  // ============================================================
  //  Typing test (ported from kbsim typingTestSlice.js)
  // ============================================================
  function getRandom(list, count) {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  function generateWords() {
    if (wordIndex < words.length) {
      words[wordIndex].focused = false;
    }
    words = [];
    wordIndex = 0;
    const randomwords = getRandom(wordList, 30);
    for (const w of randomwords) {
      words.push({ text: w, focused: false, status: "default" });
    }
    words[0].focused = true;
  }

  function shiftWords() {
    if (wordIndex > 0) {
      words.splice(0, wordIndex);
    }
    wordIndex = 0;
    if (!passageMode) {
      const randomwords = getRandom(wordList, 15);
      for (const w of randomwords) {
        words.push({ text: w, focused: false, status: "default" });
      }
    }
  }

  function classifyWord(idx, input) {
    if (input === words[idx].text) {
      words[idx].status = "correct";
      stats.words.correct++;
      stats.keystrokes.correct++;
    } else {
      words[idx].status = "incorrect";
      stats.words.incorrect++;
      stats.keystrokes.incorrect++;
    }
  }

  function spellCheck(input) {
    if (input) {
      const current = words[wordIndex];
      if (input.length <= current.text.length) {
        if (current.text.substring(0, input.length) === input) {
          current.status = "default";
          stats.keystrokes.correct++;
        } else {
          current.status = "incorrect";
          stats.keystrokes.incorrect++;
        }
      } else {
        current.status = "incorrect";
      }
    }
  }

  function renderWords() {
    const container = $("#words");
    container.innerHTML = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.className = "word " + (word.focused ? "active " : "") + word.status;
      span.dataset.index = index;
      span.textContent = word.text;
      container.appendChild(span);
    });
  }

  function parseSecond(time) {
    let seconds = time % 60;
    if (seconds >= 10) return seconds;
    else if (seconds < 10 && seconds > 0) return "0" + seconds;
    else return "00";
  }

  function parseMinute(time) {
    if (time > 0) return (time - (time % 60)) / 60;
    else return "0";
  }

  function formatTime(ms) {
    const totalSeconds = Math.round(ms / 1000);
    return parseMinute(totalSeconds) + ":" + parseSecond(totalSeconds);
  }

  function startTimer() {
    let endTime = parseInt(new Date().getTime()) + raceTime;
    ticker = setInterval(() => {
      let remaining = endTime - parseInt(new Date().getTime());
      timeLeft = Math.max(0, Math.ceil(remaining / 1000));
      $("#timeDisplay").textContent = formatTime(remaining);
      if (remaining <= 0) {
        clearInterval(ticker);
        endTimer();
      }
    }, 100);
  }

  function endTimer() {
    clearInterval(ticker);
    started = false;
    finished = true;
    stats.wpm = Math.round(stats.keystrokes.correct / 5);
    if (stats.keystrokes.correct === 0 && stats.keystrokes.incorrect === 0) {
      stats.accuracy = 0;
    } else {
      stats.accuracy = Math.round(
        (stats.keystrokes.correct /
          (stats.keystrokes.correct + stats.keystrokes.incorrect)) *
          100
      );
    }
    $("#resultWpm").textContent = stats.wpm + " WPM";
    $("#resultAccuracy").textContent = stats.accuracy + "% accuracy";
    $("#resultCorrect").textContent = stats.keystrokes.correct;
    $("#resultIncorrect").textContent = stats.keystrokes.incorrect;
    $("#resultWordsCorrect").textContent = stats.words.correct;
    $("#resultWordsIncorrect").textContent = stats.words.incorrect;
    $("#wordarea").classList.add("hidden");
    $("#resultarea").classList.remove("hidden");
    saveResult();
  }

  function saveResult() {
    const mode = commandsMode
      ? "Commands"
      : passageMode && currentQuestion
      ? "Passage"
      : "Word";
    fetch("api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        correct: stats.keystrokes.correct,
        incorrect: stats.keystrokes.incorrect,
        correctWords: stats.words.correct,
        incorrectWords: stats.words.incorrect,
        mode: mode,
        date: new Date().toISOString(),
      }),
    }).catch(() => {});
  }

  function resetTest() {
    clearInterval(ticker);
    $("#typinginput").focus();
    inputVal = "";
    $("#typinginput").value = "";
    timeLeft = 60;
    started = false;
    finished = false;
    stats = {
      wpm: 0,
      keystrokes: { correct: 0, incorrect: 0 },
      accuracy: 0,
      words: { correct: 0, incorrect: 0 },
    };
    $("#timeDisplay").textContent = formatTime(raceTime);
    $("#wordarea").classList.remove("hidden");
    $("#resultarea").classList.add("hidden");
    $("#passageQuestion").classList.add("hidden");
  }

  function passageWords(text) {
    return text.split(/\s+/).filter((w) => w.length > 0).map((w) => ({ text: w, focused: false, status: "default" }));
  }

  function loadPassage(item) {
    resetTest();
    passageMode = true;
    commandsMode = false;
    currentPassage = item.a;
    currentQuestion = item.q;
    words = passageWords(item.a);
    wordIndex = 0;
    if (words.length) {
      words[0].focused = true;
    }
    const qEl = $("#passageQuestion");
    qEl.textContent = "Q: " + item.q;
    qEl.classList.remove("hidden");
    $("#wordarea").classList.remove("commandsMode");
    renderWords();
    highlightSidebarSelection();
  }

  function loadRandomMode() {
    resetTest();
    passageMode = false;
    commandsMode = false;
    currentPassage = null;
    currentQuestion = null;
    $("#wordarea").classList.remove("commandsMode");
    generateWords();
    renderWords();
    highlightSidebarSelection();
  }

  function classifyCommand(input) {
    if (input === commands[commandIndex].text) {
      commands[commandIndex].status = "correct";
      stats.words.correct++;
      stats.keystrokes.correct++;
    } else {
      commands[commandIndex].status = "incorrect";
      stats.words.incorrect++;
      stats.keystrokes.incorrect++;
    }
  }

  function spellCheckCommand(input) {
    if (input) {
      const current = commands[commandIndex];
      if (input.length <= current.text.length) {
        if (current.text.substring(0, input.length) === input) {
          current.status = "default";
          stats.keystrokes.correct++;
        } else {
          current.status = "incorrect";
          stats.keystrokes.incorrect++;
        }
      } else {
        current.status = "incorrect";
      }
    }
  }

  function shiftCommands() {
    if (commandIndex > 0) {
      commands.splice(0, commandIndex);
    }
    commandIndex = 0;
  }

  function renderCommands() {
    const container = $("#words");
    container.innerHTML = "";
    commands.forEach((cmd, index) => {
      const line = document.createElement("div");
      line.className = "commandline " + (cmd.focused ? "active " : "") + cmd.status;
      line.dataset.index = index;
      const tokens = cmd.text.split(/\s+/).filter((t) => t.length > 0);
      tokens.forEach((t) => {
        const span = document.createElement("span");
        span.className = "cmdToken";
        span.textContent = t;
        line.appendChild(span);
        line.appendChild(document.createTextNode(" "));
      });
      container.appendChild(line);
    });
  }

  function loadCommands() {
    resetTest();
    passageMode = true;
    commandsMode = true;
    currentPassage = null;
    currentQuestion = null;
    const all = [...SPRINT_COMMANDS, ...SYSTEM_COMMANDS];
    commandQueue = all
      .map((c) => ({ cmd: c, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((o) => o.cmd);
    commands = commandQueue.splice(0, 3).map((c) => ({ text: c, focused: false, status: "default" }));
    commandIndex = 0;
    if (commands.length) {
      commands[0].focused = true;
    }
    words = [];
    wordIndex = 0;
    const qEl = $("#passageQuestion");
    qEl.textContent = "Linux & DevOps Commands";
    qEl.classList.remove("hidden");
    $("#wordarea").classList.add("commandsMode");
    renderCommands();
    highlightSidebarSelection();
  }

  function nextCommandBatch() {
    const next = commandQueue.splice(0, 3);
    if (next.length === 0) {
      endTimer();
      return;
    }
    commands = next.map((c) => ({ text: c, focused: false, status: "default" }));
    commandIndex = 0;
    if (commands.length) {
      commands[0].focused = true;
    }
    renderCommands();
  }

  function redo() {
    if (commandsMode) {
      loadCommands();
    } else if (passageMode && currentPassage) {
      loadPassage({ q: currentQuestion, a: currentPassage });
    } else {
      loadRandomMode();
    }
  }

  // ============================================================
  //  Interview practice sidebar
  // ============================================================
  let activePassage = null;

  function renderCategoryTabs() {
    const tabs = $("#categoryTabs");
    tabs.innerHTML = "";
    Object.keys(interviewQA).forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "categoryTab" + (cat === currentCategory ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        currentCategory = cat;
        renderCategoryTabs();
        renderQAList();
      });
      tabs.appendChild(btn);
    });
  }

  function renderQAList() {
    const list = $("#qaList");
    list.innerHTML = "";
    const items = interviewQA[currentCategory] || [];
    items.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "qaItem";
      div.dataset.cat = currentCategory;
      div.dataset.idx = i;
      const q = document.createElement("div");
      q.className = "qaQuestion";
      q.textContent = "Q" + (i + 1) + ": " + item.q;
      const a = document.createElement("div");
      a.className = "qaAnswer";
      a.textContent = item.a;
      const btn = document.createElement("button");
      btn.className = "typeBtn";
      btn.textContent = "Type";
      btn.addEventListener("click", () => {
        activePassage = { cat: currentCategory, idx: i };
        loadPassage(item);
      });
      div.appendChild(q);
      div.appendChild(a);
      div.appendChild(btn);
      list.appendChild(div);
    });
    highlightSidebarSelection();
  }

  function highlightSidebarSelection() {
    const wmb = $("#wordModeBtn");
    if (wmb) {
      wmb.classList.toggle("active", !passageMode);
    }
    const cbtn = $("#commandsBtn");
    if (cbtn) {
      cbtn.classList.toggle("active", commandsMode);
    }
    $$(".qaItem").forEach((el) => {
      const btn = el.querySelector(".typeBtn");
      const cat = el.dataset.cat;
      const idx = parseInt(el.dataset.idx, 10);
      const isActive =
        passageMode && !commandsMode && activePassage && activePassage.cat === cat && activePassage.idx === idx;
      btn.classList.toggle("active", isActive);
    });
  }

  // ============================================================
  //  History (MongoDB-backed)
  // ============================================================
  let historyOpen = false;
  let statsOpen = false;

  function closeSidebarPanels() {
    historyOpen = false;
    statsOpen = false;
    $("#historyPanel").classList.add("hidden");
    $("#statsPanel").classList.add("hidden");
    $("#historyBtn").classList.remove("active");
    $("#statsBtn").classList.remove("active");
    $("#categoryTabs").classList.remove("hidden");
    $("#qaList").classList.remove("hidden");
  }

  function toggleHistory() {
    if (statsOpen) closeSidebarPanels();
    historyOpen = !historyOpen;
    const panel = $("#historyPanel");
    panel.classList.toggle("hidden", !historyOpen);
    $("#historyBtn").classList.toggle("active", historyOpen);
    $("#categoryTabs").classList.toggle("hidden", historyOpen);
    $("#qaList").classList.toggle("hidden", historyOpen);
    if (historyOpen) {
      loadHistory();
    }
  }

  function toggleStats() {
    if (historyOpen) closeSidebarPanels();
    statsOpen = !statsOpen;
    const panel = $("#statsPanel");
    panel.classList.toggle("hidden", !statsOpen);
    $("#statsBtn").classList.toggle("active", statsOpen);
    $("#categoryTabs").classList.toggle("hidden", statsOpen);
    $("#qaList").classList.toggle("hidden", statsOpen);
    if (statsOpen) {
      const saved = localStorage.getItem("devtyper_admin_key");
      if (saved) $("#statsKeyInput").value = saved;
      $("#statsKeyInput").focus();
    }
  }

  function viewStats() {
    const key = $("#statsKeyInput").value.trim();
    const list = $("#statsList");
    if (!key) {
      list.textContent = "Enter the admin key to view stats.";
      return;
    }
    localStorage.setItem("devtyper_admin_key", key);
    list.textContent = "Loading...";
    fetch("api/stats?key=" + encodeURIComponent(key))
      .then((r) => {
        if (r.status === 401) throw new Error("Wrong admin key");
        if (r.status === 503) throw new Error("Database not connected");
        return r.json();
      })
      .then((s) => {
        list.innerHTML = "";
        const rows = [
          ["Total visits", s.totalVisits],
          ["Unique visitors", s.uniqueVisitors],
          ["Visits today", s.todayVisits],
          ["Tests completed", s.results],
          ["Tests today", s.resultsToday],
        ];
        rows.forEach(([label, val]) => {
          const div = document.createElement("div");
          div.className = "historyItem";
          const l = document.createElement("span");
          l.className = "historyDate";
          l.textContent = label;
          const v = document.createElement("span");
          v.className = "historyMode";
          v.textContent = val;
          div.appendChild(l);
          div.appendChild(v);
          list.appendChild(div);
        });
      })
      .catch((err) => {
        list.textContent = err.message;
      });
  }

  function loadHistory() {
    const list = $("#historyList");
    list.textContent = "Loading...";
    fetch("api/results")
      .then((r) => r.json())
      .then((items) => {
        if (!Array.isArray(items)) throw new Error("bad response");
        list.innerHTML = "";
        if (items.length === 0) {
          list.textContent = "No results yet.";
          return;
        }
        items.forEach((it) => {
          const div = document.createElement("div");
          div.className = "historyItem";
          const d = new Date(it.date);
          const dateStr = isNaN(d.getTime()) ? "-" : d.toLocaleString();
          const statsStr =
            (it.wpm || 0) + " WPM · " +
            (it.accuracy || 0) + "% · " +
            (it.correctWords || 0) + "/" +
            (it.correctWords || 0) + (it.incorrectWords ? "+" + it.incorrectWords : "") + " words";
          const top = document.createElement("div");
          top.className = "historyTop";
          const time = document.createElement("span");
          time.className = "historyDate";
          time.textContent = dateStr;
          const mode = document.createElement("span");
          mode.className = "historyMode";
          mode.textContent = it.mode || "-";
          top.appendChild(time);
          top.appendChild(mode);
          const stats = document.createElement("div");
          stats.className = "historyStats";
          stats.textContent = statsStr;
          div.appendChild(top);
          div.appendChild(stats);
          list.appendChild(div);
        });
      })
      .catch(() => {
        list.textContent = "History unavailable — start the server (npm start) with MongoDB connected.";
      });
  }

  function clearHistory() {
    const list = $("#historyList");
    fetch("api/results", { method: "DELETE" })
      .then((r) => r.json())
      .then(() => {
        list.textContent = "History cleared.";
      })
      .catch(() => {
        list.textContent = "History unavailable — start the server (npm start) with MongoDB connected.";
      });
  }

  // ============================================================
  //  Theme
  // ============================================================
  function applyTheme(theme) {
    currentTheme = theme;
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    $("#moonIcon").classList.toggle("hidden", theme === "light");
    $("#sunIcon").classList.toggle("hidden", theme === "dark");

    const t = theme === "dark"
      ? { background: "#212121", text: "#ffffff", boxBorder: "#323232", highlight: "#272727", timer: "#ffffff", timerText: "#000000", dropText: "#bbbbbb" }
      : { background: "#ffffff", text: "#000000", boxBorder: "#eeeeee", highlight: "#e0e0e0", timer: "#000000", timerText: "#ffffff", dropText: "#444444" };

    $("#header").style.backgroundColor = t.background;
    $("#header").style.color = t.text;
    $("#keywrapper").style.backgroundColor = t.background;
    $("#typingcontainer").style.backgroundColor = t.background;
    $("#typingcontainer").style.borderColor = t.boxBorder;
    $("#selectcontainer").style.backgroundColor = t.background;
    $("#selectcontainer").style.borderColor = t.boxBorder;
    $(".footerContainer").style.backgroundColor = t.background;
    $(".footerContainer").style.color = t.text;
    $(".mutecol").style.color = t.text;
    $(".resultarea").style.color = t.text;

    // dropdowns
    $$(".dropdown").forEach((d) => {
      d.style.backgroundColor = t.background;
      d.style.color = t.dropText;
      d.style.borderColor = theme === "dark" ? "#616161" : "#9e9e9e";
    });

    // input bar
    const inputbar = $("#inputbar");
    inputbar.classList.toggle("dark", theme === "dark");
    inputbar.classList.toggle("light", theme === "light");
    const redoBtn = $("#redoBtn");
    redoBtn.classList.toggle("dark", theme === "dark");
    redoBtn.classList.toggle("light", theme === "light");
    redoBtn.style.backgroundColor = t.background;
    redoBtn.style.color = t.text;
    redoBtn.style.borderColor = theme === "dark" ? "#616161" : "#9e9e9e";

    const input = $("#typinginput");
    input.style.backgroundColor = t.background;
    input.style.color = t.text;
    input.style.borderColor = theme === "dark" ? "#616161" : "#9e9e9e";

    const time = $(".time");
    time.style.backgroundColor = t.timer;
    time.style.color = t.timerText;

    // words
    $$(".word").forEach((w) => {
      w.style.color = t.text;
    });

    const links = $$(".link");
    links.forEach((l) => {
      l.classList.toggle("dark", theme === "dark");
      l.classList.toggle("light", theme === "light");
      l.style.color = theme === "dark" ? "#bbb" : "#444";
    });

    // interview sidebar
    const sidebar = $("#interviewSidebar");
    sidebar.style.backgroundColor = t.background;
    sidebar.style.borderColor = t.boxBorder;
    sidebar.style.color = t.text;
    const catTabs = $$(".categoryTab");
    catTabs.forEach((c) => {
      c.classList.toggle("dark", theme === "dark");
      c.classList.toggle("light", theme === "light");
    });
    $$(".typeBtn").forEach((b) => {
      b.classList.toggle("dark", theme === "dark");
      b.classList.toggle("light", theme === "light");
    });
    const wmb = $("#wordModeBtn");
    if (wmb) {
      wmb.classList.toggle("dark", theme === "dark");
      wmb.classList.toggle("light", theme === "light");
    }
    const cbtn = $("#commandsBtn");
    if (cbtn) {
      cbtn.classList.toggle("dark", theme === "dark");
      cbtn.classList.toggle("light", theme === "light");
    }
    $$(".qaQuestion").forEach((q) => {
      q.style.color = t.text;
    });
    $$(".qaAnswer").forEach((a) => {
      a.style.color = theme === "dark" ? "#bbb" : "#666";
    });
  }

  // ============================================================
  //  Init
  // ============================================================
  function trackVisit() {
    try {
      let vid = localStorage.getItem("devtyper_visitor");
      if (!vid) {
        vid = Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem("devtyper_visitor", vid);
      }
      fetch("api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: vid }),
      }).catch(() => {});
    } catch (e) {}
  }

  function init() {
    // populate dropdowns
    const switchSel = $("#switchselect");
    switchList.forEach((s, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = s.caption;
      switchSel.appendChild(opt);
    });

    const layoutSel = $("#layoutselect");
    keyPresets.forEach((p, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = p.caption;
      layoutSel.appendChild(opt);
    });

    const caseSel = $("#caseselect");
    keyboardColors.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = c.caption;
      caseSel.appendChild(opt);
    });

    // initial layout + color
    parseKLE(keyPresets[0].kle);
    setKeyboardColor(keyboardColors[0].background);
    renderKeyboard();

    window.addEventListener("resize", fitKeyboard);

    trackVisit();

    // typing test initial
    generateWords();
    renderWords();

    // theme default dark
    applyTheme("dark");

    // key wrapper focus handling
    const keywrapper = $("#keywrapper");

    keywrapper.addEventListener("keydown", handleKeyDown);
    keywrapper.addEventListener("keyup", handleKeyUp);

    // switch change
    switchSel.addEventListener("change", (e) => {
      currentSwitch = e.target.value;
      switchSel.blur();
      keywrapper.focus();
    });

    // layout change
    layoutSel.addEventListener("change", (e) => {
      parseKLE(keyPresets[parseInt(e.target.value)].kle);
      renderKeyboard();
      layoutSel.blur();
      keywrapper.focus();
    });

    // case change
    caseSel.addEventListener("change", (e) => {
      setKeyboardColor(keyboardColors[parseInt(e.target.value)].background);
      renderKeyboard();
      caseSel.blur();
      keywrapper.focus();
    });

    // time limit change
    $("#timeselect").addEventListener("change", (e) => {
      raceTime = parseInt(e.target.value, 10) * 1000;
      $("#timeDisplay").textContent = formatTime(raceTime);
      $("#timeselect").blur();
      redo();
      keywrapper.focus();
    });

    // mute
    $("#muteCheckbox").addEventListener("change", (e) => {
      muted = e.target.checked;
    });

    // theme toggle
    $("#themeToggle").addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });

    // fullscreen toggle
    const fsExpand = $("#fullscreenExpand");
    const fsCompress = $("#fullscreenCompress");
    const updateFullscreenIcon = () => {
      const fs = !!document.fullscreenElement;
      if (fsExpand) fsExpand.classList.toggle("hidden", fs);
      if (fsCompress) fsCompress.classList.toggle("hidden", !fs);
    };
    $("#fullscreenToggle").addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        const p = document.documentElement.requestFullscreen();
        if (p && p.catch) p.catch(() => {});
      }
      keywrapper.focus();
    });
    document.addEventListener("fullscreenchange", updateFullscreenIcon);

    // typing input
    const input = $("#typinginput");
    input.addEventListener("keypress", (e) => {
      if (timeLeft > 0 && !finished) {
        if (commandsMode) {
          if (e.key === "Enter") {
            if (inputVal) {
              classifyCommand(inputVal);
              commandIndex++;
              if (commandIndex >= commands.length) {
                inputVal = "";
                input.value = "";
                nextCommandBatch();
                return;
              }
              commands[commandIndex - 1].focused = false;
              commands[commandIndex].focused = true;
            }
            inputVal = "";
            input.value = "";
            renderCommands();
          } else if (!started) {
            started = true;
            startTimer();
          }
          return;
        }
        if (e.key === " ") {
          if (inputVal) {
            classifyWord(wordIndex, inputVal);
            wordIndex++;
            if (wordIndex >= words.length) {
              if (passageMode) {
                inputVal = "";
                input.value = "";
                endTimer();
                return;
              }
              wordIndex = words.length - 1;
            } else {
              words[wordIndex - 1].focused = false;
              words[wordIndex].focused = true;
            }
            const activeEl = document.querySelector(`.word[data-index="${wordIndex}"]`);
            if (activeEl && activeEl.offsetTop > 0) {
              shiftWords();
            }
          }
          inputVal = "";
          input.value = "";
          renderWords();
        } else if (!started) {
          started = true;
          startTimer();
        }
      }
    });

    input.addEventListener("input", (e) => {
      let val = e.target.value;
      if (timeLeft > 0 && !finished) {
        if (!commandsMode) {
          val = val.replace(/ /g, "");
        }
      }
      inputVal = val;
      if (timeLeft > 0 && !finished) {
        if (commandsMode) {
          spellCheckCommand(inputVal);
          renderCommands();
          return;
        }
        const activeEl = document.querySelector(`.word[data-index="${wordIndex}"]`);
        if (activeEl && activeEl.offsetTop > 0) {
          shiftWords();
        }
        spellCheck(inputVal);
      }
      renderWords();
    });

    // redo
    $("#redoBtn").addEventListener("click", () => {
      redo();
      keywrapper.focus();
    });

    // click typing container focuses input
    $("#typingcontainer").addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
        input.focus();
      }
    });

    // interview practice sidebar
    renderCategoryTabs();
    renderQAList();
    $("#wordModeBtn").addEventListener("click", () => {
      loadRandomMode();
      keywrapper.focus();
    });
    $("#commandsBtn").addEventListener("click", () => {
      loadCommands();
      keywrapper.focus();
    });

    // history panel
    $("#historyBtn").addEventListener("click", () => {
      toggleHistory();
      keywrapper.focus();
    });
    $("#historyClearBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      clearHistory();
    });

    // stats panel (admin)
    $("#statsBtn").addEventListener("click", () => {
      toggleStats();
      keywrapper.focus();
    });
    $("#statsViewBtn").addEventListener("click", () => {
      viewStats();
    });
    $("#statsKeyInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        viewStats();
      }
    });

    // focus the input on load
    input.focus();
  }

  document.addEventListener("DOMContentLoaded", init);
})();