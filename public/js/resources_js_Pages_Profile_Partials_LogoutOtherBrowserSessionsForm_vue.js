"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Partials_LogoutOtherBrowserSessionsForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionMessage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Button.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DialogModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Input.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/InputError.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SecondaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: ['sessions'],
  components: {
    JetActionMessage: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionMessage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetActionSection: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Button.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetDialogModal: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DialogModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetInput: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Input.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetInputError: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/InputError.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetSecondaryButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SecondaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        password: ''
      })
    };
  },
  methods: {
    confirmLogout: function confirmLogout() {
      var _this = this;

      this.confirmingLogout = true;
      setTimeout(function () {
        return _this.$refs.password.focus();
      }, 250);
    },
    logoutOtherBrowserSessions: function logoutOtherBrowserSessions() {
      var _this2 = this;

      this.form["delete"](route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this2.closeModal();
        },
        onError: function onError() {
          return _this2.$refs.password.focus();
        },
        onFinish: function onFinish() {
          return _this2.form.reset();
        }
      });
    },
    closeModal: function closeModal() {
      this.confirmingLogout = false;
      this.form.reset();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Browser Sessions ");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Manage and log out your active sessions on other browsers and devices. ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "max-w-xl text-sm text-gray-600"
}, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 0,
  "class": "mt-5 space-y-6"
};
var _hoisted_5 = {
  key: 0,
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "class": "w-8 h-8 text-gray-500"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "w-8 h-8 text-gray-500"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 0h24v24H0z",
  stroke: "none"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "7",
  y: "4",
  width: "10",
  height: "16",
  rx: "1"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11 5h2M12 17v.01"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_9, _hoisted_10, _hoisted_11];
var _hoisted_13 = {
  "class": "ml-3"
};
var _hoisted_14 = {
  "class": "text-sm text-gray-600"
};
var _hoisted_15 = {
  "class": "text-xs text-gray-500"
};
var _hoisted_16 = {
  key: 0,
  "class": "text-green-500 font-semibold"
};
var _hoisted_17 = {
  key: 1
};
var _hoisted_18 = {
  "class": "flex items-center mt-5"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Log Out Other Browser Sessions ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Done. ");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Log Out Other Browser Sessions ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. ");

var _hoisted_23 = {
  "class": "mt-4"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel ");

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Log Out Other Browser Sessions ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_action_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-action-message");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_secondary_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-secondary-button");

  var _component_jet_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dialog-modal");

  var _component_jet_action_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-action-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jet_action_section, null, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Other Browser Sessions "), _ctx.sessions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sessions, function (session, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "flex items-center",
          key: i
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [session.agent.is_desktop ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_5, _hoisted_7)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_8, _hoisted_12))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(session.agent.platform) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(session.agent.browser), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(session.ip_address) + ", ", 1
        /* TEXT */
        ), session.is_current_device ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, "This device")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, "Last active " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(session.last_active), 1
        /* TEXT */
        ))])])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        onClick: _ctx.confirmLogout
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_19];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_action_message, {
        on: _ctx.form.recentlySuccessful,
        "class": "ml-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_20];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["on"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Log Out Other Devices Confirmation Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
        show: _ctx.confirmingLogout,
        onClose: _ctx.closeModal
      }, {
        title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_21];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
            type: "password",
            "class": "mt-1 block w-3/4",
            placeholder: "Password",
            ref: "password",
            modelValue: _ctx.form.password,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return _ctx.form.password = $event;
            }),
            onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(_ctx.logoutOtherBrowserSessions, ["enter"])
          }, null, 8
          /* PROPS */
          , ["modelValue", "onKeyup"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
            message: _ctx.form.errors.password,
            "class": "mt-2"
          }, null, 8
          /* PROPS */
          , ["message"])])];
        }),
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_secondary_button, {
            onClick: _ctx.closeModal
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_24];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-2", {
              'opacity-25': _ctx.form.processing
            }]),
            onClick: _ctx.logoutOtherBrowserSessions,
            disabled: _ctx.form.processing
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_25];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["onClick", "class", "disabled"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["show", "onClose"])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_4e5b9d61__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61 */ "./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61");
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_4e5b9d61__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_4e5b9d61__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_4e5b9d61__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=4e5b9d61");


/***/ })

}]);