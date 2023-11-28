import { Header } from "./Header";
import { Footer } from "./Footer";
import Navgation from "./Navigation"
import CursorTrail from "./animations/CursorTrail";
import PreLoader from "./animations/PreLoader";

export function Layout({ page, locales, navigation, settings, footer, children }) {
  return (
    <div className="text-slate-800">
      {page.data.pageLoader && <PreLoader />}
      {settings.data.cursorTrail && <CursorTrail />}
      <Header locales={locales} navigation={navigation} settings={settings} pageHeader={page.data.header} />
      <Navgation navigation={navigation} />
      <main>{children}</main>
      <Footer footer={footer} navigation={navigation} />
    </div>
  );
}
