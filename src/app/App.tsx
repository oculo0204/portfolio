import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="h-[1080px] w-[1920px] overflow-hidden">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
