(() => {
  "use strict";
  var e = {
      716: (e, t, n) => {
        const a = require("@babel/runtime/regenerator");
        var c = n.n(a);
        const r = require("react");
        var i = n.n(r);
        const s = require("react-router-dom"),
          l = require("@babel/runtime/helpers/classCallCheck");
        var o = n.n(l);
        const m = require("@babel/runtime/helpers/createClass");
        var u = n.n(m);
        const p = require("@babel/runtime/helpers/inherits");
        var d = n.n(p);
        const f = require("@babel/runtime/helpers/possibleConstructorReturn");
        var _ = n.n(f);
        const E = require("@babel/runtime/helpers/getPrototypeOf");
        var g = n.n(E);
        const h = require("@babel/runtime/helpers/slicedToArray");
        var v = n.n(h);
        const w = (function (e) {
          d()(c, e);
          var t,
            n,
            a =
              ((t = c),
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  a = g()(t);
                if (n) {
                  var c = g()(this).constructor;
                  e = Reflect.construct(a, arguments, c);
                } else e = a.apply(this, arguments);
                return _()(this, e);
              });
          function c(e) {
            return o()(this, c), a.call(this, e);
          }
          return (
            u()(c, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = function (e) {
                      localStorage.setItem("category", e);
                    };
                  return i().createElement(
                    "div",
                    {
                      className: "wrap_mobileMenu",
                      style: { display: t.display ? "flex" : "none" },
                    },
                    i().createElement(
                      "div",
                      { className: "mobile_menu" },
                      i().createElement(
                        "div",
                        { className: "wrap_mobile_Elements" },
                        i().createElement(
                          s.NavLink,
                          { to: "/", className: "mobile_logo_mobile" },
                          i().createElement("img", {
                            src: "../../images/Frame 1.svg",
                            id: "logo",
                          })
                        ),
                        i().createElement(
                          "div",
                          {
                            className: "burgerMobile",
                            onClick: function () {
                              e.props.changeBurger();
                            },
                          },
                          i().createElement("p", {
                            className: "each_burger_span leftRotate",
                            style: { backgroundColor: "white" },
                          }),
                          i().createElement("p", {
                            className: "each_burger_span dispNone",
                            style: { backgroundColor: "white" },
                          }),
                          i().createElement("p", {
                            className: "each_burger_span rightRotate",
                            style: { backgroundColor: "white" },
                          })
                        )
                      ),
                      i().createElement(
                        "div",
                        { className: "mobile_menu_links" },
                        i().createElement(
                          s.NavLink,
                          {
                            to: "/about",
                            className: "menu_linksBold",
                            activeClassName: "active_menu_links",
                          },
                          "О нас"
                        ),
                        i().createElement(
                          s.NavLink,
                          {
                            to: "/projects",
                            className: "menu_linksBold",
                            activeClassName: "active_menu_links",
                          },
                          "Проекты"
                        ),
                        i().createElement(
                          s.NavLink,
                          {
                            to: "/news",
                            className: "menu_linksBold",
                            activeClassName: "active_menu_links",
                          },
                          "Новости"
                        ),
                        i().createElement(
                          s.NavLink,
                          {
                            to: "/contacts",
                            className: "menu_linksBold",
                            activeClassName: "active_menu_links",
                          },
                          "Контакты"
                        )
                      ),
                      i().createElement("p", { className: "white_line" }),
                      i().createElement(
                        "div",
                        { className: "wrap_footer_mobile" },
                        i().createElement(
                          "div",
                          { className: "footer" },
                          i().createElement(
                            "div",
                            { className: "foot_links_mobile footerCorrect" },
                            i().createElement(
                              "p",
                              { className: "grey_link" },
                              "Офис"
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showDesctopAddress" },
                              "107076, г. Москва, ул."
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showDesctopAddress" },
                              "Богородский Вал, д. 3, стр. 32,"
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showDesctopAddress" },
                              "пом. I, ком. 65, эт. 1"
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showPlanchetAddress" },
                              "107076, г. Москва,"
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showPlanchetAddress" },
                              "ул. Богородский Вал,"
                            ),
                            i().createElement(
                              "p",
                              { className: "each_address showPlanchetAddress" },
                              "д. 3, стр. 32, пом. I, ком. 65, эт. 1"
                            )
                          ),
                          i().createElement(
                            "div",
                            {
                              className: "foot_links_mobile middle_foot_mobile",
                            },
                            i().createElement(
                              "p",
                              {
                                className: "grey_link",
                                id: "projects_foot_title",
                              },
                              "Проекты"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Все проекты");
                                },
                                className: "each_other",
                              },
                              "Все проекты"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Жилые комплексы");
                                },
                                className: "each_other",
                              },
                              "Жилые комплексы"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Общественно-деловые комплексы");
                                },
                                className: "each_other",
                              },
                              "Общественно-деловые комплексы"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Гостиничные комплексы");
                                },
                                className: "each_other",
                              },
                              "Гостиничные комплексы"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Градостроительные концепции");
                                },
                                className: "each_other",
                              },
                              "Градостроительные концепции"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Развлекательные комплексы");
                                },
                                className: "each_other",
                              },
                              "Развлекательные комплексы"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Конкурсы");
                                },
                                className: "each_other",
                              },
                              "Конкурсы"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "/projects",
                                onClick: function () {
                                  return n("Интерьеры");
                                },
                                className: "each_other",
                              },
                              "Интерьеры"
                            )
                          ),
                          i().createElement(
                            "div",
                            { className: "foot_links_mobile contacts_mobile" },
                            i().createElement(
                              "p",
                              { className: "grey_link" },
                              "Контакты"
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "mailto:info@o-master.ru",
                                className: "links_contact",
                              },
                              i().createElement(
                                "p",
                                { className: "each_other" },
                                "info@o-master.ru"
                              )
                            ),
                            i().createElement(
                              "a",
                              {
                                href: "tel:+74997536333",
                                className: "links_contact",
                              },
                              i().createElement(
                                "p",
                                { className: "each_other" },
                                "+7 499 753 63 33 (2046)"
                              )
                            ),
                            i().createElement(
                              "div",
                              { className: "wrap_social_media" },
                              i().createElement(
                                "a",
                                { href: "", id: "phone_link" },
                                i().createElement("img", {
                                  src: "../../images/ant-design_phone-filled.svg",
                                  style: { height: 22 },
                                })
                              ),
                              i().createElement(
                                "a",
                                { href: "", id: "letter_link" },
                                i().createElement("img", {
                                  src: "../../images/Vector-3.svg",
                                  style: { height: 22 },
                                })
                              ),
                              i().createElement(
                                "a",
                                { href: "", id: "whats_link" },
                                i().createElement("img", {
                                  src: "../../images/Vector-4.svg",
                                  style: { height: 22 },
                                })
                              ),
                              i().createElement(
                                "a",
                                { href: "", id: "tele_link" },
                                i().createElement("img", {
                                  src: "../../images/icon-park-outline_telegram.svg",
                                  style: { height: 22 },
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            c
          );
        })(i().Component);
        var N = function () {
            var e = (0, r.useState)({}),
              t = v()(e, 2),
              n = t[0],
              a = t[1],
              c = (0, r.useState)({}),
              s = v()(c, 2),
              l = s[0],
              o = s[1],
              m = (0, r.useState)({}),
              u = v()(m, 2),
              p = u[0],
              d = u[1],
              f = (0, r.useState)({}),
              _ = v()(f, 2),
              E = _[0],
              g = _[1],
              h = (0, r.useState)(!1),
              N = v()(h, 2),
              y = N[0],
              b = N[1],
              x = (0, r.useRef)(),
              k = (0, r.useRef)(),
              I = (0, r.useRef)(),
              j = (0, r.useRef)();
            (0, r.useEffect)(function () {
              "undefined" != typeof window && "/" == window.location.pathname
                ? ((document.body.style.backgroundColor = "#010101"),
                  a(!0),
                  "6" == window.localStorage.getItem("count") ? o(!1) : o(!0))
                : a(!1),
                "undefined" != typeof window &&
                "/contacts" == window.location.pathname
                  ? ((document.body.style.backgroundColor = "#010101"), d(!0))
                  : d(!1),
                ("undefined" != typeof window &&
                  ("/about" == window.location.pathname ||
                    window.location.pathname ==
                      "/about/" + window.location.pathname.split("/").pop() ||
                    "/projects" == window.location.pathname)) ||
                window.location.pathname ==
                  "/projects/" + window.location.pathname.split("/").pop() ||
                "/news" == window.location.pathname ||
                window.location.pathname ==
                  "/news/" + window.location.pathname.split("/").pop()
                  ? ((document.body.style.backgroundColor = "white"), g(!0))
                  : g(!1);
            }, []);
            var C = function () {
              k.current.classList.toggle("leftRotate"),
                x.current.classList.toggle("dispNone"),
                I.current.classList.toggle("rightRotate"),
                j.current.classList.toggle("fixedHeader"),
                b(function (e) {
                  return !e;
                });
            };
            return i().createElement(
              "div",
              {
                className: "wrap_header",
                style: { backgroundColor: E ? "white" : "transparent" },
              },
              i().createElement(
                "div",
                { className: "header", ref: j },
                i().createElement(
                  "a",
                  { href: "/" },
                  i().createElement("img", {
                    src: l
                      ? n
                        ? "../../images/Frame 1.svg"
                        : p
                        ? "../../images/Frame 1 — копия 4.svg"
                        : "../../images/Frame 1 — копия.svg"
                      : "../../images/Frame 1 — копия 3.svg",
                    id: "logo",
                  })
                ),
                i().createElement(
                  "div",
                  { className: "wrap_menu" },
                  i().createElement(
                    "a",
                    {
                      href: "/about",
                      className: "menu_links",
                      style: { color: E ? "#010101" : l ? "white" : "#2f4666" },
                    },
                    "О нас"
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "/projects",
                      className: "menu_links",
                      style: { color: E ? "#010101" : l ? "white" : "#2f4666" },
                    },
                    "Проекты"
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "/news",
                      className: "menu_links",
                      style: { color: E ? "#010101" : l ? "white" : "#2f4666" },
                    },
                    "Новости"
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "/contacts",
                      className: "menu_links",
                      style: { color: E ? "#010101" : l ? "white" : "#2f4666" },
                    },
                    "Контакты"
                  )
                ),
                i().createElement(
                  "div",
                  { className: "burger", onClick: C },
                  i().createElement("p", {
                    className: "each_burger_span",
                    style: {
                      backgroundColor: y
                        ? "white"
                        : E
                        ? "#010101"
                        : l
                        ? "white"
                        : "#2f4666",
                    },
                    ref: k,
                  }),
                  i().createElement("p", {
                    className: "each_burger_span",
                    style: {
                      backgroundColor: y
                        ? "white"
                        : E
                        ? "#010101"
                        : l
                        ? "white"
                        : "#2f4666",
                    },
                    ref: x,
                  }),
                  i().createElement("p", {
                    className: "each_burger_span",
                    style: {
                      backgroundColor: y
                        ? "white"
                        : E
                        ? "#010101"
                        : l
                        ? "white"
                        : "#2f4666",
                    },
                    ref: I,
                  })
                ),
                i().createElement(w, { display: y, changeBurger: C })
              )
            );
          },
          y = function () {
            var e = function (e) {
              localStorage.setItem("category", e);
            };
            return i().createElement(
              "div",
              { className: "wrap_footer" },
              i().createElement(
                "div",
                { className: "footer" },
                i().createElement("img", {
                  src: "../../images/logo_footer.svg",
                }),
                i().createElement(
                  "div",
                  { className: "footer-top" },
                  i().createElement(
                    "div",
                    { className: "foot_links middle_foot" },
                    i().createElement(
                      "p",
                      { className: "grey_link", id: "projects_foot_title" },
                      "Проекты"
                    ),
                    i().createElement(
                      "a",
                      { href: "/projects", className: "each_other" },
                      "Все проекты"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Жилые комплексы");
                        },
                        className: "each_other",
                      },
                      "Жилые комплексы"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Общественно-деловые комплексы");
                        },
                        className: "each_other",
                      },
                      "Общественно-деловые комплексы"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Гостиничные комплексы");
                        },
                        className: "each_other",
                      },
                      "Гостиничные комплексы"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Градостроительные концепции");
                        },
                        className: "each_other",
                      },
                      "Градостроительные концепции"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Развлекательные комплексы");
                        },
                        className: "each_other",
                      },
                      "Развлекательные комплексы"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Конкурсы");
                        },
                        className: "each_other",
                      },
                      "Конкурсы"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "/projects",
                        onClick: function () {
                          return e("Интерьеры");
                        },
                        className: "each_other",
                      },
                      "Интерьеры"
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "foot_links footerCorrect" },
                    i().createElement("p", { className: "grey_link" }, "Офис"),
                    i().createElement(
                      "p",
                      { className: "each_address showDesctopAddress" },
                      "107076, г. Москва, ул."
                    ),
                    i().createElement(
                      "p",
                      { className: "each_address showDesctopAddress" },
                      "Богородский Вал, д. 3, стр. 32,"
                    ),
                    i().createElement(
                      "p",
                      { className: "each_address showDesctopAddress" },
                      "пом. I, ком. 65, эт. 1"
                    ),
                    i().createElement(
                      "p",
                      { className: "each_address showPlanchetAddress" },
                      "107076, г. Москва,"
                    ),
                    i().createElement(
                      "p",
                      { className: "each_address showPlanchetAddress" },
                      "ул. Богородский Вал,"
                    ),
                    i().createElement(
                      "p",
                      { className: "each_address showPlanchetAddress" },
                      "д. 3, стр. 32, пом. I, ком. 65, эт. 1"
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "foot_links" },
                    i().createElement(
                      "p",
                      { className: "grey_link grey_link-contacts" },
                      "Контакты"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "mailto:info@o-master.ru",
                        className: "links_contact",
                      },
                      i().createElement(
                        "p",
                        { className: "each_other" },
                        "info@o-master.ru"
                      )
                    ),
                    i().createElement(
                      "a",
                      { href: "tel:+74997536333", className: "links_contact" },
                      i().createElement(
                        "p",
                        { className: "each_other" },
                        "+7 499 753 63 33 (2046)"
                      )
                    ),
                    i().createElement(
                      "div",
                      { className: "wrap_social_media" },
                      i().createElement(
                        "a",
                        { href: "", id: "whats_link" },
                        i().createElement("img", {
                          src: "../../images/Vector-4.svg",
                          style: { height: 23 },
                        })
                      ),
                      i().createElement(
                        "a",
                        { href: "", id: "tele_link" },
                        i().createElement("img", {
                          src: "../../images/icon-park-outline_telegram.svg",
                          style: { height: 23 },
                        })
                      )
                    )
                  )
                ),
                i().createElement(
                  "div",
                  { className: "footer-bottom" },
                  i().createElement("p", null, "© 2022 «Открытые мастерские»"),
                  i().createElement("p", null, "Политика конфиденциальности")
                )
              )
            );
          };
        const b = require("react-google-recaptcha");
        var x = n.n(b),
          k = function () {
            var e = (0, r.useState)(!1),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            return i().createElement(
              "div",
              { className: "wrap_request" },
              i().createElement(
                "div",
                { className: "request", id: "request_field" },
                i().createElement(
                  "div",
                  { className: "leave_request" },
                  i().createElement(
                    "form",
                    { action: "/email", method: "post", id: "req_form" },
                    i().createElement(
                      "p",
                      { className: "big_title" },
                      "Оставьте заявку"
                    ),
                    i().createElement(
                      "p",
                      { className: "each_req_title" },
                      "Ваше имя"
                    ),
                    i().createElement("input", {
                      name: "name",
                      type: "text",
                      className: "req_inputs",
                    }),
                    i().createElement(
                      "p",
                      { className: "each_req_title" },
                      "Телефон"
                    ),
                    i().createElement("input", {
                      name: "number",
                      type: "tel",
                      className: "req_inputs",
                    }),
                    i().createElement(
                      "p",
                      { className: "each_req_title" },
                      "Комментарий"
                    ),
                    i().createElement("textarea", {
                      name: "comment",
                      className: "req_inputs comment_field",
                    }),
                    i().createElement(x(), {
                      sitekey: "6Lc1-uEjAAAAANpe7ao66EzkW-KHA8Rvj6SL08hL",
                      onChange: function () {
                        a(!0);
                      },
                      className: "captcha",
                    }),
                    i().createElement(
                      "button",
                      { type: "submit", id: "req_btn", disabled: !n },
                      "Заполнить бриф"
                    )
                  )
                ),
                i().createElement(
                  "div",
                  { className: "msg_us" },
                  i().createElement(
                    "p",
                    { className: "big_title" },
                    "Или напишите нам"
                  ),
                  i().createElement(
                    "a",
                    { href: "#", className: "links_foot" },
                    i().createElement(
                      "button",
                      { type: "submit", className: "msg_us_btn" },
                      i().createElement("img", {
                        src: "../../images/akar-icons_telegram-fill.svg",
                        className: "msg_imgs",
                      }),
                      " Telegram"
                    )
                  ),
                  i().createElement(
                    "a",
                    { href: "#", className: "links_foot" },
                    i().createElement(
                      "button",
                      { type: "submit", className: "msg_us_btn" },
                      i().createElement("img", {
                        src: "../../images/akar-icons_whatsapp-fill.svg",
                        className: "msg_imgs",
                      }),
                      " WhatsApp"
                    )
                  )
                )
              )
            );
          },
          I = function () {
            return i().createElement(
              "div",
              { className: "wrap_partners" },
              i().createElement(
                "div",
                { className: "partners" },
                i().createElement(
                  "p",
                  { className: "big_title_main", id: "big_title_mainId" },
                  "Партнеры"
                ),
                i().createElement(
                  "a",
                  {
                    href: "https://gk-osnova.ru/",
                    className: "partners_links",
                  },
                  i().createElement("img", {
                    src: "../../images/Group 400.svg",
                  })
                ),
                i().createElement(
                  "a",
                  {
                    href: "https://www.speech.su/ru",
                    className: "partners_links",
                  },
                  i().createElement("img", {
                    src: "../../images/Group 401.svg",
                  })
                )
              )
            );
          },
          j = function () {
            return i().createElement(
              "div",
              { className: "wrap_buildings" },
              i().createElement(
                "div",
                { className: "buildings", id: "buildings_link" },
                i().createElement("p", { className: "fone1" }),
                i().createElement(
                  "div",
                  { className: "each_building" },
                  i().createElement("img", {
                    src: "../../images/Frame 458.png",
                  }),
                  i().createElement(
                    "p",
                    { className: "top_title" },
                    "Недвижимость"
                  ),
                  i().createElement(
                    "p",
                    { className: "low_txt", id: "low_txt1" },
                    "Улучшаем повседневную жизнь, формируя доступную и комфортную среду для жизни, работы и творчества"
                  )
                ),
                i().createElement(
                  "div",
                  { className: "each_building" },
                  i().createElement("img", {
                    src: "../../images/Frame 459.png",
                  }),
                  i().createElement(
                    "p",
                    { className: "top_title middle_top_title" },
                    "Технологии"
                  ),
                  i().createElement(
                    "p",
                    { className: "low_txt middle_low_txt", id: "low_txt2" },
                    "Многогранный опыт высококвалифицированной команды, подкреплён последними разработками и исследованиями в области проектирования"
                  )
                ),
                i().createElement(
                  "div",
                  { className: "each_building" },
                  i().createElement("img", {
                    src: "../../images/Frame 460.png",
                  }),
                  i().createElement("p", { className: "top_title" }, "Досуг"),
                  i().createElement(
                    "p",
                    { className: "low_txt", id: "low_txt3" },
                    "Ориентация на развитие экосистемы, которая формирует опыт жизни в проектируемых пространствах "
                  )
                )
              )
            );
          },
          C = function () {
            return i().createElement(
              "div",
              { className: "wrap_detailed" },
              i().createElement(
                "div",
                { className: "detailed" },
                i().createElement(
                  "p",
                  { className: "detailed_txt" },
                  "Открытые мастерские — проектная организация, входящая в группу компаний Основа, обладающая опытом проектирования разнопрофильных объектов: жилых домов, офисных комплексов и объектов социально-культурного назначения."
                ),
                i().createElement(
                  "p",
                  { className: "wrap_detailed_link" },
                  i().createElement(
                    "a",
                    { href: "#buildings_link", id: "detailed_link" },
                    "Подробнее"
                  )
                )
              )
            );
          },
          S = function () {
            return i().createElement(
              "div",
              { className: "screen2" },
              i().createElement(
                "p",
                { className: "wrap_fone" },
                i().createElement("img", {
                  src: "../../images/Frame 465-2.png",
                })
              ),
              i().createElement(
                "p",
                { className: "project_title2 spec_city_title" },
                "Интеграция в городскую среду"
              ),
              i().createElement(
                "a",
                { href: "#request_field", className: "request_field_link" },
                i().createElement(
                  "div",
                  { className: "discuss_button2" },
                  "Заполнить бриф"
                )
              )
            );
          },
          F = function () {
            return i().createElement(
              "div",
              { className: "screen3" },
              i().createElement(
                "div",
                { className: "wrap_fone2" },
                i().createElement("img", {
                  src: "../../images/Rectangle 855-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 857-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 856-2.png",
                  className: "screen_imgs1",
                })
              ),
              i().createElement(
                "p",
                { className: "project_title2" },
                "Эргономичное благоустройство для детей, молодёжи и взрослых"
              ),
              i().createElement(
                "a",
                { href: "#request_field", className: "request_field_link" },
                i().createElement(
                  "div",
                  { className: "discuss_button2", id: "discuss_button2" },
                  "Заполнить бриф"
                )
              )
            );
          },
          T = function () {
            return i().createElement(
              "div",
              { className: "screen2" },
              i().createElement(
                "div",
                { className: "wrap_fone4" },
                i().createElement("img", {
                  src: "../../images/Rectangle 855-2-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 856-2-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 865-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 858-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 862-2.png",
                  className: "screen_imgs1 hideMobile",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 860-2.png",
                  className: "screen_imgs1 hideMobile",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 864-2.png",
                  className: "screen_imgs1 hideMobile",
                })
              ),
              i().createElement(
                "p",
                { className: "project_title2" },
                "Авторские решения"
              ),
              i().createElement(
                "a",
                { href: "#request_field", className: "request_field_link" },
                i().createElement(
                  "div",
                  { className: "discuss_button2 screenFourDiscuss" },
                  "Заполнить бриф"
                )
              )
            );
          },
          A = function () {
            return i().createElement(
              "div",
              { className: "screen3" },
              i().createElement(
                "div",
                { className: "wrap_fone2" },
                i().createElement("img", {
                  src: "../../images/Rectangle 855-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 857-2.png",
                  className: "screen_imgs1",
                }),
                i().createElement("img", {
                  src: "../../images/Rectangle 856-2.png",
                  className: "screen_imgs1",
                })
              ),
              i().createElement(
                "p",
                { className: "project_title2" },
                "Интересная среда для детей, молодёжи и взрослых"
              ),
              i().createElement(
                "a",
                { href: "#request_field", className: "request_field_link" },
                i().createElement(
                  "div",
                  { className: "discuss_button2", id: "discuss_button2" },
                  "Заполнить бриф"
                )
              )
            );
          };
        const q = function () {
          return i().createElement(
            "div",
            { className: "screen7" },
            i().createElement(
              "div",
              { className: "screen7-main" },
              i().createElement(
                "p",
                { className: "project_title2 screen7_title" },
                "Проектируем пространства ",
                i().createElement("br", null),
                " для жизни, ",
                i().createElement("span", null, "работы"),
                " и творчества"
              ),
              i().createElement("img", {
                src: "../../images/screen7.png",
                alt: "screen7 image",
                className: "screen7_image",
              })
            ),
            i().createElement(
              "a",
              { href: "#request_field", className: "request_field_link" },
              i().createElement(
                "div",
                { style: { width: "auto" }, className: "discuss_button" },
                "Заполнить бриф"
              )
            )
          );
        };
        const O = (function (e) {
          d()(c, e);
          var t,
            n,
            a =
              ((t = c),
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  a = g()(t);
                if (n) {
                  var c = g()(this).constructor;
                  e = Reflect.construct(a, arguments, c);
                } else e = a.apply(this, arguments);
                return _()(this, e);
              });
          function c(e) {
            var t;
            return (
              o()(this, c),
              ((t = a.call(this, e)).returnScreen = function () {
                return 1 == t.state.count
                  ? i().createElement(S, null)
                  : 2 == t.state.count
                  ? i().createElement(F, null)
                  : 3 == t.state.count
                  ? i().createElement(T, null)
                  : 4 == t.state.count
                  ? i().createElement(A, null)
                  : 5 == t.state.count
                  ? i().createElement(q, null)
                  : i().createElement(S, null);
              }),
              (t.state = { count: 1 }),
              t
            );
          }
          return (
            u()(c, [
              {
                key: "componentDidMount",
                value: function () {
                  "undefined" != typeof window &&
                    (this.setState({
                      count: Number(window.localStorage.getItem("count")) + 1,
                    }),
                    window.localStorage.setItem(
                      "count",
                      JSON.stringify(
                        Number(window.localStorage.getItem("count")) + 1 >= 6
                          ? 1
                          : Number(window.localStorage.getItem("count")) + 1
                      )
                    ));
                },
              },
              {
                key: "render",
                value: function () {
                  return i().createElement(
                    "div",
                    { className: "wrap_screen" },
                    this.returnScreen()
                  );
                },
              },
            ]),
            c
          );
        })(i().Component);
        var R = function (e) {
            var t = e.currentNews,
              n = e.currentProject,
              a = (0, r.useState)(""),
              c = v()(a, 2),
              s = c[0],
              l = c[1],
              o = (0, r.useState)(""),
              m = v()(o, 2),
              u = m[0],
              p = m[1];
            return (
              (0, r.useEffect)(
                function () {
                  console.log("currentNews: ", t);
                },
                [t]
              ),
              (0, r.useEffect)(
                function () {
                  p(
                    "О нас" === s.split("→")[0].trim()
                      ? "/about"
                      : "Проекты" === s.split("→")[0].trim()
                      ? "/projects"
                      : "Новости" === s.split("→")[0].trim()
                      ? "/news"
                      : "Контакты" === s.split("→")[0].trim()
                      ? "/contacts"
                      : ""
                  );
                },
                [s]
              ),
              (0, r.useEffect)(
                function () {
                  "undefined" != typeof window &&
                    l(
                      "/contacts" == window.location.pathname
                        ? "Контакты"
                        : "/about" == window.location.pathname
                        ? "О нас"
                        : window.location.pathname ==
                          "/about/" + window.location.pathname.split("/").pop()
                        ? "О нас → ".concat(null == t ? void 0 : t.title)
                        : "/projects" == window.location.pathname
                        ? "Проекты"
                        : window.location.pathname ==
                          "/projects/" +
                            window.location.pathname.split("/").pop()
                        ? "Проекты → ".concat(n && n.title)
                        : "/news" == window.location.pathname
                        ? "Новости"
                        : window.location.pathname ==
                          "/news/" + window.location.pathname.split("/").pop()
                        ? "Новости → ".concat(t && t.title)
                        : ""
                    );
                },
                [s]
              ),
              i().createElement(
                "div",
                { className: "wrap_navbar" },
                i().createElement(
                  "div",
                  { className: "navbar" },
                  i().createElement(
                    "p",
                    { className: "navbar_style" },
                    i().createElement("a", { href: "/" }, "Главная"),
                    " →",
                    " ",
                    i().createElement("a", { href: u }, s.split("→")[0].trim()),
                    s.split("→")[1] &&
                      i().createElement(
                        "span",
                        null,
                        "→ ",
                        s.split("→")[1].trim()
                      )
                  )
                )
              )
            );
          },
          P = function () {
            return i().createElement(
              "div",
              { className: "wrap_contact" },
              i().createElement(
                "div",
                { className: "contact" },
                i().createElement(
                  "div",
                  { className: "wrap_contacts_inside" },
                  i().createElement(
                    "div",
                    null,
                    i().createElement(
                      "p",
                      { className: "contact_title contsct_planchet" },
                      "Контакты"
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info mobileHidden" },
                      "Россия, г. Москва,"
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info mobileHidden" },
                      "107076, ул. Богородский Вал, д. 3, стр. 32,"
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info mobileHidden" },
                      "пом. I, ком. 65, эт. 1"
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info desktopHidden" },
                      "Россия, г. Москва, 107076, ул."
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info desktopHidden" },
                      "Богородский Вал, д. 3, стр. 32, пом. I,"
                    ),
                    i().createElement(
                      "p",
                      { className: "contact_info desktopHidden" },
                      "ком. 65, эт. 1"
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "wrap_low_links_contact" },
                    i().createElement(
                      "a",
                      { href: "tel:+74997536333", className: "contact_info" },
                      "+7 499 753 63 33 (2046)"
                    ),
                    i().createElement(
                      "a",
                      {
                        href: "mailto:info@o-master.ru",
                        className: "contact_info contact_mail",
                      },
                      "info@o-master.ru"
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "wrap_social_contacts" },
                    i().createElement(
                      "a",
                      { href: "#", className: "wrap_social_contacts_links" },
                      i().createElement("img", {
                        src: "../../../images/Vector-4.svg",
                      })
                    ),
                    i().createElement(
                      "a",
                      { href: "#", className: "wrap_social_contacts_links" },
                      i().createElement("img", {
                        src: "../../../images/icon-park-outline_telegram.svg",
                        id: "tele_low",
                      })
                    )
                  )
                ),
                i().createElement(
                  "div",
                  { className: "wrap_low_map" },
                  i().createElement("img", {
                    src: "../../../images/Снимок экрана 2022-10-05 в 18.50 1-2.png",
                  })
                )
              )
            );
          };
        const L = function () {
          return i().createElement(
            "p",
            { className: "wrap_main_page" },
            i().createElement(N, null),
            i().createElement(R, null),
            i().createElement(P, null),
            i().createElement(k, null),
            i().createElement(y, null)
          );
        };
        var D,
          B = function () {
            return i().createElement(
              "div",
              { className: "wrap_aboutScreen" },
              i().createElement(
                "div",
                { className: "aboutScreen" },
                i().createElement(
                  "p",
                  { className: "about_title" },
                  "Новые подходы к развитию технологий, которые создают комфортные условия для жизни"
                ),
                i().createElement("img", {
                  src: "../../../images/Rectangle 856-3-2.png",
                })
              )
            );
          },
          M = function () {
            return i().createElement(
              "div",
              { className: "wrap_belowScreen" },
              i().createElement(
                "div",
                { className: "belowScreen" },
                i().createElement(
                  "div",
                  null,
                  i().createElement(
                    "p",
                    { className: "txt_aboutBold" },
                    "«Открытые мастерские» — проектная организация, входящая в группу компаний «Основа», обладающая опытом проектирования разнопрофильных объектов: жилых домов, офисных комплексов и объектов социально-культурного назначения."
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 project_txt1" },
                    "Слаженная команда профессионалов осуществляет весь комплекс проектных работ: "
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about1" },
                    "→ архитектурная концепция"
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about1 project_txt1" },
                    "→ проектная и рабочая документация, включая осуществление авторского надзора при строительстве."
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 project_txt1" },
                    "Разработка документации с применением технологий информационного моделирования (BIM) позволяет эффективно решать сложные и амбициозные задачи."
                  )
                ),
                i().createElement(
                  "div",
                  { className: "wrap_years" },
                  i().createElement(
                    "div",
                    null,
                    i().createElement(
                      "p",
                      { className: "txt_about1Title" },
                      "20 лет"
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2 txt_about2_special" },
                      "создаём проекты,"
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2 txt_about2_special" },
                      "определяющие стиль жизни"
                    )
                  ),
                  i().createElement(
                    "div",
                    null,
                    i().createElement(
                      "p",
                      { className: "txt_about1Title", id: "spec_four" },
                      "> 400 проектов"
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2 txt_about2_special" },
                      "созданы нами за всё время"
                    )
                  )
                )
              )
            );
          },
          U = function () {
            return i().createElement(
              "div",
              { className: "wrap_aboutCulture" },
              i().createElement(
                "div",
                { className: "aboutCulture" },
                i().createElement(
                  "div",
                  { className: "wrap_img_aboutCulture" },
                  i().createElement("img", {
                    src: "../../../images/5 1-2.png",
                  }),
                  i().createElement("img", {
                    src: "../../../images/3 1-2.png",
                  }),
                  i().createElement("img", {
                    src: "../../../images/Image7 1-2.png",
                  }),
                  i().createElement("img", {
                    src: "../../../images/Софья_буклет_20.10 1-2.png",
                  }),
                  i().createElement("img", {
                    src: "../../../images/Korpus 1 vid 2 vdol' 1go Kozevniceskogo per ZAM 1.png",
                    className: "hiddenImgs",
                  }),
                  i().createElement("img", {
                    src: "../../../images/а_003 1-2.png",
                    className: "hiddenImgs",
                  }),
                  i().createElement("img", {
                    src: "../../../images/Star_cam005 1-2.png",
                    className: "hiddenImgs",
                  })
                ),
                i().createElement(
                  "div",
                  { className: "below_culture" },
                  i().createElement(
                    "p",
                    {
                      className: "txt_about1Title first_title",
                      style: { gridColumn: "1 / 3" },
                    },
                    "Ценности и культура бюро"
                  ),
                  i().createElement(
                    "div",
                    { className: "txt_about2 spec_txt_about3" },
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "В бюро мы опираемся на следующие ценности:"
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "1. Инновации: мы постоянно стремимся улучшать и инновационировать наши процессы и методы работы, чтобы предлагать нашим клиентам самые современные и эффективные решения."
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "2. Сотрудничество: мы ценим партнёрские отношения с нашими клиентами и поставщиками, и стремимся быть открытыми и честными в нашей работе."
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "3. Качество: мы гордимся тем, что наши проекты всегда выполняются на высоком уровне качества, что позволяет нам доверять нашим клиентам."
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "4. Ответственность: мы понимаем, что наши проекты имеют большое значение для наших клиентов и общества, и поэтому мы всегда берём на себя полную ответственность за результаты нашей работы."
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "txt_about2 spec_txt_about3" },
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "Мы объединили специалистов с разным опытом работы, чтобы создать команду с богатым креативным потенциалом. Мы верим в силу творчества и коллективного мышления, и поэтому обеспечиваем нашим сотрудникам оптимальные условия для развития их талантов."
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_about2" },
                      "Наша культура — это социальная ответственность, доверие, уважение и честность. Мы придерживаемся чётко определённых этических принципов, которые помогают нам взаимодействовать с нашими клиентами, партнёрами и сотрудниками."
                    )
                  )
                )
              )
            );
          },
          V = function () {
            return i().createElement(
              "div",
              { className: "wrap_aboutChooseUs" },
              i().createElement(
                "div",
                { className: "aboutChooseUs" },
                i().createElement(
                  "div",
                  { className: "wrap_img_aboutChooseUs" },
                  i().createElement("img", {
                    src: "../../../images/Frame 467-2-2.png",
                    id: "fone1_us",
                  })
                ),
                i().createElement(
                  "div",
                  { className: "below_culture" },
                  i().createElement(
                    "p",
                    {
                      className: "txt_about1Title first_title",
                      style: { gridColumn: "1 / 3" },
                    },
                    "Почему нас выбирают?"
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 spec_txt_about spec_txt_about3" },
                    "Мы предлагаем качественные услуги по дизайну и проектированию зданий и интерьеров. Наши специалисты имеют большой опыт работы и постоянно совершенствуют свои знания и умения. "
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 spec_txt_about spec_txt_about3" },
                    "Наши клиенты ценят нас за уровень профессионализма, оперативность и ответственность. Мы стремимся создать доверительные и продуктивные отношения с нашими клиентами, чтобы сделать их задумки реальностью. "
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 spec_txt_about spec_txt_about3" },
                    "Cтремимся предложить нашим клиентам конкурентные цены и гибкие условия сотрудничества. Мы слушаем пожелания наших клиентов и стараемся индивидуально подходить к каждому проекту."
                  ),
                  i().createElement(
                    "p",
                    { className: "txt_about2 spec_txt_about spec_txt_about3" },
                    "Если вы ищете надежного партнера для реализации своих проектов, обращайтесь к нам в проектное бюро!"
                  )
                )
              )
            );
          },
          H = function () {
            "undefined" != typeof window && (D = window.__INITIAL_TEAM__);
            var e = (0, r.useState)([{}]),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  "about" == window.location.pathname.split("/").pop() &&
                  a(D);
              }),
              i().createElement(
                "div",
                { className: "wrap_teamBlock" },
                i().createElement(
                  "div",
                  { className: "teamBlock" },
                  i().createElement(
                    "p",
                    {
                      className: "txt_about1Title first_title",
                      id: "team_spec_title",
                      style: { gridColumn: "1 / 4" },
                    },
                    "Команда"
                  ),
                  n.map(function (e) {
                    return i().createElement(
                      "div",
                      null,
                      i().createElement("p", { className: "name_of" }, e.name),
                      i().createElement(
                        "p",
                        { className: "lastname_of" },
                        e.title
                      )
                    );
                  })
                )
              )
            );
          };
        const Y = function () {
          return i().createElement(
            "p",
            { className: "wrap_main_page" },
            i().createElement(N, null),
            i().createElement(R, null),
            i().createElement(B, null),
            i().createElement(M, null),
            i().createElement(U, null),
            i().createElement(V, null),
            i().createElement(H, null),
            i().createElement(k, null),
            i().createElement(y, null)
          );
        };
        var W,
          z,
          J,
          G = function () {
            "undefined" != typeof window && (W = window.__INITIAL_VACANCY__);
            var e = (0, r.useState)({}),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  window.location.pathname.split("/").pop() == W._id &&
                  a(W);
              }),
              (0, r.useEffect)(function () {
                "undefined" != typeof window && window.scrollTo(0, 0);
              }),
              i().createElement(
                "div",
                { className: "wrap_contentVacancy" },
                i().createElement(
                  "div",
                  { className: "contentVacancy" },
                  i().createElement(
                    "p",
                    { className: "txt_about1Title spec_txt_about1Title" },
                    n.title
                  ),
                  i().createElement("img", {
                    src: "../../../uploads/".concat(n.noExchangeFile),
                  }),
                  i().createElement(
                    "p",
                    { className: "descr_of_vacs" },
                    "Описание вакансии"
                  ),
                  i().createElement(
                    "div",
                    { className: "txt_vacancy main_txt" },
                    i().createElement(
                      "p",
                      { className: "txt_vacancy spec_descr" },
                      n.description
                    )
                  ),
                  i().createElement(
                    "div",
                    { className: "wrap_txtVacs" },
                    i().createElement(
                      "p",
                      { className: "bold_vacancy" },
                      "Наименование вакансии"
                    ),
                    i().createElement(
                      "p",
                      { className: "txt_vacancy" },
                      n.title
                    ),
                    i().createElement(
                      "p",
                      { className: "bold_vacancy" },
                      "Aдрес"
                    ),
                    i().createElement("p", { className: "txt_vacancy" }, n.tag)
                  )
                )
              )
            );
          },
          K = function () {
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window && window.scrollTo(0, 0);
              }),
              i().createElement(
                "p",
                { className: "wrap_main_page" },
                i().createElement(N, null),
                i().createElement(R, null),
                i().createElement(G, null),
                i().createElement(k, null),
                i().createElement(y, null)
              )
            );
          },
          X = function (e) {
            var t = e.currentNews;
            return i().createElement(
              "div",
              { className: "wrap_contentVacancy" },
              i().createElement(
                "div",
                { className: "contentVacancy" },
                i().createElement(
                  "p",
                  { className: "txt_about1Title" },
                  t.title
                ),
                i().createElement(
                  "p",
                  {
                    className: "date_style spec_data_style",
                    id: "spec_data_style_news",
                  },
                  t.tag
                ),
                i().createElement("img", {
                  src: t.noExchangeFile
                    ? "../../../uploads/".concat(t.noExchangeFile)
                    : "../../../images/Rectangle 14-5-2.png",
                }),
                i().createElement(
                  "p",
                  { className: "descr_of_vacs" },
                  "Описание новости"
                ),
                i().createElement(
                  "div",
                  { className: "txt_vacancy main_txt" },
                  i().createElement(
                    "p",
                    { className: "txt_vacancy" },
                    t.description
                  )
                )
              )
            );
          },
          Z = function () {
            "undefined" != typeof window && (z = window.__INITIAL_ONE_NEWS__);
            var e = (0, r.useState)({}),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  window.location.pathname.split("/").pop() == z._id &&
                  a(z);
              }),
              (0, r.useEffect)(function () {
                "undefined" != typeof window && window.scrollTo(0, 0);
              }),
              i().createElement(
                "p",
                { className: "wrap_main_page" },
                i().createElement(N, null),
                i().createElement(R, { currentNews: n }),
                i().createElement(X, { currentNews: n }),
                i().createElement(y, null)
              )
            );
          },
          Q = function (e) {
            var t = e.searchInput,
              n = e.selectedCategory;
            "undefined" != typeof window && (J = window.__INITIAL_PROJECTS__);
            var a = (0, r.useState)([{}]),
              c = v()(a, 2),
              s = (c[0], c[1]),
              l = (0, r.useState)(null),
              o = v()(l, 2),
              m = o[0],
              u = o[1];
            (0, r.useEffect)(function () {
              if (null !== localStorage.getItem("category")) {
                var e = J.filter(function (e) {
                  return e.category === localStorage.getItem("category");
                });
                u(e);
              }
              setTimeout(function () {
                localStorage.removeItem("category");
              }, 2e3);
            }, []),
              (0, r.useEffect)(function () {
                "undefined" != typeof window && s(J);
              }),
              (0, r.useEffect)(
                function () {
                  if ("Все проекты" !== n) {
                    var e = J.filter(function (e) {
                      return e.category === n;
                    });
                    u(e);
                  } else {
                    if (localStorage.getItem("category")) return;
                    u(J);
                  }
                },
                [n]
              ),
              (0, r.useEffect)(
                function () {
                  var e = setTimeout(function () {
                    var e = p(t);
                    localStorage.getItem("category") || u(e);
                  }, 300);
                  return function () {
                    return clearTimeout(e);
                  };
                },
                [t]
              );
            var p = function (e) {
              return e && " " !== e
                ? "Все проекты" === n
                  ? J.filter(function (t) {
                      return t.title.toLowerCase().includes(e.toLowerCase());
                    })
                  : J.filter(function (t) {
                      var a = t.title,
                        c = t.category;
                      return (
                        a.toLowerCase().includes(e.toLowerCase()) && c === n
                      );
                    })
                : "Все проекты" !== n
                ? J.filter(function (e) {
                    return e.category === n;
                  })
                : J;
            };
            return i().createElement(
              "div",
              { className: "wrap_buildings_inside" },
              i().createElement(
                "div",
                { className: "buildings_inside" },
                m
                  ? m.map(function (e) {
                      return i().createElement(
                        "a",
                        {
                          key: e._id,
                          href: "/projects/".concat(e._id),
                          className: "wrap_each_object",
                        },
                        i().createElement("img", {
                          src: "../../../uploads/".concat(e.noExchangeFile),
                          className: "each_project_img",
                        }),
                        i().createElement(
                          "div",
                          { className: "wrap_objectInfo " },
                          i().createElement(
                            "p",
                            { className: "common_addressObject" },
                            e.secondString
                          ),
                          i().createElement(
                            "p",
                            { className: "common_titleObject" },
                            e.title
                          )
                        )
                      );
                    })
                  : i().createElement(i().Fragment, null)
              )
            );
          },
          $ = function () {
            var e = (0, r.useState)(" "),
              t = v()(e, 2),
              n = t[0],
              a = t[1],
              c = (0, r.useState)("Все проекты"),
              s = v()(c, 2),
              l = s[0],
              o = s[1];
            return (
              (0, r.useEffect)(function () {
                null !== localStorage.getItem("category") &&
                  o(String(localStorage.getItem("category")));
              }, []),
              i().createElement(
                "div",
                { className: "wrap_aboutProject" },
                i().createElement(
                  "div",
                  { className: "nested_wrap_aboutProject" },
                  i().createElement(
                    "div",
                    { id: "project_title" },
                    i().createElement(
                      "p",
                      {
                        className: "about_title spec_about_title",
                        id: "project_spec",
                      },
                      "Проектируем пространства"
                    ),
                    i().createElement(
                      "p",
                      {
                        className: "about_title spec_about_title",
                        id: "project_spec_txt",
                      },
                      "для жизни, работы и творчества"
                    )
                  ),
                  i().createElement("input", {
                    type: "text",
                    id: "inputSearch",
                    placeholder: "Поиск",
                    onChange: function (e) {
                      return a(e.target.value);
                    },
                  }),
                  i().createElement(
                    "div",
                    { className: "aboutProject" },
                    i().createElement(
                      "div",
                      { className: "wrap_allCategory" },
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Все проекты" === l ? "choosenCategory" : ""
                          ),
                          onClick: function () {
                            return o("Все проекты");
                          },
                        },
                        "Все проекты"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Жилые комплексы" === l ? "choosenCategory" : ""
                          ),
                          onClick: function () {
                            return o("Жилые комплексы");
                          },
                        },
                        "Жилые комплексы"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Общественно-деловые комплексы" === l
                              ? "choosenCategory"
                              : ""
                          ),
                          onClick: function () {
                            return o("Общественно-деловые комплексы");
                          },
                        },
                        "Общественно-деловые комплексы"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Гостиничные комплексы" === l
                              ? "choosenCategory"
                              : ""
                          ),
                          onClick: function () {
                            return o("Гостиничные комплексы");
                          },
                        },
                        "Гостиничные комплексы"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Градостроительные концепции" === l
                              ? "choosenCategory"
                              : ""
                          ),
                          onClick: function () {
                            return o("Градостроительные концепции");
                          },
                        },
                        "Градостроительные концепции"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Развлекательные комплексы" === l
                              ? "choosenCategory"
                              : ""
                          ),
                          onClick: function () {
                            return o("Развлекательные комплексы");
                          },
                        },
                        "Развлекательные комплексы"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Конкурсы" === l ? "choosenCategory" : ""
                          ),
                          onClick: function () {
                            return o("Конкурсы");
                          },
                        },
                        "Конкурсы"
                      ),
                      i().createElement(
                        "p",
                        {
                          className: "each_category ".concat(
                            "Интерьеры" === l ? "choosenCategory" : ""
                          ),
                          onClick: function () {
                            return o("Интерьеры");
                          },
                        },
                        "Интерьеры"
                      )
                    )
                  )
                ),
                i().createElement(Q, { searchInput: n, selectedCategory: l })
              )
            );
          };
        const ee = function () {
          return i().createElement(
            "p",
            { className: "wrap_main_page" },
            i().createElement(N, null),
            i().createElement(R, null),
            i().createElement($, null),
            i().createElement(y, null)
          );
        };
        var te,
          ne = function () {
            var e = function (e) {
              document
                .querySelectorAll(".each_categoryNews")
                .forEach(function (e) {
                  e.classList.remove("choosenCategory");
                }),
                e.target.classList.add("choosenCategory");
            };
            return i().createElement(
              "div",
              { className: "wrap_aboutProject" },
              i().createElement(
                "div",
                { id: "project_title" },
                i().createElement(
                  "p",
                  { className: "about_title spec_about_title" },
                  "Новости"
                )
              ),
              i().createElement(
                "div",
                { className: "aboutProject" },
                i().createElement(
                  "div",
                  { className: "wrap_allNews" },
                  i().createElement(
                    "p",
                    {
                      className: "each_categoryNews choosenCategory",
                      id: "choosenAllCategory",
                      onClick: e,
                    },
                    "Все проекты"
                  ),
                  i().createElement(
                    "p",
                    { className: "each_categoryNews", onClick: e },
                    "Конкурсные проекты"
                  ),
                  i().createElement(
                    "p",
                    { className: "each_categoryNews", onClick: e },
                    "Конкурсные проекты"
                  ),
                  i().createElement(
                    "p",
                    { className: "each_categoryNews", onClick: e },
                    "Конкурсные проекты"
                  ),
                  i().createElement(
                    "p",
                    { className: "each_categoryNews", onClick: e },
                    "Конкурсные проекты"
                  ),
                  i().createElement(
                    "p",
                    { className: "each_categoryNews planchHidden", onClick: e },
                    "Конкурсные проекты"
                  )
                )
              )
            );
          },
          ae = function () {
            "undefined" != typeof window && (te = window.__INITIAL_NEWS__);
            var e = (0, r.useState)([{}]),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  "news" == window.location.pathname.split("/").pop() &&
                  a(te);
              }),
              i().createElement(
                "div",
                { className: "wrap_buildings_inside" },
                i().createElement(
                  "div",
                  { className: "news_inside" },
                  n.map(function (e) {
                    return i().createElement(
                      "a",
                      {
                        key: e._id,
                        href: "/news/".concat(e._id),
                        className: "wrap_each_news",
                      },
                      i().createElement(
                        "p",
                        { className: "wrap_each_news_img" },
                        i().createElement("img", {
                          src: e.noExchangeFile
                            ? "../../../uploads/".concat(e.noExchangeFile)
                            : "../../../images/Rectangle 14-4.png",
                          className: "each_news_img",
                        })
                      ),
                      i().createElement(
                        "div",
                        { className: "wrap_description_of_news" },
                        i().createElement(
                          "p",
                          { className: "title_of_news" },
                          e.title
                        ),
                        i().createElement(
                          "p",
                          { className: "description_of_news" },
                          e.description
                        )
                      ),
                      i().createElement("p", { className: "date_style" }, e.tag)
                    );
                  })
                )
              )
            );
          };
        const ce = function () {
          return i().createElement(
            "p",
            { className: "wrap_main_page" },
            i().createElement(N, null),
            i().createElement(R, null),
            i().createElement(ne, null),
            i().createElement(ae, null),
            i().createElement(y, null)
          );
        };
        var re = function (e) {
            var t = e.currentProject,
              n = e.closePopup,
              a = e.popupOpen,
              c = e.clickPopup;
            return i().createElement(
              "div",
              { className: "wrap_allPhotos", onClick: n },
              i().createElement(
                "div",
                {
                  className: "allPhotos",
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                },
                i().createElement(
                  "p",
                  {
                    className: "date_style spec_data_style",
                    id: "spec_data_style",
                    style: { filter: a ? "grayscale(0%)" : "grayscale(100%)" },
                  },
                  t.tag
                ),
                i().createElement(
                  "div",
                  { className: "wrap_allImages" },
                  t.arrayOfFiles &&
                    t.arrayOfFiles.map(function (e, t) {
                      return i().createElement("img", {
                        key: e,
                        src: "../../../uploads/".concat(e),
                        className:
                          0 === t
                            ? "each_photo_project first_photo_project"
                            : "each_photo_project",
                        onClick: function () {
                          return c(e);
                        },
                      });
                    })
                )
              )
            );
          },
          ie = function (e) {
            var t = e.currentProject;
            return (
              (0, r.useEffect)(
                function () {
                  console.log(t);
                },
                [t]
              ),
              i().createElement(
                "div",
                { className: "wrap_projectDescr" },
                i().createElement(
                  "div",
                  { className: "projectDescr" },
                  i().createElement(
                    "p",
                    { className: "descr_of_vacs descr_of_project" },
                    "Описание проекта"
                  ),
                  i().createElement(
                    "div",
                    { className: "project-wrapper" },
                    i().createElement(
                      "div",
                      { className: "each_descr_div" },
                      i().createElement(
                        "p",
                        { className: "bold_vacancy" },
                        "Наименование объекта"
                      ),
                      i().createElement(
                        "p",
                        { className: "txt_vacancy" },
                        t.title
                      )
                    ),
                    void 0 !== t.mainArray
                      ? t.mainArray[0].map(function (e, n) {
                          return i().createElement(
                            "div",
                            { key: n + e[0], className: "each_descr_div" },
                            i().createElement(
                              "p",
                              { className: "bold_vacancy" },
                              e
                            ),
                            i().createElement(
                              "p",
                              { className: "txt_vacancy" },
                              t.mainArray[1][n]
                            )
                          );
                        })
                      : i().createElement(i().Fragment, null),
                    i().createElement("p", { className: "bottom_grey" }),
                    void 0 !== t.technicalArray
                      ? t.technicalArray[0].map(function (e, n) {
                          return i().createElement(
                            "div",
                            { key: n + e[0], className: "each_descr_div" },
                            i().createElement(
                              "p",
                              { className: "bold_vacancy" },
                              e
                            ),
                            i().createElement(
                              "p",
                              { className: "txt_vacancy" },
                              t.technicalArray[1][n]
                            )
                          );
                        })
                      : i().createElement(i().Fragment, null)
                  ),
                  i().createElement(
                    "div",
                    { className: "project-wrapper" },
                    i().createElement(
                      "div",
                      { className: "each_descr_div" },
                      void 0 !== t.technicalArray
                        ? t.descriptionArray[0].map(function (e, n) {
                            return i().createElement(
                              "p",
                              { className: "txt_vacancy technical_p" },
                              i().createElement("b", null, e),
                              i().createElement("br", null),
                              t.descriptionArray[1][n]
                            );
                          })
                        : i().createElement(i().Fragment, null)
                    )
                  )
                )
              )
            );
          };
        const se = require("@babel/runtime/helpers/toConsumableArray");
        var le = n.n(se);
        const oe = require("react-slick");
        var me = n.n(oe);
        function ue(e) {
          var t = e.onClick;
          return i().createElement("img", {
            className: "slick-arrow slick-prev",
            src: "../../../images/projects/left.png",
            alt: "right arrow",
            onClick: function (e) {
              t(), e.stopPropagation();
            },
          });
        }
        function pe(e) {
          var t = e.onClick;
          return i().createElement("img", {
            className: "slick-arrow slick-next",
            src: "../../../images/projects/right.png",
            alt: "left arrow",
            onClick: function (e) {
              t(), e.stopPropagation();
            },
          });
        }
        const de = function (e) {
          var t = e.popupOpen,
            n = e.detailedImgName,
            a = (e.setPopupOpen, e.closePopup),
            c = e.photos,
            s = (0, r.useState)([]),
            l = v()(s, 2),
            o = l[0],
            m = l[1],
            u = {
              dots: !0,
              infinite: !0,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: i().createElement(pe, null),
              prevArrow: i().createElement(ue, null),
            };
          return (
            (0, r.useEffect)(
              function () {
                var e = c.findIndex(function (e) {
                    return e === n;
                  }),
                  t = c.slice(e),
                  a = c.slice(0, e);
                m([].concat(le()(t), le()(a))),
                  console.log([].concat(le()(t), le()(a)));
              },
              [n]
            ),
            i().createElement(
              i().Fragment,
              null,
              t
                ? i().createElement(
                    "div",
                    { className: "popup_container" },
                    i().createElement(
                      "div",
                      { className: "popup_photo" },
                      i().createElement(
                        "div",
                        { className: "close_wrapper" },
                        i().createElement("img", {
                          src: "../../../images/projects/close.png",
                          alt: "close",
                          onClick: a,
                          className: "close_popup",
                        })
                      ),
                      i().createElement(
                        me(),
                        Object.assign({}, u),
                        o.length > 1
                          ? o.map(function (e, n) {
                              return i().createElement(
                                "div",
                                { key: e.id },
                                i().createElement("img", {
                                  key: e,
                                  src: "../../../uploads/".concat(e),
                                  className:
                                    0 === n
                                      ? "each_photo_project first_photo_project"
                                      : "each_photo_project",
                                  style: {
                                    filter: t
                                      ? "grayscale(0%)"
                                      : "grayscale(100%)",
                                  },
                                  onClick: function (e) {
                                    return e.stopPropagation();
                                  },
                                })
                              );
                            })
                          : i().createElement("div", null, "none")
                      )
                    )
                  )
                : i().createElement(i().Fragment, null)
            )
          );
        };
        var fe,
          _e = function () {
            "undefined" != typeof window && (fe = window.__INITIAL_PROJECT__);
            var e = (0, r.useState)({}),
              t = v()(e, 2),
              n = t[0],
              a = t[1],
              c = (0, r.useState)(!1),
              s = v()(c, 2),
              l = s[0],
              o = s[1],
              m = (0, r.useState)(""),
              u = v()(m, 2),
              p = u[0],
              d = u[1],
              f = function () {
                o(!1), (document.body.style.overflow = "auto");
              };
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  window.location.pathname.split("/").pop() == fe._id &&
                  a(fe);
              }),
              (0, r.useEffect)(function () {
                "undefined" != typeof window && window.scrollTo(0, 0);
              }),
              i().createElement(
                "p",
                { className: "wrap_main_page" },
                i().createElement(N, null),
                i().createElement(R, { currentProject: n }),
                i().createElement(
                  "p",
                  { className: "txt_about1Title txt_about1Title2" },
                  n.title
                ),
                i().createElement(
                  "div",
                  { className: "wrap_main_page-project" },
                  i().createElement(re, {
                    currentProject: n,
                    closePopup: f,
                    clickPopup: function (e) {
                      o(!l), d(e), (document.body.style.overflow = "hidden");
                    },
                    popupOpen: l,
                  }),
                  i().createElement(ie, { currentProject: n })
                ),
                i().createElement(de, {
                  photos: n.arrayOfFiles ? n.arrayOfFiles : [],
                  popupOpen: l,
                  setPopupOpen: o,
                  detailedImgName: p,
                  closePopup: f,
                }),
                i().createElement(y, null)
              )
            );
          };
        const Ee = function () {
          return (
            (0, r.useEffect)(function () {
              "undefined" == typeof window ||
                ("/login" != window.location.pathname &&
                  "pannel" != window.location.pathname.split("/")[1] &&
                  "publication" != window.location.pathname.split("/")[1]) ||
                (document.body.style.backgroundColor = "#f2f2f5");
            }),
            i().createElement(
              "div",
              { className: "wrap_header_admin" },
              i().createElement(
                "div",
                { className: "header_admin" },
                i().createElement(
                  "a",
                  { href: "/", className: "wrap_admin_logo" },
                  i().createElement("img", {
                    src: "../../../images/Frame 1 — копия.svg",
                  })
                ),
                i().createElement(
                  "div",
                  {
                    className: "wrap_admin_links",
                    style: {
                      display:
                        "undefined" != typeof window &&
                        "/login" == window.location.pathname
                          ? "none"
                          : "flex",
                    },
                  },
                  i().createElement(
                    s.NavLink,
                    {
                      to: "/pannel/projects",
                      className:
                        "undefined" != typeof window &&
                        "projects" == window.location.pathname.split("/")[2]
                          ? "admin_links active_menu_links"
                          : "admin_links",
                      activeClassName: "active_menu_links",
                    },
                    "Проекты"
                  ),
                  i().createElement(
                    s.NavLink,
                    {
                      to: "/pannel/news",
                      className:
                        "undefined" != typeof window &&
                        "news" == window.location.pathname.split("/")[2]
                          ? "admin_links active_menu_links"
                          : "admin_links",
                      activeClassName: "active_menu_links",
                    },
                    "Новости"
                  ),
                  i().createElement(
                    s.NavLink,
                    {
                      to: "/pannel/vacancies",
                      className:
                        "undefined" != typeof window &&
                        "vacancies" == window.location.pathname.split("/")[2]
                          ? "admin_links active_menu_links"
                          : "admin_links",
                      activeClassName: "active_menu_links",
                    },
                    "Вакансии"
                  ),
                  i().createElement(
                    s.NavLink,
                    {
                      to: "/pannel/team",
                      className:
                        "undefined" != typeof window &&
                        "team" == window.location.pathname.split("/")[2]
                          ? "admin_links active_menu_links"
                          : "admin_links",
                      activeClassName: "active_menu_links",
                    },
                    "Команда"
                  )
                ),
                i().createElement(
                  "div",
                  {
                    className: "wrap_admin_exit",
                    style: {
                      display:
                        "undefined" != typeof window &&
                        "/login" == window.location.pathname
                          ? "none"
                          : "flex",
                    },
                  },
                  i().createElement("a", { href: "/login/logout" }, "Выйти")
                )
              )
            )
          );
        };
        var ge,
          he,
          ve,
          we,
          Ne = function (e) {
            return i().createElement(
              "div",
              { className: "each_project" },
              i().createElement(
                "p",
                {
                  className: "date_of_publication",
                  style: { opacity: "team" == e.page ? 0 : 1 },
                },
                "team" == e.page ? "tag" : e.item.tag
              ),
              i().createElement(
                "a",
                {
                  href: "/publication/"
                    .concat(e.page, "/delete/")
                    .concat(e.item._id),
                  className: "each_project_link",
                },
                i().createElement("img", { src: "../../../images/Vector.svg" })
              ),
              i().createElement(
                "a",
                {
                  href: "/publication/".concat(e.page, "/").concat(e.item._id),
                  className: "wrap_each_change",
                },
                i().createElement(
                  "div",
                  { className: "wrap_each_publication" },
                  i().createElement(
                    "p",
                    {
                      className: "wrap_inside_each_publication",
                      style: {
                        display: "vacancies" == e.page ? "none" : "block",
                      },
                    },
                    i().createElement("img", {
                      src: e.item.noExchangeFile
                        ? "../../../uploads/".concat(e.item.noExchangeFile)
                        : "../../../images/Rectangle 205.png",
                    })
                  ),
                  i().createElement(
                    "p",
                    {
                      className: "title_of_publication",
                      style: {
                        display: "projects" == e.page ? "block" : "none",
                      },
                    },
                    e.item.title
                  ),
                  i().createElement(
                    "div",
                    {
                      className: "wrap_each_admin_post",
                      style: { display: "news" == e.page ? "block" : "none" },
                    },
                    i().createElement(
                      "p",
                      { className: "name_vacancy" },
                      e.item.title
                    ),
                    i().createElement(
                      "p",
                      { className: "position_vacancy" },
                      e.item.description
                    )
                  ),
                  i().createElement(
                    "div",
                    {
                      className: "wrap_each_admin_post",
                      style: {
                        display: "vacancies" == e.page ? "block" : "none",
                      },
                    },
                    i().createElement(
                      "p",
                      { className: "name_vacancy" },
                      e.item.title
                    ),
                    i().createElement(
                      "p",
                      { className: "position_vacancy" },
                      e.item.description
                    )
                  ),
                  i().createElement(
                    "div",
                    {
                      className: "wrap_each_admin_post",
                      style: { display: "team" == e.page ? "block" : "none" },
                    },
                    i().createElement(
                      "p",
                      { className: "name_vacancy" },
                      e.item.name
                    ),
                    i().createElement(
                      "p",
                      { className: "position_vacancy" },
                      e.item.title
                    )
                  )
                )
              )
            );
          },
          ye = function () {
            "undefined" != typeof window &&
              ((ge = window.__INITIAL_PROJECTS__),
              (he = window.__INITIAL_NEWS__),
              (ve = window.__INITIAL_VACANCIES__),
              (we = window.__INITIAL_TEAM__));
            var e = (0, r.useState)("проектов"),
              t = v()(e, 2),
              n = t[0],
              a = t[1],
              c = (0, r.useState)("Добавить новый проект"),
              s = v()(c, 2),
              l = s[0],
              o = s[1],
              m = (0, r.useState)("projects"),
              u = v()(m, 2),
              p = u[0],
              d = u[1],
              f = (0, r.useState)([{}]),
              _ = v()(f, 2),
              E = _[0],
              g = _[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  ("projects" == window.location.pathname.split("/").pop() &&
                    (a("проектов"),
                    o("Добавить новый проект"),
                    d("projects"),
                    g(ge)),
                  "news" == window.location.pathname.split("/").pop() &&
                    (a("новостей"),
                    o("Добавить новую новость"),
                    d("news"),
                    g(he)),
                  "vacancies" == window.location.pathname.split("/").pop() &&
                    (a("вакансий"),
                    o("Создать новую вакансию"),
                    d("vacancies"),
                    g(ve)),
                  "team" == window.location.pathname.split("/").pop() &&
                    (a("команды"),
                    o("Добавить нового участника команды"),
                    d("team"),
                    g(we)));
              }),
              i().createElement(
                "div",
                { className: "wrap_public_txt" },
                i().createElement(
                  "p",
                  { className: "txtPublic" },
                  "Публикация ",
                  n
                ),
                i().createElement(
                  "a",
                  { href: "/publication/" + p, className: "txtBelow" },
                  i().createElement("span", null, "+"),
                  " ",
                  l
                ),
                i().createElement(
                  "div",
                  { className: "wrap_each_project" },
                  E.map(function (e) {
                    return i().createElement(Ne, { page: p, item: e });
                  })
                )
              )
            );
          };
        const be = function () {
          return i().createElement(
            "p",
            { className: "wrap_main_page" },
            i().createElement(Ee, null),
            i().createElement(ye, null)
          );
        };
        var xe = function () {
          var e = (0, r.useState)(""),
            t = v()(e, 2),
            n = t[0],
            a = t[1];
          return (
            (0, r.useEffect)(function () {
              "undefined" != typeof window &&
                (a(window.__INITIAL_ERRORS__[0]),
                console.log(window.__INITIAL_ERRORS__));
            }),
            i().createElement(
              "div",
              { className: "wrap_form" },
              i().createElement(
                "div",
                { className: "form_inside" },
                i().createElement("form", {
                  method: "POST",
                  action: "/login/signin",
                  id: "signinForm",
                  style: { position: "absolute" },
                }),
                i().createElement(
                  "p",
                  { className: "admin_txt" },
                  "Кабинет администратора"
                ),
                i().createElement("p", { className: "login_txt" }, "Логин"),
                i().createElement("p", { className: "login_txt" }, "Пароль"),
                i().createElement("input", {
                  type: "email",
                  name: "email",
                  form: "signinForm",
                  required: !0,
                  className: "login_inputs email_inp",
                }),
                i().createElement("input", {
                  type: "password",
                  name: "password",
                  form: "signinForm",
                  required: !0,
                  className: "login_inputs pass_inp",
                }),
                i().createElement(
                  "button",
                  {
                    className: "login_btn",
                    form: "signinForm",
                    type: "submit",
                  },
                  "Вход"
                ),
                i().createElement("p", { style: { color: "red" } }, n)
              )
            )
          );
        };
        const ke = function () {
            return i().createElement(
              "p",
              { className: "wrap_main_page" },
              i().createElement(Ee, null),
              i().createElement(xe, null)
            );
          },
          Ie = require("@babel/runtime/helpers/defineProperty");
        var je,
          Ce,
          Se,
          Fe,
          Te,
          Ae,
          qe,
          Oe,
          Re = n.n(Ie),
          Pe = function () {
            var e;
            return (
              "undefined" != typeof window &&
                (e =
                  4 == window.location.pathname.split("/").length
                    ? window.location.pathname
                        .split("/")[2]
                        .concat("/")
                        .concat(window.location.pathname.split("/")[3])
                    : window.location.pathname.split("/").pop()),
              e
            );
          },
          Le = function (e) {
            var t = (0, r.useState)(""),
              n = v()(t, 2),
              a = n[0],
              c = n[1],
              s = (0, r.useState)({ title: "", description: "", tag: "" }),
              l = v()(s, 2),
              o = l[0],
              m = l[1];
            (0, r.useEffect)(function () {
              e.data &&
                m({
                  title: e.data.title,
                  tag: e.data.tag,
                  description: e.data.description,
                }),
                "undefined" != typeof window &&
                "news" == window.location.pathname.split("/")[2]
                  ? c("news")
                  : "undefined" != typeof window &&
                    "vacancies" == window.location.pathname.split("/")[2] &&
                    c("vacancies");
            }, []);
            var u = function (e) {
              m(
                Object.assign(
                  Object.assign({}, o),
                  Re()({}, e.target.name, e.target.value)
                )
              );
            };
            return i().createElement(
              "div",
              {
                style: {
                  display: "vacancies" == a || "news" == a ? "block" : "none",
                },
              },
              i().createElement("form", {
                action: "/publication/".concat(Pe()),
                method: "POST",
                id: "vacancies" == a ? "vacancyForm" : "newsForm",
                encType: "multipart/form-data",
              }),
              i().createElement(
                "p",
                { className: "post_name" },
                "Название ",
                "vacancies" == a ? "вакансии" : "новости"
              ),
              i().createElement("input", {
                type: "text",
                name: "title",
                form: "vacancies" == a ? "vacancyForm" : "newsForm",
                value: e.data ? o.title : void 0,
                onChange: u,
                required: !0,
                className: "news_post_input",
              }),
              i().createElement(
                "p",
                { className: "post_name" },
                "Дата публикации / Тэг"
              ),
              i().createElement("input", {
                type: "text",
                name: "tag",
                form: "vacancies" == a ? "vacancyForm" : "newsForm",
                value: e.data ? o.tag : void 0,
                onChange: u,
                required: !0,
                className: "news_post_input",
              }),
              i().createElement(
                "p",
                { className: "post_name" },
                "Описание ",
                "vacancies" == a ? "вакансии" : "новости"
              ),
              i().createElement("textarea", {
                className: "post_area",
                form: "vacancies" == a ? "vacancyForm" : "newsForm",
                value: e.data ? o.description : void 0,
                onChange: u,
                required: !0,
                name: "description",
              })
            );
          },
          De = [
            { name: "Выберите категорию" },
            { name: "Bce проекты" },
            { name: "Жилые комплексы" },
            { name: "Общественно-деловые комплексы" },
            { name: "Гостиничные комплексы" },
            { name: "Градостроительные концепции" },
            { name: "Развлекательные комплексы" },
            { name: "Конкурсы" },
            { name: "Интерьеры" },
          ],
          Be = [0],
          Me = function (e) {
            var t = (0, r.useState)(1),
              n = v()(t, 2),
              a = n[0],
              c = n[1],
              s = (0, r.useState)({ mainName: [], mainDescription: [] }),
              l = v()(s, 2),
              o = l[0],
              m = l[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  4 == window.location.pathname.split("/").length &&
                  Be.pop(),
                  e.val &&
                    null != e.val &&
                    (m({ mainName: e.val[0], mainDescription: e.val[1] }),
                    (je = le()(o.mainName)),
                    (Ce = le()(o.mainDescription)));
              }, []),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name bold_name" },
                  "Основные характеристики"
                ),
                (function () {
                  if (e.val && null != e.val)
                    return i().createElement(
                      "div",
                      null,
                      e.val[0].map(function (t, n) {
                        return i().createElement(
                          "div",
                          null,
                          i().createElement(
                            "p",
                            { className: "post_name" },
                            "Заголовок ",
                            n + 1
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "mainName",
                            form: "projectsForm",
                            value: e.val ? o.mainName[n] : void 0,
                            onChange: function (e) {
                              (je[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainName: je,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_input",
                          }),
                          i().createElement(
                            "p",
                            { className: "post_name special_descr" },
                            "Описание ",
                            n + 1
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "mainDescription",
                            form: "projectsForm",
                            value: e.val ? o.mainDescription[n] : void 0,
                            onChange: function (e) {
                              (Ce[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainDescription: Ce,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_input",
                          })
                        );
                      })
                    );
                })(),
                (function () {
                  if (e)
                    return i().createElement(
                      "div",
                      null,
                      Be.map(function (t) {
                        return i().createElement(
                          "div",
                          null,
                          i().createElement(
                            "p",
                            { className: "post_name" },
                            "Заголовок ",
                            t + (e.val && null != e.val ? e.val[0].length : 1)
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "mainName",
                            form: "projectsForm",
                            required: !0,
                            className: "main_characteristics_input",
                          }),
                          i().createElement(
                            "p",
                            { className: "post_name special_descr" },
                            "Описание ",
                            t + (e.val && null != e.val ? e.val[0].length : 1)
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "mainDescription",
                            form: "projectsForm",
                            required: !0,
                            className: "main_characteristics_input",
                          })
                        );
                      })
                    );
                })(),
                i().createElement(
                  "p",
                  {
                    className: "post_name add_block",
                    onClick: function () {
                      c(function (e) {
                        return e + 1;
                      }),
                        Be.push(a);
                    },
                  },
                  i().createElement("span", null, "+"),
                  " Добавить блок"
                )
              )
            );
          },
          Ue = [0],
          Ve = function (e) {
            var t = (0, r.useState)(1),
              n = v()(t, 2),
              a = n[0],
              c = n[1],
              s = (0, r.useState)({ mainName: [], mainDescription: [] }),
              l = v()(s, 2),
              o = l[0],
              m = l[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  4 == window.location.pathname.split("/").length &&
                  Ue.pop(),
                  e.val &&
                    null != e.val &&
                    (m({ mainName: e.val[0], mainDescription: e.val[1] }),
                    (Se = le()(o.mainName)),
                    (Fe = le()(o.mainDescription)));
              }, []),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name bold_name" },
                  "Подробное описание проекта"
                ),
                (function () {
                  if (e.val && null != e.val)
                    return i().createElement(
                      "div",
                      null,
                      e.val[0].map(function (t, n) {
                        return i().createElement(
                          "div",
                          null,
                          i().createElement(
                            "p",
                            { className: "post_name" },
                            "Заголовок ",
                            n + 1
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "descriptionTitle",
                            form: "projectsForm",
                            value: e.val ? o.mainName[n] : void 0,
                            onChange: function (e) {
                              (Se[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainName: Se,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_input",
                          }),
                          i().createElement(
                            "p",
                            { className: "post_name special_descr" },
                            "Описание ",
                            n + 1
                          ),
                          i().createElement("textarea", {
                            name: "descriptionTxt",
                            form: "projectsForm",
                            value: e.val ? o.mainDescription[n] : void 0,
                            onChange: function (e) {
                              (Fe[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainDescription: Fe,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_area",
                          })
                        );
                      })
                    );
                })(),
                i().createElement(
                  "div",
                  null,
                  Ue.map(function (e) {
                    return i().createElement(
                      "div",
                      null,
                      i().createElement(
                        "p",
                        { className: "post_name" },
                        "Заголовок ",
                        e + 1
                      ),
                      i().createElement("input", {
                        type: "text",
                        name: "descriptionTitle",
                        form: "projectsForm",
                        required: !0,
                        className: "main_characteristics_input",
                      }),
                      i().createElement(
                        "p",
                        { className: "post_name special_descr" },
                        "Описание ",
                        e + 1
                      ),
                      i().createElement("textarea", {
                        name: "descriptionTxt",
                        form: "projectsForm",
                        required: !0,
                        className: "main_characteristics_area",
                      })
                    );
                  })
                ),
                i().createElement(
                  "p",
                  {
                    className: "post_name add_block",
                    onClick: function () {
                      c(function (e) {
                        return e + 1;
                      }),
                        Ue.push(a);
                    },
                  },
                  i().createElement("span", null, "+"),
                  " Добавить блок"
                )
              )
            );
          },
          He = [0],
          Ye = function (e) {
            var t = (0, r.useState)(1),
              n = v()(t, 2),
              a = n[0],
              c = n[1],
              s = (0, r.useState)({ mainName: [], mainDescription: [] }),
              l = v()(s, 2),
              o = l[0],
              m = l[1];
            return (
              (0, r.useEffect)(function () {
                "undefined" != typeof window &&
                  4 == window.location.pathname.split("/").length &&
                  He.pop(),
                  e.val &&
                    null != e.val &&
                    (m({ mainName: e.val[0], mainDescription: e.val[1] }),
                    (Te = le()(o.mainName)),
                    (Ae = le()(o.mainDescription)));
              }, []),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name bold_name" },
                  "Технические характеристики"
                ),
                (function () {
                  if (e.val && null != e.val)
                    return i().createElement(
                      "div",
                      null,
                      e.val[0].map(function (t, n) {
                        return i().createElement(
                          "div",
                          null,
                          i().createElement(
                            "p",
                            { className: "post_name" },
                            "Заголовок ",
                            n + 1
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "technicalTitle",
                            form: "projectsForm",
                            value: e.val ? o.mainName[n] : void 0,
                            onChange: function (e) {
                              (Te[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainName: Te,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_input",
                          }),
                          i().createElement(
                            "p",
                            { className: "post_name special_descr" },
                            "Описание ",
                            n + 1
                          ),
                          i().createElement("input", {
                            type: "text",
                            name: "technicalDescription",
                            form: "projectsForm",
                            value: e.val ? o.mainDescription[n] : void 0,
                            onChange: function (e) {
                              (Ae[n] = e.target.value),
                                m(
                                  Object.assign(Object.assign({}, o), {
                                    mainDescription: Ae,
                                  })
                                );
                            },
                            required: !0,
                            className: "main_characteristics_input",
                          })
                        );
                      })
                    );
                })(),
                i().createElement(
                  "div",
                  null,
                  He.map(function (e) {
                    return i().createElement(
                      "div",
                      null,
                      i().createElement(
                        "p",
                        { className: "post_name" },
                        "Заголовок ",
                        e + 1
                      ),
                      i().createElement("input", {
                        type: "text",
                        className: "main_characteristics_input",
                        form: "projectsForm",
                        required: !0,
                        name: "technicalTitle",
                      }),
                      i().createElement(
                        "p",
                        { className: "post_name special_descr" },
                        "Описание ",
                        e + 1
                      ),
                      i().createElement("input", {
                        type: "text",
                        className: "main_characteristics_input",
                        form: "projectsForm",
                        required: !0,
                        name: "technicalDescription",
                      })
                    );
                  })
                ),
                i().createElement(
                  "p",
                  {
                    className: "post_name add_block",
                    onClick: function () {
                      c(function (e) {
                        return e + 1;
                      }),
                        He.push(a);
                    },
                  },
                  i().createElement("span", null, "+"),
                  " Добавить блок"
                )
              )
            );
          },
          We = function (e) {
            "undefined" != typeof window && (qe = window.__INITIAL_INFO__);
            var t = (0, r.useState)({
                title: "",
                category: "",
                secondString: "",
                tag: "",
              }),
              n = v()(t, 2),
              a = n[0],
              c = n[1];
            (0, r.useEffect)(function () {
              e.data &&
                c({
                  title: e.data.title,
                  category: e.data.category,
                  secondString: e.data.secondString,
                  tag: e.data.tag,
                });
            }, []);
            var s = function (e) {
              c(
                Object.assign(
                  Object.assign({}, a),
                  Re()({}, e.target.name, e.target.value)
                )
              );
            };
            return i().createElement(
              "div",
              {
                className: "wrap_post_project",
                style: {
                  display:
                    "undefined" != typeof window &&
                    "projects" == window.location.pathname.split("/")[2]
                      ? "grid"
                      : "none",
                },
              },
              i().createElement("form", {
                action: "/publication/".concat(Pe()),
                method: "POST",
                id: "projectsForm",
                encType: "multipart/form-data",
              }),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name" },
                  "Название проекта"
                ),
                i().createElement("input", {
                  type: "text",
                  name: "title",
                  form: "projectsForm",
                  value: e.data ? a.title : void 0,
                  required: !0,
                  onChange: s,
                  className: "news_post_input",
                })
              ),
              i().createElement(
                "div",
                null,
                i().createElement("p", { className: "post_name" }, "Категория"),
                i().createElement(
                  "select",
                  {
                    className: "news_post_input",
                    name: "category",
                    required: !0,
                    form: "projectsForm",
                    onChange: s,
                    id: "select_category",
                  },
                  De.map(function (t, n) {
                    return i().createElement(
                      "option",
                      {
                        key: n,
                        value: 0 == n ? "" : t.name,
                        disabled: 0 == n,
                        selected: !(!e.data || e.data.category != t.name),
                      },
                      t.name
                    );
                  })
                )
              ),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name" },
                  "Вторая строка превью"
                ),
                i().createElement("input", {
                  type: "text",
                  name: "secondString",
                  form: "projectsForm",
                  value: e.data ? a.secondString : void 0,
                  required: !0,
                  onChange: s,
                  className: "news_post_input",
                })
              ),
              i().createElement(
                "div",
                null,
                i().createElement(
                  "p",
                  { className: "post_name" },
                  "Дата публикации / Тэг"
                ),
                i().createElement("input", {
                  type: "text",
                  name: "tag",
                  form: "projectsForm",
                  required: !0,
                  value: e.data ? a.tag : void 0,
                  onChange: s,
                  className: "news_post_input",
                })
              ),
              i().createElement(
                "div",
                { className: "wrap_main_project_issues" },
                i().createElement(Me, { val: qe ? qe.mainArray : null }),
                i().createElement(Ye, { val: qe ? qe.technicalArray : null }),
                i().createElement(Ve, { val: qe ? qe.descriptionArray : null })
              )
            );
          },
          ze = function (e) {
            var t = (0, r.useState)({ name: "", title: "" }),
              n = v()(t, 2),
              a = n[0],
              c = n[1];
            (0, r.useEffect)(function () {
              e.data && c({ name: e.data.name, title: e.data.title });
            }, []);
            var s = function (e) {
              c(
                Object.assign(
                  Object.assign({}, a),
                  Re()({}, e.target.name, e.target.value)
                )
              );
            };
            return i().createElement(
              "div",
              {
                style: {
                  display:
                    "undefined" != typeof window &&
                    "team" == window.location.pathname.split("/")[2]
                      ? "block"
                      : "none",
                },
              },
              i().createElement("form", {
                action: "/publication/".concat(Pe()),
                method: "POST",
                id: "teamForm",
                encType: "multipart/form-data",
              }),
              i().createElement("p", { className: "post_name" }, "Имя"),
              i().createElement("input", {
                type: "text",
                name: "name",
                form: "teamForm",
                value: e.data ? a.name : void 0,
                onChange: s,
                required: !0,
                className: "post_input",
              }),
              i().createElement("p", { className: "post_name" }, "Должность"),
              i().createElement("input", {
                type: "text",
                name: "title",
                form: "teamForm",
                value: e.data ? a.title : void 0,
                onChange: s,
                required: !0,
                className: "post_input",
              })
            );
          },
          Je = function () {
            "undefined" != typeof window && (Oe = window.__INITIAL_INFO__);
            var e = (0, r.useState)([]),
              t = v()(e, 2),
              n = t[0],
              a = t[1];
            console.log(n);
            var c = function () {
                return "undefined" != typeof window
                  ? "vacancies" == window.location.pathname.split("/")[2]
                    ? "vacancyForm"
                    : "news" == window.location.pathname.split("/")[2]
                    ? "newsForm"
                    : "team" == window.location.pathname.split("/")[2]
                    ? "teamForm"
                    : "projectsForm"
                  : "projectsForm";
              },
              l = function () {
                return (
                  "undefined" != typeof window &&
                  4 == window.location.pathname.split("/").length
                );
              },
              o = function () {
                var e = "";
                return (
                  "undefined" != typeof window &&
                    4 == window.location.pathname.split("/").length &&
                    (e = window.location.pathname
                      .split("/")[2]
                      .concat("/")
                      .concat(window.location.pathname.split("/")[3])),
                  e
                );
              };
            return i().createElement(
              "div",
              { className: "wrap_main_form_admin" },
              i().createElement(
                "div",
                { className: "main_form_admin" },
                i().createElement(
                  "p",
                  { className: "txtPublic" },
                  "Публикация команды"
                ),
                i().createElement(
                  "p",
                  { className: "txtBelow" },
                  i().createElement("span", null, "+"),
                  " Добавить основное изображение"
                ),
                i().createElement("input", {
                  type: "file",
                  name: "noExchangeFile",
                  form: c(),
                  className: "mainFile",
                }),
                i().createElement(
                  "p",
                  {
                    className:
                      "teamForm" != c()
                        ? "wrap_avatar"
                        : "wrap_avatar team_avatar",
                  },
                  i().createElement("img", {
                    src:
                      void 0 !== Oe &&
                      null != Oe.noExchangeFile &&
                      Oe.noExchangeFile.length > 1
                        ? "../../../uploads/".concat(Oe.noExchangeFile)
                        : "../../../images/question-mark.png",
                  })
                ),
                i().createElement(
                  "div",
                  { className: "wrap_post_team" },
                  i().createElement(
                    "div",
                    { className: "wrap_btn_admin" },
                    i().createElement(
                      s.Route,
                      {
                        path: [
                          "/publication/news/:id",
                          "/publication/vacancies/:id",
                          "/publication/team/:id",
                          "/publication/projects/:id",
                        ],
                      },
                      i().createElement(
                        "a",
                        {
                          href: "/publication/"
                            .concat(o().split("/")[0], "/delete/")
                            .concat(o().split("/")[1]),
                          style: { display: l() ? "block" : "none" },
                        },
                        i().createElement(
                          "button",
                          { type: "submit", className: "delete_admin" },
                          "Удалить"
                        )
                      )
                    ),
                    i().createElement(
                      "button",
                      {
                        type: "submit",
                        style: { display: l() ? "none" : "block" },
                        onClick: function () {
                          history.back();
                        },
                        className: "btn_admin",
                      },
                      i().createElement("img", {
                        src: "../../../images/Vector.svg",
                        id: "close_admin",
                      }),
                      " Отменить публикацию"
                    ),
                    i().createElement(
                      "button",
                      { type: "submit", className: "btn_admin", form: c() },
                      "Опубликовать"
                    )
                  ),
                  i().createElement(
                    "div",
                    {
                      className: "wrap_additionalImages",
                      style: {
                        display: "projectsForm" == c() ? "grid" : "none",
                      },
                    },
                    i().createElement(
                      "p",
                      { className: "txtBelow addTxtBelow" },
                      i().createElement("span", null, "+"),
                      " Добавить дополнительное изображение"
                    ),
                    i().createElement("input", {
                      type: "file",
                      onChange: function (e) {
                        a(e.target.files);
                      },
                      multiple: !0,
                      name: "arrayFiles",
                      form: "projectsForm",
                      className: "mainFile2",
                    }),
                    i().createElement(
                      "div",
                      { className: "wrap_uploaded_images" },
                      Array.from(n).map(function (e) {
                        return i().createElement(
                          "p",
                          { className: "wrap_each_uploaded_images" },
                          i().createElement("img", {
                            src: e ? URL.createObjectURL(e) : "undefined",
                          })
                        );
                      }),
                      void 0 !== Oe &&
                        null != Oe.arrayOfFiles &&
                        Oe.arrayOfFiles.length > 0
                        ? i().createElement(
                            "div",
                            {
                              className: "wrap_uploaded_images existed_images",
                            },
                            Oe.arrayOfFiles.map(function (e) {
                              return i().createElement(
                                "p",
                                { className: "wrap_each_uploaded_images" },
                                i().createElement(
                                  "a",
                                  {
                                    href: "/publication/projects/delete/"
                                      .concat(o().split("/")[1], "/")
                                      .concat(e),
                                  },
                                  i().createElement("img", {
                                    src: "../../../uploads/".concat(e),
                                    className: "onShowDeleteImg",
                                    onMouseEnter: function (e) {
                                      e.target.src =
                                        "../../../images/Group 406.png";
                                    },
                                    onMouseOut: function (t) {
                                      t.target.src = "../../../uploads/".concat(
                                        e
                                      );
                                    },
                                  })
                                )
                              );
                            })
                          )
                        : i().createElement(
                            "div",
                            { className: "no_photos" },
                            "Нет актуальных фото"
                          )
                    )
                  ),
                  i().createElement(
                    s.Route,
                    { path: ["/publication/team", "/publication/team/:id"] },
                    i().createElement(ze, { data: Oe })
                  )
                ),
                i().createElement(
                  s.Route,
                  {
                    path: [
                      "/publication/news",
                      "/publication/news/:id",
                      "/publication/vacancies",
                      "/publication/vacancies/:id",
                    ],
                  },
                  i().createElement(Le, { data: Oe })
                ),
                i().createElement(
                  s.Route,
                  {
                    path: [
                      "/publication/projects",
                      "/publication/projects/:id",
                    ],
                  },
                  i().createElement(We, { data: Oe })
                )
              )
            );
          };
        const Ge = function () {
            return i().createElement(
              "p",
              { className: "wrap_main_page" },
              i().createElement(Ee, null),
              i().createElement(Je, null)
            );
          },
          Ke = [
            {
              path: "/",
              exact: !0,
              component: function () {
                return i().createElement(
                  "div",
                  { className: "wrap_main_page" },
                  i().createElement(N, null),
                  i().createElement(O, null),
                  i().createElement(C, null),
                  i().createElement(j, null),
                  i().createElement(I, null),
                  i().createElement(k, null),
                  i().createElement(y, null)
                );
              },
            },
            { path: "/contacts", exact: !0, component: L },
            { path: "/about", exact: !0, component: Y },
            { path: "/projects", exact: !0, component: ee },
            { path: "/news", exact: !0, component: ce },
            {
              path: [
                "/pannel",
                "/pannel/projects",
                "/pannel/news",
                "/pannel/vacancies",
                "/pannel/team",
              ],
              exact: !0,
              component: be,
            },
            {
              path: [
                "/publication",
                "/publication/projects",
                "/publication/projects/:id",
                "/publication/news",
                "/publication/news/:id",
                "/publication/vacancies",
                "/publication/vacancies/:id",
                "/publication/team",
                "/publication/team/:id",
              ],
              exact: !0,
              component: Ge,
            },
            { path: "/login", exact: !0, component: ke },
            { path: "/about/:id", exact: !0, component: K },
            { path: "/news/:id", exact: !0, component: Z },
            { path: "/projects/:id", exact: !0, component: _e },
          ];
        var Xe = (function (e) {
          d()(c, e);
          var t,
            n,
            a =
              ((t = c),
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  a = g()(t);
                if (n) {
                  var c = g()(this).constructor;
                  e = Reflect.construct(a, arguments, c);
                } else e = a.apply(this, arguments);
                return _()(this, e);
              });
          function c() {
            return o()(this, c), a.apply(this, arguments);
          }
          return (
            u()(c, [
              {
                key: "render",
                value: function () {
                  return i().createElement(
                    "div",
                    { className: "main_wrap" },
                    i().createElement(
                      s.Switch,
                      null,
                      Ke.map(function (e, t) {
                        return i().createElement(s.Route, {
                          key: t,
                          path: e.path,
                          exact: e.exact,
                          component: e.component,
                        });
                      })
                    )
                  );
                },
              },
            ]),
            c
          );
        })(r.Component);
        const Ze = require("express");
        var Qe = n.n(Ze);
        const $e = require("react-dom/server"),
          et = require("cookie-parser");
        var tt = n.n(et);
        const nt = require("body-parser");
        var at = n.n(nt);
        const ct = require("serialize-javascript");
        var rt = n.n(ct);
        const it = require("express-validator");
        var st = n.n(it);
        const lt = require("express-session");
        var ot = n.n(lt);
        const mt = require("mongoose");
        var ut = n.n(mt);
        const pt = require("passport");
        var dt = n.n(pt);
        const ft = require("connect-flash");
        var _t = n.n(ft);
        const Et = require("nodemailer");
        var gt = n.n(Et),
          ht = Qe().Router();
        ht.get("/", function (e, t) {
          var n = (0, $e.renderToString)(
            i().createElement(s.StaticRouter, null, i().createElement(L, null))
          );
          t.send(
            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Контакты</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                    <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                    <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_STATE__ = '
              .concat(
                rt()(!0),
                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
              )
              .concat(
                n,
                "\n              </div>\n            </body>\n        </html>"
              )
          );
        });
        const vt = ht;
        var wt = new mt.Schema({
            name: { type: String, required: !0 },
            title: { type: String, required: !0 },
            noExchangeFile: { type: String },
          }),
          Nt = (0, mt.model)("Team", wt),
          yt = new mt.Schema({
            title: { type: String, required: !0 },
            tag: { type: String, required: !0 },
            description: { type: String, required: !0 },
            noExchangeFile: { type: String },
          }),
          bt = (0, mt.model)("Vacancy", yt),
          xt = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function i(e) {
                try {
                  l(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, s);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          kt = Qe().Router();
        kt.get("/", function (e, t) {
          return xt(
            void 0,
            void 0,
            void 0,
            c().mark(function e() {
              var n, a, r;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Nt.find();
                    case 2:
                      return (n = e.sent), (e.next = 5), bt.find();
                    case 5:
                      (a = e.sent),
                        (r = (0, $e.renderToString)(
                          i().createElement(
                            s.StaticRouter,
                            null,
                            i().createElement(Y, null)
                          )
                        )),
                        t.send(
                          '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>О нас</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_TEAM__ = '
                            .concat(
                              rt()(n),
                              "</script>\n                       <script>window.__INITIAL_VACANCIES__ = "
                            )
                            .concat(
                              rt()(a),
                              '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                            )
                            .concat(
                              r,
                              "\n              </div>\n            </body>\n        </html>"
                            )
                        );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }),
          kt.get("/:id", function (e, t) {
            return xt(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r;
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), bt.findById(e.params.id);
                      case 2:
                        (a = n.sent),
                          (r = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(K, null)
                            )
                          )),
                          t.send(
                            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_VACANCY__ = '
                              .concat(
                                rt()(a),
                                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                              )
                              .concat(
                                r,
                                "\n              </div>\n            </body>\n        </html>"
                              )
                          );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          });
        const It = kt;
        var jt = new mt.Schema({
            title: { type: String, required: !0 },
            category: { type: String, required: !0 },
            secondString: { type: String, required: !0 },
            tag: { type: String, required: !0 },
            mainArray: { type: Array },
            technicalArray: { type: Array },
            descriptionArray: { type: Array },
            noExchangeFile: { type: String },
            arrayOfFiles: { type: Array },
          }),
          Ct = (0, mt.model)("Project", jt),
          St = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function i(e) {
                try {
                  l(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, s);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          Ft = Qe().Router();
        Ft.get("/", function (e, t) {
          return St(
            void 0,
            void 0,
            void 0,
            c().mark(function e() {
              var n, a;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Ct.find();
                    case 2:
                      (n = e.sent),
                        (a = (0, $e.renderToString)(
                          i().createElement(
                            s.StaticRouter,
                            null,
                            i().createElement(ee, null)
                          )
                        )),
                        t.send(
                          '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проекты</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_PROJECTS__ = '
                            .concat(
                              rt()(n),
                              '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                            )
                            .concat(
                              a,
                              "\n              </div>\n            </body>\n        </html>"
                            )
                        );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }),
          Ft.get("/:id", function (e, t) {
            return St(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r;
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), Ct.findById(e.params.id);
                      case 2:
                        (a = n.sent),
                          (r = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(_e, null)
                            )
                          )),
                          t.send(
                            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проекты</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_PROJECT__ = '
                              .concat(
                                rt()(a),
                                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                              )
                              .concat(
                                r,
                                "\n              </div>\n            </body>\n        </html>"
                              )
                          );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          });
        const Tt = Ft;
        var At = new mt.Schema({
            title: { type: String, required: !0 },
            tag: { type: String, required: !0 },
            description: { type: String, required: !0 },
            noExchangeFile: { type: String },
          }),
          qt = (0, mt.model)("News", At),
          Ot = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function i(e) {
                try {
                  l(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, s);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          Rt = Qe().Router();
        Rt.get("/", function (e, t) {
          return Ot(
            void 0,
            void 0,
            void 0,
            c().mark(function e() {
              var n, a;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), qt.find();
                    case 2:
                      (n = e.sent),
                        (a = (0, $e.renderToString)(
                          i().createElement(
                            s.StaticRouter,
                            null,
                            i().createElement(ce, null)
                          )
                        )),
                        t.send(
                          '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Новости</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_NEWS__ = '
                            .concat(
                              rt()(n),
                              '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                            )
                            .concat(
                              a,
                              "\n              </div>\n            </body>\n        </html>"
                            )
                        );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }),
          Rt.get("/:id", function (e, t) {
            return Ot(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r;
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), qt.findById(e.params.id);
                      case 2:
                        (a = n.sent),
                          (r = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(Z, null)
                            )
                          )),
                          t.send(
                            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_ONE_NEWS__ = '
                              .concat(
                                rt()(a),
                                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                              )
                              .concat(
                                r,
                                "\n              </div>\n            </body>\n        </html>"
                              )
                          );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          });
        const Pt = Rt;
        var Lt = Qe().Router();
        Lt.get(
          ["/", "/projects", "/news", "/vacancies", "/team"],
          function (e, t, n) {
            if (e.isAuthenticated()) return n();
            t.redirect("/login");
          },
          function (e, t) {
            return (
              (n = void 0),
              (a = void 0),
              (r = void 0),
              (l = c().mark(function e() {
                var n, a, r, l, o;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ct.find();
                      case 2:
                        return (n = e.sent), (e.next = 5), qt.find();
                      case 5:
                        return (a = e.sent), (e.next = 8), bt.find();
                      case 8:
                        return (r = e.sent), (e.next = 11), Nt.find();
                      case 11:
                        (l = e.sent),
                          (o = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(be, null)
                            )
                          )),
                          t.send(
                            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Панель</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_PROJECTS__ = '
                              .concat(
                                rt()(n),
                                "</script>\n                       <script>window.__INITIAL_NEWS__ = "
                              )
                              .concat(
                                rt()(a),
                                "</script>\n                       <script>window.__INITIAL_VACANCIES__ = "
                              )
                              .concat(
                                rt()(r),
                                "</script>\n                       <script>window.__INITIAL_TEAM__ = "
                              )
                              .concat(
                                rt()(l),
                                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                              )
                              .concat(
                                o,
                                "\n              </div>\n            </body>\n        </html>"
                              )
                          );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              new (r || (r = Promise))(function (e, t) {
                function c(e) {
                  try {
                    s(l.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function i(e) {
                  try {
                    s(l.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function s(t) {
                  var n;
                  t.done
                    ? e(t.value)
                    : ((n = t.value),
                      n instanceof r
                        ? n
                        : new r(function (e) {
                            e(n);
                          })).then(c, i);
                }
                s((l = l.apply(n, a || [])).next());
              })
            );
            var n, a, r, l;
          }
        );
        const Dt = Lt,
          Bt = require("multer");
        var Mt = n.n(Bt);
        const Ut = require("path");
        var Vt = n.n(Ut),
          Ht = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function i(e) {
                try {
                  l(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, s);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          Yt = Qe().Router(),
          Wt = Mt().diskStorage({
            destination: "./public/uploads/",
            filename: function (e, t, n) {
              n(
                null,
                t.fieldname + "-" + Date.now() + Vt().extname(t.originalname)
              );
            },
          }),
          zt = Mt()({
            fileFilter: function (e, t, n) {
              "image/png" === t.mimetype ||
              "image/jpg" === t.mimetype ||
              "image/jpeg" === t.mimetype ||
              "image/svg" === t.mimetipe
                ? n(null, !0)
                : n(null, !1);
            },
            limits: { fileSize: 5e6 },
            storage: Wt,
          });
        function Jt(e, t, n) {
          if (e.isAuthenticated()) return n();
          t.redirect("/login");
        }
        Yt.get(
          ["/", "/projects", "/news", "/vacancies", "/team"],
          Jt,
          function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function e() {
                var n, a, r, l, o;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ct.find();
                      case 2:
                        return (n = e.sent), (e.next = 5), qt.find();
                      case 5:
                        return (a = e.sent), (e.next = 8), bt.find();
                      case 8:
                        return (r = e.sent), (e.next = 11), Nt.find();
                      case 11:
                        (l = e.sent),
                          (o = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(Ge, null)
                            )
                          )),
                          t.send(
                            '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Публикация</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_PROJECTS__ = '
                              .concat(
                                rt()(n),
                                "</script>\n                       <script>window.__INITIAL_NEWS__ = "
                              )
                              .concat(
                                rt()(a),
                                "</script>\n                       <script>window.__INITIAL_VACANCIES__ = "
                              )
                              .concat(
                                rt()(r),
                                "</script>\n                       <script>window.__INITIAL_TEAM__ = "
                              )
                              .concat(
                                rt()(l),
                                '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                              )
                              .concat(
                                o,
                                "\n              </div>\n            </body>\n        </html>"
                              )
                          );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          }
        ),
          Yt.get(
            ["/projects/:id", "/news/:id", "/team/:id", "/vacancies/:id"],
            Jt,
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, l, o, m, u, p;
                  return c().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.originalUrl.split("/")[2]),
                            (n.next = 3),
                            Ct.find()
                          );
                        case 3:
                          return (l = n.sent), (n.next = 6), qt.find();
                        case 6:
                          return (o = n.sent), (n.next = 9), bt.find();
                        case 9:
                          return (m = n.sent), (n.next = 12), Nt.find();
                        case 12:
                          if (((u = n.sent), "projects" != a)) {
                            n.next = 19;
                            break;
                          }
                          return (n.next = 16), Ct.findById(e.params.id);
                        case 16:
                          (r = n.sent), (n.next = 34);
                          break;
                        case 19:
                          if ("vacancies" != a) {
                            n.next = 25;
                            break;
                          }
                          return (n.next = 22), bt.findById(e.params.id);
                        case 22:
                          (r = n.sent), (n.next = 34);
                          break;
                        case 25:
                          if ("news" != a) {
                            n.next = 31;
                            break;
                          }
                          return (n.next = 28), qt.findById(e.params.id);
                        case 28:
                          (r = n.sent), (n.next = 34);
                          break;
                        case 31:
                          return (n.next = 33), Nt.findById(e.params.id);
                        case 33:
                          r = n.sent;
                        case 34:
                          (p = (0, $e.renderToString)(
                            i().createElement(
                              s.StaticRouter,
                              null,
                              i().createElement(Ge, null)
                            )
                          )),
                            t.send(
                              '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Публикация</title>\n                   <link rel="stylesheet" type="text/css" href="../../main.css">\n                     <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'../../bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_INFO__ = '
                                .concat(
                                  rt()(r),
                                  "</script>\n                       <script>window.__INITIAL_PROJECTS__ = "
                                )
                                .concat(
                                  rt()(l),
                                  "</script>\n                       <script>window.__INITIAL_NEWS__ = "
                                )
                                .concat(
                                  rt()(o),
                                  "</script>\n                       <script>window.__INITIAL_VACANCIES__ = "
                                )
                                .concat(
                                  rt()(m),
                                  "</script>\n                       <script>window.__INITIAL_TEAM__ = "
                                )
                                .concat(
                                  rt()(u),
                                  '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                                )
                                .concat(
                                  p,
                                  "\n              </div>\n            </body>\n        </html>"
                                )
                            );
                        case 36:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
            }
          ),
          Yt.post("/team", Jt, zt.single("noExchangeFile"), function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r, i, s, l, o;
                return c().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.body),
                            (i = r.name),
                            (s = r.title),
                            (l = null != e.file ? e.file.filename : null),
                            console.log(
                              null === (a = e.file) || void 0 === a
                                ? void 0
                                : a.filename,
                              "  is file"
                            ),
                            (n.prev = 3),
                            (o = new Nt({
                              name: i,
                              title: s,
                              noExchangeFile: l,
                            })),
                            (n.next = 7),
                            o.save()
                          );
                        case 7:
                          (o = n.sent),
                            t.redirect("/pannel/team"),
                            (n.next = 16);
                          break;
                        case 11:
                          if (((n.prev = 11), (n.t0 = n.catch(3)), !n.t0)) {
                            n.next = 15;
                            break;
                          }
                          throw n.t0;
                        case 15:
                          console.log(n.t0);
                        case 16:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 11]]
                );
              })
            );
          }),
          Yt.post(
            "/team/:id",
            Jt,
            zt.single("noExchangeFile"),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.body),
                              (i = r.name),
                              (s = r.title),
                              (l = null != e.file ? e.file.filename : null),
                              console.log(
                                null === (a = e.file) || void 0 === a
                                  ? void 0
                                  : a.filename,
                                "  is file"
                              ),
                              (n.prev = 3),
                              (n.next = 6),
                              Nt.findById(e.params.id)
                            );
                          case 6:
                            return (
                              ((o = n.sent).name = i),
                              (o.title = s),
                              (o.noExchangeFile =
                                void 0 !== l && null != l
                                  ? l
                                  : o.noExchangeFile),
                              (n.next = 12),
                              o.save()
                            );
                          case 12:
                            (o = n.sent),
                              t.redirect("/pannel/team"),
                              (n.next = 21);
                            break;
                          case 16:
                            if (((n.prev = 16), (n.t0 = n.catch(3)), !n.t0)) {
                              n.next = 20;
                              break;
                            }
                            throw n.t0;
                          case 20:
                            console.log(n.t0);
                          case 21:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[3, 16]]
                  );
                })
              );
            }
          ),
          Yt.post("/news", Jt, zt.single("noExchangeFile"), function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r, i, s, l, o, m;
                return c().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.body),
                            (i = r.title),
                            (s = r.tag),
                            (l = r.description),
                            (o = null != e.file ? e.file.filename : null),
                            console.log(
                              null === (a = e.file) || void 0 === a
                                ? void 0
                                : a.filename,
                              "  is file"
                            ),
                            (n.prev = 3),
                            (m = new qt({
                              title: i,
                              description: l,
                              tag: s,
                              noExchangeFile: o,
                            })),
                            (n.next = 7),
                            m.save()
                          );
                        case 7:
                          (m = n.sent),
                            console.log(m, " obj"),
                            t.redirect("/pannel/news"),
                            (n.next = 17);
                          break;
                        case 12:
                          if (((n.prev = 12), (n.t0 = n.catch(3)), !n.t0)) {
                            n.next = 16;
                            break;
                          }
                          throw n.t0;
                        case 16:
                          console.log(n.t0);
                        case 17:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 12]]
                );
              })
            );
          }),
          Yt.post(
            "/news/:id",
            Jt,
            zt.single("noExchangeFile"),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o, m;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.body),
                              (i = r.title),
                              (s = r.tag),
                              (l = r.description),
                              (o = null != e.file ? e.file.filename : null),
                              console.log(
                                null === (a = e.file) || void 0 === a
                                  ? void 0
                                  : a.filename,
                                "  is file"
                              ),
                              (n.prev = 3),
                              (n.next = 6),
                              qt.findById(e.params.id)
                            );
                          case 6:
                            return (
                              ((m = n.sent).title = i),
                              (m.description = l),
                              (m.tag = s),
                              (m.noExchangeFile =
                                void 0 !== o && null != o
                                  ? o
                                  : m.noExchangeFile),
                              (n.next = 13),
                              m.save()
                            );
                          case 13:
                            (m = n.sent),
                              t.redirect("/pannel/news"),
                              (n.next = 22);
                            break;
                          case 17:
                            if (((n.prev = 17), (n.t0 = n.catch(3)), !n.t0)) {
                              n.next = 21;
                              break;
                            }
                            throw n.t0;
                          case 21:
                            console.log(n.t0);
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[3, 17]]
                  );
                })
              );
            }
          ),
          Yt.post(
            "/vacancies",
            Jt,
            zt.single("noExchangeFile"),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o, m;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.body),
                              (i = r.title),
                              (s = r.tag),
                              (l = r.description),
                              (o = null != e.file ? e.file.filename : null),
                              console.log(
                                null === (a = e.file) || void 0 === a
                                  ? void 0
                                  : a.filename,
                                "  is file"
                              ),
                              (n.prev = 3),
                              (m = new bt({
                                title: i,
                                description: l,
                                tag: s,
                                noExchangeFile: o,
                              })),
                              (n.next = 7),
                              m.save()
                            );
                          case 7:
                            (m = n.sent),
                              console.log(m, " obj"),
                              t.redirect("/pannel/vacancies"),
                              (n.next = 17);
                            break;
                          case 12:
                            if (((n.prev = 12), (n.t0 = n.catch(3)), !n.t0)) {
                              n.next = 16;
                              break;
                            }
                            throw n.t0;
                          case 16:
                            console.log(n.t0);
                          case 17:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[3, 12]]
                  );
                })
              );
            }
          ),
          Yt.post(
            "/vacancies/:id",
            Jt,
            zt.single("noExchangeFile"),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o, m;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.body),
                              (i = r.title),
                              (s = r.tag),
                              (l = r.description),
                              (o = null != e.file ? e.file.filename : null),
                              console.log(
                                null === (a = e.file) || void 0 === a
                                  ? void 0
                                  : a.filename,
                                "  is file"
                              ),
                              (n.prev = 3),
                              (n.next = 6),
                              bt.findById(e.params.id)
                            );
                          case 6:
                            return (
                              ((m = n.sent).title = i),
                              (m.description = l),
                              (m.tag = s),
                              (m.noExchangeFile =
                                void 0 !== o && null != o
                                  ? o
                                  : m.noExchangeFile),
                              (n.next = 13),
                              m.save()
                            );
                          case 13:
                            (m = n.sent),
                              t.redirect("/pannel/vacancies"),
                              (n.next = 22);
                            break;
                          case 17:
                            if (((n.prev = 17), (n.t0 = n.catch(3)), !n.t0)) {
                              n.next = 21;
                              break;
                            }
                            throw n.t0;
                          case 21:
                            console.log(n.t0);
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[3, 17]]
                  );
                })
              );
            }
          ),
          Yt.post(
            "/projects",
            Jt,
            zt.fields([{ name: "noExchangeFile" }, { name: "arrayFiles" }]),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o, m, u, p, d, f, _, E, g, h;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = []),
                              (r = ""),
                              (i = e.body),
                              (s = i.title),
                              (l = i.category),
                              (o = i.secondString),
                              (m = i.tag),
                              (u = i.mainName),
                              (p = i.mainDescription),
                              (d = i.technicalTitle),
                              (f = i.technicalDescription),
                              (_ = i.descriptionTitle),
                              (E = i.descriptionTxt),
                              void 0 !==
                                (g = null != e.files ? e.files : null)
                                  .noExchangeFile &&
                                (r = g.noExchangeFile[0].filename),
                              void 0 !== g.arrayFiles &&
                                g.arrayFiles.forEach(function (e) {
                                  a.push(e.filename), console.log(a, "arrrr");
                                }),
                              console.log(r, g.noExchangeFile, " string"),
                              (n.prev = 7),
                              console.log(e.body),
                              (h = new Ct({
                                title: s,
                                category: l,
                                secondString: o,
                                tag: m,
                                mainArray: [
                                  "string" == typeof u ? [u] : u,
                                  "string" == typeof p ? [p] : p,
                                ],
                                technicalArray: [
                                  "string" == typeof d ? [d] : d,
                                  "string" == typeof f ? [f] : f,
                                ],
                                descriptionArray: [
                                  "string" == typeof _ ? [_] : _,
                                  "string" == typeof E ? [E] : E,
                                ],
                                noExchangeFile: r,
                                arrayOfFiles: a,
                              })),
                              (n.next = 12),
                              h.save()
                            );
                          case 12:
                            (h = n.sent),
                              console.log(h, " obj"),
                              t.redirect("/pannel/projects"),
                              (n.next = 22);
                            break;
                          case 17:
                            if (((n.prev = 17), (n.t0 = n.catch(7)), !n.t0)) {
                              n.next = 21;
                              break;
                            }
                            throw n.t0;
                          case 21:
                            console.log(n.t0);
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[7, 17]]
                  );
                })
              );
            }
          ),
          Yt.post(
            "/projects/:id",
            Jt,
            zt.fields([{ name: "noExchangeFile" }, { name: "arrayFiles" }]),
            function (e, t) {
              return Ht(
                void 0,
                void 0,
                void 0,
                c().mark(function n() {
                  var a, r, i, s, l, o, m, u, p, d, f, _, E, g, h;
                  return c().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = []),
                              (r = ""),
                              (i = e.body),
                              (s = i.title),
                              (l = i.category),
                              (o = i.secondString),
                              (m = i.tag),
                              (u = i.mainName),
                              (p = i.mainDescription),
                              (d = i.technicalTitle),
                              (f = i.technicalDescription),
                              (_ = i.descriptionTitle),
                              (E = i.descriptionTxt),
                              void 0 !==
                                (g = null != e.files ? e.files : null)
                                  .noExchangeFile &&
                                (r = g.noExchangeFile[0].filename),
                              console.log(e.files, " req files"),
                              void 0 !== g.arrayFiles &&
                                g.arrayFiles.forEach(function (e) {
                                  a.push(e.filename), console.log(a, "arrrr");
                                }),
                              (n.prev = 7),
                              (n.next = 10),
                              Ct.findById(e.params.id)
                            );
                          case 10:
                            return (
                              ((h = n.sent).title = s),
                              (h.category = l),
                              (h.secondString = o),
                              (h.tag = m),
                              (h.mainArray =
                                "string" != typeof u ? [u, p] : [[u], [p]]),
                              (h.technicalArray =
                                "string" != typeof d ? [d, f] : [[d], [f]]),
                              (h.descriptionArray =
                                "string" != typeof _ ? [_, E] : [[_], [E]]),
                              (h.noExchangeFile =
                                void 0 !== r && null != r && r.length > 1
                                  ? r
                                  : h.noExchangeFile),
                              (h.arrayOfFiles =
                                void 0 !== h.arrayOfFiles &&
                                null != h.arrayOfFiles
                                  ? [].concat(le()(h.arrayOfFiles), a)
                                  : a),
                              (n.next = 22),
                              h.save()
                            );
                          case 22:
                            (h = n.sent),
                              console.log(e.body, " body"),
                              t.redirect(
                                "/publication/projects/".concat(e.params.id)
                              ),
                              (n.next = 32);
                            break;
                          case 27:
                            if (((n.prev = 27), (n.t0 = n.catch(7)), !n.t0)) {
                              n.next = 31;
                              break;
                            }
                            throw n.t0;
                          case 31:
                            console.log(n.t0);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[7, 27]]
                  );
                })
              );
            }
          ),
          Yt.get("/team/delete/:id", Jt, function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), Nt.deleteOne({ _id: e.params.id });
                      case 2:
                        t.redirect("/pannel/team");
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          }),
          Yt.get("/vacancies/delete/:id", Jt, function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), bt.deleteOne({ _id: e.params.id });
                      case 2:
                        t.redirect("/pannel/vacancies");
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          }),
          Yt.get("/projects/delete/:id", Jt, function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), Ct.deleteOne({ _id: e.params.id });
                      case 2:
                        t.redirect("/pannel/projects");
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          }),
          Yt.get("/projects/delete/:id/:pathParam1", Jt, function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                var a, r;
                return c().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Ct.findOne({ _id: e.params.id });
                        case 2:
                          if (
                            ((a = n.sent),
                            (r =
                              null == a
                                ? void 0
                                : a.arrayOfFiles.findIndex(function (t) {
                                    return t == e.params.pathParam1;
                                  })),
                            (n.prev = 4),
                            void 0 === a || null == a)
                          ) {
                            n.next = 10;
                            break;
                          }
                          return (
                            a.arrayOfFiles.splice(r, 1), (n.next = 9), a.save()
                          );
                        case 9:
                          a = n.sent;
                        case 10:
                          n.next = 17;
                          break;
                        case 12:
                          if (((n.prev = 12), (n.t0 = n.catch(4)), !n.t0)) {
                            n.next = 16;
                            break;
                          }
                          throw n.t0;
                        case 16:
                          console.log(n.t0);
                        case 17:
                          t.redirect("/pannel/projects");
                        case 18:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[4, 12]]
                );
              })
            );
          }),
          Yt.get("/news/delete/:id", Jt, function (e, t) {
            return Ht(
              void 0,
              void 0,
              void 0,
              c().mark(function n() {
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), qt.deleteOne({ _id: e.params.id });
                      case 2:
                        t.redirect("/pannel/news");
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          });
        const Gt = Yt,
          Kt = require("bcryptjs");
        var Xt = n.n(Kt),
          Zt = new mt.Schema({
            email: { type: String, required: !0 },
            password: { type: String, required: !0 },
          }),
          Qt = ut().model("User", Zt);
        function $t(e, t, n) {
          Xt().compare(e, t, function (e, t) {
            if (e) throw e;
            n(null, t);
          });
        }
        var en = n(55).Strategy,
          tn = Qe().Router();
        dt().serializeUser(function (e, t) {
          t(null, e.id);
        }),
          dt().deserializeUser(function (e, t) {
            Qt.findById(e, function (e, n) {
              t(e, n);
            });
          }),
          dt().use(
            "local.signin",
            new en(
              {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: !0,
              },
              function (e, t, n, a) {
                Qt.findOne({ email: t }, function (t, r) {
                  return (
                    (i = this),
                    (s = void 0),
                    (l = void 0),
                    (o = c().mark(function i() {
                      return c().wrap(function (c) {
                        for (;;)
                          switch ((c.prev = c.next)) {
                            case 0:
                              if (!t) {
                                c.next = 3;
                                break;
                              }
                              return console.log(t), c.abrupt("return", a(t));
                            case 3:
                              if (r) {
                                c.next = 7;
                                break;
                              }
                              return (
                                e.flash("errors", "User doesn't exist"),
                                console.log("errors", "User doesn't exist"),
                                c.abrupt("return", a(null, !1))
                              );
                            case 7:
                              $t(n, r.password, function (t, n) {
                                if (t) throw t;
                                return n
                                  ? a(null, r)
                                  : (e.flash("errors", "Wrong password"),
                                    console.log("Неверный пароль"),
                                    a(null, !1));
                              });
                            case 8:
                            case "end":
                              return c.stop();
                          }
                      }, i);
                    })),
                    new (l || (l = Promise))(function (e, t) {
                      function n(e) {
                        try {
                          c(o.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function a(e) {
                        try {
                          c(o.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function c(t) {
                        var c;
                        t.done
                          ? e(t.value)
                          : ((c = t.value),
                            c instanceof l
                              ? c
                              : new l(function (e) {
                                  e(c);
                                })).then(n, a);
                      }
                      c((o = o.apply(i, s || [])).next());
                    })
                  );
                  var i, s, l, o;
                });
              }
            )
          ),
          tn.post(
            "/signin",
            dt().authenticate("local.signin", {
              successRedirect: "/pannel/projects",
              failureRedirect: "/login",
              passReqToCallback: !0,
            })
          ),
          tn.get(
            "/",
            function (e, t, n) {
              if (!e.isAuthenticated()) return n();
              t.redirect("/pannel/projects");
            },
            function (e, t) {
              var n = e.flash("errors"),
                a = (0, $e.renderToString)(
                  i().createElement(
                    s.StaticRouter,
                    null,
                    i().createElement(ke, null)
                  )
                );
              t.send(
                '<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Вход</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                   <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundles/bundle.js\' defer></script>\n                       <script>window.__INITIAL_STATE__ = '
                  .concat(
                    rt()(!0),
                    "</script>\n                       <script>window.__INITIAL_ERRORS__ = "
                  )
                  .concat(
                    rt()(n),
                    '</script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '
                  )
                  .concat(
                    a,
                    "\n              </div>\n            </body>\n        </html>"
                  )
              );
            }
          ),
          tn.get("/logout", function (e, t, n) {
            e.logout(), t.redirect("/login");
          });
        const nn = tn,
          an = require("http");
        var cn = n.n(an);
        const rn = require("https");
        var sn = n.n(rn);
        const ln = require("fs");
        var on = n.n(ln),
          mn = Qe()(),
          un = process.env.MONGODB_URI;
        n(81);
        var pn = {
          key: on().readFileSync(
            Vt().resolve("src/server/ssl/openworkshops.key")
          ),
          cert: on().readFileSync(
            Vt().resolve("src/server/ssl/openworkshops.pem")
          ),
        };
        ut().connect(
          un || process.env.CONNECT,
          { useNewUrlParser: !0, useUnifiedTopology: !0, useCreateIndex: !0 },
          function () {
            console.log("Connection with database Users completed");
          }
        ),
          mn.use(function (e, t, n) {
            t.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"),
              t.setHeader("Pragma", "no-cache"),
              t.setHeader("Expires", "0"),
              t.setHeader("Access-Control-Allow-Origin", "*"),
              t.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
              ),
              n();
          }),
          mn.use(Qe().static("public")),
          mn.use(at().json()),
          mn.use(at().urlencoded({ extended: !1 })),
          mn.use(Qe().urlencoded({ extended: !1 })),
          mn.use(st()()),
          mn.use(tt()()),
          mn.use(
            ot()({ secret: "mysecret", resave: !1, saveUninitialized: !1 })
          ),
          mn.use(_t()()),
          mn.use(dt().initialize()),
          mn.use(dt().session()),
          mn.use("/pannel", Dt),
          mn.use("/publication", Gt),
          mn.use("/contacts", vt),
          mn.use("/about", It),
          mn.use("/projects", Tt),
          mn.use("/news", Pt),
          mn.use("/login", nn),
          mn.post("/email", function (e, t, n) {
            var a =
              "\n      <p> Данные о посетителе </p>\n      <ul>\n      <li> Имя: "
                .concat(e.body.name, " </li>\n      <li> Номер: ")
                .concat(e.body.number, " </li>\n      <li> Комментарий: ")
                .concat(e.body.comment, " </li>\n      </ul>\n      ");
            (function () {
              return (
                (e = this),
                (t = void 0),
                (n = void 0),
                (r = c().mark(function e() {
                  var t, n;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = gt().createTransport({
                              host: "smtp.yandex.ru",
                              port: 465,
                              secure: !0,
                              auth: {
                                user: "d.shishkin@acorn.ws",
                                pass: "ftwuthhofkwjzlms",
                              },
                              tls: { rejectUnauthorized: !1 },
                            })),
                            (e.next = 3),
                            t.sendMail({
                              from: "d.shishkin@acorn.ws",
                              to: "d.shishkin@acorn.ws",
                              subject: "New partner ✔",
                              text: "Hello world?",
                              html: a,
                            })
                          );
                        case 3:
                          (n = e.sent),
                            console.log("Message sent: %s", n.messageId),
                            console.log(
                              "Preview URL: %s",
                              gt().getTestMessageUrl(n)
                            );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                new (n || (n = Promise))(function (a, c) {
                  function i(e) {
                    try {
                      l(r.next(e));
                    } catch (e) {
                      c(e);
                    }
                  }
                  function s(e) {
                    try {
                      l(r.throw(e));
                    } catch (e) {
                      c(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? a(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(i, s);
                  }
                  l((r = r.apply(e, t || [])).next());
                })
              );
              var e, t, n, r;
            })().catch(console.error);
          }),
          mn.get("*", function (e, t, n) {
            var a =
              Ke.find(function (t) {
                return (0, s.matchPath)(e.url, t);
              }) || {};
            (a.fetchInitialData
              ? a.fetchInitialData(e.path)
              : Promise.resolve()
            )
              .then(function (n) {
                var a = { data: n },
                  c = (0, $e.renderToString)(
                    i().createElement(
                      s.StaticRouter,
                      { location: e.url, context: a },
                      i().createElement(Xe, { data: n })
                    )
                  ),
                  r =
                    '<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>Главная</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                  <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">\n                  <link type="Image/x-icon" href="/ico.ico" rel="icon">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'bundles/bundle.js\' defer></script>\n                        <script>window.__INITIAL_DATA__= '
                      .concat(
                        rt()({ name: "" }),
                        '</script>\n                            <title>COLLAB</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     '
                      )
                      .concat(
                        c,
                        "\n                  </div>\n                </body>\n            </html>"
                      );
                return t.send(r);
              })
              .catch(n);
          }),
          mn.use(function (e, t, n) {
            var a = new Error("Noooo");
            (a.status = 404), n(a);
          });
        var dn = cn().createServer(mn),
          fn = sn().createServer(pn, mn);
        dn.listen(8080, function () {
          console.log("connected on http!");
        }),
          fn.listen(443, function () {
            console.log("connected on https!");
          });
      },
      589: (e) => {
        e.exports = require("babel-regenerator-runtime");
      },
      81: (e) => {
        e.exports = require("dotenv/config");
      },
      55: (e) => {
        e.exports = require("passport-local");
      },
    },
    t = {};
  function n(a) {
    var c = t[a];
    if (void 0 !== c) return c.exports;
    var r = (t[a] = { exports: {} });
    return e[a](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    n(589),
    n(716);
})();
