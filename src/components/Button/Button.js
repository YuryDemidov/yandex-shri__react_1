import '../../css/components/button.css';

export const Button = ({ content, modifiers = [], type = 'button', disabled, ariaLabel, clickHandler }) => {
  return (
    <button
      className={modifiers.reduce((className, modifier) => `${className} button_${modifier}`, 'button')}
      type={type} disabled={disabled} aria-label={ariaLabel} onClick={clickHandler}
    >
      <span className='button__content'>{content}</span>
    </button>
  )
}
