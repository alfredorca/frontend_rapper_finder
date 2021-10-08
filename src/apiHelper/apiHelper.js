import axios from 'axios'

export const baseURL = process.env.REACT_APP_API_URL;

const helperApi = axios.create({baseURL});

helperApi.interceptors.request.use(
  async (config) => {
    let token;
    try {
      const jwt = await JSON.parse(localStorage.getItem('jwtrapperfinder'));
      token = jwt.token;
    } catch (error) {
      console.log(error)
    }
    if (token) {
      config.headers.authorization = token;
    }
    return config
  }
)

export default helperApi;