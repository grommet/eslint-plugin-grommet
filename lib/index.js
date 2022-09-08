/**
 * @fileoverview Lint rules to use with Grommet.
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');

module.exports.configs = {
  recommended: {
    plugins: ['grommet'],
    rules: {
      'grommet/anchor-label': 'warn',
      'grommet/button-single-kind': 'warn',
      'grommet/datatable-aria-describedby': 'warn',
      'grommet/datatable-groupby-onmore': 'warn',
      'grommet/formfield-htmlfor-id': 'warn',
      'grommet/formfield-name': 'warn',
      'grommet/formfield-prefer-children': 'warn',
      'grommet/image-alt-text': 'warn',
      'grommet/spinner-message': 'warn',
    },
  },
};
