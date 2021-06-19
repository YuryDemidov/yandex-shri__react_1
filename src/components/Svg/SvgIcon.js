export const SvgIcon = ({ id, width, height }) => {
  return (
    <svg width={width} height={height} className='svg-icon'>
      <use xlinkHref={`#${id}`}/>
    </svg>
  )
}
