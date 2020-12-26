/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJf1K9YADCOZ2egbGs2vOKWwN0TL0XmnTZJ95nXCZnVT3IJZW42ZMrNQGy1tXTmcEgXvZgixAE;pt_pin=jd_747b09621bf28;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJfvlcNADBA_-rAU_WNyGO3rLJLIkjfJONvyMnyTraGJj4AHNYWCwUDSzj1a7R8X2Wz4eUMV2w; pt_pin=jd_7fc1e0fb0afd0; ',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJfvlkCADB-L_3L4DkZyjm0L67EF5_vqHedq_oPA0uAN4ofXFk8Upbt-6lH-NzBXpeYRYmYQKk; pt_pin=jd_XcSCPXDlmrYz;',
  'pt_key=AAJf5tnKADBsH9JuNdnRdCwF9sozKoYt7CGTAP2ZE4IYTHcbnfTfsC9z7mZl6tR0qgMbVrptZNc; pt_pin=jd_6127dbf3213c4; ',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
