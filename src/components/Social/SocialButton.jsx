import styled from 'styled-components';
import PropTypes from 'prop-types'

const Button = styled.a`
  width: 100%;
  min-height: 45px;

  display: flex;
  place-items: center;
  place-content: center;

  border: none;
  border-radius: 7px;
  background-color: var(--color-grey);

  color: var(--color-white);
  font-weight: var(--weight-semibold);
  text-decoration: none;

  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    color: var(--color-dark-rey);
    background-color: var(--color-primary);
  }
`

const SocialButton = ({ value, href }) => {
  return (
    <Button href={href} target="_blank">{ value }</Button>
  )
}

SocialButton.propTypes = {
  value: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default SocialButton