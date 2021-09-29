
// 对与某些接口可登陆也可不登陆，且获取数据有差异时。
function getTokenInfo(jwt, auth, secret) {
  // 判断请求头是否包含token
  if (
    auth.authorization &&
    auth.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = auth.authorization.split(' ')[1];
    let decode = '';
    if (token) {
      decode = jwt.verify(token, secret);
    }
    return decode;
  }
  return;
}

export default {
  getTokenInfo,
};

