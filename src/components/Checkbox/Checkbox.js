import { React } from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import styles from './styles'

const Checkbox = (props) => {
  const {
    id,
    name,
    checked,
    onChange
  } = props

  return (
    <label htmlFor={id}>
      <input
        css={styles.checkbox}
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

Checkbox.propTypes = {

  /**
   * The id of the Checkbox.
   */
  id: PropTypes.string,

  /**
   * The name of the Checkbox.
   */
  name: PropTypes.string,

  /**
   * Indicates that the Checkbox is checked.
   */
  checked: PropTypes.bool,

  /**
   * The function to call when a 'change' event is fired.
   */
  onChange: PropTypes.func,

  /**
   * The value of the Checkbox.
   */
  value: PropTypes.string
}

Checkbox.defaultProps = {
  checked: false,
  onChange: Function.prototype,
  value: undefined
}

export default Checkbox
