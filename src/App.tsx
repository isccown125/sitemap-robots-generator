import { ThemeProvider } from "styled-components";
import "./App.css";
import { RobotsProvider } from "./features/robots-generator/context";
import { SitemapProvider } from "./features/sitemap-generator";
import { TabContainer } from "./features/tabs/containers";
import { TabsProvider } from "./features/tabs/context";
import { UrlProvider } from "./features/url-list/context";
import { theme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TabsProvider defaultTab="sitemap">
        <SitemapProvider>
          <RobotsProvider>
            <UrlProvider>
              <TabContainer />
            </UrlProvider>
          </RobotsProvider>
        </SitemapProvider>
      </TabsProvider>
    </ThemeProvider>
  );
}

export default App;
