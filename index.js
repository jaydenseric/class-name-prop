'use strict'

/* eslint-disable jsdoc/check-param-names */

/**
 * Creates a React `className` prop value for multiple classes.
 * @kind function
 * @name classNameProp
 * @param {...*} classes A parameter for each class; only non empty strings are added to the final string.
 * @returns {string|undefined} A `className` prop value; either a string of classes or `undefined` to prevent rendering an empty `class` attribute.
 * @example <caption>A React component for a link that can be declared active, whilst supporting custom classes.</caption>
 * ```jsx
 * const classNameProp = require('class-name-prop')
 * const PropTypes = require('prop-types')
 * const React = require('react')
 *
 * const Link = ({ className, active, ...props }) => (
 *   <a className={classNameProp(className, active && 'active')} {...props} />
 * )
 *
 * Link.propTypes = {
 *   className: PropTypes.string,
 *   active: PropTypes.bool
 * }
 * ```
 */
module.exports = function classNameProp() {
  var className = ''

  for (var i = 0; i < arguments.length; i++) {
    var name = arguments[i]
    if (name && typeof name === 'string') className += ' ' + name
  }

  return className.trim() || undefined
}
