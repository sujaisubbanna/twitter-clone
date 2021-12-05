// pages/_app.js
import {SessionProvider} from "next-auth/react";
import {RecoilRoot} from "recoil";
import "../styles/global.css";

function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default App;
