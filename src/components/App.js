import { SvgSprite } from './reusable/SvgSprite';
import { AppHeader } from './AppHeader';
import { AppContent } from './AppContent';
import { AppFooter } from './AppFooter';

function App() {
  return (
    <div className='page'>
      <SvgSprite/>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  );
}

export default App;
