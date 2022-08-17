import { defineComponent as d, inject as _, ref as m, openBlock as u, createElementBlock as g, createElementVNode as l, pushScopeId as f, popScopeId as v } from "vue";
const U = (e) => (f("data-v-64b5eaa0"), e = e(), v(), e), h = { class: "image-uploader" }, I = /* @__PURE__ */ U(() => /* @__PURE__ */ l("h2", null, "File Uploader", -1)), S = { class: "your-file" }, y = ["src"], b = /* @__PURE__ */ d({
  __name: "special-upload",
  props: {
    customImg: null
  },
  setup(e) {
    const t = e, o = _("SpecialUploaderImage"), s = o != null ? o : t.customImg, a = m(s), n = (c) => {
      const r = c.target.files[0];
      p(r);
    }, p = (c) => {
      a.value = URL.createObjectURL(c);
    };
    return (c, i) => (u(), g("div", h, [
      I,
      l("input", {
        onChange: n,
        type: "file",
        id: "file-upload",
        name: "fileUpload",
        accept: "image/*"
      }, null, 32),
      l("div", S, [
        l("img", {
          src: a.value,
          alt: ""
        }, null, 8, y)
      ])
    ]));
  }
});
const x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of t)
    o[s] = a;
  return o;
}, k = /* @__PURE__ */ x(b, [["__scopeId", "data-v-64b5eaa0"]]), R = {
  install: (e, t = { img: "" }) => {
    e.component("SpecialUploader", k), e.provide("SpecialUploaderImage", t == null ? void 0 : t.img);
  }
};
export {
  k as SpecialUploader,
  R as default
};
