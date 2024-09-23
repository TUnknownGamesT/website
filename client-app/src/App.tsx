import ContactSection from "./components/ContactSection";
import ContentItem from "./components/ContentItem";
import NavBar from "./components/NavBar";
import { useStore } from "./store/store";

function App() {
  const { contentItemsStore } = useStore();

  return (
    <div className="container">
      <NavBar />
      {contentItemsStore.map((contentItem) => (
        <ContentItem
          key={contentItem.id}
          id={contentItem.id}
          title={contentItem.title}
          urlTrailar={contentItem.urlTrailar}
          urlPlay={contentItem.urlPlay}
          tags={contentItem.tags}
          relased={contentItem.relased}
        />
      ))}
      <ContactSection />
    </div>
  );
}

export default App;
