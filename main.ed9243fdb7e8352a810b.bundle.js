(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(module,exports,__webpack_require__){__webpack_require__(227),__webpack_require__(331),module.exports=__webpack_require__(332)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return createPortalNode}),__webpack_require__.d(__webpack_exports__,"a",function(){return InPortal}),__webpack_require__.d(__webpack_exports__,"b",function(){return OutPortal});__webpack_require__(23),__webpack_require__(24),__webpack_require__(30),__webpack_require__(21),__webpack_require__(80),__webpack_require__(49),__webpack_require__(214),__webpack_require__(2),__webpack_require__(217),__webpack_require__(218),__webpack_require__(20),__webpack_require__(31),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),react_dom__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(135);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var createPortalNode=function(){var parent,lastPlaceholder,initialProps={},portalNode=Object.assign(document.createElement("div"),{setPortalProps:function setPortalProps(props){initialProps=props},getInitialPortalProps:function getInitialPortalProps(){return initialProps},mount:function mount(newParent,newPlaceholder){newPlaceholder===lastPlaceholder||(portalNode.unmount(),newParent.replaceChild(portalNode,newPlaceholder),parent=newParent,lastPlaceholder=newPlaceholder)},unmount:function unmount(expectedPlaceholder){expectedPlaceholder&&expectedPlaceholder!==lastPlaceholder||parent&&lastPlaceholder&&(parent.replaceChild(lastPlaceholder,portalNode),parent=void 0,lastPlaceholder=void 0)}});return portalNode},InPortal=function(_React$PureComponent){function InPortal(props){var _this;return _classCallCheck(this,InPortal),(_this=_possibleConstructorReturn(this,_getPrototypeOf(InPortal).call(this,props))).addPropsChannel=function(){Object.assign(_this.props.node,{setPortalProps:function setPortalProps(props){_this.setState({nodeProps:props})}})},_this.state={nodeProps:_this.props.node.getInitialPortalProps()},_this}return _inherits(InPortal,react__WEBPACK_IMPORTED_MODULE_13__["PureComponent"]),_createClass(InPortal,[{key:"componentDidMount",value:function componentDidMount(){this.addPropsChannel()}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.addPropsChannel()}},{key:"render",value:function render(){var _this2=this,_this$props=this.props,children=_this$props.children,node=_this$props.node;return react_dom__WEBPACK_IMPORTED_MODULE_14__.createPortal(react__WEBPACK_IMPORTED_MODULE_13__.Children.map(children,function(child){return react__WEBPACK_IMPORTED_MODULE_13__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_13__.cloneElement(child,_this2.state.nodeProps):child}),node)}}]),InPortal}();InPortal.displayName="InPortal";var OutPortal=function(_React$PureComponent2){function OutPortal(props){var _this3;return _classCallCheck(this,OutPortal),(_this3=_possibleConstructorReturn(this,_getPrototypeOf(OutPortal).call(this,props))).placeholderNode=react__WEBPACK_IMPORTED_MODULE_13__.createRef(),_this3.passPropsThroughPortal(),_this3}return _inherits(OutPortal,react__WEBPACK_IMPORTED_MODULE_13__["PureComponent"]),_createClass(OutPortal,[{key:"passPropsThroughPortal",value:function passPropsThroughPortal(){var propsForTarget=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(propsForTarget)}},{key:"componentDidMount",value:function componentDidMount(){var node=this.props.node,placeholder=this.placeholderNode.current,parent=placeholder.parentNode;node.mount(parent,placeholder),this.passPropsThroughPortal()}},{key:"componentDidUpdate",value:function componentDidUpdate(){var node=this.props.node,placeholder=this.placeholderNode.current,parent=placeholder.parentNode;node.mount(parent,placeholder),this.passPropsThroughPortal()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.node.unmount(this.placeholderNode.current)}},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_13__.createElement("div",{ref:this.placeholderNode})}}]),OutPortal}();OutPortal.displayName="OutPortal",InPortal.__docgenInfo={description:"",methods:[],displayName:"InPortal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/esm/index.js"]={name:"InPortal",docgenInfo:InPortal.__docgenInfo,path:"dist/esm/index.js"}),OutPortal.__docgenInfo={description:"",methods:[{name:"passPropsThroughPortal",docblock:null,modifiers:[],params:[],returns:null}],displayName:"OutPortal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/esm/index.js"]={name:"OutPortal",docgenInfo:OutPortal.__docgenInfo,path:"dist/esm/index.js"})},332:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(34),__webpack_require__(21),__webpack_require__(20),__webpack_require__(35),__webpack_require__(26);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(96),req=__webpack_require__(491);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(166)(module))},491:function(module,exports,__webpack_require__){var map={"./index.stories.js":492};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=491},492:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});__webpack_require__(23),__webpack_require__(24),__webpack_require__(30),__webpack_require__(41),__webpack_require__(21),__webpack_require__(81),__webpack_require__(20),__webpack_require__(83),__webpack_require__(31),__webpack_require__(26),__webpack_require__(133);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_storybook_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(96),___WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var withStorySource=__webpack_require__(493).withStorySource,__STORY__="import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport * as portals from '..';\n\nconst Container = props => (\n  <div style={{ border: '1px solid #222', padding: '10px' }}>{props.children}</div>\n);\n\nstoriesOf('Portals', module)\n  .add('render things in different places', () => {\n    const portalNode = portals.createPortalNode('span');\n\n    return (\n      <div>\n        <div>\n          Portal defined here:\n          <portals.InPortal node={portalNode}>Hi!</portals.InPortal>\n        </div>\n\n        <div>\n          Portal renders here:\n          <portals.OutPortal node={portalNode} />\n        </div>\n      </div>\n    );\n  })\n  .add('persist DOM whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <video src=\"https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4\" controls loop />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <div>\n            <p>Outer OutPortal:</p>\n            {useOuterDiv === true && <portals.OutPortal node={portalNode} />}\n            <Container>\n              <Container>\n                <Container>\n                  <p>Inner OutPortal:</p>\n                  {useOuterDiv === false && <portals.OutPortal node={portalNode} />}\n                </Container>\n              </Container>\n            </Container>\n          </div>\n        </div>\n      );\n    });\n  })\n  .add('persist component state whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    const Counter = () => {\n      const [count, setCount] = React.useState(0);\n\n      return (\n        <div>\n          Count is {count}\n          <button onClick={() => setCount(count + 1)}>+1</button>\n        </div>\n      );\n    };\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <Counter />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <p>Outer OutPortal:</p>\n          {useOuterDiv === true && <portals.OutPortal node={portalNode} />}\n          <Container>\n            <Container>\n              <Container>\n                <p>Inner OutPortal:</p>\n                {useOuterDiv === false && <portals.OutPortal node={portalNode} />}\n              </Container>\n            </Container>\n          </Container>\n        </div>\n      );\n    });\n  })\n  .add('can set props remotely whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    const Counter = props => {\n      const [count, setCount] = React.useState(0);\n\n      return (\n        <div style={{ 'background-color': props.bgColor }}>\n          Count is {count}\n          <button onClick={() => setCount(count + 1)}>+1</button>\n        </div>\n      );\n    };\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <Counter bgColor=\"#faa\" />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <p>Outer OutPortal:</p>\n          {useOuterDiv === true && <portals.OutPortal node={portalNode} bgColor=\"#aaf\" />}\n          <Container>\n            <Container>\n              <Container>\n                <p>Inner OutPortal:</p>\n                {useOuterDiv === false && <portals.OutPortal node={portalNode} bgColor=\"#afa\" />}\n              </Container>\n            </Container>\n          </Container>\n        </div>\n      );\n    });\n  })\n  .add('renders reliably, even with frequent changes and multiple portals', () => {\n    const portalNode = portals.createPortalNode('div');\n\n    const Target = p => p.value.toString();\n\n    const Parent = () => {\n      const [state, setState] = React.useState(false);\n\n      // Change frequently, to hunt for race conditions. On leaving this story, this might\n      // complain about calling setState after unmount - that's totally fine, we don't care.\n      // There should be no other errors though.\n      setTimeout(() => {\n        setState(!state);\n      }, 100);\n\n      return (\n        <div>\n          Portal flickers between 2 / 3 / nothing here:\n          {state ? (\n            // What happens if you render the same portal twice?\n            <>\n              <portals.OutPortal node={portalNode} value={1} />\n              <portals.OutPortal node={portalNode} value={2} />\n            </>\n          ) : // What happens if you switch from 2 portals to 1, to 2 to zero, at random?\n          Math.random() > 0.5 ? (\n            <portals.OutPortal node={portalNode} value={3} />\n          ) : null}\n        </div>\n      );\n    };\n\n    return (\n      <div>\n        <div>\n          Portal defined here:\n          <portals.InPortal node={portalNode}>\n            <Target value=\"unmounted\" />\n          </portals.InPortal>\n        </div>\n\n        <Parent />\n      </div>\n    );\n  })\n  .add('Example from README', () => {\n    const MyExpensiveComponent = () => 'expensive!';\n\n    const MyComponent = props => {\n      const portalNode = React.useMemo(() => portals.createPortalNode(), []);\n\n      return (\n        <div>\n          {/*\n                    Create the content that you want to move around.\n                    InPortals render as normal, but to detached DOM.\n                    Until this is used MyExpensiveComponent will not\n                    appear anywhere in the page.\n                */}\n          <portals.InPortal node={portalNode}>\n            <MyExpensiveComponent\n              // Optionally provide props to use before this enters the DOM\n              myProp={'defaultValue'}\n            />\n          </portals.InPortal>\n\n          {/* ... The rest of your UI ... */}\n\n          {/* Pass the node to whoever might want to show it: */}\n          {props.componentToShow === 'component-a' ? (\n            <ComponentA portalNode={portalNode} />\n          ) : (\n            <ComponentB portalNode={portalNode} />\n          )}\n        </div>\n      );\n    };\n\n    const ComponentA = props => {\n      return (\n        <div>\n          {/* ... Some more UI ... */}\n          A:\n          <portals.OutPortal\n            node={props.portalNode} // Show the content from this node here\n          />\n        </div>\n      );\n    };\n\n    const ComponentB = props => {\n      return (\n        <div>\n          {/* ... Some more UI ... */}\n          B:\n          <portals.OutPortal\n            node={props.portalNode} // Pull in the content from this node\n            myProp={'newValue'} // Optionally, override default values\n            myOtherProp={123} // Or add new props\n\n            // These props go back to the InPortal, and trigger a component\n            // update (but on the same component instance) as if they had\n            // been passed directly.\n          />\n        </div>\n      );\n    };\n\n    return <MyComponent componentToShow=\"component-a\" />;\n  });\n",__ADDS_MAP__={"portals--example-from-readme":{startLoc:{col:7,line:188},endLoc:{col:3,line:252}},"portals--renders-reliably-even-with-frequent-changes-and-multiple-portals":{startLoc:{col:7,line:143},endLoc:{col:3,line:187}},"portals--can-set-props-remotely-whilst-moving":{startLoc:{col:7,line:102},endLoc:{col:3,line:142}},"portals--persist-component-state-whilst-moving":{startLoc:{col:7,line:61},endLoc:{col:3,line:101}},"portals--persist-dom-whilst-moving":{startLoc:{col:7,line:29},endLoc:{col:3,line:60}},"portals--render-things-in-different-places":{startLoc:{col:7,line:12},endLoc:{col:3,line:28}}},Container=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{style:{border:"1px solid #222",padding:"10px"}},props.children)};Container.displayName="Container";var _ref2=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref3=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref5=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:"),_ref7=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("video",{src:"https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4",controls:!0,loop:!0}),_ref9=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref10=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref12=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:"),_ref15=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref16=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref18=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_12__.storiesOf)("Portals",module).addDecorator(withStorySource("import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport * as portals from '..';\n\nconst Container = props => (\n  <div style={{ border: '1px solid #222', padding: '10px' }}>{props.children}</div>\n);\n\nstoriesOf('Portals', module)\n  .add('render things in different places', () => {\n    const portalNode = portals.createPortalNode('span');\n\n    return (\n      <div>\n        <div>\n          Portal defined here:\n          <portals.InPortal node={portalNode}>Hi!</portals.InPortal>\n        </div>\n\n        <div>\n          Portal renders here:\n          <portals.OutPortal node={portalNode} />\n        </div>\n      </div>\n    );\n  })\n  .add('persist DOM whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <video src=\"https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4\" controls loop />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <div>\n            <p>Outer OutPortal:</p>\n            {useOuterDiv === true && <portals.OutPortal node={portalNode} />}\n            <Container>\n              <Container>\n                <Container>\n                  <p>Inner OutPortal:</p>\n                  {useOuterDiv === false && <portals.OutPortal node={portalNode} />}\n                </Container>\n              </Container>\n            </Container>\n          </div>\n        </div>\n      );\n    });\n  })\n  .add('persist component state whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    const Counter = () => {\n      const [count, setCount] = React.useState(0);\n\n      return (\n        <div>\n          Count is {count}\n          <button onClick={() => setCount(count + 1)}>+1</button>\n        </div>\n      );\n    };\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <Counter />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <p>Outer OutPortal:</p>\n          {useOuterDiv === true && <portals.OutPortal node={portalNode} />}\n          <Container>\n            <Container>\n              <Container>\n                <p>Inner OutPortal:</p>\n                {useOuterDiv === false && <portals.OutPortal node={portalNode} />}\n              </Container>\n            </Container>\n          </Container>\n        </div>\n      );\n    });\n  })\n  .add('can set props remotely whilst moving', () => {\n    const portalNode = portals.createPortalNode();\n\n    const Counter = props => {\n      const [count, setCount] = React.useState(0);\n\n      return (\n        <div style={{ 'background-color': props.bgColor }}>\n          Count is {count}\n          <button onClick={() => setCount(count + 1)}>+1</button>\n        </div>\n      );\n    };\n\n    return React.createElement(() => {\n      const [useOuterDiv, setDivToUse] = React.useState(false);\n\n      return (\n        <div>\n          <portals.InPortal node={portalNode}>\n            <Counter bgColor=\"#faa\" />\n          </portals.InPortal>\n\n          <button onClick={() => setDivToUse(!useOuterDiv)}>Click to move the OutPortal</button>\n\n          <hr />\n\n          <p>Outer OutPortal:</p>\n          {useOuterDiv === true && <portals.OutPortal node={portalNode} bgColor=\"#aaf\" />}\n          <Container>\n            <Container>\n              <Container>\n                <p>Inner OutPortal:</p>\n                {useOuterDiv === false && <portals.OutPortal node={portalNode} bgColor=\"#afa\" />}\n              </Container>\n            </Container>\n          </Container>\n        </div>\n      );\n    });\n  })\n  .add('renders reliably, even with frequent changes and multiple portals', () => {\n    const portalNode = portals.createPortalNode('div');\n\n    const Target = p => p.value.toString();\n\n    const Parent = () => {\n      const [state, setState] = React.useState(false);\n\n      // Change frequently, to hunt for race conditions. On leaving this story, this might\n      // complain about calling setState after unmount - that's totally fine, we don't care.\n      // There should be no other errors though.\n      setTimeout(() => {\n        setState(!state);\n      }, 100);\n\n      return (\n        <div>\n          Portal flickers between 2 / 3 / nothing here:\n          {state ? (\n            // What happens if you render the same portal twice?\n            <>\n              <portals.OutPortal node={portalNode} value={1} />\n              <portals.OutPortal node={portalNode} value={2} />\n            </>\n          ) : // What happens if you switch from 2 portals to 1, to 2 to zero, at random?\n          Math.random() > 0.5 ? (\n            <portals.OutPortal node={portalNode} value={3} />\n          ) : null}\n        </div>\n      );\n    };\n\n    return (\n      <div>\n        <div>\n          Portal defined here:\n          <portals.InPortal node={portalNode}>\n            <Target value=\"unmounted\" />\n          </portals.InPortal>\n        </div>\n\n        <Parent />\n      </div>\n    );\n  })\n  .add('Example from README', () => {\n    const MyExpensiveComponent = () => 'expensive!';\n\n    const MyComponent = props => {\n      const portalNode = React.useMemo(() => portals.createPortalNode(), []);\n\n      return (\n        <div>\n          {/*\n                    Create the content that you want to move around.\n                    InPortals render as normal, but to detached DOM.\n                    Until this is used MyExpensiveComponent will not\n                    appear anywhere in the page.\n                */}\n          <portals.InPortal node={portalNode}>\n            <MyExpensiveComponent\n              // Optionally provide props to use before this enters the DOM\n              myProp={'defaultValue'}\n            />\n          </portals.InPortal>\n\n          {/* ... The rest of your UI ... */}\n\n          {/* Pass the node to whoever might want to show it: */}\n          {props.componentToShow === 'component-a' ? (\n            <ComponentA portalNode={portalNode} />\n          ) : (\n            <ComponentB portalNode={portalNode} />\n          )}\n        </div>\n      );\n    };\n\n    const ComponentA = props => {\n      return (\n        <div>\n          {/* ... Some more UI ... */}\n          A:\n          <portals.OutPortal\n            node={props.portalNode} // Show the content from this node here\n          />\n        </div>\n      );\n    };\n\n    const ComponentB = props => {\n      return (\n        <div>\n          {/* ... Some more UI ... */}\n          B:\n          <portals.OutPortal\n            node={props.portalNode} // Pull in the content from this node\n            myProp={'newValue'} // Optionally, override default values\n            myOtherProp={123} // Or add new props\n\n            // These props go back to the InPortal, and trigger a component\n            // update (but on the same component instance) as if they had\n            // been passed directly.\n          />\n        </div>\n      );\n    };\n\n    return <MyComponent componentToShow=\"component-a\" />;\n  });\n",__ADDS_MAP__)).add("render things in different places",function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c("span");return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal defined here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},"Hi!")),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal renders here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode})))}).add("persist DOM whilst moving",function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},_ref7),_ref4=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode}),_ref6=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function(){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState2[0],setDivToUse=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref2,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref3,!0===useOuterDiv&&_ref4,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref5,!1===useOuterDiv&&_ref6)))))})}).add("persist component state whilst moving",function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref8=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function Counter(){var _React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(0),2),count=_React$useState4[0],setCount=_React$useState4[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Count is ",count,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setCount(count+1)}},"+1"))},null)),_ref11=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode}),_ref13=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function(){var _React$useState6=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState6[0],setDivToUse=_React$useState6[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref8,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref9,_ref10,!0===useOuterDiv&&_ref11,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref12,!1===useOuterDiv&&_ref13))))})}).add("can set props remotely whilst moving",function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref14=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function Counter(props){var _React$useState8=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(0),2),count=_React$useState8[0],setCount=_React$useState8[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{style:{"background-color":props.bgColor}},"Count is ",count,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setCount(count+1)}},"+1"))},{bgColor:"#faa"})),_ref17=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,bgColor:"#aaf"}),_ref19=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,bgColor:"#afa"});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function(){var _React$useState10=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState10[0],setDivToUse=_React$useState10[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref14,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref15,_ref16,!0===useOuterDiv&&_ref17,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref18,!1===useOuterDiv&&_ref19))))})}).add("renders reliably, even with frequent changes and multiple portals",function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c("div"),_ref20=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:1}),_ref21=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:2}),_ref22=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:3});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal defined here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function Target(p){return p.value.toString()},{value:"unmounted"}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function Parent(){var _React$useState12=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),state=_React$useState12[0],setState=_React$useState12[1];return setTimeout(function(){setState(!state)},100),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal flickers between 2 / 3 / nothing here:",state?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment,null,_ref20,_ref21):.5<Math.random()?_ref22:null)},null))}).add("Example from README",function(){var _ref23=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function MyExpensiveComponent(){return"expensive!"},{myProp:"defaultValue"}),ComponentA=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"A:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:props.portalNode}))},ComponentB=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"B:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:props.portalNode,myProp:"newValue",myOtherProp:123}))};return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(function MyComponent(props){var portalNode=react__WEBPACK_IMPORTED_MODULE_11___default.a.useMemo(function(){return ___WEBPACK_IMPORTED_MODULE_13__.c()},[]);return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},_ref23),"component-a"===props.componentToShow?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ComponentA,{portalNode:portalNode}):react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ComponentB,{portalNode:portalNode}))},{componentToShow:"component-a"})})}.call(this,__webpack_require__(166)(module))}},[[226,1,2]]]);
//# sourceMappingURL=main.ed9243fdb7e8352a810b.bundle.js.map