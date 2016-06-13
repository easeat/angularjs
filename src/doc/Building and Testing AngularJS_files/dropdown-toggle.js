angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(n){var o=null;this.open=function(t){o||(n.on("click",e),n.on("keydown",i)),o&&o!==t&&(o.isOpen=!1),o=t},this.close=function(t){o===t&&(o=null,n.off("click",e),n.off("keydown",i))};var e=function(n){n&&3===n.which||o.$apply(function(){o.isOpen=!1})},i=function(n){27===n.which&&e()}}]).controller("DropdownController",["$scope","$attrs","dropdownConfig","dropdownService","$animate",function(n,o,e,i,t){var r=this,c=e.openClass;this.init=function(e){r.$element=e,n.isOpen=angular.isDefined(o.isOpen)?n.$parent.$eval(o.isOpen):!1},this.toggle=function(o){return n.isOpen=arguments.length?!!o:!n.isOpen},this.isOpen=function(){return n.isOpen},n.$watch("isOpen",function(o){t[o?"addClass":"removeClass"](r.$element,c),o?i.open(n):i.close(n),n.onToggle({open:!!o})}),n.$on("$locationChangeSuccess",function(){n.isOpen=!1})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",scope:{isOpen:"=?",onToggle:"&"},link:function(n,o,e,i){i.init(o)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(n,o,e,i){i&&(o.on("click",function(e){e.preventDefault(),e.stopPropagation(),o.hasClass("disabled")||o.prop("disabled")||n.$apply(function(){i.toggle()})}),o.attr({"aria-haspopup":!0,"aria-expanded":!1}),n.$watch(i.isOpen,function(n){o.attr("aria-expanded",!!n)}))}}});
//# sourceMappingURL=dropdown-toggle.min.js.map
