export const SvgIcon = ({ id, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`#${id}`}/>
    </svg>
  )
}
