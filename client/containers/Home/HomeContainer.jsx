import React, { useEffect } from "react";
import { Box } from "@mui/material";
import VerticalColumn from "../../components/Cards/Albums/Vertical/VerticalColumn";
import HorizontalColumn from "../../components/Cards/Albums/Horizontal/HorizontalColumn";
import Topbar from "../../components/Layout/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPlaylists, selectPlaylistShort, selectPlaylistStatus } from "../../redux/features/playlistSlice";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const playlistData = useSelector(selectPlaylistShort);
  const playlistStatus = useSelector(selectPlaylistStatus);
  const route = useRouter();

  const { code, state } = route.query;

  const authenticateSpotifyUser = async () => {
    const sp_cookie = getCookie("spotify_auth_state");
    if (code || state) {
      const res = await axios.get(
        `/api/user/spotify-auth/callback?code=${code}&state=${state}&spotify_auth_state=${sp_cookie}`
      );
      return res.data;
    }
  };

  useEffect(() => {
    authenticateSpotifyUser();
  }, [code, state]);

  useEffect(() => {
    if (playlistStatus !== "loading" && playlistStatus !== "success" && playlistData.length === 0) {
      dispatch(fetchUserPlaylists());
    }
  }, []);

  return (
    <>
      <Topbar />
      <Box mt={"50px"} width="87%" mb={20} padding={5}>
        <HorizontalColumn data={playlistData} />
        <VerticalColumn />
        <VerticalColumn />
        <VerticalColumn />
      </Box>
    </>
  );
};

export default HomeContainer;
