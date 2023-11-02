var timer = null;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
        ...payload,
        mode: 'login'
    })
  },

  async signUp(context, payload) {
    return context.dispatch('auth', {
        ...payload,
        mode: 'signup'
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    const singUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe3EbMZnSydVsvfWBkVP3VJq_4OCdJRw8';
    const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBe3EbMZnSydVsvfWBkVP3VJq_4OCdJRw8';
    const requestUrl = mode === 'signup' ? singUpUrl : loginUrl;
    const response = await fetch(
        requestUrl,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate');
        throw error;
      }

      const expiresIn = Number(responseData.expiresIn * 1000);
      const expirationDate = new Date().getTime() + expiresIn; 
      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(function() {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
      });
  },

  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = Number(localStorage.getItem('tokenExpiration'));

    const expiresIn = tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
        return;
    }

    timer = setTimeout(function() {
        context.dispatch('autoLogout')
    }, expiresIn);

    if (token && userId) {
        context.commit('setUser', {
            token: token,
            userId: userId,
        });
    }
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
        token: null,
        userId: null,
    });
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
