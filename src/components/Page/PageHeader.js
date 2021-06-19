import '../../css/components/page-header.css'

export const PageHeader = ({renderHeaderLeft, renderHeaderRight}) => {
  return (
    <header className='page__header page-header'>
      <div className='container'>
        <div className='page-header__content'>
          <div className='page-header__left'>
            {renderHeaderLeft()}
          </div>
          <div className='page-header__right'>
            {renderHeaderRight()}
          </div>
        </div>
      </div>
    </header>
  )
}
