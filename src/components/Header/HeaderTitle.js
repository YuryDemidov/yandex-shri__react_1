export const HeaderTitle = ({text, isDim}) => {
  return (
    <h1 className={`page-header__title${isDim ? ' page-header__title_dim' : ''}`}>{text}</h1>
  )
}
