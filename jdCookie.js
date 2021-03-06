/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [


  'pt_key=AAJf-sSuADB2cOX1B0AAPvGlKPMJBqfulyJDTlXh7WzQQouweCv5WruS4n-cmOUo-SYiPmD9X0U; pt_pin=jd_LEQxnkUEQAkv;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJf_OSmADDmcDfV8D1J1tmG5Gb8bYe8Sxf1FH8JAT3h42vfGdGAzRB1NAql78RMXRV5EiVP0kg; pt_pin=jd_aXuQgNEmbDge;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJf2vyPADAFlM3y75c85v9JmlW3T-HMblKqfkIxC0adcGFcFHrGfeHQpEbSKwEbL1E55f05yqc;pt_pin=jd_66496460e9735;',
  'pt_key=AAJf3J1LADCeIUqtxSugDaPdtgwFxWL1lD4diH5l4VCDKZah7RIiZVaVdIteCBI_dOwI1z32_4I;pt_pin=jd_5f26b31fb89ac;',
  'pt_key=AAJf6o7GADAdEL_Esr9nO_aDTMYCg8Lz-QGO6LlCTdjSEmAAud7vhGf94ifrKnYq_914HEEsFgU; pt_pin=jd_481bdca8990ee;',


]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
