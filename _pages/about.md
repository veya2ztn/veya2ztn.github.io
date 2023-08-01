---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
Hello! I am a research engineer who specializes in both AI and physics. I completed my undergraduate studies at [Zhejiang University](https://www.zju.edu.cn/) (ZJU) and obtained my Ph.D. from the [Singapore University of Technology and Design](https://www.sutd.edu.sg/) (SUTD). Currently, I am working at the [Shanghai AI Lab](https://www.shlab.org.cn/), conducting research on AI for Science and LLM for Knowledge. Here is my elements: Physics, Technology and ACG ~~ :

- Physics: I have engaged in few areas of physics, such as quantum computing, condensed matter physics, and computational physics. Through my experiences, I've clearly perceived the immense possibilities that the increase in computational power brings to physics research. I believe that the frontier physics must be promoted by the integration of powerful computational systems. I'm currently tackling on [efficient computation of tensor networks on GPU](https://github.com/veya2ztn/TNproject).
- Technology: I was born at the cusp of the 21st century, growing up alongside the flourishing global internet. Benefiting from the open-source community, I've gathered a wealth of knowledge on cutting-edge technologies from strangers on the web. I'm a dedicated supporter of the open-source community, firmly believing that human advancement is deeply rooted in the principles of shared knowledge and mutual aid. My interest lies in leveraging technology to eliminate inefficiencies in productivity and superfluous communication, empowering everyone to transcend traditional creativity and bring their imaginations to life. I'm currently studying the AI4Science and LLM for scientific knowledge system. Feel free If you want to talk with me about the future life.
- ACG (Anime, Comic, and Games): In my earlier years, I was an avid ACG enthusiast. I enjoyed watching animations, reading comics, and playing highly strategic games. I am a youtuber(UP主) and have a short working experience at Bilibili. I firmly believe that true gaming is the "fourth art," bearing the author's contemplation of the workings of the world. Feel free to talk with me If you both like Divinity: Original Sin 2 , Oxygen Not Included, 太吾绘卷  and other fantasy gaming. 

<iframe height='265' scrolling='no' title='Fancy Animated SVG Menu' src='//codepen.io/jeangontijo/embed/OxVywj/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style>
    .pie {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
    }

    .slice {
      position: absolute;
      width: 200px;
      height: 200px;
      clip: rect(0px, 200px, 200px, 100px);
      transform-origin: center bottom;
    }

    .slice-1 {
      background-color: #fda4b7;
      transform: rotate(0deg);
    }

    .slice-2 {
      background-color: #7eb9de;
      transform: rotate(120deg);
    }

    .slice-3 {
      background-color: #a5d454;
      transform: rotate(240deg);
    }

    .slice:before {
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      clip: rect(0px, 100px, 200px, 0px);
    }

    .slice-1:before {
      background-color: #fda4b7;
    }

    .slice-2:before {
      background-color: #7eb9de;
    }

    .slice-3:before {
      background-color: #a5d454;
    }

    .antenna {
      position: absolute;
      width: 100px;
      height: 2px;
      background-color: black;
      transform-origin: left center;
    }

    .antenna-1 {
      top: 50%;
      left: 50%;
      transform: rotate(-30deg);
    }

    .antenna-2 {
      top: 50%;
      left: 50%;
      transform: rotate(90deg);
    }

    .antenna-3 {
      top: 50%;
      left: 50%;
      transform: rotate(210deg);
    }

    .keyword {
      position: absolute;
      font-size: 14px;
    }

    .keyword-1 {
      top: calc(50% - 20px);
      left: calc(50% + 80px);
    }

    .keyword-2 {
      top: calc(50% + 60px);
      left: calc(50% + 10px);
    }

    .keyword-3 {
      top: calc(50% - 20px);
      left: calc(50% - 90px);
    }

    .tooltip {
      position: absolute;
      width: 150px;
      padding: 10px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
      font-size: 14px;
    }
    
    .tooltip.hidden {
        display:none
     }
    
     .tooltip.visible{
        display:block
     }
    
     .tooltip-1{
        top : calc(50% -100%);
        left : calc(50% +100%);
     }
    
     .tooltip-2{
        top : calc(50% +100%);
        left : calc(50% +100%);
     }
    
     .tooltip-3{
        top : calc(50% -100%);
        left : calc(50% -100%);
     }
    
     </style>
</head>
<body>
<div id="app">

<div class="slice slice-1" @mouseover="showTooltip('tooltip-1')" @mouseout="hideTooltip('tooltip-1')"></div>
<div class="slice slice-2" @mouseover="showTooltip('tooltip-2')" @mouseout="hideTooltip('tooltip-2')"></div>
<div class="slice slice-3" @mouseover="showTooltip('tooltip-3')" @mouseout="hideTooltip('tooltip-3')"></div>
<!-- <div class="antenna antenna-1"></div>
<div class="antenna antenna-2"></div>
<div class="antenna antenna-3"></div>
<div class="keyword keyword-1">Keyword A</div>
<div class="keyword keyword-2">Keyword B</div>
<div class="keyword keyword-3">Keyword C</div>
<div class="tooltip tooltip-1 hidden">This is the tooltip for section A</div>
<div class="tooltip tooltip-2 hidden">This is the tooltip for section B</div>
<div class="tooltip tooltip-3 hidden">This is the tooltip for section C</div> -->

</div>
<script>
var app = new Vue({
  el: '#app',
  methods: {
    showTooltip: function(id) {
      document.querySelector('.' + id).classList.remove('hidden');
      document.querySelector('.' + id).classList.add('visible');
    },
    hideTooltip: function(id) {
      document.querySelector('.' + id).classList.remove('visible');
      document.querySelector('.' + id).classList.add('hidden');
    }
  }
});
</script>
</body>
</html>

</iframe>
