import styled from 'styled-components';
import PropTypes from 'prop-types'

const Button = styled.button`
  width: 100%;
  min-height: 45px;

  border: none;
  border-radius: 7px;
  background-color: var(--color-grey);

  color: var(--color-white);
  font-weight: var(--weight-semibold);

  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    color: var(--color-dark-rey);
    background-color: var(--color-primary);
  }
`

const SocialButton = ({ value }) => {
  return (
    <Button>{ value }</Button>
  )
}

SocialButton.propTypes = {
  value: PropTypes.string.isRequired
}

export default SocialButton