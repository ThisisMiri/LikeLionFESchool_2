

##HTML Living Standard
* HTML Living Standard(https://html.spec.whatwg.org/) Multipage Version

##HTML 요소
* 시멘틱한 마크업으로 코딩한다? 
    * 유지보수 측면 : 사람이나 기계(특히 검색언젠)가 해당 마크업을 읽고 그 의도를 알 수 있는 코드로 작성하는 것.
* h1 ~ h6는 익명 영역을 생성.
* met에 "og:title"
    * Open Grapj Protocol(Facebook...)
    * https://ogp.me/
    ```html
        <head>
        <title>The Rock (1996)</title>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        ...
    </head>
    ```
* meta에 "twitter:description"
    * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
* Entity Code
    * https://entitycode.com/
* table
