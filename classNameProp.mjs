/* eslint-disable jsdoc/check-param-names */

/**
 * Creates a [React](https://reactjs.org) `className` prop value for multiple
 * classes.
 * @kind function
 * @name classNameProp
 * @param {...*} classes A parameter for each class; only non empty strings are added to the final string.
 * @returns {string|undefined} A `className` prop value; either a string of classes or `undefined` to prevent rendering an empty `class` attribute.
 * @example <caption>How to import.</caption>
 * ```js
 * import classNameProp from "class-name-prop";
 * ```
 * @example <caption>A [React](https://reactjs.org) component for a link that can be declared active, whilst supporting custom classes.</caption>
 * ```jsx
 * function Link({ className, active, ...props }) {
 *   return (
 *     <a className={classNameProp(className, active && "active")} {...props} />
 *   );
 * }
 * ```
 */
export default function classNameProp() {
  var className = "";

  for (var i = 0; i < arguments.length; i++) {
    var name = arguments[i];
    if (name && typeof name === "string") className += " " + name;
  }

  return className.trim() || undefined;
}
