import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';
import { PageHeader } from '../Page/PageHeader';
import { PageContent } from '../Page/PageContent';
import { HeaderTitle } from '../Header/HeaderTitle';
import { HeaderButtonsGroup } from '../Header/HeaderButtonsGroup';
import { BuildLogsContent } from './BuildLogsContent';

export const BuildLogsPage = () => {
  const { number } = useParams();

  const { repoName } = useContext(AppContext);

  return (
    <>
      <PageHeader
        renderHeaderLeft={() => <HeaderTitle text={repoName}/>}
        renderHeaderRight={() => <HeaderButtonsGroup buttonsSet={['rebuild', 'settings']}/>}
      />
      <PageContent
        renderPageContent={() => <BuildLogsContent/>}
      />
    </>
  )
}
