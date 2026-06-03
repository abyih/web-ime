const el = new Element();

class Keyboard {
    constructor() {
        this.capslock = false;
        this.lang = "en";
        this.next = false;
        this.tmpText = "";
    }
    elements() {
        let self = this;
        el.empty("id", "main");
        el.create([],
            ["main", "main", "keyboard", "head", "head-flex", "body", "flex-num", "flex-q", "flex-a", "flex-z", "flex-space"],
            [],
            ["div", "textarea", "div", "div", "p", "div", "p", "p", "p", "p", "p"],
            [1, 1, 2, 1, 2, 5, 10, 10, 9, 9, 5],
            [["keyboard"], ["textarea"], ["head", "body"], ["head-flex"], ["lang", "settings"], ["flex-num", "flex-q", "flex-a", "flex-z", "flex-space"], numbersIds, letterIds.slice(0, 10), letterIds.slice(10, 19), letterIds.slice(19, 28), letterIds.slice(28, 33)],
            [["keyboard"], ["text-area"], ["head", "body"], ["d-flex justify-content-between"], ["key"], ["d-flex justify-content-center"], ["key"], ["key"], ["key"], ["key"], ["key"]],
            [[], [], [], [], ["ት", "<i class='fas fa-cog'></i>"], [], numbers, letters.slice(0, 10), letters.slice(10, 19), letters.slice(19, 28), letters.slice(28, 33)],
            [[{}], [{placeholder: "Write Here...", spellcheck: "false"}]]
        );
        let keys = $("[id|='letter']");
        $("[id|='btn']").addClass("special");
        $("#spaceBar").addClass("space-bar");
        $("#btn-capslock").click(() => {
            if (this.capslock == false) {
                this.capslock = true;
                for (let i = 0; i < keys.length; i++) {
                    keys[i].innerText = keys[i].innerText.toUpperCase();
                }
                $(".dot").css("background-color", "#34A853");
            } else if (this.capslock == true) {
                this.capslock = false;
                for (let i = 0; i < keys.length; i++) {
                    keys[i].innerText = keys[i].innerText.toLowerCase();
                }
                $(".dot").css("background-color", "white");
            }
        });
        let textarea = document.getElementById("textarea");
        $("[id|='num'], [id|='letter'], #period, #comma").click(function() {
            if(self.lang == "en") {
                textarea.value += $(this).text();
            } else if (self.lang == "ti") {
                let vowel = vowels.includes($(this).text());
                let tmpLen = self.tmpText.length;
                self.next = true;
                if(tmpLen == 0) {
                    self.tmpText = $(this).text();
                    textarea.value += tigMap[$(this).text()];
                } else if (tmpLen == 1) {
                    self.tmpText += $(this).text();
                    if (tigMap[self.tmpText] != undefined) {
                        textarea.value = textarea.value.substring(0, textarea.value.length - 1) + tigMap[self.tmpText];
                    } else {
                        self.tmpText = $(this).text();
                        textarea.value += tigMap[$(this).text()];                           
                    }
                } else if (tmpLen == 2) {
                    self.tmpText += $(this).text();
                    if (tigMap[self.tmpText] != undefined) {
                        textarea.value = textarea.value.substring(0, textarea.value.length - 1) + tigMap[self.tmpText];
                        self.tmpText = "";
                    } else {
                        self.tmpText = $(this).text();
                        textarea.value += tigMap[$(this).text()];                           
                    }
                }
                setTimeout(() => {
                    self.next = false;
                }, 2000);
            }
        });

        $("#spaceBar").click(function () {
            textarea.value += " ";            
        })

        $("#btn-backspace").click(function () {
            textarea.value = textarea.value.substring(0, textarea.value.length-1);
        });

        $("#btn-enter").click(function () {
            textarea.value += "\n";            
        });

        $("#lang").click(() => {
            if (this.lang == "en") {
                this.lang = "ti";
                $("#lang").addClass("tig");
            } else if (this.lang == "ti") {
                this.lang = "en";
                $("#lang").removeClass("tig");                
            }
        });
    }
}

let key = new Keyboard();
key.elements();