﻿(() => { "use strict"; !function () { function o(o, n) { return "string" == typeof o ? (n || document).querySelector(o) : o || null } function n(o, { color: n, icon: e, showClose: t, text: c }, i) { return ` <div class="notice-toast-container">\n                    ${e ? `<i class="notice-iconfont notice-toast-icon" style="color: ${n}">${e}</i>` : ""}\n                    <p class="notice-toast-text ${i && !e ? "notice-toast-truncate-second" : ""}" style="color: ${n}; max-width: ${t ? "calc(80vw - 125px)" : "calc(80vw - 95px)"};">${c}</p> \n                </div>\n                ${t ? `<i class="notice-iconfont notice-close-icon"\n                       onclick="\n                            document.getElementById('${o}').classList.remove('notice-toast-main-active');\n                            setTimeout(() => document.getElementById('${o}').remove(), 500);">\n                        &#xe73e;\n                    </i>` : ""}` } window.Notice = class { showLoading(n) { ("object" != typeof n || null === n) && (n = {}); const e = n.type || "line", t = n.color || "#ffffff", c = n.backgroundColor || "rgba(0,0,0,.6)", i = n.title || "", s = Number(n.fontSize) ? Number(n.fontSize) : 16, l = document.createElement("div"); l.setAttribute("class", "notice-loading notice-flex-center notice-fixed-all-page"), l.setAttribute("id", "notice-loading"); const d = function (o, n) { switch (o) { case "cube_flip": return `<div class="notice-loading-cube-flip" style="background-color: ${n}"></div>`; case "dots_zoom": return `<div class="notice-loading-dots-zoom">\n                        <div class="notice-loading-dots-zoom1" style="background-color: ${n}"></div>\n                        <div class="notice-loading-dots-zoom2" style="background-color: ${n}"></div>\n                    </div>`; case "line": return `<div class="notice-loading-line">\n                      <div class="notice-loading-line-rect1" style="background-color: ${n}"></div>\n                      <div class="notice-loading-line-rect2" style="background-color: ${n}"></div>\n                      <div class="notice-loading-line-rect3" style="background-color: ${n}"></div>\n                      <div class="notice-loading-line-rect4" style="background-color: ${n}"></div>\n                      <div class="notice-loading-line-rect5" style="background-color: ${n}"></div>\n                    </div>`; case "dots_spin": return `<div class="notice-loading-spin-dots">\n                      <div class="notice-loading-spin-dot1" style="background-color: ${n}"></div>\n                      <div class="notice-loading-spin-dot2" style="background-color: ${n}"></div>\n                    </div>`; case "dots": return `<div class="notice-loading-dots">\n                      <div class="notice-loading-dot1" style="background-color: ${n}"></div>\n                      <div class="notice-loading-dot2" style="background-color: ${n}"></div>\n                      <div style="background-color: ${n}"></div>\n                    </div>`; case "cube_zoom": return `<div class="notice-loading-cube-zoom">\n                      <div class="notice-loading-cube-zoom-1" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-2" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-3" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-4" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-5" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-6" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-7" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-8" style="background-color: ${n}"></div>\n                      <div class="notice-loading-cube-zoom-9" style="background-color: ${n}"></div>\n                    </div>` } }(e, t); l.innerHTML = `\n                <div class="notice-mask notice-fixed-all-page" style="background-color: ${c}"></div>\n                <div class="notice-flex-center notice-loading-main">\n                ${d}\n                    ${i ? `<p style="color:${t};font-size: ${s + "px"};">${i}</p>` : ""}\n                </div>\n            `, o("body").appendChild(l) } hideLoading() { const n = o("#notice-loading"); n && o("body").removeChild(n) } showToast(e) { ("object" != typeof e || null === e) && (e = {}); const t = e.text; if (!t) return; const c = screen.width < 576, i = { default: { icon: "", phoneIcon: "", color: "#909399", backgroundColor: "#f4f4f5" }, success: { icon: "&#xe66b;", phoneIcon: "&#xe600;", color: "#67c23a", backgroundColor: "#f0f9eb" }, error: { icon: "&#xe651;", phoneIcon: "&#xe640;", color: "#e6a23c", backgroundColor: "#fdf6ec" }, info: { icon: "&#xe89e;", phoneIcon: "&#xea11;", color: "#909399", backgroundColor: "#f4f4f5" }, warning: { icon: "&#xe65b;", phoneIcon: "&#xea0c;", color: "#f56c6c", backgroundColor: "#fef0f0" } }, s = i[e.type || "default"] || i.default; c && (s.icon = s.phoneIcon); let l = "boolean" != typeof e.autoClose || e.autoClose; s.showClose = e.showClose || !1, s.text = t; const d = "notice-toast-" + Number(Math.random().toString().substr(3, 4) + Date.now()).toString(36); if (c && (s.icon = s.phoneIcon, l = !0, o("#notice-toast") && o("#notice-toast").remove()), o("#notice-toast")) { const e = document.createElement("div"); e.setAttribute("class", "notice-toast-main"), e.setAttribute("id", d), e.setAttribute("style", `background:${s.backgroundColor}`), e.innerHTML = n(d, s, c), o("#notice-toast").appendChild(e) } else { const e = document.createElement("div"); e.setAttribute("class", "notice-toast"), e.setAttribute("id", "notice-toast"), e.innerHTML = ` <div class="notice-toast-main" id="${d}" \n                        style="background:${s.backgroundColor}">\n                    ${n(d, s, c)}\n                </div> `, o("body").appendChild(e) } setTimeout((() => o(`#${d}`).classList.add("notice-toast-main-active"))), l && setTimeout((() => { const n = o(`#${d}`); n && (n.classList.remove("notice-toast-main-active"), setTimeout((() => n.remove()), 500)) }), 4e3) } } }() })();
