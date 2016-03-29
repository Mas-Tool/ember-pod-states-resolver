import Ember from 'ember';
import Resolver from 'ember-resolver';

export default {
  name: 'setup-ember-pod-states-resolver',
  initialize: function(registry) {

  }
};

Resolver.reopen({
  moduleNameLookupPatterns: Ember.computed(function () {
    'use strict';
    var defaults = this._super();
    return [
      this.podStateResolver,
    ].concat(defaults);
  }),

  podStateResolver(parsedName) {
    var subStates=['loading','error'];
    var result;
    subStates.forEach((substate)=>{
      if (parsedName.type === 'template' && parsedName.name.endsWith('-' + substate)) {
        var templateRoute = parsedName.fullNameWithoutType.substring(0,parsedName.fullNameWithoutType.length - substate.length -1); // remove -loading or -error endings
        var prefix = this.get('podStatePrefix') || '';
        result = parsedName.prefix + '/' + templateRoute + "/" + prefix + substate + "/template";
      }
    });
    return result;
  }
});

