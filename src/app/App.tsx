import { LanguageProvider } from '../contexts/LanguageContext';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <LanguageProvider>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </LanguageProvider>
  );
}
