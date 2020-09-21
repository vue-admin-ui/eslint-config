module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:compat/recommended',
    'plugin:vue/recommended',
    'semistandard',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'no-prototype-builtins': 'off',
    'prefer-template': 2,
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'never',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['template', 'render'],
        'head',
        'renderError',
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
      ],
    }],
    'vue/no-unused-properties': ['error', {
      groups: [
        'props',
        'data',
        'computed',
        'methods',
      ],
    }],
    'vue/no-v-html': 'off',
    'vue/prefer-template': 2,
  },
};
