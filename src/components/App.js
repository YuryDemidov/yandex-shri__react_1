import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SvgSprite } from './Svg/SvgSprite';
import { PageFooter } from './Page/PageFooter';
import { BuildsListPage } from './BuildsListPage/BuildsListPage';
import { StartScreenPage } from './StartScreenPage/StartScreenPage';
import { SettingsPage } from './SettingsPage/SettingsPage';
import { BuildLogsPage } from './BuildLogsPage/BuildLogsPage';

const mockData = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  repoName: 'philip1967/my-awesome-repo-with-long-long-repo-name',
  buildCommand: 'npm run super-build',
  mainBranch: 'main',
  period: 10
}

export const AppContext = createContext(mockData);

function App() {
  return (
    <AppContext.Provider value={mockData}>
      <div className='page'>
        <SvgSprite/>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              {mockData.repoName && mockData.buildCommand ? <BuildsListPage/> : <StartScreenPage/>}
            </Route>
            <Route path='/settings'>
              <SettingsPage/>
            </Route>
            <Route path='/build/:number'>
              <BuildLogsPage repoName={mockData.repoName}/>
            </Route>
          </Switch>
        </BrowserRouter>
        <PageFooter/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
