import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import ContentArea from '../components/ContentArea';

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex-shrink-0 w-48 bg-white  drop-shadow-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Main content goes here */}
          <ContentArea/>
        </main>
      </div>
    </div>
  );
};

export default Layout;