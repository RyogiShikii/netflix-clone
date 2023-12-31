import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import InfoModal from "@/components/InfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My Favorites" data={favorites} />
      </div>
    </>
  );
}
