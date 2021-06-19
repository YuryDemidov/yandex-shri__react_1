import { useContext } from 'react';
import { AppContext } from '../App';
import { PageHeader } from '../Page/PageHeader';
import { PageContent } from '../Page/PageContent';
import { HeaderTitle } from '../Header/HeaderTitle';
import { HeaderButtonsGroup} from '../Header/HeaderButtonsGroup';
import { BuildsListContent } from './BuildsListContent';

export const BuildsListPage = () => {
  const { repoName } = useContext(AppContext);

  return (
    <>
      <PageHeader
        renderHeaderLeft={() => <HeaderTitle text={repoName}/>}
        renderHeaderRight={() => <HeaderButtonsGroup buttonsSet={['build', 'settings']}/>}
      />
      <PageContent
        renderPageContent={() => <BuildsListContent/>}
        hasContainer
      />
    </>
  )
}
