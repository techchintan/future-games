import {defineQuery, groq} from "next-sanity";
import {getCookie} from "cookies-next";
import {client} from "./client";

export async function likedGames() {
  let likedGames = JSON.parse((await getCookie("likedGames")) || "[]");
  likedGames = likedGames.map((item: any) => String(item));

  try {
    return await client.fetch(
      groq`*[_type == "game" && !(_id in path('drafts.**')) && game_slug.current in ${JSON.stringify(
        likedGames,
      )} && is_active == true]| order(orderRank){
        _id,
        title,
        description,
        game_slug,
        badge,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        }
      }[0...12]`,
    );
  } catch (error) {
    console.error("Error fetching game categories data:", error);
    throw error;
  }
}

export async function recentlyPlayed() {
  let recentlyPlayed = JSON.parse((await getCookie("recentlyPlayed")) || "[]");
  recentlyPlayed = recentlyPlayed.map((item: any) => String(item));

  try {
    return await client.fetch(
      groq`*[_type == "game" && !(_id in path('drafts.**')) && game_slug.current in ${JSON.stringify(
        recentlyPlayed,
      )} && is_active == true]| order(orderRank){
        _id,
        title,
        description,
        game_slug,
        badge,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
      }[0...12]`,
    );
  } catch (error) {
    console.error("Error fetching game categories data:", error);
    throw error;
  }
}

export const recentGamesQuery =
  defineQuery(`*[_type == 'game' && is_active == true && !(_id in path('drafts.**'))] | order(created_at){
        _id,
        title,
        description,
        game_slug,
        badge,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
      }[0...5]`);

export const popularGamesQuery =
  defineQuery(`*[_type == "game" && is_active == true && !(_id in path('drafts.**'))]| order(rating desc){
        _id,
        title,
        description,
        game_slug,
        badge,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
      }[0...5]`);

export async function searchGame(value: any) {
  try {
    return await client.fetch(
      groq`*[_type == "game" && title match "*${value}*"  && is_active == true  && !(_id in path('drafts.**'))]| order(orderRank) {
        _id,
      title,
      description,
      game_slug,
      badge,
      thumbnail{
        ...thumbnail{
          asset ->
        }
      },
       }`,
    );
  } catch (error) {
    console.error("Error fetching game categories data:", error);
    throw error;
  }
}

export const gamesCategoryQuery =
  defineQuery(`*[_type == "gameCategory" && is_active == true && !(_id in path('drafts.**'))] | order(orderRank)[0...4]{
      _id,
      title,
      description,
      thumbnail{
        ...thumbnail{
          asset ->
        }
      },
      slug,
      seo
      }`);

export const gamesQuery =
  defineQuery(`*[_type == "game" && is_active == true && !(_id in path('drafts.**'))]| order(orderRank){
      _id,
      title,
      game_slug,
      badge,
      thumbnail{
        ...thumbnail{
          asset ->
        }
      },
      }[0...120]`);

export const gameBySlugQuery =
  defineQuery(`*[_type == "game" && is_active == true && game_slug.current == $gameSlug && !(_id in path('drafts.**'))][0]{
        _id,
        title,
        description,
        game_slug,
        game_url,
        rating,
        total_likes_in_percentage,
        total_play_count,
        faq,
        developer_name,
        genre,
        category -> {
          _id,
          title,
          slug,
          thumbnail{
            ...thumbnail{
          asset ->
        }
          },
          related_categories[]->{
            ...,
            thumbnail{
              ...thumbnail{
          asset ->
        }
            },
          },
        },
        badge,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
        is_active,
        is_external,
        seo,
        "related_games":*[_type == "game" && is_active == true && !(_id in path('drafts.**')) && category._ref in (*[_type == "game" && is_active == true && game_slug.current == $gameSlug && !(_id in path('drafts.*'))][0]{
          "related_categories" : (category->{    "ids" : related_categories[] -> {_id}["_id"]
           })}["related_categories"]["ids"])]| order(orderRank){
            _id,
            title,
            description,
            game_slug,
            badge,
            thumbnail{
              ...thumbnail{
          asset ->
        }
            },
          },
      }`);

export const categoryBySlugQuery =
  defineQuery(`*[_type == "gameCategory" && is_active == true && slug.current == $categorySlug && !(_id in path('drafts.**'))][0]{
        _id,
        title,
        description,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
        slug,
        seo,
        "related_categories":(related_categories[]->{
          _id,
        title,
        thumbnail{
          ...thumbnail{
          asset ->
        }
        },
        slug,
        seo,
        is_active
        })[is_active == true],
        "related_games": *[_type == "game" && is_active == true && !(_id in path('drafts.**'))] | order(orderRank)[0...50]{
          _id,
          title,
          description,
          game_slug,
          badge,
          thumbnail{
            ...thumbnail{
          asset ->
        }
          }
        }
      }`);

export const UplancerGame = `*[_type == "game" && is_active == true && game_slug.current in ["highway-racer-3d","fast-balls","potion-flip"] && !(_id in path('drafts.**'))]{
  "img":thumbnail{
          thumbnail{
            asset->{url}
          }
        }["thumbnail"]["asset"]["url"],
  "url":"https://www.qwiqgames.com/en/g/"+game_slug.current,
  title,
  seo{metaTitle,metaDescription}
}`;
