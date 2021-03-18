import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useDeckGet } from "queries/deck.queries";

const Example4Sample = () => {
  const { data, isLoading, isError } = useDeckGet();

  if (isLoading) {
    return <>loading...</>;
  }

  if (isError) {
    return <>Error!</>;
  }

  return (
    <div className="flex flex-col space-y-3">
      <span>Deck ID: {data?.deck_id}</span>
      <span>Remaining Cards: {data?.remaining}</span>
    </div>
  );
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
