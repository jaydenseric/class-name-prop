/**
 * Creates a [React](https://reactjs.org) `className` prop value for multiple
 * class names.
 * @kind function
 * @name classNameProp
 * @param {...any} classNames Class name strings to merge; only non empty
 *   strings are added to the final string.
 * @returns {string|undefined} A `className` prop value; either a string of 1 or
 *   more space separated class names or `undefined` to prevent rendering an
 *   empty `class` attribute.
 * @example <caption>How to import.</caption>
 * ```js
 * import classNameProp from "class-name-prop";
 * ```
 * @example <caption>A [React](https://reactjs.org) component for a link that can be declared active, whilst supporting custom class names.</caption>
 * ```jsx
 * function Link({ className, active, ...props }) {
 *   return (
 *     <a className={classNameProp(className, active && "active")} {...props} />
 *   );
 * }
 * ```
 */
export default function classNameProp(...classNames) {
  let className = "";

  for (const name of classNames)
    if (typeof name === "string" && name) className += " " + name;

  return className.trim() || undefined;
}
