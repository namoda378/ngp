<template lang="pug">
  
  Ftyp
    div(ref="nondisplay" style="display:none;")  

    .btn(@click="toggleLang") {{ langs[lang_selected] }}

    SnapScroller
      .frame
        .vfs-con

          h1
            span(style="font-size:0.5em;").
              About.&nbsp 
            span(style="font-family:'ZCOOL KuaiLe';").
              Namo
          

          g-image(alt="Example image" src="~/favicon.png" width="85")

          ul
            li 
              span.lang-eng I've been a developer since 2014. 
              span.lang-kor 2014년 부터 개발을 해왔습니다.
            
            li 
              span.lang-eng At the start I wanted to make awesome games. 
              span.lang-kor 처음엔 주로 캐주얼 2D 게임 개발을 공부하였고 
              
            li 
              span.lang-eng Now I'd like to make super useful webservices as well.
              span.lang-kor 현재는 독창적이고 유용한 웹서비스 개발에도 관심을 갖고 있습니다. 
              

      .frame.below
        .vfs-con
          h2
            | Tools that I &nbsp
            faw.pink(icon="heart")

          .hc-div
            g-image(alt="Example image" src="~/assets/tech-logos/sublime.png" width="85")
            g-image(alt="Example image" src="~/assets/tech-logos/vscode.png" width="85")
            g-image(alt="Example image" src="~/assets/tech-logos/git-icon.png" width="85")

          ul
              li
                span.lang-eng I've been using sublime text for working on small projects. also developing plugins for my own use. 
                span.lang-kor 소규모 프로젝트에는 sublime text를 활용하여 개발합니다. 필요한 커스텀 프러그인을 구현하여 사용하기도 합니다.
              li
                span.lang-eng I use VScode for heavier, bigger projects, utilizing the great variety of plugins offered by the community. 
                span.lang-kor 프로젝트 규모가 커지면 방대한 커뮤니티 제공 플러그인들을 활용하기 위해 VS코드를 활용합니다. 
              li
                span.lang-eng I have intermediate level of understanding of git,<br> I utilize branching and rebasing to experience and manage code.
                span.lang-kor 깃에 대해서는 중급 정도의 활용 능력을 갖고 있으며,<br> 브랜칭과 리베이스, 커밋 순회 등을 자유롭게 활용하여 실험적인 코딩을 하고 소스를 관리합니다.
                   
      
      .frame.below
        .vfs-con
          h2 Web/Browser Applications
          
          .hc-div
            g-image(alt="Example image" src="~/assets/tech-logos/netlify.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/nodejs.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/vue-icon.png" width="85")
            g-image(alt="Example image" src="~/assets/tech-logos/firebase.png" width="85")

          ul
            
            li
              span.lang-eng I've been creating fun and useful applications that run on browsers mostly with Vue.js 
              span.lang-kor 저는 주로 Vue.js 를 활용하여 독창적이고 실용적인 브라우저 어플리케이션들을 개발합니다. 
            
            li
              span.lang-eng I prefer JAM stack applications using netlify for deployment and nodejs for API backend. 
              span.lang-kor JAM 스택을 선호하고 주로 netlify를 통한 배포와 nodejs기반의 API 백엔드를 구성합니다. 
            
            li
              span.lang-eng Currently interested in serverless and microservice architectures that work with graphql.
              span.lang-kor 현재는 서버리스와 마이크로서비스 아키텍처에 관심이 많고, 그래프QL 백엔드와의 연동에도 관심이 많습니다. 

      .frame.below
        .vfs-con
          h2 Casual Games
          
          .hc-div
            g-image(alt="Example image" src="~/assets/tech-logos/unity.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/corona.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/nodejs.png" width="115")

          ul
            li
              span.lang-eng I use Corona SDK and Unity for developing game clients. Develop 2D games mostly.
              span.lang-kor 코로나SDK와 유니티를 활용하여 게임 클라이언트를 개발해왔습니다. 주로 2D 게임을 만들었습니다. 
            
            li
              span.lang-eng For realtime multiplayer backend, I use nodejs with socket.io  
              span.lang-kor 실시간 멀티플레이어 백엔드로는 nodejs 기반의 socket.io를 활용합니다. 

      .frame.below
        .vfs-con
          h1 Contact Me

          ul
            li(style="line-height:25px;")
              fai(iconname="gmail.png" style="vertical-align:middle;width:20px") 
              | &nbsp Gmail  -  namoda378@gmail.com
            
            li(style="line-height:25px;")
              fai(iconname="Kakao.png" style="vertical-align:middle;width:20px") 
              | &nbsp KakaoTalk  -  pleta757@gmail.com

</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  data(){
    return {
      lang_selected:0,
      langs:["eng","kor"],
    }
  },
  mounted(){
    this.toggleLang();
  },
  methods:{
    toggleLang(){
      this.lang_selected = ( this.lang_selected + 1 ) % this.langs.length;
      console.log(this.langs[this.lang_selected]);

      const {nondisplay} = this.$refs;
      if(nondisplay && nondisplay.lastElementChild) nondisplay.removeChild(nondisplay.lastElementChild);
      
      const styleEl = document.createElement('style');
      nondisplay.appendChild(styleEl);
      const styleSheet = styleEl.sheet;
      
      this.langs.forEach((lang,idx)=>{
        if(idx !== this.lang_selected){
          styleSheet.insertRule(`.lang-${lang}{display:none;}`);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    position: absolute;
    top:25px;
    right:30px;
    width:35px;
    height:35px;
    line-height: 35px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    z-index: 150;
    background:#aca;
    color:#475;
    transition: all 0.15s;
    &:hover{
      transform: scale(1.05);
    }
  }

  .vfs-con{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .g-image.g-image--loading{
      visibility: collapse;
    }

    h1{
      font-size: 50px;
    }
    h2{
      font-size:40px;
    }
    h3{
      font-size:32px;
    }

    ul{
      padding:0;
      list-style: none;
      text-align: center;
      pointer-events: auto;
      li{
        margin:20px;
      }
    }

    .hc-div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .g-image{
        margin:20px;
      }
    }

    .pink{
      color:#e7a;
    }

  }
  
  
</style>

