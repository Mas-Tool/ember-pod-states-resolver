# Ember-pod-states-resolver

Extends default ember-resolver to support loading and error state as nested routes.
## What is Ember-pod-states-resolver?
Say you have a pod structured route named 'contacts' with loading and error state templates.
##### The default ember-resolver will look for the following structure
```
app/
app/contacts
app/contacts/route.js
app/contacts/template.hbs
app/contacts-loading/template.hbs
app/contacts-error/template.hbs
```
##### After installing the ember-pod-states-resolver you can have it structured like this:
```
app/
app/contacts
app/contacts/route.js
app/contacts/template.hbs
app/contacts/loading/template.hbs  <- nested template
app/contacts/error/template.hbs    <- nested template
```
## Custom prefix
You can set a custom prefix for the loading and error state folder by setting:
```
//your app.js file

Resolver.reopen({'podStatePrefix':'_'}); <- prefix

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
```
The loading and error state templates can now be located at:
```
app/contacts/_loading/template.hbs  <- underscore prefix
app/contacts/_error/template.hbs    <- underscore prefix
```
## Installation

##### Install ember-pod-states-resolver

* `ember install ember-pod-states-resolver`
