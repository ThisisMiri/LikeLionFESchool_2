import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="" style={{ margin: "0 5px" }}>
        홈
      </Link>
      <Link to="/one" style={{ margin: "0 5px" }}>
        현재시간
      </Link>
      <Link to="/two" style={{ margin: "0 5px" }}>
        안녕
      </Link>
      <Link to="/three" style={{ margin: "0 5px" }}>
        소개
      </Link>
      <Route path="/" exact component={Home} />
      <Route path="/one" exact render={() => <Hello name="개리" />} />
      <Route path="/two" exact component={Time} />
      <Route path="/three" exact>
        <Resume
          hello="Hello"
          name="개리"
          hobby="게임"
          food="고기"
          color="blue"
        />
      </Route>
    </BrowserRouter>
  );
}

export default App;

function Index() {
  return <h1>hello world0</h1>
}

function One() {
  return <h1>hello world1</h1>
}

function Two() {
  return <h1>hello world2</h1>
}

function Three() {
  return <h1>hello world3</h1>
}

export default App;