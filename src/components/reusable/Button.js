export const Button = ({ content, modifiers = [], type, disabled, clickHandler }) => {
  return (
    <button
      className={modifiers.reduce((className, modifier) => `${className} button_${modifier}`, 'button')}
      type={type} disabled={disabled} onClick={clickHandler}
    >
      <span className='button__content'>{content}</span>
    </button>
  )
}
