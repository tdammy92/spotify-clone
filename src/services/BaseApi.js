const BaseApi = 'https://api.spotify.com/v1';

const ApiEndpoints = {
  getUserPlaylist: userId => {
    return `${BaseApi}/users/${userId}/playlists`;
  },
  getCategories: () => {
    return `/browse/categories`;
  },
  getNewRelease: () => {
    return `/browse/new-releases?country=NG`;
  },
  getRecentlyPlayed: () => {
    return `${BaseApi}/me/player/recently-played`;
  },
  getcurrentlyPlaying: () => {
    return `${BaseApi}/me/player/currently-playing`;
  },
  getAudioFeatures: () => {
    return `${BaseApi}/audio-features`;
  },
  getAlbumDetails: (albumId) => {
    return `${BaseApi}/albums/${albumId} `;
  },
};

export {ApiEndpoints};
export default BaseApi;
