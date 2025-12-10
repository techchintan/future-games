import {sanityFetch} from "@/sanity/lib/live";
import Header from "./_components/header";
import {popularGamesQuery, recentGamesQuery} from "@/sanity/lib/queries";
import {PopularGamesQueryResult, RecentGamesQueryResult} from "@/sanity.types";
import Footer from "./_components/footer";
import LayoutStyleWrapper from "./_components/layoutStyleWrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data: recentGames} = await sanityFetch<NonNullable<RecentGamesQueryResult>>({
    query: recentGamesQuery,
  });
  const {data: popularGames} = await sanityFetch<NonNullable<PopularGamesQueryResult>>({
    query: popularGamesQuery,
  });

  return (
    <LayoutStyleWrapper>
      <Header />
      <main>{children}</main>
      <Footer recentGames={recentGames} popularGames={popularGames} />
    </LayoutStyleWrapper>
  );
}
