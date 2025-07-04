"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3976],{

/***/ 5404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 7116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Tutorial - Basics","permalink":"/docs/category/tutorial---basics"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(5404);
;// ./docs/intro.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Tutorial Intro';

const assets = {

};



const toc = [{
  "value": "Getting Started",
  "id": "getting-started",
  "level": 2
}, {
  "value": "What you&#39;ll need",
  "id": "what-youll-need",
  "level": 3
}, {
  "value": "Generate a new site",
  "id": "generate-a-new-site",
  "level": 2
}, {
  "value": "Start your site",
  "id": "start-your-site",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tutorial-intro",
        children: "Tutorial Intro"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's discover ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Docusaurus in less than 5 minutes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Get started by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "creating a new site"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "try Docusaurus immediately"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.new",
          children: "docusaurus.new"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-youll-need",
      children: "What you'll need"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://nodejs.org/en/download/",
          children: "Node.js"
        }), " version 18.0 or above:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When installing Node.js, you are recommended to check all checkboxes related to dependencies."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generate-a-new-site",
      children: "Generate a new site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generate a new Docusaurus site using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "classic template"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The classic template will automatically be added to your project after you run the command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm init docusaurus@latest my-website classic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The command also installs all necessary dependencies you need to run Docusaurus."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-your-site",
      children: "Start your site"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run the development server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd my-website\nnpm run start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cd"
      }), " command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run start"
      }), " command builds your website locally and serves it through a development server, ready for you to view at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/",
        children: "http://localhost:3000/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/intro.md"
      }), " (this page) and edit some lines: the site ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reloads automatically"
      }), " and displays your changes."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);