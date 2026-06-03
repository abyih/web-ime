/**
 *         $("[id|='num'], [id|='letter'], #period, #comma").click(function() {
            if(this.lang == "en") {
                this.textarea.value += $(this).text();
            } else if (this.lang == "ti") {
                let vowel = vowels.includes($(this).text());
                let tmpLen = this.tmpText.length;
                this.next = true;
                if(tmpLen == 0) {
                    this.tmpText = $(this).text();
                    this.textarea.value += map[$(this).text()];
                } else if (tmpLen == 1) {
                    this.tmpText += $(this).text();
                    if (map[this.tmpText] != undefined) {
                        this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1) + map[this.tmpText];
                    } else {
                        this.tmpText = $(this).text();
                        this.textarea.value += map[$(this).text()];                           
                    }
                } else if (tmpLen == 2) {
                    this.tmpText += $(this).text();
                    if (map[this.tmpText] != undefined) {
                        this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1) + map[this.tmpText];
                        this.tmpText = "";
                    } else {
                        this.tmpText = $(this).text();
                        this.textarea.value += map[$(this).text()];                           
                    }
                }
                setTimeout(() => {
                    this.next = false;
                }, 2000);
            }
        });

 */
//import {element} from "./elements.js";
//import {vowels} from "./data.js";
//import {map} from "./data.js";

class Keyboard {
  constructor() {
    this.lang = "ti";
    this.tmpText = "";
    this.bold = false;
    this.italic = false;
    this.preventedKeys = [32, 13, 20, 8, 17, 16, 9];
    this.clearKeys = [8, 32];
    this.textarea = document.querySelector("#textarea");
    this.btns = document.querySelectorAll(".icon-list li");
    this.btns.forEach((li) => {
      li.addEventListener("click", () => {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
        } else {
          li.classList.add("active");
        }
      });
      if (li.id == "bold") {
        if (this.bold == false) {
          this.bold = true;
        } else {
          this.bold = false;
        }
      }

      if (li.id == "italic") {
        if (this.italic == false) {
          this.italic = true;
        } else {
          this.italic = false;
        }
      }
    });
    this.textarea.addEventListener("keydown", (event) => {
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      if (this.clearKeys.includes(event.keyCode)) {
        this.tmpText = "";
      }
      if (
        this.preventedKeys.includes(event.keyCode) == false &&
        map[event.key] !== undefined
      ) {
        event.preventDefault();
        this.type(event);
      }
    });
  }

  type(key) {
    let letter = key.key;
    if (this.lang == "en") {
      this.textarea.value += letter;
    } else if (this.lang == "ti") {
      let vowel = vowels.includes(letter);
      let tmpLen = this.tmpText.length;
      if (tmpLen == 0) {
        this.tmpText = letter;
        this.textarea.value += map[letter];
      } else if (tmpLen == 1) {
        this.tmpText += letter;
        if (map[this.tmpText] != undefined) {
          this.textarea.value =
            this.textarea.value.substring(0, this.textarea.value.length - 1) +
            map[this.tmpText];
        } else {
          this.tmpText = letter;
          this.textarea.value += map[letter];
        }
      } else if (tmpLen == 2) {
        this.tmpText += letter;
        if (map[this.tmpText] != undefined) {
          this.textarea.value =
            this.textarea.value.substring(0, this.textarea.value.length - 1) +
            map[this.tmpText];
          this.tmpText = "";
        } else {
          this.tmpText = letter;
          this.textarea.value += map[letter];
        }
      }
    }
  }
}

let key = new Keyboard();
