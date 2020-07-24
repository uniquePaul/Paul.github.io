window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  game1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "294f2hXRDBASb6TND2YtVVw", "game1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        myView: cc.Node,
        myprefab: cc.Node,
        myprefab2: cc.Node
      },
      onclickButton: function onclickButton(target, data) {
        if (1 == data) {
          cc.log("\u8fdb\u51651");
          this.myView.play("\u6e38\u620f\u4e00");
        } else 2 == data ? this.myprefab.active = true : 3 == data ? this.myprefab.active = false : 4 == data ? cc.director.loadScene("plaza2") : 5 == data ? cc.director.loadScene("plaza3") : 6 == data ? cc.director.loadScene("plaza4") : 7 == data ? this.myprefab2.active = true : 7 == data ? cc.director.loadScene("plaza6") : 8 == data && cc.director.loadScene("plaza13");
        cc.log("\u6b63\u5e38\u6267\u884c");
      },
      onAnimCompleted: function onAnimCompleted(num, string) {
        console.log("onAnimCompleted: param1[%s], param2[%s]", num, string);
        this.myprefab2.active = true;
      },
      start: function start() {
        this.myprefab.active = false;
        this.myprefab2.active = false;
        this.myView = this.myView.getComponent(cc.Animation);
      }
    });
    cc._RF.pop();
  }, {} ],
  game2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8eacbRg7IVDta1FpgV3XHIK", "game2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        myView: cc.Node,
        myprefab: cc.Node,
        myprefab2: cc.Node
      },
      onclickButton: function onclickButton(target, data) {
        if (1 == data) {
          cc.log("\u8fdb\u51651");
          this.myView.play("\u6e38\u620f\u4e00");
        } else 2 == data ? this.myprefab.active = true : 3 == data ? this.myprefab.active = false : 4 == data ? cc.director.loadScene("plaza2") : 5 == data ? cc.director.loadScene("plaza3") : 6 == data && cc.director.loadScene("plaza4");
        cc.log("\u6b63\u5e38\u6267\u884c");
      },
      onAnimCompleted: function onAnimCompleted(num, string) {
        console.log("onAnimCompleted: param1[%s], param2[%s]", num, string);
        this.myprefab2.active = true;
      },
      start: function start() {
        this.myprefab.active = false;
        this.myprefab2.active = false;
        this.myView = this.myView.getComponent(cc.Animation);
      }
    });
    cc._RF.pop();
  }, {} ],
  game3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e5b3i2gd5Ob4BtvkyvsRrz", "game3");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        myButton1: cc.Button,
        myButton2: cc.Button,
        myButton3: cc.Button,
        myButton4: cc.Button,
        myButton5: cc.Button,
        myButton6: cc.Button,
        myButton7: cc.Button,
        myButton8: cc.Button,
        myButton9: cc.Button,
        myButton10: cc.Button,
        myButton11: cc.Button,
        myButton12: cc.Button,
        myPrefab: cc.Node,
        myPrefab2: cc.Node
      },
      onclickButton: function onclickButton(target, data) {
        1 == data ? this.myPrefab.active = true : 2 == data ? this.myPrefab2.active = true : 3 == data ? this.myPrefab.active = false : 4 == data ? cc.director.loadScene("plaza9") : 5 == data ? cc.director.loadScene("plaza10") : 6 == data ? cc.director.loadScene("plaza11") : 7 == data && cc.director.loadScene("plaza13");
      },
      start: function start() {
        this.myPrefab.active = false;
        this.myPrefab2.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  nextPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d456g8sd9CNKkD9DZehEmB", "nextPage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        firstPage: cc.Node,
        myValue: 1,
        secondPage: cc.Node,
        lastPageBottom: cc.Button,
        firstGameSceneButton: cc.Button,
        nextPageBottom: cc.Button
      },
      start: function start() {
        this.secondPage.active = false;
        this.lastPageBottom.target.active = false;
        this.firstGameSceneButton.target.active = false;
        this.firstGameSceneButton.interactable = false;
        this.lastPageBottom.interactable = false;
      },
      onClickBottom: function onClickBottom(target, data) {
        if (1 == data) {
          this.firstPage.active = false;
          cc.log("asdasd");
          this.myValue += 1;
          this.secondPage.active = true;
          this.lastPageBottom.target.active = true;
          this.firstGameSceneButton.target.active = true;
          this.nextPageBottom.target.active = false;
          this.nextPageBottom.interactable = false;
          this.lastPageBottom.interactable = true;
          this.firstGameSceneButton.interactable = true;
        } else if (2 == data) {
          this.secondPage.active = false;
          this.firstPage.active = true;
          this.lastPageBottom.target.active = false;
          this.lastPageBottom.interactable = false;
          this.firstGameSceneButton.target.active = false;
          this.firstGameSceneButton.interactable = false;
          this.nextPageBottom.target.active = true;
          this.nextPageBottom.interactable = true;
        } else if (3 == data) {
          cc.director.loadScene("plaza1");
          cc.log("\u6b63\u5e38\u6267\u884c4");
        } else 4 == data ? cc.director.loadScene("plaza3") : 5 == data ? cc.director.loadScene("plaza6") : 6 == data ? cc.director.loadScene("plaza8") : 7 == data ? cc.director.loadScene("plaza5") : 8 == data ? cc.director.loadScene("plaza12") : 9 == data && cc.director.loadScene("plaza14");
        cc.log("\u6b63\u5e38\u6267\u884c");
        cc.log("data: " + data);
      }
    });
    cc._RF.pop();
  }, {} ],
  playVideo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e56665vmLRLk6FAdMNIfM35", "playVideo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        videoplayer: cc.VideoPlayer,
        myPrefab: cc.Node
      },
      start: function start() {
        this.videoplayer.node.on("ready-to-play", this.callback, this);
        this.videoplayer.node.on("completed", this.callback1, this);
        this.myPrefab.active = false;
      },
      callback: function callback(event) {
        var videoplayer = event.detail;
        if (this.videoplayer) {
          this.videoplayer._syncVolume();
          this.videoplayer.play();
        }
      },
      callback1: function callback1(event) {
        console.log("\u7ed3\u675f\u4e86");
        cc.director.loadScene("plaza7");
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "game1", "game2", "game3", "nextPage", "playVideo" ]);