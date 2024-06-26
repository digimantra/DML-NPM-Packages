import e, {
  useRef as a,
  useEffect as o,
  forwardRef as r,
  useState as t,
} from "react";
!(function (e, t) {
  void 0 === t && (t = {});
  var r = t.insertAt;
  if (e && "undefined" != typeof document) {
    var o = document.head || document.getElementsByTagName("head")[0],
      a = document.createElement("style");
    (a.type = "text/css"),
      "top" === r && o.firstChild
        ? o.insertBefore(a, o.firstChild)
        : o.appendChild(a),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(document.createTextNode(e));
  }
})(
  '/*! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:Inter,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.inset-y-0{bottom:0;top:0}.bottom-8{bottom:2rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:.5rem}.left-3{left:.75rem}.left-3\\.5{left:.875rem}.right-0{right:0}.right-2{right:.5rem}.right-3{right:.75rem}.start-0{inset-inline-start:0}.top-0{top:0}.top-1{top:.25rem}.top-8{top:2rem}.top-\\[12px\\]{top:12px}.top-\\[15px\\]{top:15px}.top-\\[42px\\]{top:42px}.z-10{z-index:10}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-4{margin-bottom:1rem;margin-top:1rem}.-mr-1{margin-right:-.25rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mr-12{margin-right:3rem}.mt-0{margin-top:0}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[90\\%\\]{height:90%}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-28{width:7rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-80{width:20rem}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-28{min-width:7rem}.min-w-full{min-width:100%}.max-w-sm{max-width:24rem}.origin-top-right{transform-origin:top right}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-x-2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-2{--tw-translate-x:-0.5rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-x-1\\.5{-moz-column-gap:.375rem;column-gap:.375rem}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(229 231 235/var(--tw-divide-opacity))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-\\[\\#D0D5DD\\]{--tw-border-opacity:1;border-color:rgb(208 213 221/var(--tw-border-opacity))}.border-\\[\\#e11d07\\]{--tw-border-opacity:1;border-color:rgb(225 29 7/var(--tw-border-opacity))}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity))}.border-grayMain{--tw-border-opacity:1;border-color:rgb(208 213 221/var(--tw-border-opacity))}.border-teal-100{--tw-border-opacity:1;border-color:rgb(204 251 241/var(--tw-border-opacity))}.bg-\\[\\#f9fafb\\]{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-\\[\\#fafbff\\]{--tw-bg-opacity:1;background-color:rgb(250 251 255/var(--tw-bg-opacity))}.bg-darkBlack{--tw-bg-opacity:1;background-color:rgb(27 27 27/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-grayMain{--tw-bg-opacity:1;background-color:rgb(208 213 221/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-zinc-50{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity))}.bg-opacity-25{--tw-bg-opacity:0.25}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.px-0{padding-left:0;padding-right:0}.px-0\\.5{padding-left:.125rem;padding-right:.125rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-3\\.5{padding-bottom:.875rem;padding-top:.875rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-\\[13px\\]{padding-bottom:13px;padding-top:13px}.pb-2{padding-bottom:.5rem}.pl-16{padding-left:4rem}.pl-4{padding-left:1rem}.pr-2{padding-right:.5rem}.ps-10{padding-inline-start:2.5rem}.ps-3{padding-inline-start:.75rem}.ps-3\\.5{padding-inline-start:.875rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.font-sans{font-family:Inter,sans-serif}.text-6xl{font-size:3.75rem;line-height:1}.text-\\[12px\\]{font-size:12px}.text-\\[14px\\]{font-size:14px}.text-\\[22px\\]{font-size:22px}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-\\[14\\.5px\\]{line-height:14.5px}.leading-\\[14px\\]{line-height:14px}.leading-\\[16\\.94px\\]{line-height:16.94px}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.text-\\[\\#101828\\]{--tw-text-opacity:1;color:rgb(16 24 40/var(--tw-text-opacity))}.text-\\[\\#1b1b1b\\]{--tw-text-opacity:1;color:rgb(27 27 27/var(--tw-text-opacity))}.text-\\[\\#343434\\]{--tw-text-opacity:1;color:rgb(52 52 52/var(--tw-text-opacity))}.text-\\[\\#344054\\]{--tw-text-opacity:1;color:rgb(52 64 84/var(--tw-text-opacity))}.text-\\[\\#666666\\]{--tw-text-opacity:1;color:rgb(102 102 102/var(--tw-text-opacity))}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-\\[\\#E11D07\\]{--tw-text-opacity:1;color:rgb(225 29 7/var(--tw-text-opacity))}.text-\\[\\#F04438\\]{--tw-text-opacity:1;color:rgb(240 68 56/var(--tw-text-opacity))}.text-\\[\\#e11d07\\]{--tw-text-opacity:1;color:rgb(225 29 7/var(--tw-text-opacity))}.text-\\[\\#f04438\\]{--tw-text-opacity:1;color:rgb(240 68 56/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-darkBlack{--tw-text-opacity:1;color:rgb(27 27 27/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-zinc-500{--tw-text-opacity:1;color:rgb(113 113 122/var(--tw-text-opacity))}.text-zinc-700{--tw-text-opacity:1;color:rgb(63 63 70/var(--tw-text-opacity))}.opacity-50{opacity:.5}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-\\[\\#fda29b\\]{--tw-shadow-color:#fda29b;--tw-shadow:var(--tw-shadow-colored)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-inset{--tw-ring-inset:inset}.ring-gray-300{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.after\\:rounded-full:after{border-radius:9999px;content:var(--tw-content)}.after\\:border-gray-300:after{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity));content:var(--tw-content)}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-\\[\\#fef8f8\\]:hover{--tw-bg-opacity:1;background-color:rgb(254 248 248/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.hover\\:text-red-400:hover{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity))}.focus\\:border-\\[\\#d6bbfb\\]:focus{--tw-border-opacity:1;border-color:rgb(214 187 251/var(--tw-border-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.focus\\:border-red-800:focus{--tw-border-opacity:1;border-color:rgb(153 27 27/var(--tw-border-opacity))}.focus\\:shadow-md:focus{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:shadow-\\[\\#f4ebff\\]:focus{--tw-shadow-color:#f4ebff;--tw-shadow:var(--tw-shadow-colored)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.peer:checked~.peer-checked\\:border-none{border-style:none}.peer:checked~.peer-checked\\:bg-red-600{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.peer:checked~.peer-checked\\:after\\:absolute:after{content:var(--tw-content);position:absolute}.peer:checked~.peer-checked\\:after\\:left-\\[5px\\]:after{content:var(--tw-content);left:5px}.peer:checked~.peer-checked\\:after\\:top-\\[5px\\]:after{content:var(--tw-content);top:5px}.peer:checked~.peer-checked\\:after\\:h-1:after{content:var(--tw-content);height:.25rem}.peer:checked~.peer-checked\\:after\\:h-1\\.5:after{content:var(--tw-content);height:.375rem}.peer:checked~.peer-checked\\:after\\:w-1:after{content:var(--tw-content);width:.25rem}.peer:checked~.peer-checked\\:after\\:w-1\\.5:after{content:var(--tw-content);width:.375rem}.peer:checked~.peer-checked\\:after\\:border:after{border-width:1px;content:var(--tw-content)}.peer:checked~.peer-checked\\:after\\:border-white:after{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity));content:var(--tw-content)}.peer:checked~.peer-checked\\:after\\:bg-white:after{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));content:var(--tw-content)}.peer:checked~.peer-checked\\:after\\:content-\\[\\\'\\\'\\]:after{--tw-content:"";content:var(--tw-content)}.peer:focus~.peer-focus\\:border-red-600{--tw-border-opacity:1;border-color:rgb(220 38 38/var(--tw-border-opacity))}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\\:w-full{width:100%}}@media (prefers-color-scheme:dark){.dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.dark\\:hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.dark\\:focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.peer:focus~.dark\\:peer-focus\\:ring-blue-800{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175/var(--tw-ring-opacity))}}'
);
var i = { exports: {} },
  n = {},
  s = e,
  l = Symbol.for("react.element"),
  c = Symbol.for("react.fragment"),
  d = Object.prototype.hasOwnProperty,
  p = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  C = { key: !0, ref: !0, __self: !0, __source: !0 };
function f(e, t, r) {
  var o,
    a = {},
    i = null,
    n = null;
  for (o in (void 0 !== r && (i = "" + r),
  void 0 !== t.key && (i = "" + t.key),
  void 0 !== t.ref && (n = t.ref),
  t))
    d.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
  if (e && e.defaultProps)
    for (o in (t = e.defaultProps)) void 0 === a[o] && (a[o] = t[o]);
  return { $$typeof: l, type: e, key: i, ref: n, props: a, _owner: p.current };
}
(n.Fragment = c), (n.jsx = f), (n.jsxs = f);
var u = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== process.env.NODE_ENV &&
  (function () {
    var t = e,
      r = Symbol.for("react.element"),
      o = Symbol.for("react.portal"),
      a = Symbol.for("react.fragment"),
      i = Symbol.for("react.strict_mode"),
      n = Symbol.for("react.profiler"),
      s = Symbol.for("react.provider"),
      l = Symbol.for("react.context"),
      c = Symbol.for("react.forward_ref"),
      d = Symbol.for("react.suspense"),
      p = Symbol.for("react.suspense_list"),
      C = Symbol.for("react.memo"),
      f = Symbol.for("react.lazy"),
      w = Symbol.for("react.offscreen"),
      g = Symbol.iterator,
      b = "@@iterator";
    var h = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        r[o - 1] = arguments[o];
      !(function (e, t, r) {
        var o = h.ReactDebugCurrentFrame,
          a = o.getStackAddendum();
        "" !== a && ((t += "%s"), (r = r.concat([a])));
        var i = r.map(function (e) {
          return String(e);
        });
        i.unshift("Warning: " + t),
          Function.prototype.apply.call(console[e], console, i);
      })("error", e, r);
    }
    var m,
      y = !1,
      v = !1,
      k = !1,
      j = !1,
      L = !1;
    function M(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (null == e) return null;
      if (
        ("number" == typeof e.tag &&
          x(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ),
        "function" == typeof e)
      )
        return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case n:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case l:
            return M(e) + ".Consumer";
          case s:
            return M(e._context) + ".Provider";
          case c:
            return (function (e, t, r) {
              var o = e.displayName;
              if (o) return o;
              var a = t.displayName || t.name || "";
              return "" !== a ? r + "(" + a + ")" : r;
            })(e, e.render, "ForwardRef");
          case C:
            var t = e.displayName || null;
            return null !== t ? t : N(e.type) || "Memo";
          case f:
            var r = e,
              u = r._payload,
              w = r._init;
            try {
              return N(w(u));
            } catch (e) {
              return null;
            }
        }
      return null;
    }
    m = Symbol.for("react.module.reference");
    var H,
      Z,
      V,
      _,
      z,
      S,
      R,
      O = Object.assign,
      $ = 0;
    function E() {}
    E.__reactDisabledLog = !0;
    var P,
      D = h.ReactCurrentDispatcher;
    function T(e, t, r) {
      if (void 0 === P)
        try {
          throw Error();
        } catch (e) {
          var o = e.stack.trim().match(/\n( *(at )?)/);
          P = (o && o[1]) || "";
        }
      return "\n" + P + e;
    }
    var F,
      I = !1,
      B = "function" == typeof WeakMap ? WeakMap : Map;
    function A(e, t) {
      if (!e || I) return "";
      var r,
        o = F.get(e);
      if (void 0 !== o) return o;
      I = !0;
      var a,
        i = Error.prepareStackTrace;
      (Error.prepareStackTrace = void 0),
        (a = D.current),
        (D.current = null),
        (function () {
          if (0 === $) {
            (H = console.log),
              (Z = console.info),
              (V = console.warn),
              (_ = console.error),
              (z = console.group),
              (S = console.groupCollapsed),
              (R = console.groupEnd);
            var e = {
              configurable: !0,
              enumerable: !0,
              value: E,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e,
            });
          }
          $++;
        })();
      try {
        if (t) {
          var n = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(n.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(n, []);
            } catch (e) {
              r = e;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (e) {
              r = e;
            }
            e.call(n.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && "string" == typeof t.stack) {
          for (
            var s = t.stack.split("\n"),
              l = r.stack.split("\n"),
              c = s.length - 1,
              d = l.length - 1;
            c >= 1 && d >= 0 && s[c] !== l[d];

          )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (s[c] !== l[d]) {
              if (1 !== c || 1 !== d)
                do {
                  if ((c--, --d < 0 || s[c] !== l[d])) {
                    var p = "\n" + s[c].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        p.includes("<anonymous>") &&
                        (p = p.replace("<anonymous>", e.displayName)),
                      "function" == typeof e && F.set(e, p),
                      p
                    );
                  }
                } while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        (I = !1),
          (D.current = a),
          (function () {
            if (0 == --$) {
              var e = { configurable: !0, enumerable: !0, writable: !0 };
              Object.defineProperties(console, {
                log: O({}, e, { value: H }),
                info: O({}, e, { value: Z }),
                warn: O({}, e, { value: V }),
                error: O({}, e, { value: _ }),
                group: O({}, e, { value: z }),
                groupCollapsed: O({}, e, { value: S }),
                groupEnd: O({}, e, { value: R }),
              });
            }
            $ < 0 &&
              x(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
          })(),
          (Error.prepareStackTrace = i);
      }
      var C = e ? e.displayName || e.name : "",
        f = C ? T(C) : "";
      return "function" == typeof e && F.set(e, f), f;
    }
    function U(e, t, r) {
      if (null == e) return "";
      if ("function" == typeof e)
        return A(e, !(!(o = e.prototype) || !o.isReactComponent));
      var o;
      if ("string" == typeof e) return T(e);
      switch (e) {
        case d:
          return T("Suspense");
        case p:
          return T("SuspenseList");
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case c:
            return A(e.render, !1);
          case C:
            return U(e.type, t, r);
          case f:
            var a = e,
              i = a._payload,
              n = a._init;
            try {
              return U(n(i), t, r);
            } catch (e) {}
        }
      return "";
    }
    F = new B();
    var W = Object.prototype.hasOwnProperty,
      Y = {},
      X = h.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner,
          r = U(e.type, e._source, t ? t.type : null);
        X.setExtraStackFrame(r);
      } else X.setExtraStackFrame(null);
    }
    var q = Array.isArray;
    function J(e) {
      return q(e);
    }
    function G(e) {
      return "" + e;
    }
    function Q(e) {
      if (
        (function (e) {
          try {
            return G(e), !1;
          } catch (e) {
            return !0;
          }
        })(e)
      )
        return (
          x(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            (function (e) {
              return (
                ("function" == typeof Symbol &&
                  Symbol.toStringTag &&
                  e[Symbol.toStringTag]) ||
                e.constructor.name ||
                "Object"
              );
            })(e)
          ),
          G(e)
        );
    }
    var ee,
      te,
      re,
      oe = h.ReactCurrentOwner,
      ae = { key: !0, ref: !0, __self: !0, __source: !0 };
    re = {};
    var ie = function (e, t, o, a, i, n, s) {
      var l = {
        $$typeof: r,
        type: e,
        key: t,
        ref: o,
        props: s,
        _owner: n,
        _store: {},
      };
      return (
        Object.defineProperty(l._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(l, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a,
        }),
        Object.defineProperty(l, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i,
        }),
        Object.freeze && (Object.freeze(l.props), Object.freeze(l)),
        l
      );
    };
    function ne(e, t, r, o, a) {
      var i,
        n = {},
        s = null,
        l = null;
      for (i in (void 0 !== r && (Q(r), (s = "" + r)),
      (function (e) {
        if (W.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning) return !1;
        }
        return void 0 !== e.key;
      })(t) && (Q(t.key), (s = "" + t.key)),
      (function (e) {
        if (W.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning) return !1;
        }
        return void 0 !== e.ref;
      })(t) &&
        ((l = t.ref),
        (function (e, t) {
          if (
            "string" == typeof e.ref &&
            oe.current &&
            t &&
            oe.current.stateNode !== t
          ) {
            var r = N(oe.current.type);
            re[r] ||
              (x(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                N(oe.current.type),
                e.ref
              ),
              (re[r] = !0));
          }
        })(t, a)),
      t))
        W.call(t, i) && !ae.hasOwnProperty(i) && (n[i] = t[i]);
      if (e && e.defaultProps) {
        var c = e.defaultProps;
        for (i in c) void 0 === n[i] && (n[i] = c[i]);
      }
      if (s || l) {
        var d =
          "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
        s &&
          (function (e, t) {
            var r = function () {
              ee ||
                ((ee = !0),
                x(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  t
                ));
            };
            (r.isReactWarning = !0),
              Object.defineProperty(e, "key", { get: r, configurable: !0 });
          })(n, d),
          l &&
            (function (e, t) {
              var r = function () {
                te ||
                  ((te = !0),
                  x(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    t
                  ));
              };
              (r.isReactWarning = !0),
                Object.defineProperty(e, "ref", { get: r, configurable: !0 });
            })(n, d);
      }
      return ie(e, s, l, a, o, oe.current, n);
    }
    var se,
      le = h.ReactCurrentOwner,
      ce = h.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner,
          r = U(e.type, e._source, t ? t.type : null);
        ce.setExtraStackFrame(r);
      } else ce.setExtraStackFrame(null);
    }
    function pe(e) {
      return "object" == typeof e && null !== e && e.$$typeof === r;
    }
    function Ce() {
      if (le.current) {
        var e = N(le.current.type);
        if (e) return "\n\nCheck the render method of `" + e + "`.";
      }
      return "";
    }
    se = !1;
    var fe = {};
    function ue(e, t) {
      if (e._store && !e._store.validated && null == e.key) {
        e._store.validated = !0;
        var r = (function (e) {
          var t = Ce();
          if (!t) {
            var r = "string" == typeof e ? e : e.displayName || e.name;
            r && (t = "\n\nCheck the top-level render call using <" + r + ">.");
          }
          return t;
        })(t);
        if (!fe[r]) {
          fe[r] = !0;
          var o = "";
          e &&
            e._owner &&
            e._owner !== le.current &&
            (o = " It was passed a child from " + N(e._owner.type) + "."),
            de(e),
            x(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              r,
              o
            ),
            de(null);
        }
      }
    }
    function we(e, t) {
      if ("object" == typeof e)
        if (J(e))
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            pe(o) && ue(o, t);
          }
        else if (pe(e)) e._store && (e._store.validated = !0);
        else if (e) {
          var a = (function (e) {
            if (null === e || "object" != typeof e) return null;
            var t = (g && e[g]) || e[b];
            return "function" == typeof t ? t : null;
          })(e);
          if ("function" == typeof a && a !== e.entries)
            for (var i, n = a.call(e); !(i = n.next()).done; )
              pe(i.value) && ue(i.value, t);
        }
    }
    function ge(e) {
      var t,
        r = e.type;
      if (null != r && "string" != typeof r) {
        if ("function" == typeof r) t = r.propTypes;
        else {
          if ("object" != typeof r || (r.$$typeof !== c && r.$$typeof !== C))
            return;
          t = r.propTypes;
        }
        if (t) {
          var o = N(r);
          !(function (e, t, r, o, a) {
            var i = Function.call.bind(W);
            for (var n in e)
              if (i(e, n)) {
                var s = void 0;
                try {
                  if ("function" != typeof e[n]) {
                    var l = Error(
                      (o || "React class") +
                        ": " +
                        r +
                        " type `" +
                        n +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof e[n] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((l.name = "Invariant Violation"), l);
                  }
                  s = e[n](
                    t,
                    n,
                    o,
                    r,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (e) {
                  s = e;
                }
                !s ||
                  s instanceof Error ||
                  (K(a),
                  x(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    o || "React class",
                    r,
                    n,
                    typeof s
                  ),
                  K(null)),
                  s instanceof Error &&
                    !(s.message in Y) &&
                    ((Y[s.message] = !0),
                    K(a),
                    x("Failed %s type: %s", r, s.message),
                    K(null));
              }
          })(t, e.props, "prop", o, e);
        } else if (void 0 !== r.PropTypes && !se) {
          (se = !0),
            x(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              N(r) || "Unknown"
            );
        }
        "function" != typeof r.getDefaultProps ||
          r.getDefaultProps.isReactClassApproved ||
          x(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
          );
      }
    }
    var be = {};
    function he(e, t, o, u, g, b) {
      var h = (function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          !!(
            e === a ||
            e === n ||
            L ||
            e === i ||
            e === d ||
            e === p ||
            j ||
            e === w ||
            y ||
            v ||
            k
          ) ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === f ||
              e.$$typeof === C ||
              e.$$typeof === s ||
              e.$$typeof === l ||
              e.$$typeof === c ||
              e.$$typeof === m ||
              void 0 !== e.getModuleId))
        );
      })(e);
      if (!h) {
        var M = "";
        (void 0 === e ||
          ("object" == typeof e &&
            null !== e &&
            0 === Object.keys(e).length)) &&
          (M +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var H,
          Z = (function (e) {
            return void 0 !== e
              ? "\n\nCheck your code at " +
                  e.fileName.replace(/^.*[\\\/]/, "") +
                  ":" +
                  e.lineNumber +
                  "."
              : "";
          })(g);
        (M += Z || Ce()),
          null === e
            ? (H = "null")
            : J(e)
              ? (H = "array")
              : void 0 !== e && e.$$typeof === r
                ? ((H = "<" + (N(e.type) || "Unknown") + " />"),
                  (M =
                    " Did you accidentally export a JSX literal instead of a component?"))
                : (H = typeof e),
          x(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            H,
            M
          );
      }
      var V = ne(e, t, o, g, b);
      if (null == V) return V;
      if (h) {
        var _ = t.children;
        if (void 0 !== _)
          if (u)
            if (J(_)) {
              for (var z = 0; z < _.length; z++) we(_[z], e);
              Object.freeze && Object.freeze(_);
            } else
              x(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else we(_, e);
      }
      if (W.call(t, "key")) {
        var S = N(e),
          R = Object.keys(t).filter(function (e) {
            return "key" !== e;
          }),
          O =
            R.length > 0
              ? "{key: someKey, " + R.join(": ..., ") + ": ...}"
              : "{key: someKey}";
        if (!be[S + O])
          x(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            O,
            S,
            R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}",
            S
          ),
            (be[S + O] = !0);
      }
      return (
        e === a
          ? (function (e) {
              for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
                var o = t[r];
                if ("children" !== o && "key" !== o) {
                  de(e),
                    x(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      o
                    ),
                    de(null);
                  break;
                }
              }
              null !== e.ref &&
                (de(e),
                x("Invalid attribute `ref` supplied to `React.Fragment`."),
                de(null));
            })(V)
          : ge(V),
        V
      );
    }
    var xe = function (e, t, r) {
        return he(e, t, r, !1);
      },
      me = function (e, t, r) {
        return he(e, t, r, !0);
      };
    (u.Fragment = a), (u.jsx = xe), (u.jsxs = me);
  })(),
  "production" === process.env.NODE_ENV ? (i.exports = n) : (i.exports = u);
const w = ({
    show: e = !1,
    setShow: t = () => {},
    list: r = [
      {
        id: 1,
        name: "view",
        action: () => {
          console.log("see the list");
        },
      },
      {
        id: 2,
        name: "delete",
        action: () => {
          console.log("deleted");
        },
      },
      {
        id: 3,
        name: "edit",
        action: () => {
          console.log("Edited");
        },
      },
    ],
    customButton: o = i.exports.jsxs("button", {
      type: "button",
      className:
        "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      id: "menu-button",
      children: [
        "Actions",
        i.exports.jsx("svg", {
          className: "-mr-1 h-5 w-5 text-gray-400",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: i.exports.jsx("path", {
            fillRule: "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
            clipRule: "evenodd",
          }),
        }),
      ],
    }),
    position: a = "left",
  }) =>
    i.exports.jsxs("div", {
      className: "relative font-sans inline-block text-left",
      children: [
        i.exports.jsx("div", {
          onClick: () => t(!e),
          className: "cursor-pointer block w-fit",
          children: o,
        }),
        e &&
          i.exports.jsx("div", {
            className: `font-sans p-2 absolute ${(() => {
              switch (a) {
                case "left":
                  return "right-0";
                case "right":
                default:
                  return "left-0";
                case "topCenter":
                  return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
                case "topLeft":
                  return "bottom-full mb-2 right-0";
                case "topRight":
                  return "bottom-full mb-2 left-0";
                case "center":
                  return "left-1/2 transform -translate-x-1/2";
              }
            })()} z-10 w-28 origin-top-right rounded-md bg-white shadow-md border border-gray-100`,
            role: "menu",
            "aria-orientation": "vertical",
            "aria-labelledby": "menu-button",
            tabIndex: -1,
            children: r?.map((e) =>
              i.exports.jsx(
                "div",
                {
                  onClick: () => {
                    return (r = e?.action), r(), void t(!1);
                    var r;
                  },
                  className:
                    "p-2 font-normal text-sm leading-4 cursor-pointer mb-1 rounded-md hover:bg-[#fef8f8] text-[#343434] capitalize tracking-wide",
                  children: e?.name,
                },
                e?.id
              )
            ),
          }),
      ],
    }),
  g = ({
    image: e,
    size: r,
    type: o,
    outline: a,
    color: n,
    onUpload: s,
    borderColor: l,
  }) => {
    const [c, d] = t(e);
    return i.exports.jsx("div", {
      className: "relative",
      children: i.exports.jsxs("div", {
        style: { border: `1px solid ${c ? l || "blue" : "transparent"}` },
        className: `${(() => {
          switch (r) {
            case "1":
              return "h-2 w-2";
            case "2":
              return "h-4 w-4";
            case "3":
              return "h-6 w-6";
            case "4":
              return "h-8 w-8";
            case "5":
            default:
              return "h-10 w-10";
            case "6":
              return "h-12 w-12";
            case "7":
              return "h-14 w-14";
            case "8":
              return "h-16 w-16";
          }
        })()} cursor-pointer hover:text-red-400 rounded-full overflow-hidden`,
        children: [
          c || e
            ? i.exports.jsx("label", {
                htmlFor: "avatarInput",
                className: "cursor-pointer",
                children: i.exports.jsx("img", {
                  className: "h-full w-full object-cover",
                  src: c || e,
                  alt: "Face",
                }),
              })
            : "fill" === o
              ? i.exports.jsx("label", {
                  htmlFor: "avatarInput",
                  className: "cursor-pointer",
                  children: i.exports.jsxs("svg", {
                    className: "h-full w-full",
                    width: "15",
                    height: "15",
                    viewBox: "0 0 15 15",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      i.exports.jsxs("g", {
                        clipPath: "url(#clip0_662_4489)",
                        children: [
                          i.exports.jsx("path", {
                            d: "M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z",
                            fill: n || "#cb4d2e",
                          }),
                          i.exports.jsx("path", {
                            d: "M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z",
                            fill: n || "#cb4d2e",
                          }),
                        ],
                      }),
                      i.exports.jsx("defs", {
                        children: i.exports.jsx("clipPath", {
                          id: "clip0_662_4489",
                          children: i.exports.jsx("rect", {
                            width: "15",
                            height: "15",
                            fill: "white",
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : i.exports.jsx("label", {
                  htmlFor: "avatarInput",
                  className: "cursor-pointer",
                  children: i.exports.jsxs("svg", {
                    className: "h-full w-full",
                    width: "15",
                    height: "15",
                    viewBox: "0 0 15 15",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      i.exports.jsxs("g", {
                        clipPath: "url(#clip0_662_4483)",
                        children: [
                          i.exports.jsx("path", {
                            d: "M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z",
                            stroke: a || "#000000",
                          }),
                          i.exports.jsx("path", {
                            d: "M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z",
                            stroke: a || "#000000",
                          }),
                        ],
                      }),
                      i.exports.jsx("defs", {
                        children: i.exports.jsx("clipPath", {
                          id: "clip0_662_4483",
                          children: i.exports.jsx("rect", {
                            width: "15",
                            height: "15",
                            fill: "white",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
          i.exports.jsx("input", {
            type: "file",
            accept: "image/*",
            className: "cursor-pointer hidden",
            onChange: (e) => {
              const t = e.target.files?.[0];
              if (!t) return;
              const r = new FileReader();
              (r.onloadend = () => {
                const e = r.result;
                d(e), s?.(e);
              }),
                r.readAsDataURL(t);
            },
            id: "avatarInput",
          }),
        ],
      }),
    });
  };
g.defaultProps = { outline: "#000000", color: "#cb4d2e", onUpload: () => {} };
const b = r(
  (
    {
      label: e,
      buttonType: t = "default",
      icon: r,
      background: o,
      textColor: a,
      px: n,
      py: s,
      disabled: l,
      onClick: c,
      full: d,
      ...p
    },
    C
  ) =>
    i.exports.jsx("button", {
      ref: C,
      disabled: l,
      onClick: c,
      style: {
        ...("primary" !== t &&
          "secondary" !== t && {
            backgroundColor: o,
            color: a,
            padding: `${s}px ${n}px`,
          }),
      },
      className: `rounded-lg ease-in-out transition-all ${d ? "w-full" : ""}  ${(() => {
        switch (t) {
          case "primary":
            return `text-white bg-darkBlack ${l ? "cursor-not-allowed bg-grayMain text-[#666666]" : "cursor-pointer"} px-4 py-[13px]`;
          case "secondary":
            return `text-darkBlack ${l ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} bg-white border border-grayMain px-4 py-3`;
          default:
            return `text-black ${o || ""} ${l && "opacity-50"} ${o ? "" : "border border-dashed border-grayMain"}`;
        }
      })()}`,
      ...p,
      children: i.exports.jsxs("div", {
        className: "flex items-center justify-center gap-2",
        children: [
          r && i.exports.jsx("span", { className: "", children: r }),
          i.exports.jsx("span", {
            className: "text-sm font-normal leading-[16.94px]",
            children: e,
          }),
        ],
      }),
    })
);
b.displayName = "Button";
const h = {
    dashboard: {
      stroke: !0,
      outline: {
        d1: "M1.875 4.21875C1.875 3.11375 1.875 2.56125 2.21875 2.21875C2.56062 1.875 3.11312 1.875 4.21875 1.875C5.32375 1.875 5.87625 1.875 6.21875 2.21875C6.5625 2.56125 6.5625 3.11375 6.5625 4.21875C6.5625 5.32375 6.5625 5.87625 6.21875 6.21875C5.87625 6.5625 5.32375 6.5625 4.21875 6.5625C3.11375 6.5625 2.56125 6.5625 2.21875 6.21875C1.875 5.87687 1.875 5.32438 1.875 4.21875ZM1.875 10.7856C1.875 9.68062 1.875 9.12813 2.21875 8.78563C2.56125 8.44188 3.11375 8.44187 4.21875 8.44187C5.32375 8.44187 5.87625 8.44188 6.21875 8.78563C6.5625 9.12813 6.5625 9.68062 6.5625 10.7856C6.5625 11.8906 6.5625 12.4431 6.21875 12.7856C5.87625 13.1294 5.32375 13.1294 4.21875 13.1294C3.11375 13.1294 2.56125 13.1294 2.21875 12.7856C1.875 12.4438 1.875 11.8906 1.875 10.7856ZM8.4375 4.21875C8.4375 3.11375 8.4375 2.56125 8.78125 2.21875C9.12375 1.875 9.67625 1.875 10.7812 1.875C11.8863 1.875 12.4388 1.875 12.7813 2.21875C13.125 2.56125 13.125 3.11375 13.125 4.21875C13.125 5.32375 13.125 5.87625 12.7813 6.21875C12.4388 6.5625 11.8863 6.5625 10.7812 6.5625C9.67625 6.5625 9.12375 6.5625 8.78125 6.21875C8.4375 5.87625 8.4375 5.32375 8.4375 4.21875ZM8.4375 10.7856C8.4375 9.68062 8.4375 9.12813 8.78125 8.78563C9.12375 8.44188 9.67625 8.44187 10.7812 8.44187C11.8863 8.44187 12.4388 8.44188 12.7813 8.78563C13.125 9.12813 13.125 9.68062 13.125 10.7856C13.125 11.8906 13.125 12.4431 12.7813 12.7856C12.4388 13.1294 11.8863 13.1294 10.7812 13.1294C9.67625 13.1294 9.12375 13.1294 8.78125 12.7856C8.4375 12.4431 8.4375 11.8906 8.4375 10.7856Z",
        d2: "",
      },
      filled: {
        d1: "M3.0625 1.875C2.4375 1.875 1.875 2.375 1.875 3.0625V5.625C1.875 6.25 2.375 6.8125 3.0625 6.8125H5.625C6.25 6.8125 6.8125 6.3125 6.8125 5.625V3.125C6.8125 2.5 6.3125 1.9375 5.625 1.9375H3.125L3.0625 1.875ZM9.3125 1.875C8.6875 1.875 8.125 2.375 8.125 3.0625V5.625C8.125 6.25 8.625 6.8125 9.3125 6.8125H11.875C12.5 6.8125 13.0625 6.3125 13.0625 5.625V3.125C13.0625 2.5 12.5625 1.9375 11.875 1.9375H9.375L9.3125 1.875ZM3.0625 8.125C2.4375 8.125 1.875 8.625 1.875 9.3125V11.875C1.875 12.5 2.375 13.0625 3.0625 13.0625H5.625C6.25 13.0625 6.8125 12.5625 6.8125 11.875V9.375C6.8125 8.75 6.3125 8.1875 5.625 8.1875H3.125L3.0625 8.125ZM9.3125 8.125C8.6875 8.125 8.125 8.625 8.125 9.3125V11.875C8.125 12.5 8.625 13.0625 9.3125 13.0625H11.875C12.5 13.0625 13.0625 12.5625 13.0625 11.875V9.375C13.0625 8.75 12.5625 8.1875 11.875 8.1875H9.375L9.3125 8.125Z",
        d2: "",
      },
    },
    warehouse: {
      stroke: !1,
      outline: {
        d1: "M14.0625 10.7813H13.5938V3.39259L14.1604 3.27071C14.2218 3.25918 14.2804 3.23545 14.3326 3.20093C14.3848 3.16641 14.4295 3.12179 14.4642 3.0697C14.4988 3.01761 14.5227 2.95911 14.5344 2.89765C14.5461 2.83618 14.5454 2.773 14.5323 2.71182C14.5192 2.65064 14.494 2.5927 14.4581 2.54142C14.4223 2.49014 14.3765 2.44656 14.3236 2.41324C14.2706 2.37992 14.2115 2.35754 14.1498 2.34742C14.088 2.3373 14.0249 2.33964 13.9641 2.35431L0.839062 5.16681C0.725991 5.19121 0.625934 5.25655 0.558137 5.35028C0.490341 5.444 0.459593 5.55949 0.471809 5.67451C0.484024 5.78954 0.538339 5.89599 0.624308 5.97338C0.710276 6.05078 0.821826 6.09365 0.9375 6.09376C0.970785 6.0937 1.00397 6.09017 1.03652 6.08322L1.40625 6.00411V10.7813H0.9375C0.81318 10.7813 0.693951 10.8306 0.606044 10.9186C0.518136 11.0065 0.46875 11.1257 0.46875 11.25C0.46875 11.3743 0.518136 11.4936 0.606044 11.5815C0.693951 11.6694 0.81318 11.7188 0.9375 11.7188H14.0625C14.1868 11.7188 14.306 11.6694 14.394 11.5815C14.4819 11.4936 14.5312 11.3743 14.5312 11.25C14.5312 11.1257 14.4819 11.0065 14.394 10.9186C14.306 10.8306 14.1868 10.7813 14.0625 10.7813ZM2.34375 5.80079L12.6562 3.59357V10.7813H11.25V7.50001C11.25 7.37569 11.2006 7.25646 11.1127 7.16856C11.0248 7.08065 10.9056 7.03126 10.7812 7.03126H4.21875C4.09443 7.03126 3.9752 7.08065 3.88729 7.16856C3.79939 7.25646 3.75 7.37569 3.75 7.50001V10.7813H2.34375V5.80079ZM10.3125 8.90626H4.6875V7.96876H10.3125V8.90626ZM4.6875 9.84376H10.3125V10.7813H4.6875V9.84376Z",
        d2: "",
      },
      filled: {
        d1: "M14.0625 10.7813H13.5938V3.39259L14.1604 3.27071C14.2218 3.25918 14.2804 3.23545 14.3326 3.20093C14.3848 3.16641 14.4295 3.12179 14.4642 3.0697C14.4988 3.01761 14.5227 2.95911 14.5344 2.89765C14.5461 2.83618 14.5454 2.773 14.5323 2.71182C14.5192 2.65064 14.494 2.5927 14.4581 2.54142C14.4223 2.49014 14.3765 2.44656 14.3236 2.41324C14.2706 2.37992 14.2115 2.35754 14.1498 2.34742C14.088 2.3373 14.0249 2.33964 13.9641 2.35431L0.839062 5.16681C0.725991 5.19121 0.625934 5.25655 0.558137 5.35028C0.490341 5.444 0.459593 5.55949 0.471809 5.67451C0.484024 5.78954 0.538339 5.89599 0.624308 5.97338C0.710276 6.05078 0.821826 6.09365 0.9375 6.09376C0.970785 6.0937 1.00397 6.09017 1.03652 6.08322L1.40625 6.00411V10.7813H0.9375C0.81318 10.7813 0.693951 10.8306 0.606044 10.9186C0.518136 11.0065 0.46875 11.1257 0.46875 11.25C0.46875 11.3743 0.518136 11.4936 0.606044 11.5815C0.693951 11.6694 0.81318 11.7188 0.9375 11.7188H14.0625C14.1868 11.7188 14.306 11.6694 14.394 11.5815C14.4819 11.4936 14.5312 11.3743 14.5312 11.25C14.5312 11.1257 14.4819 11.0065 14.394 10.9186C14.306 10.8306 14.1868 10.7813 14.0625 10.7813ZM10.7812 10.7813H4.21875V9.84376H10.7812V10.7813ZM10.7812 8.90626H4.21875V7.96876H10.7812V8.90626Z",
        d2: "",
      },
    },
    key: {
      stroke: !1,
      outline: {
        d1: "M9.375 0.9375C8.63514 0.938163 7.90593 1.11379 7.24691 1.45005C6.58788 1.78631 6.01772 2.27367 5.58298 2.87233C5.14824 3.47098 4.86125 4.16397 4.74544 4.89471C4.62963 5.62544 4.68828 6.37321 4.9166 7.07695L1.54336 10.4496C1.49984 10.4932 1.46534 10.5449 1.44181 10.6018C1.41829 10.6587 1.4062 10.7197 1.40625 10.7812V13.125C1.40625 13.2493 1.45564 13.3685 1.54354 13.4565C1.63145 13.5444 1.75068 13.5938 1.875 13.5938H4.21875C4.34307 13.5938 4.4623 13.5444 4.55021 13.4565C4.63811 13.3685 4.6875 13.2493 4.6875 13.125V12.1875H5.625C5.74932 12.1875 5.86855 12.1381 5.95646 12.0502C6.04436 11.9623 6.09375 11.8431 6.09375 11.7188V10.7812H7.03125C7.09282 10.7813 7.15381 10.7692 7.21071 10.7457C7.26761 10.7222 7.31933 10.6877 7.36289 10.6441L7.92305 10.0834C8.5673 10.2926 9.24923 10.3596 9.92188 10.28C10.5945 10.2003 11.2419 9.9758 11.8195 9.62192C12.3971 9.26804 12.8911 8.79319 13.2675 8.23007C13.644 7.66695 13.8939 7.02894 14.0001 6.35996C14.1063 5.69098 14.0663 5.00693 13.8827 4.35491C13.6992 3.70289 13.3765 3.09839 12.937 2.58304C12.4974 2.06769 11.9513 1.65372 11.3364 1.36965C10.7215 1.08557 10.0524 0.93814 9.375 0.9375ZM9.375 9.375C8.90049 9.3758 8.43017 9.28611 7.98926 9.11074C7.90301 9.07331 7.80749 9.06268 7.71512 9.08023C7.62275 9.09779 7.53779 9.14272 7.47129 9.20918L6.8373 9.84375H5.625C5.50068 9.84375 5.38145 9.89314 5.29354 9.98104C5.20564 10.069 5.15625 10.1882 5.15625 10.3125V11.25H4.21875C4.09443 11.25 3.9752 11.2994 3.88729 11.3873C3.79939 11.4752 3.75 11.5944 3.75 11.7188V12.6562H2.34375V10.9752L5.79082 7.52871C5.85728 7.46221 5.90221 7.37725 5.91976 7.28488C5.93732 7.19251 5.92669 7.09699 5.88926 7.01074C5.59283 6.26534 5.54324 5.44453 5.74777 4.66886C5.9523 3.89319 6.40018 3.20355 7.02562 2.70123C7.65106 2.19892 8.42109 1.9104 9.22262 1.87805C10.0241 1.8457 10.8149 2.07124 11.4788 2.52152C12.1427 2.97181 12.6447 3.62312 12.911 4.37978C13.1774 5.13645 13.1941 5.95859 12.9587 6.72545C12.7233 7.49232 12.2482 8.16349 11.6032 8.64038C10.9581 9.11727 10.1772 9.37475 9.375 9.375ZM11.25 4.45312C11.25 4.59219 11.2088 4.72813 11.1315 4.84376C11.0542 4.95939 10.9444 5.04951 10.8159 5.10273C10.6875 5.15595 10.5461 5.16987 10.4097 5.14274C10.2733 5.11561 10.148 5.04864 10.0497 4.95031C9.95136 4.85198 9.88439 4.72669 9.85726 4.5903C9.83013 4.45391 9.84405 4.31253 9.89727 4.18405C9.95049 4.05557 10.0406 3.94576 10.1562 3.8685C10.2719 3.79124 10.4078 3.75 10.5469 3.75C10.7334 3.75 10.9122 3.82408 11.0441 3.95594C11.1759 4.0878 11.25 4.26664 11.25 4.45312Z",
        d2: "",
      },
      filled: {
        d1: "M8.375 0.9375C7.63514 0.938163 6.90593 1.11379 6.24691 1.45005C5.58788 1.78631 5.01772 2.27367 4.58298 2.87233C4.14824 3.47098 3.86125 4.16397 3.74544 4.89471C3.62963 5.62544 3.68828 6.37321 3.9166 7.07695L0.54336 10.4496C0.499843 10.4932 0.465337 10.5449 0.441811 10.6018C0.418286 10.6587 0.406202 10.7197 0.40625 10.7812V13.125C0.40625 13.2493 0.455636 13.3685 0.543544 13.4565C0.631451 13.5444 0.75068 13.5938 0.875 13.5938H3.21875C3.34307 13.5938 3.4623 13.5444 3.55021 13.4565C3.63811 13.3685 3.6875 13.2493 3.6875 13.125V12.1875H4.625C4.74932 12.1875 4.86855 12.1381 4.95646 12.0502C5.04436 11.9623 5.09375 11.8431 5.09375 11.7188V10.7812H6.03125C6.09282 10.7813 6.15381 10.7692 6.21071 10.7457C6.26761 10.7222 6.31933 10.6877 6.36289 10.6441L6.92305 10.0834C7.5673 10.2926 8.24923 10.3596 8.92188 10.28C9.59454 10.2003 10.2419 9.9758 10.8195 9.62192C11.3971 9.26804 11.8911 8.79319 12.2675 8.23007C12.644 7.66695 12.8939 7.02894 13.0001 6.35996C13.1063 5.69098 13.0663 5.00693 12.8827 4.35491C12.6992 3.70289 12.3765 3.09839 11.937 2.58304C11.4974 2.06769 10.9513 1.65372 10.3364 1.36965C9.72153 1.08557 9.05236 0.93814 8.375 0.9375ZM9.54687 5.39062C9.36145 5.39062 9.1802 5.33564 9.02603 5.23263C8.87186 5.12961 8.75169 4.9832 8.68074 4.81189C8.60978 4.64058 8.59121 4.45209 8.62739 4.27023C8.66356 4.08837 8.75285 3.92132 8.88396 3.79021C9.01507 3.6591 9.18212 3.56981 9.36398 3.53364C9.54583 3.49747 9.73433 3.51603 9.90564 3.58699C10.0769 3.65794 10.2234 3.77811 10.3264 3.93228C10.4294 4.08645 10.4844 4.2677 10.4844 4.45312C10.4844 4.70177 10.3856 4.94022 10.2098 5.11604C10.034 5.29185 9.79552 5.39062 9.54687 5.39062Z",
        d2: "",
      },
    },
    shipment: {
      stroke: !1,
      outline: {
        d1: "M7.5 0.78125C7.12187 0.78125 6.77375 0.875 6.39312 1.0325C6.025 1.185 5.5975 1.40937 5.06562 1.68875L3.77312 2.36687C3.12 2.70937 2.59812 2.98375 2.19375 3.25312C1.77625 3.5325 1.45375 3.82625 1.21937 4.22437C0.985625 4.62125 0.880625 5.05125 0.83 5.56312C0.78125 6.06 0.78125 6.67062 0.78125 7.43937V7.56062C0.78125 8.32937 0.78125 8.94 0.83 9.43687C0.880625 9.94937 0.98625 10.3787 1.21937 10.7756C1.45375 11.1737 1.77562 11.4675 2.19437 11.7469C2.5975 12.0162 3.12 12.2906 3.77312 12.6331L5.06562 13.3112C5.5975 13.5906 6.025 13.815 6.39312 13.9675C6.77437 14.125 7.12187 14.2187 7.5 14.2187C7.87812 14.2187 8.22625 14.125 8.60687 13.9675C8.975 13.815 9.4025 13.5906 9.93437 13.3112L11.2269 12.6337C11.88 12.2906 12.4019 12.0162 12.8056 11.7469C13.2244 11.4675 13.5462 11.1737 13.7806 10.7756C14.0144 10.3787 14.1194 9.94875 14.17 9.43687C14.2187 8.94 14.2187 8.32937 14.2187 7.56125V7.43875C14.2187 6.67062 14.2187 6.06 14.17 5.56312C14.1194 5.05062 14.0137 4.62125 13.7806 4.22437C13.5462 3.82625 13.2244 3.5325 12.8056 3.25312C12.4025 2.98375 11.88 2.70937 11.2269 2.36687L9.93437 1.68875C9.4025 1.40937 8.975 1.185 8.60687 1.0325C8.22562 0.875 7.87812 0.78125 7.5 0.78125ZM5.48125 2.52875C6.0375 2.23687 6.4275 2.03312 6.75125 1.89937C7.06625 1.76875 7.28812 1.71875 7.5 1.71875C7.7125 1.71875 7.93375 1.76875 8.24875 1.89937C8.5725 2.03312 8.96187 2.23687 9.51812 2.52875L10.7681 3.185C11.4494 3.54187 11.9275 3.79375 12.2856 4.0325C12.4619 4.15062 12.6 4.26 12.7125 4.37L10.6306 5.41062L5.31812 2.61437L5.48125 2.52875ZM4.34062 3.1275L4.23187 3.185C3.55062 3.54187 3.0725 3.79375 2.715 4.0325C2.56246 4.13139 2.41954 4.24439 2.28812 4.37L7.5 6.97625L9.59812 5.92625L4.46937 3.2275C4.42094 3.20195 4.37736 3.16811 4.34062 3.1275ZM1.83625 5.19187C1.805 5.32562 1.78062 5.4775 1.76312 5.65437C1.71937 6.10062 1.71875 6.665 1.71875 7.46312V7.53625C1.71875 8.335 1.71875 8.89937 1.76312 9.345C1.80625 9.78062 1.88812 10.0625 2.0275 10.3C2.16625 10.5356 2.36687 10.735 2.715 10.9675C3.0725 11.2062 3.55062 11.4581 4.23187 11.815L5.48187 12.4712C6.03812 12.7631 6.4275 12.9669 6.75125 13.1006C6.85375 13.1431 6.94562 13.1769 7.03125 13.2037V7.78937L1.83625 5.19187ZM7.96875 13.2031C8.05437 13.1769 8.14625 13.1431 8.24875 13.1006C8.5725 12.9669 8.96187 12.7631 9.51812 12.4712L10.7681 11.815C11.4494 11.4575 11.9275 11.2062 12.2856 10.9675C12.6331 10.735 12.8337 10.5356 12.9731 10.3C13.1125 10.0625 13.1937 9.78125 13.2369 9.345C13.2806 8.89937 13.2812 8.335 13.2812 7.53687V7.46375C13.2812 6.665 13.2812 6.10062 13.2369 5.655C13.2228 5.49938 13.1984 5.34487 13.1637 5.1925L11.0937 6.22687V8.125C11.0937 8.24932 11.0444 8.36855 10.9565 8.45646C10.8685 8.54436 10.7493 8.59375 10.625 8.59375C10.5007 8.59375 10.3814 8.54436 10.2935 8.45646C10.2056 8.36855 10.1562 8.24932 10.1562 8.125V6.69625L7.96875 7.79V13.2031Z",
        d2: "",
      },
      filled: {
        d1: "M10.9862 2.77L9.73625 2.11375C8.63875 1.53812 8.09 1.25 7.5 1.25C6.91 1.25 6.36125 1.5375 5.26375 2.11375L5.06312 2.21938L10.64 5.40625L13.15 4.15C12.7463 3.6925 12.095 3.35062 10.9862 2.76875M13.5925 4.9775L11.0938 6.2275V8.125C11.0938 8.24932 11.0444 8.36855 10.9565 8.45646C10.8685 8.54436 10.7493 8.59375 10.625 8.59375C10.5007 8.59375 10.3815 8.54436 10.2935 8.45646C10.2056 8.36855 10.1562 8.24932 10.1562 8.125V6.69625L7.96875 7.79V13.69C8.4175 13.5781 8.92812 13.3106 9.73625 12.8862L10.9862 12.23C12.3306 11.5244 13.0031 11.1719 13.3769 10.5375C13.75 9.90375 13.75 9.11438 13.75 7.5375V7.46438C13.75 6.28125 13.75 5.54125 13.5925 4.9775ZM7.03125 13.69V7.79L1.4075 4.9775C1.25 5.54125 1.25 6.28125 1.25 7.46313V7.53625C1.25 9.11437 1.25 9.90375 1.62312 10.5375C1.99687 11.1719 2.66937 11.525 4.01375 12.2306L5.26375 12.8862C6.07188 13.3106 6.5825 13.5781 7.03125 13.69ZM1.85 4.15062L7.5 6.97563L9.63188 5.91L4.07812 2.73625L4.01375 2.77C2.90562 3.35125 2.25375 3.69313 1.85 4.15125",
        d2: "",
      },
    },
    invoice: {
      stroke: !0,
      outline: {
        d1: "M7.375 3.375H3.625M7.375 5.875H3.625M7.375 8.375H4.875M1.125 0.875H9.875V12.125L9.23 11.5725C9.00345 11.3783 8.71493 11.2716 8.41656 11.2716C8.1182 11.2716 7.82967 11.3783 7.60312 11.5725L6.95813 12.125L6.31375 11.5725C6.08716 11.3782 5.79851 11.2713 5.5 11.2713C5.20149 11.2713 4.91284 11.3782 4.68625 11.5725L4.04187 12.125L3.39688 11.5725C3.17033 11.3783 2.8818 11.2716 2.58344 11.2716C2.28507 11.2716 1.99655 11.3783 1.77 11.5725L1.125 12.125V0.875Z",
        d2: "",
      },
      filled: {
        d1: "M0.5 0.875C0.5 0.70924 0.565848 0.550268 0.683058 0.433058C0.800269 0.315848 0.95924 0.25 1.125 0.25H9.875C10.0408 0.25 10.1997 0.315848 10.3169 0.433058C10.4342 0.550268 10.5 0.70924 10.5 0.875V12.125C10.5 12.2445 10.4658 12.3615 10.4013 12.4621C10.3369 12.5627 10.245 12.6427 10.1365 12.6927C10.028 12.7427 9.90738 12.7605 9.78904 12.7441C9.6707 12.7277 9.55955 12.6777 9.46875 12.6L8.82312 12.0469C8.70987 11.9499 8.56567 11.8966 8.41656 11.8966C8.26745 11.8966 8.12325 11.9499 8.01 12.0469L7.365 12.5994C7.25171 12.6965 7.10738 12.75 6.95813 12.75C6.80887 12.75 6.66455 12.6965 6.55125 12.5994L5.90688 12.0469C5.79358 11.9497 5.64925 11.8963 5.5 11.8963C5.35075 11.8963 5.20642 11.9497 5.09312 12.0469L4.44875 12.5994C4.33545 12.6965 4.19113 12.75 4.04187 12.75C3.89262 12.75 3.7483 12.6965 3.635 12.5994L2.99 12.0469C2.87675 11.9499 2.73255 11.8966 2.58344 11.8966C2.43433 11.8966 2.29013 11.9499 2.17688 12.0469L1.53188 12.5994C1.44113 12.6772 1.32998 12.7274 1.21159 12.7439C1.09321 12.7605 0.972552 12.7427 0.86394 12.6928C0.755327 12.6429 0.663312 12.5629 0.598806 12.4622C0.5343 12.3616 0.500009 12.2445 0.5 12.125V0.875ZM3.625 2.75C3.45924 2.75 3.30027 2.81585 3.18306 2.93306C3.06585 3.05027 3 3.20924 3 3.375C3 3.54076 3.06585 3.69973 3.18306 3.81694C3.30027 3.93415 3.45924 4 3.625 4H7.375C7.54076 4 7.69973 3.93415 7.81694 3.81694C7.93415 3.69973 8 3.54076 8 3.375C8 3.20924 7.93415 3.05027 7.81694 2.93306C7.69973 2.81585 7.54076 2.75 7.375 2.75H3.625ZM3.625 5.25C3.45924 5.25 3.30027 5.31585 3.18306 5.43306C3.06585 5.55027 3 5.70924 3 5.875C3 6.04076 3.06585 6.19973 3.18306 6.31694C3.30027 6.43415 3.45924 6.5 3.625 6.5H7.375C7.54076 6.5 7.69973 6.43415 7.81694 6.31694C7.93415 6.19973 8 6.04076 8 5.875C8 5.70924 7.93415 5.55027 7.81694 5.43306C7.69973 5.31585 7.54076 5.25 7.375 5.25H3.625ZM4.25 8.375C4.25 8.20924 4.31585 8.05027 4.43306 7.93306C4.55027 7.81585 4.70924 7.75 4.875 7.75H7.375C7.54076 7.75 7.69973 7.81585 7.81694 7.93306C7.93415 8.05027 8 8.20924 8 8.375C8 8.54076 7.93415 8.69973 7.81694 8.81694C7.69973 8.93415 7.54076 9 7.375 9H4.875C4.70924 9 4.55027 8.93415 4.43306 8.81694C4.31585 8.69973 4.25 8.54076 4.25 8.375Z",
        d2: "",
      },
    },
    list: {
      stroke: !1,
      outline: {
        d1: "M5.8125 5.40625C5.8125 5.28193 5.86189 5.1627 5.94979 5.07479C6.0377 4.98689 6.15693 4.9375 6.28125 4.9375H8.46875C8.59307 4.9375 8.7123 4.98689 8.80021 5.07479C8.88811 5.1627 8.9375 5.28193 8.9375 5.40625C8.9375 5.53057 8.88811 5.6498 8.80021 5.73771C8.7123 5.82561 8.59307 5.875 8.46875 5.875H6.28125C6.15693 5.875 6.0377 5.82561 5.94979 5.73771C5.86189 5.6498 5.8125 5.53057 5.8125 5.40625ZM6.28125 8.375C6.15693 8.375 6.0377 8.42439 5.94979 8.51229C5.86189 8.6002 5.8125 8.71943 5.8125 8.84375C5.8125 8.96807 5.86189 9.0873 5.94979 9.17521C6.0377 9.26311 6.15693 9.3125 6.28125 9.3125H8.46875C8.59307 9.3125 8.7123 9.26311 8.80021 9.17521C8.88811 9.0873 8.9375 8.96807 8.9375 8.84375C8.9375 8.71943 8.88811 8.6002 8.80021 8.51229C8.7123 8.42439 8.59307 8.375 8.46875 8.375H6.28125ZM4.7375 5.1125C4.78355 5.06959 4.82049 5.01784 4.84611 4.96034C4.87173 4.90284 4.88551 4.84076 4.88662 4.77783C4.88773 4.71489 4.87615 4.65237 4.85258 4.594C4.829 4.53563 4.79391 4.48261 4.7494 4.4381C4.70489 4.39359 4.65187 4.3585 4.5935 4.33492C4.53513 4.31135 4.47261 4.29977 4.40967 4.30088C4.34673 4.30199 4.28466 4.31577 4.22716 4.34139C4.16966 4.36701 4.11791 4.40395 4.075 4.45L3.15625 5.36875L2.8625 5.075C2.77364 4.9922 2.65611 4.94712 2.53467 4.94927C2.41324 4.95141 2.29737 5.0006 2.21149 5.08649C2.1256 5.17237 2.07641 5.28824 2.07427 5.40967C2.07212 5.53111 2.1172 5.64864 2.2 5.7375L2.825 6.3625C2.91289 6.45028 3.03203 6.49959 3.15625 6.49959C3.28047 6.49959 3.39961 6.45028 3.4875 6.3625L4.7375 5.1125ZM4.7375 7.8875C4.82528 7.97539 4.87459 8.09453 4.87459 8.21875C4.87459 8.34297 4.82528 8.46211 4.7375 8.55L3.4875 9.8C3.39961 9.88778 3.28047 9.93709 3.15625 9.93709C3.03203 9.93709 2.91289 9.88778 2.825 9.8L2.2 9.175C2.15395 9.13209 2.11701 9.08034 2.09139 9.02284C2.06577 8.96534 2.05199 8.90326 2.05088 8.84033C2.04977 8.77739 2.06135 8.71487 2.08492 8.6565C2.1085 8.59813 2.14359 8.54511 2.1881 8.5006C2.23261 8.45609 2.28563 8.421 2.344 8.39742C2.40237 8.37385 2.46489 8.36227 2.52783 8.36338C2.59077 8.36449 2.65284 8.37827 2.71034 8.40389C2.76784 8.42951 2.81959 8.46644 2.8625 8.5125L3.15625 8.80625L4.075 7.8875C4.16289 7.79972 4.28203 7.75041 4.40625 7.75041C4.53047 7.75041 4.64961 7.79972 4.7375 7.8875ZM7.99625 1.5525C7.97006 1.19845 7.81092 0.867413 7.55079 0.625825C7.29065 0.384236 6.94877 0.249979 6.59375 0.25H4.40625C4.06035 0.25001 3.72659 0.377504 3.46878 0.608107C3.21096 0.83871 3.04718 1.15624 3.00875 1.5H1.90625C1.53329 1.5 1.1756 1.64816 0.911881 1.91188C0.648158 2.1756 0.5 2.53329 0.5 2.90625V11.3437C0.5 11.7167 0.648158 12.0744 0.911881 12.3381C1.1756 12.6018 1.53329 12.75 1.90625 12.75H9.09375C9.27842 12.75 9.46129 12.7136 9.6319 12.643C9.80251 12.5723 9.95754 12.4687 10.0881 12.3381C10.2187 12.2075 10.3223 12.0525 10.393 11.8819C10.4636 11.7113 10.5 11.5284 10.5 11.3437V2.90625C10.5 2.72158 10.4636 2.53872 10.393 2.3681C10.3223 2.19749 10.2187 2.04246 10.0881 1.91188C9.95754 1.7813 9.80251 1.67771 9.6319 1.60704C9.46129 1.53637 9.27842 1.5 9.09375 1.5H7.99125L7.99625 1.5525ZM7.99625 1.56L8 1.65625C8 1.62375 7.99813 1.59187 7.99625 1.56ZM4.40625 3.0625H6.59375C7.08125 3.0625 7.51063 2.81437 7.76313 2.4375H9.09375C9.21807 2.4375 9.3373 2.48689 9.42521 2.57479C9.51311 2.6627 9.5625 2.78193 9.5625 2.90625V11.3437C9.5625 11.4681 9.51311 11.5873 9.42521 11.6752C9.3373 11.7631 9.21807 11.8125 9.09375 11.8125H1.90625C1.78193 11.8125 1.6627 11.7631 1.57479 11.6752C1.48689 11.5873 1.4375 11.4681 1.4375 11.3437V2.90625C1.4375 2.78193 1.48689 2.6627 1.57479 2.57479C1.6627 2.48689 1.78193 2.4375 1.90625 2.4375H3.23688C3.48938 2.81437 3.91875 3.0625 4.40625 3.0625ZM4.40625 1.1875H6.59375C6.71807 1.1875 6.8373 1.23689 6.92521 1.32479C7.01311 1.4127 7.0625 1.53193 7.0625 1.65625C7.0625 1.78057 7.01311 1.8998 6.92521 1.98771C6.8373 2.07561 6.71807 2.125 6.59375 2.125H4.40625C4.28193 2.125 4.1627 2.07561 4.07479 1.98771C3.98689 1.8998 3.9375 1.78057 3.9375 1.65625C3.9375 1.53193 3.98689 1.4127 4.07479 1.32479C4.1627 1.23689 4.28193 1.1875 4.40625 1.1875Z",
        d2: "",
      },
      filled: {
        d1: "M6.59375 0.25H4.40625C4.06035 0.25001 3.72659 0.377504 3.46878 0.608107C3.21096 0.83871 3.04718 1.15624 3.00875 1.5H1.90625C1.53329 1.5 1.1756 1.64816 0.911881 1.91188C0.648158 2.1756 0.5 2.53329 0.5 2.90625V11.3438C0.5 11.7167 0.648158 12.0744 0.911881 12.3381C1.1756 12.6018 1.53329 12.75 1.90625 12.75H9.09375C9.27842 12.75 9.46128 12.7136 9.6319 12.643C9.80251 12.5723 9.95754 12.4687 10.0881 12.3381C10.2187 12.2075 10.3223 12.0525 10.393 11.8819C10.4636 11.7113 10.5 11.5284 10.5 11.3438V2.90625C10.5 2.72158 10.4636 2.53872 10.393 2.3681C10.3223 2.19749 10.2187 2.04246 10.0881 1.91188C9.95754 1.7813 9.80251 1.67771 9.6319 1.60704C9.46128 1.53637 9.27842 1.5 9.09375 1.5H7.99125C7.95282 1.15624 7.78904 0.83871 7.53122 0.608107C7.27341 0.377504 6.93965 0.25001 6.59375 0.25ZM4.40625 1.1875H6.59375C6.71807 1.1875 6.8373 1.23689 6.92521 1.32479C7.01311 1.4127 7.0625 1.53193 7.0625 1.65625C7.0625 1.78057 7.01311 1.8998 6.92521 1.98771C6.8373 2.07561 6.71807 2.125 6.59375 2.125H4.40625C4.28193 2.125 4.1627 2.07561 4.07479 1.98771C3.98689 1.8998 3.9375 1.78057 3.9375 1.65625C3.9375 1.53193 3.98689 1.4127 4.07479 1.32479C4.1627 1.23689 4.28193 1.1875 4.40625 1.1875ZM5.8125 5.40625C5.8125 5.28193 5.86189 5.1627 5.94979 5.07479C6.0377 4.98689 6.15693 4.9375 6.28125 4.9375H8.46875C8.59307 4.9375 8.7123 4.98689 8.80021 5.07479C8.88811 5.1627 8.9375 5.28193 8.9375 5.40625C8.9375 5.53057 8.88811 5.6498 8.80021 5.73771C8.7123 5.82561 8.59307 5.875 8.46875 5.875H6.28125C6.15693 5.875 6.0377 5.82561 5.94979 5.73771C5.86189 5.6498 5.8125 5.53057 5.8125 5.40625ZM6.28125 8.375H8.46875C8.59307 8.375 8.7123 8.42439 8.80021 8.51229C8.88811 8.6002 8.9375 8.71943 8.9375 8.84375C8.9375 8.96807 8.88811 9.0873 8.80021 9.17521C8.7123 9.26311 8.59307 9.3125 8.46875 9.3125H6.28125C6.15693 9.3125 6.0377 9.26311 5.94979 9.17521C5.86189 9.0873 5.8125 8.96807 5.8125 8.84375C5.8125 8.71943 5.86189 8.6002 5.94979 8.51229C6.0377 8.42439 6.15693 8.375 6.28125 8.375ZM4.7375 5.1125L3.4875 6.3625C3.39961 6.45028 3.28047 6.49959 3.15625 6.49959C3.03203 6.49959 2.91289 6.45028 2.825 6.3625L2.2 5.7375C2.15395 5.69459 2.11701 5.64284 2.09139 5.58534C2.06577 5.52784 2.05199 5.46577 2.05088 5.40283C2.04977 5.33989 2.06135 5.27737 2.08492 5.219C2.1085 5.16063 2.14359 5.10761 2.1881 5.0631C2.23261 5.01859 2.28563 4.9835 2.344 4.95992C2.40237 4.93635 2.46489 4.92477 2.52783 4.92588C2.59077 4.92699 2.65284 4.94077 2.71034 4.96639C2.76784 4.99201 2.81959 5.02895 2.8625 5.075L3.15625 5.36875L4.075 4.45C4.11791 4.40395 4.16966 4.36701 4.22716 4.34139C4.28466 4.31577 4.34673 4.30199 4.40967 4.30088C4.47261 4.29977 4.53513 4.31135 4.5935 4.33492C4.65187 4.3585 4.70489 4.39359 4.7494 4.4381C4.79391 4.48261 4.829 4.53563 4.85258 4.594C4.87615 4.65237 4.88773 4.71489 4.88662 4.77783C4.88551 4.84077 4.87173 4.90284 4.84611 4.96034C4.82049 5.01784 4.78355 5.06959 4.7375 5.1125ZM4.7375 7.8875C4.82528 7.97539 4.87459 8.09453 4.87459 8.21875C4.87459 8.34297 4.82528 8.46211 4.7375 8.55L3.4875 9.8C3.39961 9.88778 3.28047 9.93709 3.15625 9.93709C3.03203 9.93709 2.91289 9.88778 2.825 9.8L2.2 9.175C2.15395 9.13209 2.11701 9.08034 2.09139 9.02284C2.06577 8.96534 2.05199 8.90327 2.05088 8.84033C2.04977 8.77739 2.06135 8.71487 2.08492 8.6565C2.1085 8.59813 2.14359 8.54511 2.1881 8.5006C2.23261 8.45609 2.28563 8.421 2.344 8.39742C2.40237 8.37385 2.46489 8.36227 2.52783 8.36338C2.59077 8.36449 2.65284 8.37827 2.71034 8.40389C2.76784 8.42951 2.81959 8.46645 2.8625 8.5125L3.15625 8.80625L4.075 7.8875C4.16289 7.79972 4.28203 7.75041 4.40625 7.75041C4.53047 7.75041 4.64961 7.79972 4.7375 7.8875Z",
        d2: "",
      },
    },
    customers: {
      stroke: !0,
      view: "0 0 15 12",
      outline: {
        d1: "M9.6619 8.70063C9.95427 8.50097 10.2972 8.38817 10.651 8.37527C11.0048 8.36238 11.355 8.44992 11.6612 8.62776C11.9673 8.80561 12.2168 9.06649 12.3809 9.38023C12.5449 9.69397 12.6168 10.0477 12.5881 10.4006C11.8383 10.6627 11.0418 10.7647 10.25 10.7C10.2476 9.99164 10.0436 9.29798 9.6619 8.70125C9.32309 8.16987 8.85572 7.73252 8.30304 7.42969C7.75036 7.12686 7.13023 6.96832 6.50002 6.96875C5.86992 6.96843 5.24991 7.12701 4.69735 7.42984C4.14479 7.73267 3.67752 8.16996 3.33877 8.70125M10.2494 10.6994L10.25 10.7188C10.25 10.8594 10.2425 10.9981 10.2269 11.135C9.09275 11.7857 7.80758 12.1271 6.50002 12.125C5.14377 12.125 3.87065 11.765 2.77315 11.135C2.75708 10.9904 2.74936 10.8449 2.75002 10.6994M2.75002 10.6994C1.95854 10.7664 1.16246 10.6648 0.413146 10.4013C0.384615 10.0485 0.456518 9.69482 0.620539 9.38118C0.78456 9.06755 1.034 8.80675 1.34002 8.62893C1.64604 8.45111 1.99614 8.36353 2.34985 8.37633C2.70355 8.38913 3.0464 8.50178 3.33877 8.70125M2.75002 10.6994C2.75227 9.99108 2.95729 9.29804 3.33877 8.70125M8.37502 3.21875C8.37502 3.71603 8.17748 4.19295 7.82585 4.54458C7.47422 4.89621 6.9973 5.09375 6.50002 5.09375C6.00274 5.09375 5.52583 4.89621 5.1742 4.54458C4.82257 4.19295 4.62502 3.71603 4.62502 3.21875C4.62502 2.72147 4.82257 2.24456 5.1742 1.89292C5.52583 1.54129 6.00274 1.34375 6.50002 1.34375C6.9973 1.34375 7.47422 1.54129 7.82585 1.89292C8.17748 2.24456 8.37502 2.72147 8.37502 3.21875ZM12.125 5.09375C12.125 5.27842 12.0886 5.46129 12.018 5.6319C11.9473 5.80251 11.8437 5.95754 11.7131 6.08812C11.5826 6.2187 11.4275 6.32229 11.2569 6.39296C11.0863 6.46363 10.9034 6.5 10.7188 6.5C10.5341 6.5 10.3512 6.46363 10.1806 6.39296C10.01 6.32229 9.85498 6.2187 9.7244 6.08812C9.59382 5.95754 9.49024 5.80251 9.41956 5.6319C9.34889 5.46129 9.31252 5.27842 9.31252 5.09375C9.31252 4.72079 9.46068 4.3631 9.7244 4.09938C9.98813 3.83566 10.3458 3.6875 10.7188 3.6875C11.0917 3.6875 11.4494 3.83566 11.7131 4.09938C11.9769 4.3631 12.125 4.72079 12.125 5.09375ZM3.68752 5.09375C3.68752 5.27842 3.65115 5.46129 3.58048 5.6319C3.50981 5.80251 3.40622 5.95754 3.27564 6.08812C3.14506 6.2187 2.99003 6.32229 2.81942 6.39296C2.64881 6.46363 2.46594 6.5 2.28127 6.5C2.0966 6.5 1.91374 6.46363 1.74312 6.39296C1.57251 6.32229 1.41748 6.2187 1.2869 6.08812C1.15632 5.95754 1.05274 5.80251 0.982066 5.6319C0.911395 5.46129 0.875021 5.27842 0.875021 5.09375C0.875021 4.72079 1.02318 4.3631 1.2869 4.09938C1.55063 3.83566 1.90831 3.6875 2.28127 3.6875C2.65423 3.6875 3.01192 3.83566 3.27564 4.09938C3.53936 4.3631 3.68752 4.72079 3.68752 5.09375Z",
        d2: "",
      },
      filled: {
        d1: "M7.49998 4.75C8.09671 4.75 8.66901 4.51295 9.09097 4.09099C9.51292 3.66903 9.74998 3.09674 9.74998 2.5C9.74998 1.90326 9.51292 1.33097 9.09097 0.90901C8.66901 0.487053 8.09671 0.25 7.49998 0.25C6.90324 0.25 6.33094 0.487053 5.90899 0.90901C5.48703 1.33097 5.24998 1.90326 5.24998 2.5C5.24998 3.09674 5.48703 3.66903 5.90899 4.09099C6.33094 4.51295 6.90324 4.75 7.49998 4.75ZM4.49998 4C4.49998 4.39783 4.34194 4.77936 4.06064 5.06066C3.77933 5.34196 3.3978 5.5 2.99998 5.5C2.60215 5.5 2.22062 5.34196 1.93932 5.06066C1.65801 4.77936 1.49998 4.39783 1.49998 4C1.49998 3.60218 1.65801 3.22064 1.93932 2.93934C2.22062 2.65804 2.60215 2.5 2.99998 2.5C3.3978 2.5 3.77933 2.65804 4.06064 2.93934C4.34194 3.22064 4.49998 3.60218 4.49998 4ZM1.11748 9.4945C0.989442 9.42174 0.893561 9.30336 0.848977 9.163C0.716831 8.735 0.715446 8.27729 0.844997 7.84849C0.974549 7.4197 1.22914 7.03933 1.57617 6.7561C1.9232 6.47287 2.34687 6.29967 2.79293 6.25867C3.23899 6.21768 3.68714 6.31076 4.07998 6.526C3.2727 7.31932 2.76743 8.36939 2.65123 9.49525C2.63398 9.66175 2.64073 9.82675 2.66998 9.98575C2.1226 9.93842 1.59245 9.77067 1.11748 9.4945ZM12.33 9.985C12.8773 9.9379 13.4074 9.7704 13.8825 9.4945C14.0102 9.42159 14.1058 9.30323 14.1502 9.163C14.2826 8.73495 14.2841 8.27713 14.1547 7.84819C14.0252 7.41926 13.7706 7.03874 13.4236 6.75539C13.0765 6.47205 12.6527 6.29877 12.2065 6.25777C11.7604 6.21677 11.3121 6.30991 10.9192 6.52525C11.7272 7.31855 12.233 8.36893 12.3495 9.49525C12.3662 9.65885 12.3596 9.82399 12.33 9.98575M13.5 4C13.5 4.39783 13.3419 4.77936 13.0606 5.06066C12.7793 5.34196 12.3978 5.5 12 5.5C11.6022 5.5 11.2206 5.34196 10.9393 5.06066C10.658 4.77936 10.5 4.39783 10.5 4C10.5 3.60218 10.658 3.22064 10.9393 2.93934C11.2206 2.65804 11.6022 2.5 12 2.5C12.3978 2.5 12.7793 2.65804 13.0606 2.93934C13.3419 3.22064 13.5 3.60218 13.5 4ZM3.97798 10.1425C3.90401 10.0763 3.84667 9.99354 3.81058 9.90104C3.77449 9.80853 3.76066 9.70883 3.77023 9.61C3.86562 8.68711 4.29976 7.83235 4.98872 7.21094C5.67768 6.58952 6.57255 6.24557 7.50035 6.24557C8.42816 6.24557 9.32302 6.58952 10.012 7.21094C10.7009 7.83235 11.1351 8.68711 11.2305 9.61C11.2401 9.70884 11.2263 9.80855 11.1902 9.90107C11.1541 9.99358 11.0967 10.0763 11.0227 10.1425C10.0584 11.0177 8.80226 11.5018 7.49998 11.5C6.19794 11.5016 4.94209 11.0176 3.97798 10.1425Z",
        d2: "",
      },
    },
    driver: {
      stroke: !1,
      outline: {
        d1: "M8.42624 4.7875C8.3128 4.87656 8.16562 4.94781 7.98812 5.00562C8.02208 5.3528 7.98301 5.70323 7.87342 6.0344C7.76383 6.36557 7.58615 6.67013 7.35181 6.92852C7.11746 7.18691 6.83164 7.39339 6.51271 7.5347C6.19379 7.676 5.84882 7.749 5.49999 7.749C5.15116 7.749 4.80619 7.676 4.48727 7.5347C4.16834 7.39339 3.88252 7.18691 3.64817 6.92852C3.41383 6.67013 3.23615 6.36557 3.12656 6.0344C3.01698 5.70323 2.97791 5.3528 3.01187 5.00562C2.83437 4.94781 2.68718 4.87656 2.57405 4.7875C2.42718 4.67187 2.32874 4.5175 2.31718 4.33187C2.30624 4.15969 2.37437 4.01344 2.44249 3.91031C2.50974 3.81263 2.5896 3.72427 2.67999 3.6475C2.72374 3.60906 2.76687 3.575 2.80687 3.54531C2.79499 3.48125 2.78187 3.40375 2.76874 3.31406C2.71338 2.92015 2.68623 2.52278 2.68749 2.125C2.68749 2.02687 2.72937 1.95375 2.74874 1.92281C2.77312 1.88375 2.80187 1.85031 2.82812 1.82344C2.8803 1.76875 2.9478 1.71312 3.02187 1.65969C3.17187 1.55094 3.37812 1.42875 3.62312 1.31438C4.11155 1.08625 4.78249 0.875 5.49999 0.875C6.2178 0.875 6.88843 1.08656 7.37687 1.31438C7.58749 1.41071 7.78876 1.52631 7.97812 1.65969C8.05218 1.71312 8.11968 1.76906 8.17187 1.82344C8.19812 1.85031 8.22687 1.88375 8.25124 1.92281C8.27062 1.95375 8.31249 2.02687 8.31249 2.125C8.31249 2.62562 8.27187 3.03125 8.23124 3.31406C8.21812 3.40375 8.20499 3.48125 8.19312 3.54531C8.23312 3.575 8.27655 3.60906 8.3203 3.6475C8.39843 3.71594 8.4878 3.805 8.55749 3.91031C8.62593 4.01344 8.69374 4.15969 8.68312 4.33219C8.67155 4.5175 8.57312 4.67187 8.42624 4.7875ZM3.31312 2.22437C3.3178 2.64562 3.3528 2.98625 3.38749 3.22437C3.39562 3.28062 3.40374 3.33062 3.41124 3.375H7.58874C7.59655 3.33062 7.60437 3.28031 7.61249 3.22437C7.64687 2.98625 7.68218 2.64562 7.68687 2.22437C7.66254 2.20381 7.63742 2.18421 7.61155 2.16562C7.49874 2.08406 7.32749 1.98125 7.11249 1.88094C6.6803 1.67906 6.10124 1.5 5.49999 1.5C4.89874 1.5 4.31968 1.67906 3.88749 1.88094C3.67249 1.98125 3.50124 2.08406 3.38874 2.16531C3.36276 2.1841 3.33753 2.20391 3.31312 2.22469M3.24624 4L3.2453 4.00062C3.19137 4.03657 3.13971 4.07581 3.09062 4.11812C3.03499 4.16687 2.99062 4.21438 2.96374 4.25563C2.95735 4.2649 2.9516 4.27461 2.94655 4.28469C2.95098 4.28873 2.95557 4.29258 2.9603 4.29625C3.00718 4.33312 3.1078 4.38719 3.30405 4.44062C3.3428 4.45125 3.38437 4.46125 3.42874 4.47125L3.43155 4.47187C3.58843 4.50656 3.78155 4.5375 4.01687 4.56187C4.3503 4.59656 4.76999 4.61937 5.29437 4.62437L5.49999 4.625C6.50843 4.625 7.16062 4.56219 7.56874 4.47187L7.57124 4.47125C7.61593 4.46125 7.65749 4.45125 7.69624 4.44062C7.89218 4.3875 7.99312 4.33312 8.03968 4.29625C8.04442 4.29258 8.049 4.28873 8.05343 4.28469C8.04848 4.27462 8.04284 4.26491 8.03655 4.25563C8.00021 4.20455 7.95746 4.15834 7.90937 4.11812C7.86038 4.07581 7.80883 4.03657 7.75499 4.00062L7.75374 4H3.24624ZM5.41499 5.25C6.24062 5.25 6.88062 5.20625 7.37124 5.13C7.38737 5.38479 7.3513 5.64018 7.26523 5.88053C7.17917 6.12089 7.04493 6.34113 6.87074 6.52777C6.69655 6.71441 6.48608 6.86351 6.25223 6.96593C6.01838 7.06836 5.76608 7.12195 5.51079 7.12342C5.25549 7.12489 5.00259 7.07421 4.76758 6.97448C4.53256 6.87476 4.32039 6.7281 4.14406 6.54348C3.96773 6.35886 3.83096 6.14017 3.74214 5.90083C3.65331 5.66148 3.6143 5.40652 3.62749 5.15156C4.08468 5.21469 4.67062 5.25 5.41499 5.25ZM3.02437 11.1491C3.00808 11.2653 2.99994 11.3826 2.99999 11.5V11.8125C3.00003 11.8812 2.97742 11.948 2.93568 12.0026C2.89393 12.0571 2.83537 12.0964 2.76906 12.1143C2.70274 12.1323 2.63236 12.1278 2.56881 12.1017C2.50526 12.0757 2.45208 12.0294 2.41749 11.97C2.20688 12.0843 1.96042 12.1132 1.72905 12.0509L1.1253 11.8891C0.885228 11.8246 0.680572 11.6675 0.556337 11.4522C0.432102 11.2369 0.398458 10.981 0.462803 10.7409L0.705303 9.83531C0.769679 9.59518 0.9268 9.39045 1.14211 9.26615C1.35742 9.14185 1.61328 9.10816 1.85343 9.1725L2.45718 9.33406C2.66718 9.39031 2.84155 9.51375 2.9628 9.675C3.25209 9.27233 3.63315 8.94437 4.07443 8.7183C4.5157 8.49223 5.00449 8.37455 5.5003 8.375C5.99585 8.37467 6.48435 8.49236 6.92539 8.71831C7.36643 8.94426 7.74732 9.27199 8.03655 9.67437C8.16216 9.50779 8.33995 9.38809 8.54155 9.33437L9.1453 9.17281C9.38541 9.10847 9.64123 9.14211 9.85653 9.26635C10.0718 9.39058 10.229 9.59524 10.2934 9.83531L10.5362 10.7412C10.5681 10.8602 10.5762 10.9842 10.5601 11.1063C10.544 11.2283 10.5041 11.346 10.4425 11.4527C10.3809 11.5593 10.2989 11.6527 10.2012 11.7276C10.1035 11.8026 9.99205 11.8575 9.87312 11.8894L9.26968 12.0509C9.03872 12.1133 8.79265 12.0846 8.58218 11.9709C8.54748 12.0302 8.49423 12.0764 8.43064 12.1024C8.36706 12.1283 8.2967 12.1326 8.23043 12.1146C8.16416 12.0966 8.10568 12.0572 8.06403 12.0026C8.02237 11.948 7.99987 11.8812 7.99999 11.8125V11.5C8.00004 11.3826 7.9919 11.2653 7.97562 11.1491L6.34937 11.585C6.27388 11.7466 6.15387 11.8833 6.00342 11.979C5.85297 12.0748 5.67833 12.1257 5.49999 12.1257C5.32165 12.1257 5.14701 12.0748 4.99656 11.979C4.84611 11.8833 4.7261 11.7466 4.65062 11.585L3.02437 11.1491ZM4.59999 10.9241C4.64193 10.7816 4.71704 10.6511 4.81917 10.5433C4.92129 10.4354 5.04751 10.3534 5.18749 10.3037V9.01937C4.74916 9.07479 4.33332 9.24524 3.9822 9.51342C3.63109 9.7816 3.35722 10.1379 3.18843 10.5462L4.59999 10.9241ZM7.81155 10.5459C7.64272 10.1377 7.36883 9.78141 7.01772 9.51329C6.66661 9.24517 6.25078 9.07476 5.81249 9.01937V10.3034C6.09499 10.4034 6.31562 10.6347 6.39999 10.9244L7.81155 10.5459ZM8.48249 10.3209C8.47186 10.2813 8.46914 10.2399 8.47449 10.1993C8.47983 10.1586 8.49315 10.1193 8.51366 10.0838C8.53418 10.0482 8.5615 10.0171 8.59406 9.99207C8.62662 9.96708 8.66378 9.94875 8.70343 9.93812L9.30718 9.77625C9.3872 9.75487 9.47243 9.76613 9.54415 9.80756C9.61588 9.84898 9.66822 9.91719 9.68968 9.99719L9.93249 10.9028C9.94312 10.9425 9.94584 10.9838 9.9405 11.0245C9.93515 11.0652 9.92183 11.1044 9.90132 11.14C9.8808 11.1755 9.85348 11.2067 9.82092 11.2317C9.78836 11.2567 9.7512 11.275 9.71155 11.2856L9.1078 11.4475C9.06814 11.4581 9.02677 11.4608 8.98606 11.4555C8.94535 11.4501 8.9061 11.4368 8.87054 11.4162C8.83499 11.3957 8.80384 11.3683 8.77886 11.3357C8.75389 11.3031 8.73558 11.2659 8.72499 11.2262L8.48249 10.3209ZM1.69187 9.77625C1.6522 9.76557 1.61082 9.76281 1.57009 9.76814C1.52936 9.77346 1.49008 9.78677 1.4545 9.80729C1.41891 9.82781 1.38773 9.85514 1.36272 9.88773C1.3377 9.92031 1.31936 9.95751 1.30874 9.99719L1.06624 10.9025C1.05561 10.9421 1.05289 10.9835 1.05824 11.0242C1.06358 11.0649 1.0769 11.1041 1.09741 11.1397C1.11793 11.1752 1.14525 11.2064 1.17781 11.2314C1.21037 11.2564 1.24753 11.2747 1.28718 11.2853L1.89093 11.4472C1.93057 11.4578 1.97192 11.4605 2.01261 11.4552C2.05331 11.4498 2.09255 11.4365 2.1281 11.416C2.16365 11.3955 2.19481 11.3682 2.2198 11.3356C2.24479 11.3031 2.26312 11.2659 2.27374 11.2262L2.51624 10.3206C2.52692 10.281 2.52968 10.2396 2.52435 10.1988C2.51903 10.1581 2.50572 10.1188 2.4852 10.0833C2.46468 10.0477 2.43735 10.0165 2.40476 9.99147C2.37218 9.96646 2.33498 9.94812 2.2953 9.9375L1.69187 9.77625ZM5.81249 11.1875C5.81249 11.2704 5.77957 11.3499 5.72096 11.4085C5.66236 11.4671 5.58287 11.5 5.49999 11.5C5.41711 11.5 5.33763 11.4671 5.27902 11.4085C5.22041 11.3499 5.18749 11.2704 5.18749 11.1875C5.18749 11.1046 5.22041 11.0251 5.27902 10.9665C5.33763 10.9079 5.41711 10.875 5.49999 10.875C5.58287 10.875 5.66236 10.9079 5.72096 10.9665C5.77957 11.0251 5.81249 11.1046 5.81249 11.1875Z",
        d2: "M4.5625 2.4375C4.5625 2.35462 4.59542 2.27513 4.65403 2.21653C4.71263 2.15792 4.79212 2.125 4.875 2.125H6.125C6.20788 2.125 6.28737 2.15792 6.34597 2.21653C6.40458 2.27513 6.4375 2.35462 6.4375 2.4375C6.4375 2.52038 6.40458 2.59987 6.34597 2.65847C6.28737 2.71708 6.20788 2.75 6.125 2.75H4.875C4.79212 2.75 4.71263 2.71708 4.65403 2.65847C4.59542 2.59987 4.5625 2.52038 4.5625 2.4375Z",
      },
      filled: {
        d1: "M2.68748 1.96875C2.68748 1.83219 4.09873 0.875 5.49998 0.875C6.90123 0.875 8.31248 1.83219 8.31248 1.96875C8.31248 2.45625 8.26061 2.745 8.21686 2.90219C8.18779 3.00531 8.09123 3.0625 7.98404 3.0625H3.01592C2.90873 3.0625 2.81217 3.00531 2.78311 2.90219C2.73936 2.745 2.68748 2.45625 2.68748 1.96875ZM5.03123 1.8125C4.94835 1.8125 4.86887 1.84542 4.81026 1.90403C4.75165 1.96263 4.71873 2.04212 4.71873 2.125C4.71873 2.20788 4.75165 2.28737 4.81026 2.34597C4.86887 2.40458 4.94835 2.4375 5.03123 2.4375H5.96873C6.05161 2.4375 6.1311 2.40458 6.1897 2.34597C6.24831 2.28737 6.28123 2.20788 6.28123 2.125C6.28123 2.04212 6.24831 1.96263 6.1897 1.90403C6.1311 1.84542 6.05161 1.8125 5.96873 1.8125H5.03123ZM3.01186 5.00563C1.97123 4.68375 2.23373 4.10875 2.63061 3.6875H8.45623C8.77373 4.09313 8.94404 4.64031 7.98436 4.96781C8.02358 5.31594 7.9892 5.66843 7.88344 6.00242C7.77768 6.33641 7.60291 6.64445 7.37045 6.90655C7.13799 7.16865 6.85304 7.37897 6.53408 7.52387C6.21511 7.66877 5.86925 7.74501 5.51893 7.74765C5.1686 7.7503 4.82163 7.67928 4.50052 7.53921C4.17941 7.39914 3.89132 7.19314 3.65493 6.93457C3.41855 6.676 3.23915 6.37064 3.12836 6.03828C3.01758 5.70593 2.97789 5.354 3.01186 5.00531M5.41498 5.24969C6.24061 5.24969 6.88061 5.20594 7.37123 5.12969C7.38736 5.38447 7.35129 5.63987 7.26522 5.88022C7.17916 6.12057 7.04492 6.34082 6.87073 6.52746C6.69654 6.7141 6.48607 6.8632 6.25222 6.96562C6.01837 7.06805 5.76607 7.12164 5.51078 7.12311C5.25548 7.12458 5.00258 7.0739 4.76757 6.97417C4.53255 6.87445 4.32038 6.72778 4.14405 6.54316C3.96772 6.35854 3.83095 6.13986 3.74213 5.90051C3.6533 5.66117 3.61429 5.40621 3.62748 5.15125C4.08467 5.21438 4.67061 5.24969 5.41498 5.24969ZM8.13029 9.8125C7.84763 9.3715 7.45856 9.0087 6.99891 8.75749C6.53926 8.50629 6.0238 8.37475 5.49998 8.375C4.97595 8.37466 4.46026 8.50622 4.00043 8.75754C3.5406 9.00886 3.15141 9.37188 2.86873 9.81313C2.76382 9.65154 2.60269 9.53463 2.41654 9.485L1.81279 9.32344C1.61268 9.26979 1.39945 9.29782 1.22001 9.40138C1.04056 9.50493 0.909597 9.67552 0.855918 9.87563L0.613418 10.7813C0.58686 10.8804 0.580083 10.9837 0.593476 11.0855C0.606869 11.1872 0.640169 11.2853 0.691475 11.3741C0.74278 11.463 0.811086 11.5409 0.892491 11.6033C0.973897 11.6658 1.06681 11.7116 1.16592 11.7381L1.76936 11.9C1.87086 11.9273 1.97684 11.9339 2.08093 11.9191C2.18501 11.9044 2.28504 11.8688 2.37498 11.8144C2.37523 11.8973 2.40839 11.9766 2.46717 12.0351C2.52595 12.0935 2.60554 12.1262 2.68842 12.1259C2.7713 12.1257 2.85069 12.0925 2.90911 12.0337C2.96754 11.975 3.00023 11.8954 2.99998 11.8125V11.5C2.99998 11.3809 3.00842 11.2638 3.02436 11.1491L4.65061 11.585C4.72609 11.7466 4.8461 11.8833 4.99655 11.979C5.147 12.0748 5.32164 12.1257 5.49998 12.1257C5.67832 12.1257 5.85296 12.0748 6.00341 11.979C6.15386 11.8833 6.27387 11.7466 6.34936 11.585L7.97561 11.1491C7.99154 11.2638 7.99998 11.3809 7.99998 11.5V11.8125C7.99957 11.8954 8.03209 11.975 8.0904 12.0339C8.14872 12.0928 8.22804 12.1261 8.31092 12.1266C8.3938 12.127 8.47345 12.0945 8.53235 12.0361C8.59124 11.9778 8.62457 11.8985 8.62498 11.8156C8.79998 11.9206 9.01623 11.9572 9.22904 11.9L9.83279 11.7384C9.9319 11.7119 10.0248 11.6661 10.1062 11.6036C10.1876 11.5412 10.2559 11.4633 10.3072 11.3744C10.3585 11.2856 10.3918 11.1875 10.4052 11.0858C10.4186 10.984 10.4119 10.8807 10.3853 10.7816L10.1425 9.87594C10.0888 9.67583 9.95784 9.50524 9.77839 9.40169C9.59895 9.29814 9.38572 9.2701 9.18561 9.32375L8.58186 9.48531C8.39613 9.53477 8.23528 9.65151 8.13029 9.8125ZM3.18842 10.5456C3.35727 10.1374 3.63117 9.78119 3.98228 9.51312C4.33339 9.24505 4.74921 9.0747 5.18748 9.01938V10.3034C5.04743 10.3531 4.92116 10.4353 4.81904 10.5432C4.71691 10.6512 4.64184 10.7818 4.59998 10.9244L3.18842 10.5456ZM7.81154 10.5456C7.64266 10.1374 7.36876 9.78122 7.01765 9.51316C6.66654 9.24509 6.25074 9.07473 5.81248 9.01938V10.3034C6.09498 10.4034 6.31561 10.6347 6.39998 10.9244L7.81154 10.5456ZM5.49998 11.5C5.58286 11.5 5.66235 11.4671 5.72095 11.4085C5.77956 11.3499 5.81248 11.2704 5.81248 11.1875C5.81248 11.1046 5.77956 11.0251 5.72095 10.9665C5.66235 10.9079 5.58286 10.875 5.49998 10.875C5.4171 10.875 5.33762 10.9079 5.27901 10.9665C5.2204 11.0251 5.18748 11.1046 5.18748 11.1875C5.18748 11.2704 5.2204 11.3499 5.27901 11.4085C5.33762 11.4671 5.4171 11.5 5.49998 11.5Z",
        d2: "",
      },
    },
    delivery: {
      stroke: !1,
      view: "0 0 15 15",
      outline: {
        d1: "M0.531494 1.5625C0.531494 0.838 1.11949 0.25 1.84399 0.25H8.18824C8.91274 0.25 9.50074 0.838 9.50074 1.5625V2.5H10.1615C10.3705 2.50001 10.5754 2.55825 10.7532 2.66821C10.931 2.77816 11.0746 2.93547 11.168 3.1225L12.3815 5.54875C12.4597 5.70474 12.5005 5.87677 12.5007 6.05125V8.875C12.5007 9.17337 12.3822 9.45952 12.1712 9.67049C11.9603 9.88147 11.6741 10 11.3757 10H10.2132C10.1272 10.4239 9.89722 10.8049 9.56234 11.0786C9.22746 11.3524 8.80825 11.5019 8.37574 11.5019C7.94324 11.5019 7.52403 11.3524 7.18915 11.0786C6.85427 10.8049 6.62431 10.4239 6.53824 10H5.71324C5.62718 10.4239 5.39722 10.8049 5.06234 11.0786C4.72746 11.3524 4.30825 11.5019 3.87574 11.5019C3.44324 11.5019 3.02403 11.3524 2.68915 11.0786C2.35427 10.8049 2.12431 10.4239 2.03824 10H1.84399C1.4959 10 1.16206 9.86172 0.915916 9.61558C0.669775 9.36944 0.531494 9.0356 0.531494 8.6875V1.5625ZM6.53824 9.25C6.63762 8.76277 6.92646 8.33497 7.34124 8.0607C7.75602 7.78644 8.26276 7.68816 8.74999 7.7875V1.5625C8.74999 1.41332 8.69073 1.27024 8.58524 1.16475C8.47975 1.05926 8.33668 1 8.18749 1H1.84399C1.69481 1 1.55174 1.05926 1.44625 1.16475C1.34076 1.27024 1.28149 1.41332 1.28149 1.5625V8.6875C1.28149 8.998 1.53349 9.25 1.84399 9.25H2.03824C2.12431 8.82614 2.35427 8.44507 2.68915 8.17136C3.02403 7.89764 3.44324 7.74812 3.87574 7.74812C4.30825 7.74812 4.72746 7.89764 5.06234 8.17136C5.39722 8.44507 5.62718 8.82614 5.71324 9.25H6.53824ZM9.49999 8.125C9.85999 8.395 10.1195 8.7925 10.2125 9.25H11.375C11.4745 9.25 11.5698 9.21049 11.6402 9.14016C11.7105 9.06984 11.75 8.97446 11.75 8.875V6.25H9.49999V8.125ZM9.49999 5.5H11.5175L10.4975 3.457C10.4663 3.39479 10.4185 3.34248 10.3592 3.30592C10.3 3.26937 10.2318 3.25 10.1622 3.25H9.49999V5.5ZM3.87499 8.5C3.57663 8.5 3.29048 8.61853 3.0795 8.8295C2.86852 9.04048 2.74999 9.32663 2.74999 9.625C2.74999 9.92337 2.86852 10.2095 3.0795 10.4205C3.29048 10.6315 3.57663 10.75 3.87499 10.75C4.17336 10.75 4.45951 10.6315 4.67049 10.4205C4.88147 10.2095 4.99999 9.92337 4.99999 9.625C4.99999 9.32663 4.88147 9.04048 4.67049 8.8295C4.45951 8.61853 4.17336 8.5 3.87499 8.5ZM7.24999 9.625C7.24999 9.77274 7.27909 9.91903 7.33563 10.0555C7.39217 10.192 7.47503 10.316 7.5795 10.4205C7.68396 10.525 7.80798 10.6078 7.94448 10.6644C8.08097 10.7209 8.22726 10.75 8.37499 10.75C8.52273 10.75 8.66902 10.7209 8.80551 10.6644C8.942 10.6078 9.06602 10.525 9.17049 10.4205C9.27496 10.316 9.35782 10.192 9.41436 10.0555C9.4709 9.91903 9.49999 9.77274 9.49999 9.625C9.49999 9.32663 9.38147 9.04048 9.17049 8.8295C8.95951 8.61853 8.67336 8.5 8.37499 8.5C8.07663 8.5 7.79048 8.61853 7.5795 8.8295C7.36852 9.04048 7.24999 9.32663 7.24999 9.625Z",
        d2: "",
      },
      filled: {
        d1: "M1.53149 3.5625C1.53149 2.838 2.11949 2.25 2.84399 2.25H9.18824C9.91274 2.25 10.5007 2.838 10.5007 3.5625V4.5H11.1615C11.3705 4.50001 11.5754 4.55825 11.7532 4.66821C11.931 4.77816 12.0746 4.93547 12.168 5.1225L13.3815 7.54875C13.4597 7.70474 13.5005 7.87677 13.5007 8.05125V10.875C13.5007 11.1734 13.3822 11.4595 13.1712 11.6705C12.9603 11.8815 12.6741 12 12.3757 12H11.2132C11.1272 12.4239 10.8972 12.8049 10.5623 13.0786C10.2275 13.3524 9.80825 13.5019 9.37574 13.5019C8.94324 13.5019 8.52403 13.3524 8.18915 13.0786C7.85427 12.8049 7.62431 12.4239 7.53824 12H6.71324C6.62718 12.4239 6.39722 12.8049 6.06234 13.0786C5.72746 13.3524 5.30825 13.5019 4.87574 13.5019C4.44324 13.5019 4.02403 13.3524 3.68915 13.0786C3.35427 12.8049 3.12431 12.4239 3.03824 12H2.84399C2.4959 12 2.16206 11.8617 1.91592 11.6156C1.66977 11.3694 1.53149 11.0356 1.53149 10.6875V3.5625ZM10.5007 5.25V7.5H12.5182L11.4975 5.457C11.4663 5.39479 11.4185 5.34248 11.3592 5.30592C11.3 5.26937 11.2318 5.25 11.1622 5.25H10.5007ZM4.87574 10.5C4.57738 10.5 4.29123 10.6185 4.08025 10.8295C3.86927 11.0405 3.75074 11.3266 3.75074 11.625C3.75074 11.9234 3.86927 12.2095 4.08025 12.4205C4.29123 12.6315 4.57738 12.75 4.87574 12.75C5.17411 12.75 5.46026 12.6315 5.67124 12.4205C5.88222 12.2095 6.00074 11.9234 6.00074 11.625C6.00074 11.3266 5.88222 11.0405 5.67124 10.8295C5.46026 10.6185 5.17411 10.5 4.87574 10.5ZM8.25074 11.625C8.25074 11.9234 8.36927 12.2095 8.58025 12.4205C8.79123 12.6315 9.07738 12.75 9.37574 12.75C9.67411 12.75 9.96026 12.6315 10.1712 12.4205C10.3822 12.2095 10.5007 11.9234 10.5007 11.625C10.5007 11.3266 10.3822 11.0405 10.1712 10.8295C9.96026 10.6185 9.67411 10.5 9.37574 10.5C9.07738 10.5 8.79123 10.6185 8.58025 10.8295C8.36927 11.0405 8.25074 11.3266 8.25074 11.625Z",
        d2: "",
      },
    },
    report: {
      stroke: !1,
      outline: {
        d1: "M9.84375 8.125C9.84375 8.00068 9.79436 7.88145 9.70646 7.79354C9.61855 7.70564 9.49932 7.65625 9.375 7.65625H5.625C5.50068 7.65625 5.38145 7.70564 5.29354 7.79354C5.20564 7.88145 5.15625 8.00068 5.15625 8.125C5.15625 8.24932 5.20564 8.36855 5.29354 8.45646C5.38145 8.54436 5.50068 8.59375 5.625 8.59375H9.375C9.49932 8.59375 9.61855 8.54436 9.70646 8.45646C9.79436 8.36855 9.84375 8.24932 9.84375 8.125ZM9.84375 10.625C9.84375 10.5007 9.79436 10.3815 9.70646 10.2935C9.61855 10.2056 9.49932 10.1563 9.375 10.1563H5.625C5.50068 10.1563 5.38145 10.2056 5.29354 10.2935C5.20564 10.3815 5.15625 10.5007 5.15625 10.625C5.15625 10.7493 5.20564 10.8685 5.29354 10.9565C5.38145 11.0444 5.50068 11.0938 5.625 11.0938H9.375C9.49932 11.0938 9.61855 11.0444 9.70646 10.9565C9.79436 10.8685 9.84375 10.7493 9.84375 10.625Z",
        d2: "M4.375 1.40625C3.91916 1.40625 3.48199 1.58733 3.15966 1.90966C2.83733 2.23199 2.65625 2.66916 2.65625 3.125V11.875C2.65625 12.3308 2.83733 12.768 3.15966 13.0903C3.48199 13.4127 3.91916 13.5938 4.375 13.5938H10.625C11.0808 13.5938 11.518 13.4127 11.8403 13.0903C12.1627 12.768 12.3437 12.3308 12.3437 11.875V4.98C12.3437 4.74187 12.2662 4.51063 12.1225 4.32063L10.2487 1.84062C10.1468 1.7057 10.0149 1.59625 9.86356 1.52088C9.71217 1.44551 9.54536 1.40627 9.37625 1.40625H4.375ZM3.59375 3.125C3.59375 2.69375 3.94375 2.34375 4.375 2.34375H8.90625V5.09188C8.90625 5.35063 9.11625 5.56063 9.375 5.56063H11.4062V11.875C11.4062 12.3062 11.0562 12.6562 10.625 12.6562H4.375C3.94375 12.6562 3.59375 12.3062 3.59375 11.875V3.125Z",
      },
      filled: {
        d1: "M8.90625 1.5625C8.90625 1.52106 8.88979 1.48132 8.86049 1.45201C8.83118 1.42271 8.79144 1.40625 8.75 1.40625H4.375C3.91916 1.40625 3.48199 1.58733 3.15966 1.90966C2.83733 2.23199 2.65625 2.66916 2.65625 3.125V11.875C2.65625 12.3308 2.83733 12.768 3.15966 13.0903C3.48199 13.4127 3.91916 13.5938 4.375 13.5938H10.625C11.0808 13.5938 11.518 13.4127 11.8403 13.0903C12.1627 12.768 12.3438 12.3308 12.3438 11.875V5.71688C12.3438 5.67544 12.3273 5.63569 12.298 5.60639C12.2687 5.57709 12.2289 5.56063 12.1875 5.56063H9.375C9.25068 5.56063 9.13145 5.51124 9.04354 5.42333C8.95564 5.33542 8.90625 5.2162 8.90625 5.09188V1.5625ZM9.375 7.65625C9.49932 7.65625 9.61855 7.70564 9.70646 7.79354C9.79436 7.88145 9.84375 8.00068 9.84375 8.125C9.84375 8.24932 9.79436 8.36855 9.70646 8.45646C9.61855 8.54436 9.49932 8.59375 9.375 8.59375H5.625C5.50068 8.59375 5.38145 8.54436 5.29354 8.45646C5.20564 8.36855 5.15625 8.24932 5.15625 8.125C5.15625 8.00068 5.20564 7.88145 5.29354 7.79354C5.38145 7.70564 5.50068 7.65625 5.625 7.65625H9.375ZM9.375 10.1562C9.49932 10.1562 9.61855 10.2056 9.70646 10.2935C9.79436 10.3815 9.84375 10.5007 9.84375 10.625C9.84375 10.7493 9.79436 10.8685 9.70646 10.9565C9.61855 11.0444 9.49932 11.0938 9.375 11.0938H5.625C5.50068 11.0938 5.38145 11.0444 5.29354 10.9565C5.20564 10.8685 5.15625 10.7493 5.15625 10.625C5.15625 10.5007 5.20564 10.3815 5.29354 10.2935C5.38145 10.2056 5.50068 10.1562 5.625 10.1562H9.375Z",
        d2: "M9.84375 1.76503C9.84375 1.65003 9.96438 1.57691 10.0538 1.64878C10.1294 1.71003 10.1975 1.78128 10.2556 1.86253L12.1388 4.48566C12.1813 4.54566 12.135 4.62316 12.0613 4.62316H10C9.95856 4.62316 9.91882 4.6067 9.88951 4.57739C9.86021 4.54809 9.84375 4.50835 9.84375 4.46691V1.76503Z",
      },
    },
    rightArrow: {
      stroke: !0,
      outline: { d1: "M1.25 1.25L5.75 6.5L1.25 11.75", d2: "" },
      filled: { d1: "", d2: "" },
    },
    rightArrowLast: {
      stroke: !1,
      outline: {
        d1: "M7.87499 0.774994C8.03811 0.775001 8.1957 0.834072 8.31863 0.941284C8.44156 1.0485 8.52151 1.1966 8.54369 1.35819L8.54999 1.44999V9.54999C8.54994 9.72101 8.48497 9.88564 8.36822 10.0106C8.25146 10.1356 8.09162 10.2116 7.921 10.2232C7.75038 10.2349 7.58169 10.1813 7.44902 10.0734C7.31636 9.96548 7.2296 9.81122 7.20629 9.64179L7.19999 9.54999V1.44999C7.19999 1.27097 7.27111 1.09928 7.3977 0.972697C7.52428 0.84611 7.69597 0.774994 7.87499 0.774994ZM0.422992 0.972994C0.537281 0.858678 0.6888 0.789173 0.849998 0.777116C1.0112 0.765059 1.17137 0.811251 1.30139 0.907294L1.37699 0.972994L5.42699 5.02299C5.54131 5.13728 5.61081 5.2888 5.62287 5.45C5.63493 5.6112 5.58874 5.77137 5.49269 5.90139L5.42699 5.97699L1.37699 10.027C1.25639 10.1467 1.0951 10.2164 0.925318 10.2224C0.755531 10.2284 0.589734 10.1701 0.461016 10.0592C0.332297 9.94837 0.250125 9.79303 0.230898 9.62423C0.211672 9.45543 0.256806 9.28558 0.357292 9.14859L0.422992 9.07299L3.99599 5.49999L0.422992 1.92699C0.296586 1.80043 0.225586 1.62887 0.225586 1.44999C0.225586 1.27112 0.296586 1.09956 0.422992 0.972994Z",
        d2: "",
      },
      filled: { d1: "", d2: "" },
    },
    leftArrow: {
      stroke: !0,
      outline: { d1: "M5.75 1.25L1.25 6.5L5.75 11.75", d2: "" },
      filled: { d1: "", d2: "" },
    },
    leftArrowLast: {
      stroke: !1,
      outline: {
        d1: "M0.900641 0.774994C0.737528 0.775001 0.579934 0.834072 0.457004 0.941284C0.334074 1.0485 0.254125 1.1966 0.231941 1.35819L0.225641 1.44999V9.54999C0.225694 9.72101 0.290662 9.88564 0.407417 10.0106C0.524173 10.1356 0.68401 10.2116 0.854634 10.2232C1.02526 10.2349 1.19394 10.1813 1.32661 10.0734C1.45928 9.96548 1.54603 9.81122 1.56934 9.64179L1.57564 9.54999V1.44999C1.57564 1.27097 1.50453 1.09928 1.37794 0.972697C1.25135 0.84611 1.07966 0.774994 0.900641 0.774994ZM8.35264 0.972994C8.23835 0.858678 8.08683 0.789173 7.92564 0.777116C7.76444 0.765059 7.60427 0.811251 7.47424 0.907294L7.39864 0.972994L3.34864 5.02299C3.23433 5.13728 3.16482 5.2888 3.15276 5.45C3.14071 5.6112 3.1869 5.77137 3.28294 5.90139L3.34864 5.97699L7.39864 10.027C7.51924 10.1467 7.68053 10.2164 7.85032 10.2224C8.0201 10.2284 8.1859 10.1701 8.31462 10.0592C8.44334 9.94837 8.52551 9.79303 8.54474 9.62423C8.56396 9.45543 8.51883 9.28558 8.41834 9.14859L8.35264 9.07299L4.77964 5.49999L8.35264 1.92699C8.47905 1.80043 8.55005 1.62887 8.55005 1.44999C8.55005 1.27112 8.47905 1.09956 8.35264 0.972994Z",
        d2: "",
      },
      filled: { d1: "", d2: "" },
    },
    arrowDown: {
      stroke: !1,
      outline: {
        d1: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
        d2: "",
      },
      filled: { d1: "", d2: "" },
    },
    arrowUp: {
      stroke: !0,
      outline: { d1: "M0.666672 4L4 0.666667L7.33334 4", d2: "" },
      filled: { d1: "", d2: "" },
    },
    check: {
      stroke: !0,
      outline: { d1: "M1.125 7.125L6.375 12.375L16.875 1.125", d2: "" },
      filled: { d1: "", d2: "" },
    },
    ellipsis: {
      stroke: !0,
      outline: {
        d1: "M0.666656 2.00004C0.666656 2.17685 0.736895 2.34642 0.861919 2.47144C0.986943 2.59647 1.15651 2.66671 1.33332 2.66671C1.51013 2.66671 1.6797 2.59647 1.80473 2.47144C1.92975 2.34642 1.99999 2.17685 1.99999 2.00004C1.99999 1.82323 1.92975 1.65366 1.80473 1.52864C1.6797 1.40361 1.51013 1.33337 1.33332 1.33337C1.15651 1.33337 0.986943 1.40361 0.861919 1.52864C0.736895 1.65366 0.666656 1.82323 0.666656 2.00004ZM5.33332 2.00004C5.33332 2.17685 5.40356 2.34642 5.52858 2.47144C5.65361 2.59647 5.82318 2.66671 5.99999 2.66671C6.1768 2.66671 6.34637 2.59647 6.47139 2.47144C6.59642 2.34642 6.66666 2.17685 6.66666 2.00004C6.66666 1.82323 6.59642 1.65366 6.47139 1.52864C6.34637 1.40361 6.1768 1.33337 5.99999 1.33337C5.82318 1.33337 5.65361 1.40361 5.52858 1.52864C5.40356 1.65366 5.33332 1.82323 5.33332 2.00004ZM9.99999 2.00004C9.99999 2.17685 10.0702 2.34642 10.1953 2.47144C10.3203 2.59647 10.4898 2.66671 10.6667 2.66671C10.8435 2.66671 11.013 2.59647 11.1381 2.47144C11.2631 2.34642 11.3333 2.17685 11.3333 2.00004C11.3333 1.82323 11.2631 1.65366 11.1381 1.52864C11.013 1.40361 10.8435 1.33337 10.6667 1.33337C10.4898 1.33337 10.3203 1.40361 10.1953 1.52864C10.0702 1.65366 9.99999 1.82323 9.99999 2.00004Z",
        d2: "",
      },
      filled: { d1: "", d2: "" },
    },
    notification: {
      stroke: !1,
      view: "0 0 15 15",
      outline: { d1: "", d2: "" },
      filled: {
        d1: "M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z",
        d2: "",
      },
    },
  },
  x = ({
    name: e,
    width: t = "15",
    filled: r,
    height: o = "15",
    fill: a,
    onClick: n,
  }) => {
    const s = h[e];
    return s
      ? i.exports.jsx("div", {
          onClick: n,
          children:
            !0 === s?.stroke
              ? i.exports.jsxs("svg", {
                  width: t,
                  height: o,
                  viewBox: s?.view ? s?.view : "0 0 15 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    i.exports.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: r ? s?.filled?.d1 : s?.outline?.d1,
                      fill: r ? a : "",
                      stroke: a,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    i.exports.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: r ? s?.filled?.d2 : s?.outline?.d2,
                      fill: a,
                    }),
                  ],
                })
              : i.exports.jsxs("svg", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  width: t,
                  height: o,
                  viewBox: s?.view ? s?.view : "0 0 15 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    i.exports.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: r ? s?.filled?.d1 : s?.outline?.d1,
                      fill: a,
                    }),
                    i.exports.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: r ? s?.filled?.d2 : s?.outline?.d2,
                      fill: a,
                    }),
                  ],
                }),
        })
      : null;
  },
  m = r(
    (
      {
        label: e,
        type: r = "text",
        placeholder: a = "enter the value",
        disabled: n = !1,
        icon: s,
        value: l,
        hint: c,
        onChange: d,
        name: p,
        selectList: C,
      },
      f
    ) => {
      const [u, w] = t(l || ""),
        [g, b] = t(C && C.length > 0 ? C[0].value : ""),
        [h, x] = t(""),
        [m, y] = t(null),
        v = () =>
          "textarea" === r
            ? `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${s ? "px-10" : "px-3.5"} shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff] ${n && "bg-[#f9fafb] shadow-sm"} ${h && "shadow-md shadow-[#fda29b]"}`
            : `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${s ? "px-10" : "px-3.5"} ${C && "pl-16"} shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff]  ${n && "bg-[#f9fafb] shadow-sm"} ${h && "shadow-md shadow-[#fda29b]"}`,
        k = (e) => {
          const t = e.target.value;
          w(t), d && d(t);
        };
      o(() => {
        y(C && "number" === r && u && g ? { number: u, select: g } : null);
      }, [u, g, C, r]);
      const j = (e) => {
        "Enter" === e.key &&
          (() => {
            if ("email" === r) {
              if (/\S+@\S+\.\S+/.test(u)) return x(""), !0;
              x("Enter a valid email address.");
            } else {
              if ("password" === r)
                return (
                  u.length < 8 &&
                    x("Password must be at least 8 characters long."),
                  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(u)
                    ? (x(""), !0)
                    : void x(
                        "Password must include at least one special character."
                      )
                );
              if ("number" === r) {
                if (!(isNaN("number" === u) || !u || u.length < 10))
                  return x(""), !0;
                x("Please enter a valid number.");
              } else if ("text" === r) {
                if (u) return x(""), !0;
                x("You cannot leave the text area empty.");
              }
            }
          })();
      };
      return i.exports.jsxs("div", {
        ref: f,
        className: "relative w-full md:w-full my-4",
        children: [
          e &&
            i.exports.jsx("label", {
              className:
                "block font-medium leading-5  capitalize tracking-wide text-[#344054] text-sm mb-2",
              children: e,
            }),
          s &&
            i.exports.jsx("div", {
              className: `absolute z-10 ${e ? "top-[42px]" : "top-[12px]"} left-3.5 text-[22px] text-gray-400`,
              children: s,
            }),
          "textarea" === r
            ? i.exports.jsx("textarea", {
                disabled: n,
                name: p,
                value: u,
                onChange: k,
                onKeyDown: j,
                className: v(),
                placeholder: a,
              })
            : i.exports.jsx("input", {
                name: p,
                disabled: n,
                type: r,
                value: u,
                onChange: k,
                onKeyDown: j,
                className: v(),
                placeholder: a,
              }),
          "number" === r &&
            C &&
            i.exports.jsx("select", {
              value: g,
              onChange: (e) => {
                const t = e.target.value;
                b(t), d && d(t);
              },
              className:
                "absolute top-[42px] left-2 outline-none bg-white text-[#101828] text-sm",
              children: C.map((e) =>
                i.exports.jsx(
                  "option",
                  { value: e?.value, className: "text-sm", children: e?.name },
                  e?.id
                )
              ),
            }),
          c &&
            i.exports.jsx("div", {
              className: "text-sm mt-1 font-normal text-[#667085]",
              children: c,
            }),
          h &&
            i.exports.jsxs(i.exports.Fragment, {
              children: [
                i.exports.jsx("div", {
                  className: "text-sm mt-1 font-normal text-[#F04438]",
                  children: h,
                }),
                i.exports.jsx("div", {
                  className:
                    "absolute " +
                    (e ? "top-[42px] right-3" : "top-[15px] right-3"),
                }),
              ],
            }),
        ],
      });
    }
  );
m.displayName = "InputField";
const y = ({ data: e, icon: r }) => {
    const [o, a] = t(!1),
      [n, s] = t(!1),
      [l, c] = t({}),
      d = e.length === Object.values(l).filter(Boolean).length,
      p = n ? e : e.slice(0, 3);
    return i.exports.jsxs("div", {
      className: "relative",
      children: [
        i.exports.jsx("div", {
          onClick: () => a(!o),
          className: "mt-0.5 relative cursor-pointer",
          children: r,
        }),
        !d &&
          i.exports.jsx("div", {
            className: "absolute p-1 bg-red-500 rounded-full top-0 left-3",
          }),
        i.exports.jsxs("div", {
          className:
            (o ? "" : "hidden") +
            "  absolute z-10 top-8 -translate-x-2 w-80 h-auto px-4 bg-[#fafbff] shadow-lg rounded-lg",
          children: [
            i.exports.jsxs("div", {
              style: { justifyContent: "space-between" },
              className: "flex items-center justify-between py-3.5 px-2",
              children: [
                i.exports.jsx("div", {
                  className: "font-medium text-xs leading-4",
                  children: "Notifications",
                }),
                i.exports.jsx("div", {
                  onClick: () => {
                    const t = e
                      .map((e) => e.id)
                      .reduce((e, t) => ((e[t] = !0), e), {});
                    c(t);
                  },
                  className:
                    "text-xs font-normal leading-[14px] text-[#E11D07]  cursor-pointer",
                  children: "Mark all as read",
                }),
              ],
            }),
            i.exports.jsx("div", {
              className: "px-2 py-3 font-medium text-xs leading-4",
              children: "New",
            }),
            p?.map((e) =>
              i.exports.jsx(
                "div",
                {
                  onClick: () => {
                    return (
                      (t = e.id), void (l[t] || c((e) => ({ ...e, [t]: !0 })))
                    );
                    var t;
                  },
                  className: "p-2 border-b-2 border-gray-300 ",
                  children: i.exports.jsxs("div", {
                    className: `flex items-start gap-2 ${l[e.id] ? "bg-white" : "bg-gray-100"} cursor-pointer p-2 rounded-md`,
                    children: [
                      i.exports.jsx("svg", {
                        width: "14",
                        height: "16",
                        viewBox: "0 0 14 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: i.exports.jsx("path", {
                          d: "M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z",
                          fill: "#202A31",
                        }),
                      }),
                      i.exports.jsxs("div", {
                        className: "",
                        children: [
                          i.exports.jsx("div", {
                            className:
                              "text-[14px] mb-1 font-normal leading-4 text-[#1b1b1b]",
                            children: e?.notificationContent,
                          }),
                          i.exports.jsx("div", {
                            className:
                              "text-[12px] text-[#667085] font-normal leading-[14.5px]",
                            children: e?.dateTime,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e?.id
              )
            ),
            i.exports.jsxs("div", {
              onClick: () => s(!n),
              className:
                "px-4 py-3 gap-2 flex items-center justify-center cursor-pointer",
              children: [
                i.exports.jsx("div", {
                  className:
                    "text-xs font-normal capitalize leading-4 text-[#e11d07]",
                  children: n ? "view less" : "view more",
                }),
                i.exports.jsx("div", {
                  className:
                    "border rounded-full px-0.5 cursor-pointer py-1 border-[#e11d07]",
                  children: i.exports.jsx("svg", {
                    width: "7",
                    height: "5",
                    viewBox: "0 0 7 5",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: i.exports.jsx("path", {
                      d: "M1.1665 2.5H5.83317M5.83317 2.5L4.08317 0.75M5.83317 2.5L4.08317 4.25",
                      stroke: "#e11d07",
                      strokeWidth: "0.75",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  v = ({ show: e, setShow: t, children: r, icon: o, iconBackground: a }) =>
    i.exports.jsx("div", {
      className:
        (e ? "visible" : "hidden") +
        " fixed top-0 inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full",
      children: i.exports.jsxs("div", {
        className: "relative",
        children: [
          i.exports.jsxs("div", {
            className:
              "bg-white px-8 py-4 rounded-lg shadow-md text-center border-t border-teal-100",
            children: [
              o &&
                i.exports.jsx("div", {
                  className: "flex items-center justify-center mb-2",
                  children: i.exports.jsx("span", {
                    style: { backgroundColor: `${a}` },
                    className: "px-2 py-2 rounded-full text-xl",
                    children: o,
                  }),
                }),
              r,
            ],
          }),
          i.exports.jsx("div", {
            onClick: () => t(!1),
            className:
              "absolute hover:scale-105 cursor-pointer text-sm top-1 right-2",
            children: "x",
          }),
        ],
      }),
    });
(v.Header = ({ children: e }) =>
  i.exports.jsx("div", {
    className: "font-semibold text-base leading-5 text-darkBlack mb-1",
    children: e,
  })),
  (v.Content = ({ children: e }) =>
    i.exports.jsx("div", {
      className: "text-[14px] text-[#667085] leading-5",
      children: e,
    })),
  (v.Footer = ({ children: e }) =>
    i.exports.jsx("div", {
      className: "mt-8 flex items-center justify-center gap-4 w-full",
      children: e,
    })),
  (v.Header.displayName = "Popup.Header"),
  (v.Content.displayName = "Popup.Content"),
  (v.Footer.displayName = "Popup.Footer");
const k = ({ titles: e = [], rows: r }) => {
    const [a, n] = t(1),
      [s, l] = t(1),
      [c, d] = t([]),
      [p, C] = t(6);
    o(() => {
      const e = Math.ceil(r.length / p);
      l(e);
      const t = (a - 1) * p,
        o = t + p;
      d(r.slice(t, o));
    }, [r, a, p]);
    const f = (e) => {
        n(e);
      },
      u = Array.from({ length: 20 }, (e, t) => t + 1);
    return i.exports.jsxs("div", {
      className: "mx-6 relative mt-4 h-full overflow-x-hidden",
      children: [
        i.exports.jsx("div", {
          className:
            "bg-white divide-y overflow-auto divide-gray-200 h-[90%] px-4",
          children: i.exports.jsxs("table", {
            className: "min-w-full divide-y divide-gray-200",
            children: [
              i.exports.jsx("thead", {
                className: "bg-zinc-50 sticky top-0",
                children: i.exports.jsx("tr", {
                  children: e?.map((e) =>
                    i.exports.jsx(
                      "th",
                      {
                        scope: "col",
                        className:
                          "px-4 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider",
                        children: e.render ? e.render() : e.name,
                      },
                      e.id
                    )
                  ),
                }),
              }),
              i.exports.jsx("tbody", {
                className: "bg-white divide-y divide-gray-200",
                children: c?.map((e) =>
                  i.exports.jsx(
                    "tr",
                    {
                      className:
                        "bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600",
                      children: Object.values(e)
                        .slice(1)
                        .map((e, t) =>
                          i.exports.jsx(
                            "td",
                            {
                              className: "py-4 text-left pl-4 pr-2 min-w-28",
                              children: e,
                            },
                            t
                          )
                        ),
                    },
                    e.key
                  )
                ),
              }),
            ],
          }),
        }),
        i.exports.jsxs("div", {
          className:
            "absolute bottom-8 right-0 flex items-center justify-end mr-12 gap-8",
          children: [
            i.exports.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                i.exports.jsx("div", {
                  className: "text-xs",
                  children: "Items per Page:",
                }),
                i.exports.jsx("select", {
                  className:
                    "outline-none bg-white text-xs border-b border-gray-300",
                  onChange: (e) => C(Number(e.target.value)),
                  children: u.map((e) =>
                    i.exports.jsx(
                      "option",
                      { className: "", value: e, children: e },
                      e
                    )
                  ),
                }),
              ],
            }),
            i.exports.jsxs("span", {
              className: "text-xs",
              children: [
                (a - 1) * p + 1,
                "-",
                Math.min(a * p, r.length),
                " of ",
                r.length,
              ],
            }),
            i.exports.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                i.exports.jsx(x, {
                  onClick: () => f(1),
                  name: "leftArrowLast",
                  fill: 1 === a ? "#7b7b7d" : "#000",
                }),
                i.exports.jsx(x, {
                  onClick: () => f(a > 1 ? a - 1 : 1),
                  name: "leftArrow",
                  fill: 1 === a ? "#7b7b7d" : "#000",
                }),
                i.exports.jsx(x, {
                  onClick: () => f(a < s ? a + 1 : s),
                  name: "rightArrow",
                  fill: a === s ? "#7b7b7d" : "#000",
                }),
                i.exports.jsx(x, {
                  onClick: () => f(s),
                  name: "rightArrowLast",
                  fill: a === s ? "#7b7b7d" : "#000",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  j = ({ id: e, name: t, disabled: r = !1, value: o, sideLabel: a }) =>
    i.exports.jsxs("div", {
      className: "flex items-center gap-2",
      children: [
        i.exports.jsxs("label", {
          className: "relative flex cursor-pointer items-center p-1 rounded-md",
          children: [
            i.exports.jsx("input", {
              type: "checkbox",
              id: e,
              name: t,
              value: o,
              disabled: r,
              className: "sr-only peer",
            }),
            i.exports.jsx("div", {
              className:
                "relative w-5 h-5 border border-black peer:absolute peer-focus:border-red-600 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-md peer dark:bg-gray-700 peer-checked:border-none  peer-checked:bg-red-600",
              children: i.exports.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "white",
                stroke: "white",
                strokeWidth: "1",
                children: i.exports.jsx("path", {
                  fillRule: "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  clipRule: "evenodd",
                }),
              }),
            }),
          ],
        }),
        a &&
          i.exports.jsx("div", {
            className:
              "block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2",
            children: a,
          }),
      ],
    }),
  L = ({ sideLabel: e, value: t, name: r, id: o, disabled: a, onChange: n }) =>
    i.exports.jsxs("div", {
      className: "flex items-center gap-2",
      children: [
        i.exports.jsxs("label", {
          className: "inline-flex items-center cursor-pointer",
          children: [
            i.exports.jsx("input", {
              id: o,
              name: r,
              disabled: !!a,
              type: "radio",
              value: t,
              onChange: () => {
                n(t);
              },
              className: "sr-only peer",
            }),
            i.exports.jsx("div", {
              className:
                "relative w-4 h-4 border peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:border-none peer-checked:bg-red-600 peer-checked:after:bg-white peer-checked:after:border-white peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-[5px] peer-checked:after:left-[5px] after:border-gray-300 peer-checked:after:border after:rounded-full peer-checked:after:h-1.5 peer-checked:after:w-1.5 " +
                (a ? "border-gray-400" : "border-black"),
            }),
          ],
        }),
        e &&
          i.exports.jsx("div", {
            className: `block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2 ${a && "text-gray-400"}`,
            children: e,
          }),
      ],
    }),
  M = ({ hint: e, label: r }) => {
    const [o, n] = t(new Array(6).fill("")),
      s = a([]);
    return i.exports.jsxs("div", {
      className: "",
      children: [
        r &&
          i.exports.jsx("div", {
            className: "text-[#344054] font-medium text-sm mb-1",
            children: r,
          }),
        i.exports.jsx("div", {
          className: "flex items-center justify-between gap-4",
          children: o?.map((e, t) =>
            i.exports.jsx("input", {
              className:
                "flex text-center border border-[#D0D5DD] h-16 w-16 rounded-md outline-none p-2 text-6xl focus:border-red-800",
              style: { color: "#D0D5DD", fontSize: "48px", lineHeight: "60px" },
              type: "text",
              value: e,
              maxLength: 1,
              onChange: (e) =>
                ((e, t) => {
                  if (isNaN(e.target.value)) return !1;
                  n([...o.map((r, o) => (t === o ? e.target.value : r))]),
                    e.target.value && e.target.nextSibling
                      ? e.target.nextSibling.focus()
                      : !e.target.value &&
                        e.target.previousSibling &&
                        e.target.previousSibling.focus();
                })(e, t),
              onKeyDown: (e) =>
                ((e, t) => {
                  "Backspace" === e.key &&
                    t > 0 &&
                    !o[t] &&
                    s.current[t - 1]?.focus();
                })(e, t),
              onPaste: (e) =>
                ((e) => {
                  const t = e.clipboardData.getData("text");
                  if (isNaN(t)) return !1;
                  const r = t.toString().split("").slice(0, o?.length);
                  n(r);
                })(e),
            })
          ),
        }),
        e &&
          i.exports.jsx("div", {
            className: "font-normal text-sm leading-5 text-[#667085] mt-1",
            children: e,
          }),
      ],
    });
  };
export {
  w as Actions,
  g as Avatar,
  b as Button,
  j as Checkbox,
  x as Icons,
  m as InputField,
  y as Notifications,
  M as OtpField,
  v as Popup,
  L as Radio,
  k as Table,
};
