"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_API_Partials_ApiTokenManager_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionMessage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Button.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ConfirmationModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DangerButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DialogModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/FormSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Input.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Checkbox.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/InputError.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Label.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SecondaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SectionBorder.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    JetActionMessage: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionMessage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetActionSection: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ActionSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Button.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetConfirmationModal: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/ConfirmationModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetDangerButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DangerButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetDialogModal: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/DialogModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetFormSection: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/FormSection.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetInput: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Input.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetCheckbox: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Checkbox.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetInputError: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/InputError.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetLabel: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/Label.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetSecondaryButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SecondaryButton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    JetSectionBorder: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Jetstream/SectionBorder.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: ['tokens', 'availablePermissions', 'defaultPermissions'],
  data: function data() {
    return {
      createApiTokenForm: this.$inertia.form({
        name: '',
        permissions: this.defaultPermissions
      }),
      updateApiTokenForm: this.$inertia.form({
        permissions: []
      }),
      deleteApiTokenForm: this.$inertia.form(),
      displayingToken: false,
      managingPermissionsFor: null,
      apiTokenBeingDeleted: null
    };
  },
  methods: {
    createApiToken: function createApiToken() {
      var _this = this;

      this.createApiTokenForm.post(route('api-tokens.store'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.displayingToken = true;

          _this.createApiTokenForm.reset();
        }
      });
    },
    manageApiTokenPermissions: function manageApiTokenPermissions(token) {
      this.updateApiTokenForm.permissions = token.abilities;
      this.managingPermissionsFor = token;
    },
    updateApiToken: function updateApiToken() {
      var _this2 = this;

      this.updateApiTokenForm.put(route('api-tokens.update', this.managingPermissionsFor), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          return _this2.managingPermissionsFor = null;
        }
      });
    },
    confirmApiTokenDeletion: function confirmApiTokenDeletion(token) {
      this.apiTokenBeingDeleted = token;
    },
    deleteApiToken: function deleteApiToken() {
      var _this3 = this;

      this.deleteApiTokenForm["delete"](route('api-tokens.destroy', this.apiTokenBeingDeleted), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          return _this3.apiTokenBeingDeleted = null;
        }
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create API Token ");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" API tokens allow third-party services to authenticate with our application on your behalf. ");

var _hoisted_3 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_4 = {
  key: 0,
  "class": "col-span-6"
};
var _hoisted_5 = {
  "class": "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"
};
var _hoisted_6 = {
  "class": "flex items-center"
};
var _hoisted_7 = {
  "class": "ml-2 text-sm text-gray-600"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Created. ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create ");

var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  "class": "mt-10 sm:mt-0"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Manage API Tokens ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You may delete any of your existing tokens if they are no longer needed. ");

var _hoisted_14 = {
  "class": "space-y-6"
};
var _hoisted_15 = {
  "class": "flex items-center"
};
var _hoisted_16 = {
  key: 0,
  "class": "text-sm text-gray-400"
};
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" API Token ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, " Please copy your new API token. For your security, it won't be shown again. ", -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 0,
  "class": "mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close ");

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" API Token Permissions ");

var _hoisted_24 = {
  "class": "grid grid-cols-1 md:grid-cols-2 gap-4"
};
var _hoisted_25 = {
  "class": "flex items-center"
};
var _hoisted_26 = {
  "class": "ml-2 text-sm text-gray-600"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete API Token ");

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you would like to delete this API token? ");

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel ");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-checkbox");

  var _component_jet_action_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-action-message");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_form_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-form-section");

  var _component_jet_section_border = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-section-border");

  var _component_jet_action_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-action-section");

  var _component_jet_secondary_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-secondary-button");

  var _component_jet_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dialog-modal");

  var _component_jet_danger_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-danger-button");

  var _component_jet_confirmation_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-confirmation-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Generate API Token "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_form_section, {
    onSubmitted: _ctx.createApiToken
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    form: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Token Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "name",
        value: "Name"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        id: "name",
        type: "text",
        "class": "mt-1 block w-full",
        modelValue: _ctx.createApiTokenForm.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.createApiTokenForm.name = $event;
        }),
        autofocus: ""
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: _ctx.createApiTokenForm.errors.name,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Token Permissions "), _ctx.availablePermissions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "permissions",
        value: "Permissions"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.availablePermissions, function (permission) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: permission
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_checkbox, {
          value: permission,
          checked: _ctx.createApiTokenForm.permissions,
          "onUpdate:checked": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.createApiTokenForm.permissions = $event;
          })
        }, null, 8
        /* PROPS */
        , ["value", "checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission), 1
        /* TEXT */
        )])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_action_message, {
        on: _ctx.createApiTokenForm.recentlySuccessful,
        "class": "mr-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["on"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'opacity-25': _ctx.createApiTokenForm.processing
        }),
        disabled: _ctx.createApiTokenForm.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class", "disabled"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmitted"]), _ctx.tokens.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_section_border), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Manage API Tokens "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_action_section, null, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.tokens, function (token) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "flex items-center justify-between",
          key: token.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(token.name), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [token.last_used_ago ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, " Last used " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(token.last_used_ago), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.availablePermissions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "cursor-pointer ml-6 text-sm text-gray-400 underline",
          onClick: function onClick($event) {
            return _ctx.manageApiTokenPermissions(token);
          }
        }, " Permissions ", 8
        /* PROPS */
        , _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "cursor-pointer ml-6 text-sm text-red-500",
          onClick: function onClick($event) {
            return _ctx.confirmApiTokenDeletion(token);
          }
        }, " Delete ", 8
        /* PROPS */
        , _hoisted_18)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])];
    }),
    _: 1
    /* STABLE */

  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Token Value Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
    show: _ctx.displayingToken,
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.displayingToken = false;
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_20, _ctx.$page.props.jetstream.flash.token ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.jetstream.flash.token), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_secondary_button, {
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.displayingToken = false;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_22];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" API Token Permissions Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
    show: _ctx.managingPermissionsFor,
    onClose: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.managingPermissionsFor = null;
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.availablePermissions, function (permission) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: permission
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_checkbox, {
          value: permission,
          checked: _ctx.updateApiTokenForm.permissions,
          "onUpdate:checked": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.updateApiTokenForm.permissions = $event;
          })
        }, null, 8
        /* PROPS */
        , ["value", "checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission), 1
        /* TEXT */
        )])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_secondary_button, {
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return _ctx.managingPermissionsFor = null;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_27];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-2", {
          'opacity-25': _ctx.updateApiTokenForm.processing
        }]),
        onClick: _ctx.updateApiToken,
        disabled: _ctx.updateApiTokenForm.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_28];
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
  , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete Token Confirmation Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_confirmation_modal, {
    show: _ctx.apiTokenBeingDeleted,
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.apiTokenBeingDeleted = null;
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_30];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_secondary_button, {
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return _ctx.apiTokenBeingDeleted = null;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_31];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_danger_button, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-2", {
          'opacity-25': _ctx.deleteApiTokenForm.processing
        }]),
        onClick: _ctx.deleteApiToken,
        disabled: _ctx.deleteApiTokenForm.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_32];
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
  , ["show"])]);
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

/***/ "./resources/js/Pages/API/Partials/ApiTokenManager.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/API/Partials/ApiTokenManager.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiTokenManager_vue_vue_type_template_id_46d3052f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTokenManager.vue?vue&type=template&id=46d3052f */ "./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f");
/* harmony import */ var _ApiTokenManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiTokenManager.vue?vue&type=script&lang=js */ "./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ApiTokenManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ApiTokenManager_vue_vue_type_template_id_46d3052f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/API/Partials/ApiTokenManager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApiTokenManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApiTokenManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ApiTokenManager.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApiTokenManager_vue_vue_type_template_id_46d3052f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApiTokenManager_vue_vue_type_template_id_46d3052f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ApiTokenManager.vue?vue&type=template&id=46d3052f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/API/Partials/ApiTokenManager.vue?vue&type=template&id=46d3052f");


/***/ })

}]);