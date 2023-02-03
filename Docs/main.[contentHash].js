(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,t},f:function t(){try{i||null==r.return||r.return()}finally{if(l)throw t}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}function a(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:r+""}t.d({},{L:()=>S});var i=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,r){e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=r(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(console.log(t,o.id),o.id==t){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]}}]),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===l(e)?e:e+""}var f=u((function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}));function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==r.return||r.return()}finally{if(i)throw t}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var m=document.querySelector(".todo-list"),p=document.querySelector(".new-todo"),v=document.querySelector(".clear-completed"),b=document.querySelector(".filters"),h=document.querySelectorAll(".filtro"),g=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li> '),r=document.createElement("div");return r.innerHTML=e,m.append(r.firstElementChild),r.firstElementChild};p.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<p.value.length){console.log(p.value);var e=new f(p.value);S.nuevoTodo(e),g(e),p.value=""}})),m.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");e.includes("input")?(S.marcarCompletado(n),r.classList.toggle("completed")):e.includes("button")&&(S.eliminarTodo(n),m.removeChild(r)),console.log(S)})),v.addEventListener("click",(function(){S.eliminarCompletados();for(var t,e=m.children.length-1;0<=e;e--)(t=m.children[e]).classList.contains("completed")&&m.removeChild(t)})),b.addEventListener("click",(function(t){var e=t.target.text;if(e){h.forEach((function(t){return t.classList.contains("selected")})),t.target.classList.add("selected");var r,n=d(m.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");"Pendientes"===e?a&&o.classList.add("hidden"):"Completados"===e&&(a||o.classList.add("hidden"))}}catch(t){n.e(t)}finally{n.f()}}}));var S=new i;S.todos.forEach((function(t){return g(t)}))})();