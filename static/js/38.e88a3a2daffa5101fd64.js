webpackJsonp([38],{"+vh2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("VxPo"),a=i("5Ssg"),n=i("f4a5"),r=(window.Swiper,{name:"experience",extends:a.a,components:{"touch-icon":n.a},props:{},data:function(){return{checked:!1,select:0,type:"main"}},updated:function(){},mounted:function(){var t=this;this.mySwiper.on("transitionStart",function(e){t.select!=e.activeIndex&&(t.select=e.activeIndex,t.$emit(s.a.EXPERIENCE_CHOICE,t.select))}),this.mySwiper.on("click",function(e,i){"button"!=i.target.getAttribute("type")&&t.$eventBus.$emit(s.a.POPUP_OPEN,e.activeIndex)});var e=t.randomActive();this.$eventBus.firstCheck=e,t.mySwiper.slideTo(e,0),this.$on(s.a.EXPERIENCE_CHOICE,function(e){t.select=e,t.mySwiper.slideTo(e)})},activated:function(){this.mySwiper.slideTo(this.randomActive(),0)},deactivated:function(){},methods:{randomActive:function(){return Math.floor(5*Math.random())}}}),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"swiperBase",staticClass:"topSlider swiper-container"},[s("button",{ref:"prev",staticClass:"prev",attrs:{type:"button",tabindex:"0",role:"button","aria-label":"Previous slide","aria-disabled":"true"}},[t._v("이전")]),t._v(" "),s("ul",{staticClass:"swiper-wrapper"},[s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"냉장고"),expression:"$ga.commands.experienceContentClick.bind(this,'냉장고')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("fZMo"),alt:"셰프 컬렉션 - 시대를 넘어서는 명작 - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{attrs:{type:t.type}})],1)]),t._v(" "),s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"TV"),expression:"$ga.commands.experienceContentClick.bind(this,'TV')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("GQDz"),alt:"QLED TV - 보이는 것 이상의 감동, 100% TV - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{attrs:{type:t.type}})],1)]),t._v(" "),s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"공기청정기"),expression:"$ga.commands.experienceContentClick.bind(this,'공기청정기')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("qLDl"),alt:"초순도 청정 큐브 - 당신이 숨쉬는 모든 공간에 - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{attrs:{type:t.type}})],1)]),t._v(" "),s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"에어드레서"),expression:"$ga.commands.experienceContentClick.bind(this,'에어드레서')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("Z2s1"),alt:"에어드레서 - 새로운 바람과 스팀의 힘으로 의류 청정 시대를 열다 - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{attrs:{type:t.type}})],1)]),t._v(" "),s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"세탁기"),expression:"$ga.commands.experienceContentClick.bind(this,'세탁기')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("YSrd"),alt:"플렉스워시 - 국내 유일 일체형 올인원 세탁기 - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{attrs:{type:t.type}})],1)]),t._v(" "),s("li",{staticClass:"swiper-slide"},[s("a",{directives:[{name:"ga",rawName:"v-ga",value:t.$ga.commands.experienceContentClick.bind(this,"로봇청소기"),expression:"$ga.commands.experienceContentClick.bind(this,'로봇청소기')"}],attrs:{href:"#"}},[s("img",{attrs:{src:i("7GNC"),alt:"POWERbot - 초강력 진공흡입식 로봇청소기 - 제품을 터치하면 체험이 시작됩니다."}}),t._v(" "),s("touch-icon",{staticClass:"clickRobot",attrs:{type:t.type}})],1)])]),t._v(" "),s("button",{ref:"next",staticClass:"next",attrs:{type:"button",tabindex:"0",role:"button","aria-label":"Next slide","aria-disabled":"false"}},[t._v("다음")]),t._v(" "),s("div",{staticClass:"indiWrap"},t._l(t.paging,function(e){return s("button",{class:{on:t.selected==e},attrs:{type:"button","data-key":e},on:{click:t.pagingClick}},[t._v(t._s(e))])}))])},staticRenderFns:[]};var o=i("VU/8")(r,c,!1,function(t){i("v04I")},"data-v-c1bae3c4",null);e.default=o.exports},"5Ssg":function(t,e,i){"use strict";var s=window.Swiper,a={name:"contentWith",components:{},props:{},data:function(){return{checked:!1,mySwiper:null,paging:[],selected:"0"}},updated:function(){},mounted:function(){if(this.$refs.swiperBase){var t=this,e=this.$refs.swiperBase;this.mySwiper=new s(e,{nextButton:t.$refs.next,prevButton:t.$refs.prev,threshold:4,lazyLoading:!0,onTransitionStart:function(e){t.selected=e.activeIndex}});for(var i=0;i<this.mySwiper.slides.length;i++)this.paging.push(String(i));this.mySwiper.on("transitionStart",function(e){t.selected=String(e.activeIndex)})}},destroyed:function(){},activated:function(){},deactivated:function(){},methods:{pagingClick:function(t){var e=parseInt(t.target.getAttribute("data-key"));this.mySwiper.slideTo(e)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"swiperBase",staticClass:"swiper-container"},[i("button",{ref:"prev",staticClass:"prev",attrs:{type:"button"}},[t._v("이전")]),t._v(" "),t._m(0),t._v(" "),i("button",{ref:"next",staticClass:"next",attrs:{type:"button"}},[t._v("다음")]),t._v(" "),i("div",{staticClass:"indiWrap"},t._l(t.paging,function(e){return i("button",{class:{on:t.selected==e},attrs:{type:"button","data-key":e},on:{click:t.pagingClick}},[t._v(t._s(e))])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"swiper-wrapper"},[e("li",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("fZMo"),alt:""}})]),this._v(" "),e("li",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("GQDz"),alt:""}})]),this._v(" "),e("li",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("qLDl"),alt:""}})]),this._v(" "),e("li",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("Z2s1"),alt:""}})]),this._v(" "),e("li",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("YSrd"),alt:""}})])])}]};var r=i("VU/8")(a,n,!1,function(t){i("gKaV")},"data-v-0e3c0068",null);e.a=r.exports},"7GNC":function(t,e,i){t.exports=i.p+"static/img/banner_img06.94dedb6.jpg"},"8pDy":function(t,e){},GQDz:function(t,e,i){t.exports=i.p+"static/img/banner_img02.ab33d5c.jpg"},YSrd:function(t,e,i){t.exports=i.p+"static/img/banner_img05.dccd3a9.jpg"},Z2s1:function(t,e,i){t.exports=i.p+"static/img/banner_img04.752a127.jpg"},f4a5:function(t,e,i){"use strict";var s={name:"TouchIcon",components:{},props:{step:String,type:String},data:function(){return{}},methods:{clickH:function(t){this.$emit("click",t)}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"clickMotion",on:{click:this.clickH}},[e("span",{staticClass:"circle circle01"}),this._v(" "),e("span",{staticClass:"circle circle02"}),this._v(" "),e("span",{staticClass:"circle circle03"}),this._v(" "),"main"==this.type?e("span",{staticClass:"touchIcon"}):this._e()])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("8pDy")},"data-v-ef43130e",null);e.a=n.exports},fZMo:function(t,e,i){t.exports=i.p+"static/img/banner_img01.eaeae8a.jpg"},gKaV:function(t,e){},qLDl:function(t,e,i){t.exports=i.p+"static/img/banner_img03.d10b793.jpg"},v04I:function(t,e){}});