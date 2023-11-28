import { Header } from "./Header";
import { Footer } from "./Footer";
import Navgation from "./Navigation"
import BlogHeading from "./BlogHeading";
import CursorTrail from "./animations/CursorTrail";

export function BlogLayout({ page, locales, navigation, settings, footer, children }) {
  return (
    <div className="text-slate-800">
      {settings.data.cursorTrail && <CursorTrail />}
      <Header locales={locales} navigation={navigation} settings={settings} pageHeader={'white'} />
      <Navgation navigation={navigation} />
      <main className="bg-white">
        <BlogHeading
          title={page.data.title}
          shortDescription={page.data.shortDescription}
          image={page.data.image}
          category={page.data.category}
          datePublished={page.data.datePublished}
          author={page.data.author}
        />
        {children}
      </main>
      <Footer footer={footer} navigation={navigation} />
    </div>
  );
}