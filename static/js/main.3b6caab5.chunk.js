(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,n){e.exports=n(404)},400:function(e,t,n){},404:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(47),c=n.n(i),o=n(426),l=n(435),s=n(424),u=n(15),m=n(88),d=(n(406),n(13)),p=n(87),f=(n(54),localStorage.getItem("AUTH_TOKEN")),h=new m.HttpLink({uri:"https://ecomm-yoga-prod.herokuapp.com/",headers:{Authorization:f?"Bearer ".concat(f):""}}),g=new m.InMemoryCache,E=Object(p.a)({cache:g,defaults:{currentModal:{__typename:"CurrentModal",activeModal:null,items:[]}},resolvers:{Mutation:{openModal:function(e,t,n){var a=t.currentModal,r=n.cache,i={currentModal:{__typename:"CurrentModal",activeModal:a.activeModal,items:a.items}};return r.writeData({data:i}),null},closeModal:function(e,t,n){return n.cache.writeData({data:{currentModal:{__typename:"CurrentModal",activeModal:null,items:[]}}}),null}}}}),v=d.ApolloLink.from([E,h]),b=new m.ApolloClient({link:v,cache:g}),w=n(419),y=n(429),O=n(417),j=n(296),S=n(21),x=n(432),C=n(421),k=n(422),N=n(433),I=n(22),M=n(23);function T(){var e=Object(I.a)(["\n  query ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      largeImage\n      price\n    }\n  }\n"]);return T=function(){return e},e}function $(){var e=Object(I.a)(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);return $=function(){return e},e}function A(){var e=Object(I.a)(["\n  query ME_QUERY {\n    me {\n      id\n      email\n      items {\n        id\n        title\n        description\n        image\n        price\n      }\n      cart {\n        quantity\n        id\n        item {\n          title\n          description\n          price\n          id\n          image\n        }\n      }\n    }\n  }\n"]);return A=function(){return e},e}function _(){var e=Object(I.a)(["\n  query ALL_ITEMS_QUERY($after: String) {\n    itemsConnection(after: $after, first: 9, orderBy: createdAt_ASC) {\n      edges {\n        node {\n          id\n          title\n          description\n          image\n          largeImage\n          price\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"]);return _=function(){return e},e}function L(){var e=Object(I.a)(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    items(\n      where: {\n        OR: [\n          { title_contains: $searchTerm }\n          { description_contains: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      image\n      title\n    }\n  }\n"]);return L=function(){return e},e}function F(){var e=Object(I.a)(["\n  query GET_ACTIVE_MODAL {\n    currentModal @client {\n      activeModal\n      items\n    }\n  }\n"]);return F=function(){return e},e}Object(M.a)(F());var q=Object(M.a)(L()),D=Object(M.a)(_()),R=Object(M.a)(A()),U=Object(M.a)($()),Y=Object(M.a)(T()),Q=function(e){return r.a.createElement(u.Query,{query:R},function(t){var n=t.data,a=t.loading;return t.error,e.children({data:n,loading:a})})};function z(){var e=Object(I.a)(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);return z=function(){return e},e}function B(){var e=Object(I.a)(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);return B=function(){return e},e}function H(){var e=Object(I.a)(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return H=function(){return e},e}function P(){var e=Object(I.a)(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);return P=function(){return e},e}function X(){var e=Object(I.a)(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $title: String!\n    $description: String!\n    $price: Int!\n  ) {\n    updateItem(\n      id: $id\n      title: $title\n      description: $description\n      price: $price\n    ) {\n      id\n    }\n  }\n"]);return X=function(){return e},e}function K(){var e=Object(I.a)(["\n  mutation CREATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $price: Int!\n    $image: String\n    $largeImage: String\n  ) {\n    createItem(\n      title: $title\n      description: $description\n      price: $price\n      image: $image\n      largeImage: $largeImage\n    ) {\n      id\n    }\n  }\n"]);return K=function(){return e},e}function J(){var e=Object(I.a)(["\n  mutation LOGIN_USER_MUTATION($email: String!, $password: String!,$name: String!) {\n   \tcreateUser(data:{email:$email, name:$name, password:$password}){\n      id\n      name\n      posts{\n        id\n        isPublished\n        text\n        title\n        createdAt\n      }\n    }\n  }\n"]);return J=function(){return e},e}function G(){var e=Object(I.a)(["\n  mutation CLOSE_MODAL_MUTATION {\n    closeModal @client \n  }\n"]);return G=function(){return e},e}function V(){var e=Object(I.a)(["\n  mutation OPEN_MODAL_MUTATION($currentModal: CurrentModal ) {\n    openModal(currentModal: $currentModal) @client \n  }\n"]);return V=function(){return e},e}Object(M.a)(V()),Object(M.a)(G()),Object(M.a)(J());var W=Object(M.a)(K()),Z=Object(M.a)(X()),ee=Object(M.a)(P()),te=Object(M.a)(H()),ne=Object(M.a)(B()),ae=Object(M.a)(z()),re=n(130),ie=n(434),ce=function(e){var t=e.id;return r.a.createElement(u.Mutation,{mutation:ee,variables:{id:t},refetchQueries:[{query:R},{query:D}]},function(e,t){return t.error,r.a.createElement(ie.a,{className:"pointer grow",icon:"delete",color:"danger",onClick:function(){window.confirm("Are you sure you want to delete this item?")&&e().catch(function(e){alert(e.message)})}})})},oe=n(28),le=n.n(oe),se=n(40),ue=n(174),me=n(30),de=n(31),pe=n(33),fe=n(32),he=n(34),ge=n(415),Ee=n(420),ve=n(427),be=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.title||"",description:n.props.description||"",image:n.props.image||"https://via.placeholder.com/250x250",largeImage:n.props.largeImage||"https://via.placeholder.com/550x350",price:n.props.price||100,isShown:!1,h:window.innerHeight,editMode:n.props.edit||!1},n.handleChange=function(e){var t=e.target,a=t.name,r=t.type,i=t.value,c="number"===r?parseFloat(i):i;n.setState(Object(ue.a)({},a,c))},n}return Object(he.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.description,i=t.image,c=t.price,o=t.largeImage,l=t.editMode,s=l?{id:this.props.id,title:n,description:a,price:c}:{title:n,description:a,image:i,price:c,largeImage:o};return r.a.createElement(u.Mutation,{mutation:l?Z:W,variables:s,refetchQueries:[{query:D},{query:R}]},function(t,n){n.loading,n.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{minHeightContent:100,hasFooter:!1,hasHeader:!1,isShown:e.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},r.a.createElement("form",{onSubmit:function(){var n=Object(se.a)(le.a.mark(function n(a){return le.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,t();case 3:n.sent,e.setState({isShown:!1});case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),className:"flex justify-between"},r.a.createElement("div",{className:"w-45"},r.a.createElement("img",{src:"https://via.placeholder.com/250x295"})),r.a.createElement("div",{className:"w-50"},!l&&r.a.createElement(Ee.a,{width:"100%",marginBottom:16}),r.a.createElement(ve.a,{label:"Title",width:"100%",name:"title",placeholder:"title",marginBottom:16,value:e.state.title,onChange:e.handleChange}),r.a.createElement(ve.a,{label:"Description",width:"100%",name:"description",placeholder:"description",marginBottom:16,value:e.state.description,onChange:e.handleChange}),r.a.createElement(ve.a,{label:"Price",width:"100%",type:"number",name:"price",placeholder:"price",marginBottom:16,value:e.state.price,onChange:e.handleChange}),r.a.createElement(j.a,{width:"100%",type:"submit"},"Submit")))),e.props.children({openModal:function(){return e.setState({isShown:!0})}}))})}}]),t}(S.a),we=function(e){var t=e.item;return r.a.createElement(be,Object.assign({},t,{edit:!0}),function(e){var t=e.openModal;return r.a.createElement(ie.a,{className:"pointer grow mr3",icon:"edit",color:"danger",onClick:t})})},ye=function(e){var t=e.item;return r.a.createElement("div",{className:"pa3 flex items-center justify-between bb b--light-gray w-100"},r.a.createElement(re.a,{className:"w-70"},t.title),r.a.createElement("div",{className:"flex flex-nowrap flex-end"},r.a.createElement(we,{item:t}),r.a.createElement(ce,{id:t.id})))},Oe=function(e){var t=e.items;return r.a.createElement("div",{className:"flex flex-column w-100"},t.map(function(e){return r.a.createElement(ye,{key:e.id,item:e})}))},je=function(e){var t=e.cartItem,n=t.item.title.length>27?"".concat(t.item.title.substr(0,27).trim(),"..."):t.item.title;return r.a.createElement(y.a,{hoverElevation:3,className:"pl1 pr2 flex items-center justify-between bb b--light-gray w-100"},r.a.createElement("div",{className:"flex items-center pv2 w-100"},r.a.createElement("img",{className:"w4",src:t.item.image}),r.a.createElement("div",{className:"flex items-center flex-column w-100"},r.a.createElement("div",{className:"w-100 flex justify-between mt4"},r.a.createElement(re.a,{className:"pl3 w-60"},n),r.a.createElement(re.a,{className:"pl2 flex self-end"},r.a.createElement("span",null,t.quantity," x"),r.a.createElement("span",{className:"pl1"},"$",t.item.price))),r.a.createElement(u.Mutation,{mutation:ne,variables:{id:t.id},refetchQueries:[{query:R}]},function(e,t){return t.error,r.a.createElement(ie.a,{className:"pointer grow mt4",icon:"cross",color:"gray",onClick:function(){window.confirm("Are you sure you want to remove this item?")&&e().catch(function(e){alert(e.message)})}})}))))},Se=n(175),xe=n.n(Se);function Ce(e){return e.reduce(function(e,t){return t.item?e+t.quantity*t.item.price:e},0)}var ke=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).onToken=function(){var e=Object(se.a)(le.a.mark(function e(t,n){var a;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n({variables:{token:t.id}}).catch(function(e){alert(e.message)});case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(he.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Q,null,function(t){var n=t.data;return t.loading?null:r.a.createElement(u.Mutation,{mutation:ae,refetchQueries:[{query:R},{query:U}]},function(t){return r.a.createElement(xe.a,{amount:Ce(n.me.cart),name:"Sick Fits",description:"Order of ".concat((a=n.me.cart,a.reduce(function(e,t){return e+t.quantity},0))," items!"),image:n.me.cart.length&&n.me.cart[0].item&&n.me.cart[0].item.image,stripeKey:"pk_test_5EipLhHukdqp7BL09LrPg6J7",currency:"USD",email:n.me.email,token:function(n){return e.onToken(n,t)}},e.props.children);var a})})}}]),t}(r.a.Component),Ne=function(e){var t=e.cart,n=Ce(t),a=t.filter(function(e){return null!==e.item})[0];return r.a.createElement("div",{className:"flex flex-column justify-between w-100"},r.a.createElement(r.a.Fragment,null,t.map(function(e){return e.item&&r.a.createElement(je,{key:e.id,cartItem:e})})),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:"pl3 pv3"},"Cart total: $",n),r.a.createElement(ke,null,r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(j.a,{className:"mt4 flex justify-center",width:"50%",height:40,appearance:"primary",intent:"success"},"Checkout")))):r.a.createElement(O.a,{className:"flex justify-center mt4"},"There is nothing in your cart"))},Ie=n(83),Me=function(e){var t=e.children,n=e.orderItem,a=Object(Ie.format)(n.createdAt,"MM/DD/YYYY");return r.a.createElement(S.a,{initialState:{isShown:!1}},function(e){var i=e.state,c=e.setState;return r.a.createElement(y.a,null,r.a.createElement(ge.a,{isShown:i.isShown,onCloseComplete:function(){return c({isShown:!1})},hasFooter:!1,hasHeader:!1},r.a.createElement("div",{className:"flex flex-column w-100 mb2"},r.a.createElement(O.a,null,"Order date: ",a),r.a.createElement(re.a,null,"Total: $",n.total)),n.items.map(function(e){return r.a.createElement("div",{key:e.id,className:"flex items-center w-100 justify-between pv3 bb b--light-gray"},r.a.createElement("img",{src:e.image,className:"w4"}),r.a.createElement(re.a,null,e.title),r.a.createElement(re.a,null,e.quantity," x ",e.price))})),t({setState:c}))})},Te=function(e){var t=e.orderItem;return r.a.createElement(Me,{orderItem:t},function(e){var n=e.setState;return r.a.createElement("div",{onClick:function(){return n({isShown:!0})},className:"pointer mt3 grow flex justify-center"},r.a.createElement(re.a,{className:"pb2"}," ",Object(Ie.format)(t.createdAt,"MM/DD/YYYY")))})},$e=function(){return r.a.createElement(u.Query,{query:U},function(e){var t=e.data.orders;return e.loading?null:r.a.createElement("div",null,t.map(function(e){return r.a.createElement(Te,{key:e.id,orderItem:e})}))})},Ae=Object(N.a)(function(e){return r.a.createElement(Q,null,function(t){var n=t.data,a=t.loading;return r.a.createElement(S.a,{initialState:{isShown:!1,selectedIndex:0,tabs:["Cart","Orders","Sell","Log out"]}},function(t){var i=t.state,c=t.setState;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{width:370,isShown:i.isShown,onCloseComplete:function(){return c({isShown:!1})},containerProps:{display:"flex",flex:"1",flexDirection:"column"}},r.a.createElement(y.a,{zIndex:1,flexShrink:0,elevation:0,backgroundColor:"white"},r.a.createElement(y.a,{padding:16},r.a.createElement(O.a,{size:600},n.me.email))),r.a.createElement(y.a,{flex:"1",overflowY:"scroll",background:"tint1",padding:16},r.a.createElement(y.a,{display:"flex",padding:8},r.a.createElement(C.a,{display:"flex",flex:"1",marginRight:24},i.tabs.map(function(t,n){return r.a.createElement(k.a,{key:t,id:t,onSelect:function(){c({selectedIndex:n}),"Log out"===t&&(localStorage.removeItem("AUTH_TOKEN"),e.history.push("/"),window.location.reload())},isSelected:n===i.selectedIndex,"aria-controls":"panel-".concat(t)},t)}))),i.tabs.map(function(e,t){return r.a.createElement(y.a,{width:"100%",key:e,id:"panel-".concat(e),role:"tabpanel","aria-labelledby":e,"aria-hidden":t!==i.selectedIndex,display:t===i.selectedIndex?"block":"none"},"Sell"===e?r.a.createElement(Oe,{items:n.me.items}):a&&r.a.createElement(w.a,{marginX:"auto",size:60}),"Cart"===e?r.a.createElement(Ne,{cart:n.me.cart}):a&&r.a.createElement(w.a,{marginX:"auto",size:60}),"Orders"===e?r.a.createElement($e,null):a&&r.a.createElement(w.a,{marginX:"auto",size:60}))}))),e.children({setState:c}))})})}),_e=n(431),Le=n(180).a.span({enter:{y:-15,scale:1.2},exit:{y:0,scale:1}}),Fe=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).state={pose:"exit"},n}return Object(he.a)(t,e),Object(de.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var n=this;this.setState({pose:"enter"}),setTimeout(function(){n.setState({pose:"exit"})},90)}},{key:"render",value:function(){return r.a.createElement(Le,{pose:this.state.pose,key:this.props.count},r.a.createElement(_e.a,{display:"inline-flex",marginLeft:8,backgroundColor:"#D9822B",isSolid:!0},this.props.count?this.props.count:0))}}]),t}(a.Component),qe=function(e){return r.a.createElement(Ae,null,function(e){var t=e.setState;return r.a.createElement(j.a,{onClick:function(){return t({isShown:!0})},color:"#F9F9FB",className:"grow",appearance:"minimal",marginRight:16},"Cart",r.a.createElement(Q,null,function(e){var t=e.data;if(e.loading)return r.a.createElement(w.a,{marginX:"auto",size:16});var n=t.me.cart.reduce(function(e,t){return t.item&&e+t.quantity},0);return r.a.createElement(Fe,{count:n})}))})},De=n(297);function Re(){var e=Object(I.a)(["\n  mutation sendShortLivedToken($email: String!) {\n    sendShortLivedToken(email: $email) {\n      message\n    }\n  }\n"]);return Re=function(){return e},e}var Ue=function(e){var t=e.children;return r.a.createElement(S.a,{initialState:{isShown:!1,isLoading:!1,email:"",message:null}},function(e){var n=e.state,a=e.setState;return r.a.createElement(y.a,null,r.a.createElement(ge.a,{isShown:n.isShown,onCloseComplete:function(){return a({isShown:!1,isLoading:!1,email:"",message:""})},isConfirmLoading:n.isLoading,hasFooter:!1,hasHeader:!1},r.a.createElement("div",{className:"flex flex-column items-center"},r.a.createElement(O.a,{size:600,margin:24},"Your email please"),r.a.createElement(De.a,{onChange:function(e){return a({email:e.target.value})},name:"email",placeholder:"email"}),r.a.createElement(u.Mutation,{mutation:Ye,variables:{email:n.email},onCompleted:function(){return a({isLoading:!1,message:"Please check your Inbox!",success:!0})}},function(e,t){t.loading;var i=t.error;return n.success?r.a.createElement("div",{className:"flex items-center justify-center mt4 mb3"},r.a.createElement(re.a,{paddingRight:16},n.message&&n.message),r.a.createElement(ie.a,{icon:"envelope",color:"info",size:40})):r.a.createElement(j.a,{height:40,className:"br-pill mt4 mb3",isLoading:n.isLoading,onClick:Object(se.a)(le.a.mark(function t(){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({isLoading:!0}),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(i);case 9:case"end":return t.stop()}},t,this,[[0,6]])}))},"Submit")}))),t({setState:a}))})},Ye=Object(M.a)(Re()),Qe=function(e){return r.a.createElement(Q,null,function(e){var t=e.data;return e.loading?r.a.createElement(w.a,{marginX:"auto",size:60}):r.a.createElement(y.a,{elevation:4,display:"flex",padding:16,background:"#47B881"},r.a.createElement(y.a,{flex:1,alignItems:"center",display:"flex"},r.a.createElement(O.a,{className:"grow pointer",color:"#F9F9FB",size:600},"E-commerce-demo")),r.a.createElement(y.a,null,t&&t.me?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{color:"#F9F9FB",className:"grow",appearance:"minimal",marginRight:16},"Items"),r.a.createElement(be,null,function(e){var t=e.openModal;return r.a.createElement(j.a,{color:"#F9F9FB",className:"grow",appearance:"minimal",marginRight:16,onClick:t},"Sell")}),r.a.createElement(qe,null)):r.a.createElement(Ue,null,function(e){var t=e.setState;return r.a.createElement(j.a,{onClick:function(){return t({isShown:!0})},className:"shadow-4 grow br-pill",marginRight:16},"Log in")})))})},ze=n(423),Be=n(178),He=n.n(Be),Pe=n(115),Xe=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],loading:!1},n.onChange=He()(function(){var e=Object(se.a)(le.a.mark(function e(t,a){var r;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,a.query({query:q,variables:{searchTerm:t.target.value}});case 3:r=e.sent,n.setState({items:r.data.items,loading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),350),n}return Object(he.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){var e=this;return Object(Pe.b)(),r.a.createElement("div",{className:"flex justify-center items-center flex-column mt4 "},r.a.createElement(Pe.a,{itemToString:function(e){return null===e?"":e.title}},function(t){var n=t.getInputProps,a=t.getItemProps,i=t.isOpen,c=(t.inputValue,t.highlightedIndex);return r.a.createElement("div",null,r.a.createElement(u.ApolloConsumer,null,function(t){return r.a.createElement(y.a,{elevation:4},r.a.createElement(ze.a,Object.assign({},n({type:"search",placeholder:"Search For An Item",id:"search",className:e.state.loading?"loading":"",onChange:function(n){n.persist(),e.onChange(n,t)}}),{height:60})))}),i&&r.a.createElement("div",{className:"w-90 w-50-ns z-1 absolute flex flex-column justify-center items-center",style:{top:140,marginLeft:"auto",marginRight:"auto",left:0,right:0}},e.state.items.map(function(e,t){return r.a.createElement("div",Object.assign({},a({item:e}),{key:e.id,className:" ".concat(t===c&&"hover-bg-black hover-white"," shadow-4 flex items-center w-100 pa2 bg-white pointer bg-animate")}),r.a.createElement("img",{src:e.image,className:"h4"}),r.a.createElement("p",{className:"pl3"},e.title))})))}))}}]),t}(a.Component),Ke=n(428);function Je(){var e=Object(I.a)(["\n\tmutation signup($shortLivedToken: String!){\n\t\tsignup(shortLivedToken: $shortLivedToken){\n\t\t\tuser {\n        id\n        email\n      }\n      token\n\t\t}\n\t}\n"]);return Je=function(){return e},e}var Ge=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",loader:!0,h:window.innerHeight},n}var n;return Object(he.a)(t,e),Object(de.a)(t,[{key:"componentDidMount",value:(n=Object(se.a)(le.a.mark(function e(){var t,n,a=this;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.signup({variables:{shortLivedToken:this.props.match.params.token},refetchQueries:[{query:R}]}).catch(function(e){a.setState({error:e.message,loader:!1})});case 2:(t=e.sent)&&(n=t.data.signup.token,localStorage.setItem("AUTH_TOKEN",n),this.setState({loader:!1}),setTimeout(function(){a.props.history.push("/"),window.location.reload()},3500));case 4:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this;return this.state.loader?r.a.createElement(w.a,{marginX:"auto",marginY:.2*this.state.h,size:60}):(this.state.error&&(Ke.a.warning("".concat(this.state.error)),setTimeout(function(){e.props.history.push("/")},2e3)),this.state.error||this.state.loader||Ke.a.success("Congrats! You are succesfully loged in!",{duration:3}),null)}}]),t}(S.a),Ve=Object(M.a)(Je()),We=Object(u.graphql)(Ve,{name:"signup"})(Ge),Ze=n(114),et=function(e){var t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100===0&&(t.minimumFractionDigits=0),new Intl.NumberFormat("en-US",t).format(e/100)},tt=function(e){var t=e.children,n=e.id;return r.a.createElement(S.a,{initialState:{isShown:!1}},function(e){var a=e.state,i=e.setState;return r.a.createElement(y.a,null,r.a.createElement(ge.a,{isShown:a.isShown,onCloseComplete:function(){return i({isShown:!1})},hasFooter:!1,hasHeader:!1},r.a.createElement(u.Query,{query:Y,variables:{id:n}},function(e){var t=e.error,a=e.loading,i=e.data;if(t)return r.a.createElement("p",null,t.message);if(a)return r.a.createElement("p",null,"Loading...");if(!i.item)return r.a.createElement("p",null,"No Item Found for ",n);var c=i.item;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-center items-center"},r.a.createElement("img",{src:c.largeImage||"https://via.placeholder.com/550x350"})),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement(O.a,null,c.title," "),r.a.createElement(re.a,null,c.description," "),r.a.createElement(re.a,null,et(c.price)," ")))})),t({setState:i}))})},nt=function(e){var t=e.item;return r.a.createElement(y.a,{elevation:4,hoverElevation:2,margin:24,background:"white",className:"w-100 w-20-l w-40-m br4 h-100"},r.a.createElement(tt,{id:t.id},function(e){var n=e.setState;return r.a.createElement("img",{onClick:function(){return n({isShown:!0})},src:t.image,style:{height:200},className:"db w-100 br4 br--top pointer",alt:"Photo of a kitten looking menacing."})}),r.a.createElement("div",{className:"flex flex-column ph4 pv3 ph3-ns pv3-ns items-start"},r.a.createElement("div",{className:"flex justify-between w-100"},r.a.createElement(O.a,null,t.title),r.a.createElement(re.a,null,et(t.price))),r.a.createElement(re.a,{className:"h3 w-100 flex items-center"},t.description),r.a.createElement("div",{className:"flex justify-around mt2 w-100 bt b--light-gray pt2"},r.a.createElement(u.Mutation,{mutation:te,refetchQueries:[{query:R}],variables:{id:t.id}},function(e,t){return t.loading,t.error,r.a.createElement(ie.a,{onClick:e,className:"pointer grow",icon:"shopping-cart",color:"danger",size:24})}))))},at=function(e){function t(){var e,n;Object(me.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(pe.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).fetchMoreData=function(e,t){e({variables:{after:t.itemsConnection.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;return n?{itemsConnection:{__typename:"ItemConnection",pageInfo:n.itemsConnection.pageInfo,edges:Object(Ze.a)(e.itemsConnection.edges).concat(Object(Ze.a)(n.itemsConnection.edges))}}:e}})},n}return Object(he.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.Query,{query:D,notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-and-network"},function(t){var n=t.data,a=t.error,i=t.loading,c=t.fetchMore;return a?r.a.createElement(O.a,{className:"flex justify-center pa4"},"Some error occoure"):(window.onscroll=function(){var t=n.itemsConnection.pageInfo.hasNextPage;window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t&&e.fetchMoreData(c,n)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-wrap justify-center mv4"},n.itemsConnection&&n.itemsConnection.edges.map(function(e){return r.a.createElement(nt,{item:e.node,key:e.node.id})})),i&&r.a.createElement(w.a,{marginY:60,marginX:"auto",size:60})))}))}}]),t}(a.Component);n(400),n(402);var rt=document.getElementById("root");c.a.render(r.a.createElement(u.ApolloProvider,{client:b},r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,null),r.a.createElement(Xe,null),r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:at}),r.a.createElement(s.a,{exact:!0,path:"/token/:token",component:We})))))},null)),rt)}},[[186,2,1]]]);
//# sourceMappingURL=main.3b6caab5.chunk.js.map