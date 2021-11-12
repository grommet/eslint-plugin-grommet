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
      'grommet/button-single-kind': 'error',
      'grommet/datatable-aria-describedby': 'error',
      'grommet/datatable-groupby-onmore': 'error',
      'grommet/formfield-name': 'error',
      'grommet/formfield-prefer-children': 'error',
      'grommet/image-alt-text': 'error',
      'grommet/spinner-message': 'error',
    },
  },
};
