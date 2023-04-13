import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <div className="container">
          <Clients/>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
