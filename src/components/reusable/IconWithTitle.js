export const IconWithTitle = ({ icon, title, additionalTitle }) => {
  return (
    <span className='icon-with-title'>
      <span className='icon-with-title__icon'>{icon}</span>
      <span className='icon-with-title__title'>{title}</span>
      {
        additionalTitle &&
        <span className='icon-with-title__title icon-with-title__title_additional'>{additionalTitle}</span>
      }
    </span>
  )
}
