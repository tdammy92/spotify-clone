import {authorize, refresh} from 'react-native-app-auth';

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: 'ff322c3423004fde804f3821c3f19cc2',
      clientSecret: '8a096bdf198243dfb926f4cb1721a673',
      redirectUrl: 'com.spotify.clone://oauthredirect',
      scopes: [
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-follow-modify',
        'user-follow-read',
        'user-read-recently-played',
        'user-read-playback-position',
        'user-top-read',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
        'app-remote-control',
        'user-read-email',
        'user-read-private',
        'user-library-modify',
        'user-library-read',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
    //   alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const authHandler = new AuthenticationHandler();

export default authHandler;


