webpackJsonp([0],{"2t5Q":function(n,t){},Evci:function(n,t){},NHnr:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("/5sW"),e={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("h1",{staticClass:"font-heavy",attrs:{id:"main-title"},on:{click:n.go_home}},[n._v("Through the Ages")]),n._v(" "),i("p"),i("h6",{staticClass:"font-medium",attrs:{id:"sub-title"}},[n._v("A new story of civilization")]),i("p")]),n._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-3-sm"},[i("router-link",{staticClass:"leader-link1",attrs:{to:"/leaders"}},[n._v("Lãnh đạo")])],1),n._v(" "),i("div",{staticClass:"col-3-sm"},[i("router-link",{staticClass:"leader-link2",attrs:{to:"/wonders"}},[n._v("Kỳ quan")])],1),n._v(" "),i("div",{staticClass:"col-3-sm"},[i("router-link",{staticClass:"leader-link3",attrs:{to:"/actions"}},[n._v("Hành động")])],1),n._v(" "),i("div",{staticClass:"col-3-sm"},[i("router-link",{staticClass:"leader-link4",attrs:{to:"/events"}},[n._v("Sự kiện")])],1)]),n._v(" "),i("div",{staticClass:"row"},[i("router-view")],1)])},staticRenderFns:[]};var h=i("VU/8")({methods:{go_home:function(){this.$router.push("/")}}},e,!1,function(n){i("TiEl")},"data-v-50492d3a",null).exports,c=(i("M4fF"),i("vCOg"),i("/ocq")),s=i("opD3").leaders,r={data:function(){return{search_name:"",leaders:s}},computed:{leaders_list:function(){var n=this;return""===this.search_name?this.leaders:_.filter(this.leaders,function(t){return-1!==t.name.toLowerCase().indexOf(n.search_name.toLowerCase())})}}},o={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"container"},[n._m(0),n._v(" "),n._m(1),n._v(" "),i("br"),n._v(" "),i("br"),n._v(" "),i("div",{staticClass:"row"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.search_name,expression:"search_name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Tìm kiếm lãnh đạo"},domProps:{value:n.search_name},on:{input:function(t){t.target.composing||(n.search_name=t.target.value.trim())},blur:function(t){n.$forceUpdate()}}})]),n._v(" "),i("div",{staticClass:"row"},[i("transition-group",{attrs:{"enter-active-class":"animated","enter-to-class":"fadeInLeft","leave-active-class":"animated","leave-to-class":"fadeOutLeft",tag:"ul",name:"leaders"}},n._l(n.leaders_list,function(t){return i("li",{key:t.name,staticClass:"leader-item"},[i("span",{staticClass:"leader-name font-heavy"},[n._v(n._s(t.name))]),n._v(": "+n._s(t.ability)+" \r\n            ")])}))],1)])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("h3",{staticClass:"font-heavy"},[this._v("Leaders")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("blockquote",[this._v("\r\n                Là những thẻ bài màu "),t("span",{staticClass:"green"},[this._v("xanh lục")]),this._v(". \r\n                Chúng tượng trưng cho những lãnh đạo. Mỗi thẻ sẽ mang lại cho người chơi những khả năng đặc biệt\r\n            ")])])])}]};var l=i("VU/8")(r,o,!1,function(n){i("rpOH")},"data-v-4851fc90",null).exports,m=i("d/JR").wonders,g={data:function(){return{search_name:"",wonders:m}},computed:{wonders_list:function(){var n=this;return""===this.search_name?this.wonders:_.filter(this.wonders,function(t){return-1!==t.name.toLowerCase().indexOf(n.search_name.toLowerCase())})}}},v={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"container"},[n._m(0),n._v(" "),n._m(1),n._v(" "),i("br"),n._v(" "),i("br"),n._v(" "),i("div",{staticClass:"row"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.search_name,expression:"search_name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Tìm kiếm kỳ quan"},domProps:{value:n.search_name},on:{input:function(t){t.target.composing||(n.search_name=t.target.value.trim())},blur:function(t){n.$forceUpdate()}}})]),n._v(" "),i("div",{staticClass:"row"},[i("transition-group",{attrs:{"enter-active-class":"animated","enter-to-class":"fadeInLeft","leave-active-class":"animated","leave-to-class":"fadeOutLeft",tag:"ul",name:"wonders"}},n._l(n.wonders_list,function(t){return i("li",{key:t.name,staticClass:"wonders-item"},[i("span",{staticClass:"wonders-name font-heavy"},[n._v(n._s(t.name))]),n._v(": "+n._s(t.ability)+" \r\n            ")])}))],1)])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("h3",{staticClass:"font-heavy"},[this._v("Wonders")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("blockquote",[this._v("\r\n                Là những thẻ bài màu "),t("span",{staticClass:"violet"},[this._v("tím")]),this._v(". \r\n                Chúng tượng trưng cho những kỳ quan. Mỗi thẻ sẽ mang lại cho người chơi những khả năng đặc biệt.\r\n            ")])])])}]};var u=i("VU/8")(g,v,!1,function(n){i("dDS1")},"data-v-8f2a4cc4",null).exports,d=i("hsjM").actions,f={data:function(){return{search_name:"",actions:d}},computed:{actions_list:function(){var n=this;return""===this.search_name?this.actions:_.filter(this.actions,function(t){return-1!==t.name.toLowerCase().indexOf(n.search_name.toLowerCase())})}}},p={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"container"},[n._m(0),n._v(" "),n._m(1),n._v(" "),i("br"),n._v(" "),i("br"),n._v(" "),i("div",{staticClass:"row"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.search_name,expression:"search_name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Tìm kiếm hành động"},domProps:{value:n.search_name},on:{input:function(t){t.target.composing||(n.search_name=t.target.value.trim())},blur:function(t){n.$forceUpdate()}}})]),n._v(" "),i("div",{staticClass:"row"},[i("transition-group",{attrs:{"enter-active-class":"animated","enter-to-class":"fadeInLeft","leave-active-class":"animated","leave-to-class":"fadeOutLeft",tag:"ul",name:"actions"}},n._l(n.actions_list,function(t){return i("li",{key:t.name,staticClass:"action-item"},[i("span",{staticClass:"action-name font-heavy"},[n._v(n._s(t.name))]),n._v(": "+n._s(t.effect)+" \r\n            ")])}))],1)])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("h3",{staticClass:"font-heavy"},[this._v("Actions")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("blockquote",[this._v("\r\n                Những thẻ bài màu "),t("span",{staticClass:"yellow"},[this._v("vàng")]),this._v(". \r\n                Là những hành động có hiệu ứng 1 lần. Mỗi thẻ sẽ mang lại cho người chơi những lợi thế tức thì.\r\n            ")])])])}]};var b=i("VU/8")(f,p,!1,function(n){i("Evci")},"data-v-1baec7f8",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"container"},[t("h5",{staticClass:"font-medium"},[this._v("\n        Introduction\n    ")]),this._v(" "),t("blockquote",[this._v("\n        Đây là bản dịch tiếng Việt cho các thẻ trong bộ game "),t("span",{staticClass:"font-heavy red"},[this._v("\n            Through the Ages : A new story of civilization.\n        ")]),this._v(" "),t("br"),this._v("\n        Credit : "),t("a",{attrs:{target:"_blank",href:"https://github.com/theees"}},[this._v("TheEEs Studio")])])])}]};var C=i("VU/8")(null,y,!1,function(n){i("2t5Q")},"data-v-3faf8a43",null).exports;a.a.use(c.a);var k=new c.a({routes:[{path:"/leaders",component:l},{path:"/wonders",component:u},{path:"/actions",component:b},{path:"/",component:C}]});i("of3/");a.a.config.productionTip=!1,new a.a({el:"#app",router:k,render:function(n){return n(h)}})},TiEl:function(n,t){},"d/JR":function(n,t){n.exports={wonders:[{name:"Library of Alexandria",ability:"Giới hạn bài dân sự và quân sự của bạn đều tăng 1."},{name:"Great Wall",ability:"Sức mạnh của bộ binh và pháo binh tăng +1."},{name:"St.Peter'ss Basilica",ability:"Những thẻ và những công nhân có mặt cười bây giờ sẽ có thêm +1 mặt cười nữa."},{name:"Taj Mahal",ability:"Phí lấy thẻ này về sẽ giảm -2 nếu bạn có một lãnh đạo bị thay thế trước đó trong lượt."},{name:"Ocean Liner Service",ability:"Trong giai đoạn hành động, tăng 1 dân miễn phí (không tốn cục trắng và thịt)."},{name:"Hollywood",ability:"Ngay lập tức nhận +2N điểm văn hóa (N=tổng rating văn hóa của nhà hát và thư viện)."},{name:"First Space Flight",ability:"Ngay lập tức nhận +N điểm văn hóa với mỗi công nghệ mà bạn có (N=level của thẻ công nghệ đó)."},{name:"Fast Food Chains",ability:"Ngay lập tức nhận +N và +2M điểm văn hóa (N = số cục vàng ở trên thẻ đỏ và xám, M= số cục vàng ở trên thẻ nâu)."},{name:"Internet",ability:"Ngay lập tức nhận +N điểm văn hóa (N= rating văn hóa + rating khoa học + điểm sức mạnh của mỗi công trình đô thị)."}]}},dDS1:function(n,t){},hsjM:function(n,t){n.exports={actions:[{name:"Breakthrough",effect:"Phát triển công nghệ, sau đó nhận về +N điểm khoa học."},{name:"Culture Heritage",effect:"A:[+4 văn hóa; +1 khoa học] ; I:[+2 văn hóa; +2 khoa học]."},{name:"Efficient Upgrade",effect:"Nâng cấp nông trại, mỏ hoặc công trình đô thị giảm giá -N."},{name:"Endowment of Arts",effect:"+N điểm văn hóa với mỗi người chơi nhiều văn hóa hơn bạn,  (N = 6/3/2 tương ứng với số người chơi lần lượt là 2/3/4)."},{name:"Engineering Genius",effect:"Xây dựng một giai đoạn của một wonder, giảm giá -N đá."},{name:"Frugality",effect:"Tăng dân số, sau khi tăng nhận +N thịt."},{name:"Military Build-Up",effect:"Với mỗi người chơi mạnh hơn bạn, nhận về +8/5/3 đá (2/3/4 người chơi) cho việc xây dựng quân đội."},{name:"Patriotism",effect:"Bạn có thêm một cục đỏ và +N đá để xây/nâng cấp quân đội trong lượt này."},{name:"Reserves",effect:"+N thịt hoặc +N đá."},{name:"Revolutionary Idea",effect:"+N điểm khoa học."},{name:"Rich Land",effect:"Xây dựng hoặc nâng cấp 1 nông trại hoặc 1 mỏ , giảm giá -N."},{name:"Stockpile",effect:"+1 đá và +1 thịt"},{name:"Urban Growth",effect:"Xây dựng hoặc nâng cấp công trình đô thị, giảm giá -N."},{name:"Wave of Nationalism",effect:"Với mỗi người chơi mạnh hơn bạn, bạn có +6/3/2 đá (2/3/4 người chơi) để xây dựng quân đội trong lượt này."}]}},"of3/":function(n,t){},opD3:function(n,t){n.exports={leaders:[{name:"Hammurabi",ability:"Một lần trong lượt, dùng một cục đỏ như một cục trắng. Lấy thẻ leader giảm -1."},{name:"Homer",ability:"Trong lượt, bạn có thêm 1 đá dùng để xây/nâng cấp quân đội. Khi Homer bị thay thế, bạn có thể đặt ông ta dưới một kỳ quan để tăng 1 chỉ số hạnh phúc, tuy nhiên không lấy lại cục trắng."},{name:"Moses",ability:"Chi phí mua dân giảm -1."},{name:"Alexander the Great",ability:"Bạn có thêm +1 sức mạnh với mỗi đơn vị lính. Bạn có thể bỏ qua giai đoạn chính trị để loại thẻ này ra khỏi game và lấy về một cục vàng trong hộp."},{name:"Aristole",ability:"Mỗi khi bạn lấy một thẻ công nghệ, nhận về 1 điểm khoa học."},{name:"Julius Caesar",ability:"Một lần duy nhất trong game, bạn có thể chơi liên tiếp 2 hành động chính trị."},{name:"Leonardo da Vinci",ability:"Rating khoa học của bạn tăng +N (N=level của phòng thí nghiệm/thư viện xịn nhất). Mỗi khi bạn phát triển một công nghệ mới, nhận 1 đá."},{name:"Genghis Khan",ability:"Khi sử dụng thẻ tatic để hình thành quân đội, bộ binh có thể được xem như kị binh(sức mạnh không thay đổi). Cuối lượt, nhận 3 điểm văn hóa nếu bạn là 1 trong hai người chơi mạnh nhất."},{name:"Joan of Arc",ability:"Sức mạnh của bạn tăng +N (N=số mặt cười của chính phủ + chùa). Đầu giai đoạn chính trị, bạn có thể xem lá trên cùng của chồng sự kiện."},{name:"Frederick Barbarossa",ability:"Bạn có thể đồng thời mua dân và xây dựng quân đội chỉ với một cục đỏ. Chi phí mua và xây dựng đều giảm -1."},{name:"Michelangelo",ability:"Rating văn hóa của bạn tăng +N (N= số mặt cười của các kỳ quan, rạp hát, chùa). Khi lấy một kỳ quan, bạn không phải trả thêm phí cho những kỳ quan đã có."},{name:"Isaac Newton",ability:"Rating khoa học của bạn tăng +N (N=level của phòng thí nghiệm/thư viện xịn nhất). Mỗi khi bạn phát triển một công nghệ mới, nhận lại một cục trắng."},{name:"Napoleon Bonaparte",ability:"+2 sức mạnh cho mỗi loại quân lính bạn có (4 loại bao gồm bộ binh, kỵ binh, pháo binh, không lực)."},{name:"Christopher Columbus",ability:"Bỏ qua giai đoạn chính trị, bạn có thể bỏ Columbus khỏi game và chinh phạt một thuộc địa trên tay mà không phải gửi đi bất kỳ đơn vị lính nào."},{name:"James Cook",ability:"Khi chinh phạt, bạn có thể hủy lên tới 2 thẻ quân sự để nhận về +1 điểm chinh phạt cho mỗi thẻ. Nếu bạn có N thuộc địa, rating văn hóa tăng +(N+1)."},{name:"Maximilien Robespierre",ability:"Một cuộc cách mạng sẽ tốn của bạn tất cả các cục đỏ thay vì cục trắng."},{name:"J.S. Bach",ability:"Rating văn hóa của bạn tăng +N (N= số rạp hát). Phát triển công nghệ nhà hát giảm -2 chi phí. Một lần trong lượt, sử dụng một cục trắng để nâng cấp bất kỳ một công trình đô thị nào thành một nhà hát có cùng level hoặc hơn."},{name:"William Shakespeare",ability:"Nếu bạn có một thư viện, chi phí xây dựng/phát triển rạp hát giảm -1. Nếu có một rạp hát, chi phí phát triển/xây dựng thư viện giảm -1. Rating văn hóa của bạn tăng +2N (N=số cặp nhà hát-thư viện)."},{name:"Winston Churchill",ability:"Trong lượt, chọn [+3 điểm văn hóa] hoặc [có 3 điểm khoa học và 3 đá để xây dựng, nâng cấp , phát triển quân đội]."},{name:"Charlie Chaplin",ability:"Rạp hát xịn nhất của bạn giờ đây sẽ có rating văn hóa gấp đôi."},{name:"Sid Meier",ability:"Mỗi phòng thí nghiệm tăng +N rating văn hóa và giảm -1 rating khoa học (N=level của phòng thí nghiệm đó)."},{name:"Mahatma Gandhi",ability:"Bạn không thể sử dụng thẻ khiêu chiến(Aggression) và chiến tranh(War). Những người chơi khác muốn khiêu chiến hoặc chiến tranh với bạn phải trả gấp đôi số lượng cục đỏ."},{name:"Bill Gates",ability:"Mỗi phòng thí nghiệm sản xuất +N đá (N=level của phòng thí nghiệm). Khi Bill Gates bị loại khỏi game hoặc kết thúc game, nhận +N điểm văn hóa (N=số đá có thể sản xuất bởi phòng thí nghiệm)."},{name:"Albert Einstein",ability:"Rating khoa học của bạn tăng +N (N=level của phòng thí nghiệm/thư viện xịn nhất). Mỗi khi bạn phát triển một công nghệ mới, tăng +3 điểm văn hóa."}]}},rpOH:function(n,t){},vCOg:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.28ee8d18030859517411.js.map