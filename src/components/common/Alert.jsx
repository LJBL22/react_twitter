import { IconDanger, IconInfo, IconSuccess, IconWarning } from 'assets/icons';
import styled from 'styled-components';

const alertIcons = {
  success: <IconSuccess />,
  error: <IconDanger />,
  warning: <IconWarning />,
  info: <IconInfo />,
};

const borderColor = {
  success: `var(--color-light-green)`,
  error: `var(--color-error)`,
  warning: `var(--color-warning)`,
  info: `var(--color-light-blue)`,
};

const StyledBaseAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 400px;
  height: 100px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  background-color: white;
  font-size: var(--fs-h5);
  font-weight: 700;

  .icon {
    border: 2px solid ${(props) => props.borderColor[props.type]};
    border-radius: 50%;
    padding: 0.75rem;
  }
`;

// receives type props which can be: success, error, warning, info
export default function Alert({ type, message }) {
  return (
    <StyledBaseAlert borderColor={borderColor} type={type}>
      <p>{message}</p>
      <div className='icon'>{alertIcons[type]}</div>
    </StyledBaseAlert>
  );
}
