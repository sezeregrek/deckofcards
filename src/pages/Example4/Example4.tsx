import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useDrawCardsGet } from "queries/deck.queries";
import Cards from "components/Cards";

const Example4Sample = () => {
  const { data, isLoading, isError } = useDrawCardsGet();

  if (isLoading) {
    return <>loading...</>;
  }

  if (isError) {
    return <>Error!</>;
  }

  return <Cards cards={data?.cards} />;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const Example4 = () => (
  <QueryClientProvider client={queryClient}>
    <Example4Sample />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
export default Example4;
