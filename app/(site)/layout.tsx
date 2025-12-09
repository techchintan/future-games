import { sanityFetch } from "@/sanity/lib/live";
import Header from "./_components/header";
import { popularGamesQuery, recentGamesQuery } from "@/sanity/lib/queries";
import { PopularGamesQueryResult, RecentGamesQueryResult } from "@/sanity.types";
import Footer from "./_components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data: recentGames} = await sanityFetch<NonNullable<RecentGamesQueryResult>>({query: recentGamesQuery})
  const {data: popularGames}= await sanityFetch<NonNullable<PopularGamesQueryResult>>({query: popularGamesQuery})

  return (
    <div className="pt-[72.25px] no-scrollbar bg-[linear-gradient(25deg,var(--color-gradient-blue)_10%,var(--color-brand-pure-white)_45%)] h-screen overflow-y-auto">
      <Header/>
      <main>{children}</main>
      <Footer recentGames={recentGames} popularGames={popularGames}/>
    </div>
  );
}
