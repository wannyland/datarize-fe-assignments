import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,button,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      /* margin: 0;
      padding: 0;
      border: 0;
      line-height: 1.5;
      font: inherit;
      vertical-align: baseline;
      word-break: keep-all;
      box-sizing: border-box;
      color: #0F0F0F; */
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }


    html {
      font-size: 62.5%;
      /* scroll-behavior: smooth; */
      /* -webkit-text-size-adjust: none; */
      /* 크롬, 사파리, 오페라 신버전 */
      /* -ms-text-size-adjust: none;  */
      /* IE */
      /* -moz-text-size-adjust: none; */
      /* 파이어폭스 */
      /* -o-text-size-adjust: none; */
      /* 오페라 구버전 */
      height: 100%;
      scrollbar-gutter: stable;
    }
    body{
      height: 100%;
      scrollbar-gutter: stable;
      background-color: #F8F8F9;

    }


    /*
    1. padding 초기화
    2. margin 초기화
    3. 기본 서체 설정
    4. 폰트 굵기 Regular로 설정
    5. 폰트 크기 
    6. line-height 초기화 ( 폰트 높이값이 === 폰트 사이즈 )
    */

    *:not(html) {
      padding: 0;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 400;
      // color: $gray1000;
      line-height: 1.5;
      // letter-spacing: -0.015px;
      box-sizing: border-box;
      color: ${(p) => p.theme.grayScale.gray9};
    }


    /* 1.리스트 스타일 초기화 */
    ol,
    ul,
    li {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    img,video{
      display: block;
      width: 100%;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
      box-shadow: 0 0 0 1000px white inset;
    }

    button{
      background-color: initial;
      border: initial;
      cursor: pointer;
    }


    /*
    1. a태그 가상 선택자 스타일 초기화
    */

    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
    }

    /* 
        1. 탭 하이라이트 컬러 초기화
        2. outline 초기화
    */
    a,
    button,
    select,
    input {
        -webkit-tap-highlight-color: transparent;
        outline: none;
        border: none;

        background-color: transparent;
    }

`
