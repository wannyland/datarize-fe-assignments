import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
#root {
    display: flex;
    flex-direction: column;
   /* height: 100%; */
   
    main#globalMain {
      display: flex;
      height: 100%;
      background-color: #F8F8F9;
      flex: 1;
      #outlet {
        width: 100%;
        min-height:  100dvh;
        margin-inline-start: auto;
        transition: width 0.3s;
      }
    }

    //svg onClick 이벤트 있을때 커서 모양 변경 
    svg[data-cursor='pointer']{
      cursor: pointer;
    }


    .ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
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
  }
`
