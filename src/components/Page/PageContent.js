export const PageContent = ({ renderPageContent }) => {
  return (
    <main className='page__content page-content'>
      <div className='container'>
        {renderPageContent()}
      </div>
    </main>
  )
}
