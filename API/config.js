const BASE_URL = "https://667c29f33c30891b865b9802.mockapi.io/api";

/**
 * @param {RequestInfo} url
 * @param {RequestInit} opts
 */
export const fetchApi = (url, opts) => {
  // fetch: Là hàm để gọi api mặc định của trình duyệt.

  /**
   * method
   * body
   * headers
   */
  return fetch(`${BASE_URL}/${url}`, {
    ...opts,
    headers: {
      "content-type": "application/json",
      ...opts.headers,
    },
  });
};