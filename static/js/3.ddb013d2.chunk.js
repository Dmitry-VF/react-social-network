(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[3],{293:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",wrapper__avatar:"ProfileInfo_wrapper__avatar__3lqwj",avatar:"ProfileInfo_avatar__3xuFq",fileUpload:"ProfileInfo_fileUpload__2Ummu",wrapper__status_about:"ProfileInfo_wrapper__status_about__3yOp_",status:"ProfileInfo_status__2G3BZ",statusText:"ProfileInfo_statusText__1KWIZ",editMode__input:"ProfileInfo_editMode__input__1GK_B",about:"ProfileInfo_about__ogyhT",about__button:"ProfileInfo_about__button__1WHFa",contactsHeader:"ProfileInfo_contactsHeader__1-lqE",contactTitileWrapper:"ProfileInfo_contactTitileWrapper__9qavk",contactTitle:"ProfileInfo_contactTitle__2tda8",contacts:"ProfileInfo_contacts__3y62P"}},294:function(e,t,a){e.exports={content:"Profile_content__2wLDD"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",addPostForm:"MyPosts_addPostForm__188so",postsElements:"MyPosts_postsElements__33sHh"}},296:function(e,t,a){e.exports={postWrapper:"Post_postWrapper__1fzcG",item:"Post_item__ihtu9",postMessage:"Post_postMessage__2yT1f",likesCount:"Post_likesCount__R9C9-"}},297:function(e,t,a){"use strict";a.r(t);var n=a(33),o=a(34),s=a(37),r=a(36),l=a(0),c=a.n(l),i=a(294),u=a.n(i),m=a(98),p=a(44),f=a(293),d=a.n(f),_=a(53),b=(c.a.Component,function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(e.status),r=Object(m.a)(s,2),i=r[0],u=r[1];Object(l.useEffect)((function(){u(e.setStatus)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",{className:d.a.statusText},c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"No status")),e.isOwner&&n&&c.a.createElement("div",{className:d.a.editMode__input},"enter your status below and click nearby to save",c.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},value:i,autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(i)}})))}),E=a(110),v=a(132),h=a(39),P=a(50),O=a.n(P),k=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("div",{className:O.a.profileDataForm},c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("b",null,"Name"),": ",Object(h.c)("Full name","fullName",[],h.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),":",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(h.c)("About me","aboutMe",[],h.b)),c.a.createElement("div",{className:d.a.contacts},c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e},c.a.createElement("b",null,e," :")," ",Object(h.c)(e,"contacts."+e,[],h.a))}))),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){}},"Save"),n&&c.a.createElement("div",{className:O.a.formSummaryError},n))))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.toEditMode;return c.a.createElement("div",{className:d.a.about},c.a.createElement("div",null,c.a.createElement("b",null,"Name:")," ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me:")," ",t.aboutMe),c.a.createElement("div",{className:d.a.contacts},c.a.createElement("span",{className:d.a.contactsHeader},"Contacts:")," ",Object.keys(t.contacts).map((function(e){return c.a.createElement(y,{key:e,contactTitle:e,contactValue:t.contacts[e]})})),a&&c.a.createElement("div",{className:d.a.about__button},c.a.createElement("button",{onClick:n},"Edit")," ")))},y=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:d.a.contactTitileWrapper},c.a.createElement("span",{className:d.a.contactTitle},t,":")," ",c.a.createElement("a",{href:a,target:"_blank"},a))},j=function(e){var t=e.profile,a=e.profileStatus,n=e.updateStatus,o=e.isOwner,s=e.savePhoto,r=e.saveProfile,i=(Object(p.a)(e,["profile","profileStatus","updateStatus","isOwner","savePhoto","saveProfile"]),Object(l.useState)(!1)),u=Object(m.a)(i,2),f=u[0],v=u[1];if(null===t||void 0===t)return c.a.createElement(_.a,null);return c.a.createElement("div",{className:d.a.profileInfo},c.a.createElement("div",{className:d.a.wrapper__avatar},c.a.createElement("div",{className:d.a.avatar},c.a.createElement("img",{src:t.photos.large||E.a,alt:"avatar"}),o&&c.a.createElement("label",{className:d.a.fileUpload},c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})," ",c.a.createElement("b",null,"\ud83d\udd0d")))),c.a.createElement("div",{className:d.a.wrapper__status_about},c.a.createElement("div",{className:d.a.status},c.a.createElement("b",null,"Status ",o&&"(Double-click to change)"),":",c.a.createElement(b,{status:a,updateStatus:n,isOwner:o})),f?c.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){v(!1)}))}}):c.a.createElement(g,{profile:t,isOwner:o,toEditMode:function(){v(!0)}})))},N=a(97),w=a(295),S=a.n(w),I=a(296),M=a.n(I),T=function(e){return c.a.createElement("div",{className:M.a.postWrapper},c.a.createElement("div",{className:M.a.item},c.a.createElement("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/000/425/647/small/Multimedia__28203_29.jpg",alt:"avatar"}),c.a.createElement("span",{className:M.a.postMessage},e.message)),c.a.createElement("div",{className:M.a.likesCount},c.a.createElement("span",null,"Like")," ",e.likesCount))},C=a(90),x=a(67),F=function(e){var t=e.posts.map((function(e){return c.a.createElement(T,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:S.a.postsBlock},c.a.createElement("b",null,"My posts"),e.isOwner&&c.a.createElement(D,{onSubmit:function(t){e.addPost(t.newPostTextBody)}}),c.a.createElement("div",{className:S.a.postsElements},t))},A=Object(x.a)(300),D=Object(v.a)({form:"addPost"})((function(e){return c.a.createElement("div",{className:S.a.addPostForm},c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(C.a,{component:h.b,name:"newPostTextBody",placeholder:"Enter your text",validate:[x.b,A]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add a post"))))})),U=a(16),B=Object(U.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(N.a)(t))}}}))(F),J=function(e){return c.a.createElement("div",{className:u.a.content},c.a.createElement(j,{profile:e.profile,profileStatus:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isOwner:e.isOwner}),c.a.createElement(B,{isOwner:e.isOwner}))},W=a(10),H=a(9),q=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(J,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(H.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:N.d,getStatus:N.c,updateStatus:N.g,savePhoto:N.e,saveProfile:N.f}),W.f)(q)}}]);
//# sourceMappingURL=3.ddb013d2.chunk.js.map