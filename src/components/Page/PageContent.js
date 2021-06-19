export const PageContent = ({ renderPageContent, hasContainer }) => {
  return (
    <main className='page__content page-content'>
      <div className={hasContainer && 'container'}>
        {renderPageContent()}
      </div>
    </main>
  )
}
