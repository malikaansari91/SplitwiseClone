import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

const LEVELS = ["1", "2", "3", "4", "5", "6"];

export const Heading = ({
  level = "4",
  underline,
  italic,
  children,
  dataQaSelector,
  className,
  truncated,
  ...rest
}) => {
  if (!LEVELS.includes(level)) {
    throw new Error(
      `Received level ${level}, but expected one of ${JSON.stringify(LEVELS)}`
    );
  }

  const Component = `h${level}`;

  const textClassname = cx({
    heading: true,
    [`h${level}`]: true,
    heading__underline: underline,
    heading__italic: italic,
    heading__truncated: truncated,
    [className]: Boolean(className),
  });

  return (
    <Component className={textClassname} {...rest}>
      {children}
    </Component>
  );
};

Heading.propTypes = {
  /**
   * className for text.
   */
  className: PropTypes.string,
  /**
   * level of heading.
   */
  level: PropTypes.oneOf(LEVELS),

  /**
   * render heading as italic.
   */
  italic: PropTypes.bool,
  /**
   * render heading with underline.
   */
  underline: PropTypes.bool,
  /**
   * Truncate Heading.
   */
  truncated: PropTypes.bool,
  /**
   * Custom data attributes for testing.
   */
  dataQaSelector: PropTypes.string,
};
