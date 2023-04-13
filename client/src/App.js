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
          <h1>Hello people</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
