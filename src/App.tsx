import Button from './components/Button/Button';
import PageLayout from './components/pageComponents/PageLayout';

function App() {
  return (
    <PageLayout >
     
      <Button className="m-4">
        salut
      </Button>
      <Button type="outline" className="m-4">
        salut
      </Button>
      <Button disabled className="m-4">
        salut
      </Button>
      <Button size="xl" className="m-4">
        salut
      </Button>
      <Button type="flat" size="xl" className="m-4">
        salut
      </Button>
    </PageLayout>
  );
}

export default App;
