import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

const TYPES = ["body", "caption"];

export const Text = ({
  as: Component = "p",
  type = "body",
  color = "secondary",
  underline,
  italic,
  children,
  dataQaSelector,
  className,
  truncated,
  ...rest
}) => {
  if (!TYPES.includes(type)) {
    throw new Error(
      `Received type ${type}, but expected one of ${JSON.stringify(TYPES)}`
    );
  }

  const textClassname = cx({
    text: true,
    [`text__${type}`]: true,
    text__underline: underline,
    text__italic: italic,
    [`text__${color}`]: true,
    text__truncated: truncated,
    [className]: Boolean(className),
  });

  return (
    <Component className={textClassname} {...rest}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  /**
   * className for text.
   */
  className: PropTypes.string,
  /**
   * Render custom component for Text intead of p (i.e: p, span, div)
   */
  as: PropTypes.node,
  /**
   * type of text.
   */
  type: PropTypes.oneOf(TYPES),

  /**
   * color for text.
   */
  color: PropTypes.oneOf(["primary", "danger", "secondary"]),

  /**
   * render text as italic.
   */
  italic: PropTypes.bool,
  /**
   * render text with underline.
   */
  underline: PropTypes.bool,
  /**
   * Truncate Text.
   */
  truncated: PropTypes.bool,
};
