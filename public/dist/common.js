require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"handlebars-helpers":[function(require,module,exports){
module.exports = function (Handlebars) {

  Handlebars.registerHelper('dump', function (data) {
    return new Handlebars.SafeString(
      JSON.stringify(data, null, '  ')
    )
  })

  Handlebars.registerHelper('ifequal', function (a, b, opts) {
    if (a === b) {
      return opts.fn(this)
    }
    return opts.inverse(this)
  })

  return Handlebars
}
},{}],"handlebars-templates":[function(require,module,exports){
module.exports = function (Handlebars) {
var template = Handlebars.template, templates = {};

templates['partials/head'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n";
},"useData":true});

templates['layouts/website'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<main>\n"
    + ((stack1 = ((helper = (helper = helpers.main || (depth0 != null ? depth0.main : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"main","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</main>";
},"useData":true});

templates['pages/game'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container\">\n  "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\n</div>";
},"useData":true});

templates['pages/home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"title\">\n  "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\n</div>";
},"useData":true});

templates['layouts/html5'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <link href=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\" media=\"all\" rel=\"stylesheet\" type=\"text/css\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <script type=\"text/javascript\" src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<!doctype html>\n<html>\n  <head>\n    <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n";
  stack1 = ((helper = (helper = helpers.css || (depth0 != null ? depth0.css : depth0)) != null ? helper : alias2),(options={"name":"css","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.css) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ((stack1 = ((helper = (helper = helpers.head || (depth0 != null ? depth0.head : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"head","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </head>\n  <body>\n"
    + ((stack1 = ((helper = (helper = helpers.main || (depth0 != null ? depth0.main : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
  stack1 = ((helper = (helper = helpers.js || (depth0 != null ? depth0.js : depth0)) != null ? helper : alias2),(options={"name":"js","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.js) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </body>\n</html>";
},"useData":true});

return templates;
}
},{}]},{},[]);
