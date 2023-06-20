export const SERVER_PORT = process.env.port || 4000;
export const ROUTE_GET_MAXSCORE = '/get/maxscore/';
export const ROUTE_POST_CALC_TOTALSCORE = '/post/calcTotalScore/';
export const ROUTE_POST_CALC_CURRENTSCORE = '/post/calcCurrentScore/';
export const URL_POST_CALC_TOTALSCORE = `http://localhost:${SERVER_PORT}${ROUTE_POST_CALC_TOTALSCORE}`;

