(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{809:function(e,t,r){"use strict";r.r(t);var n=r(73),a=r.n(n),o=r(51),c=r.n(o),d=r(71),u=r.n(d),i=r(25),s=r.n(i),l=r(46),p=r.n(l),f=r(485),h=r(745),m=r(251),y=r(92),g=r(56),b=r(227),v=r(738),O=r(778),k=r(40),w=r(0),x=r.n(w),P=r(35);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(){for(var e=[],t=0;t<7;++t)e.push({value:t,text:k.a.convertOrderStatus(t)});return e}t.default=function(){var e=Object(w.useState)([]),t=s()(e,2),r=t[0],n=t[1],o=Object(w.useState)(!0),c=s()(o,2),d=c[0],i=c[1],l=function(){var e=u()(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.postUpdateOrderStatus(t,a);case 3:e.sent&&(f.b.success("Cập nhật thành công"),n(r.map((function(e){return e.orderId===t?E(E({},e),{},{orderStatus:a}):E({},e)})))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.b.success("Cập nhật thất bại");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),S=[{title:" Mã Khách Hàng",key:"owner",dataIndex:"owner"},{title:"Họ tên",key:"fullName",dataIndex:"fullName"},{title:"Mã Sản Phẩm",key:"code",dataIndex:"code",render:function(e,t){return x.a.createElement("a",{target:"blank",href:"/product/".concat(t._id)},e)}},{title:"Hình Ảnh Mặt Hàng",key:"avt",dataIndex:"avt",render:function(e){return x.a.createElement("img",{className:"max-w-100 max-h-100",src:e,alt:"Ảnh Đơn Hàng"})}},{title:"Mã đơn hàng",key:"orderCode",dataIndex:"orderCode",render:function(e){return x.a.createElement("a",null,e)}},{title:"Ngày đặt",key:"orderDate",dataIndex:"orderDate",sorter:function(e,t){return e.orderDate>t.orderDate?1:e.orderDate<t.orderDate?-1:0}},{title:"Sản phẩm",key:"prodName",dataIndex:"prodName",render:function(e,t){return x.a.createElement(y.a,{title:e},x.a.createElement(P.b,{to:"/product/".concat(t.idProduct)},k.a.reduceProductName(e,30)))}},{title:"Tổng tiền",key:"totalMoney",dataIndex:"totalMoney",render:function(e){return x.a.createElement("b",{style:{color:"#333"}},k.a.formatProductPrice(e))},sorter:function(e,t){return e.totalMoney-t.totalMoney}},{title:"HT thanh toán",key:"paymentMethod",dataIndex:"paymentMethod",render:function(e){return 0===e?"Tiền mặt":"VNPay"}},{title:"Trạng thái đơn hàng",key:"orderStatus",dataIndex:"orderStatus",filters:j(),onFilter:function(e,t){return t.orderStatus===e},render:function(e){return k.a.convertOrderStatus(e)}},{title:"",render:function(e,t){return x.a.createElement(g.a,{type:"dashed",onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=e,a=h.a.info({width:768,title:"Cập nhật trạng thái đơn hàng #".concat(t),content:x.a.createElement(m.a.Group,{defaultValue:e,onChange:function(e){return n=e.target.value},className:"m-t-12"},j().map((function(e,t){return x.a.createElement(m.a,{className:"m-b-8",key:t,value:e.value},e.text)}))),centered:!0,icon:null,okText:"Cập nhật",onOk:function(){l(r,n),a.destroy()}})}(t.orderStatus,t.orderCode,t.orderId)}},"Cập nhật")}}];return Object(w.useEffect)((function(){var e=!0;function t(){return(t=u()(p.a.mark((function t(){var r,o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(!0),t.next=4,O.a.getOrderList();case 4:r=t.sent,e&&r&&(o=r.data.list,c=o.map((function(e,t){return{key:t,owner:e.owner,orderCode:e.orderCode,orderDate:k.a.formatOrderDate(e.orderDate),prodName:e.orderProd.name,totalMoney:e.numOfProd*(e.orderProd.price-e.orderProd.price*e.orderProd.discount/100),paymentMethod:e.paymentMethod,orderStatus:e.orderStatus,idProduct:e.orderProd.id,orderId:e._id}})),n(a()(c)),i(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e&&i(!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!1}}),[]),x.a.createElement(x.a.Fragment,null,d?x.a.createElement(b.a,{className:"trans-center",tip:"Đang lấy danh sách đơn hàng ..."}):x.a.createElement(v.a,{columns:S,dataSource:r,pagination:{showLessItems:!0,position:["bottomCenter"]}}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BZG1pblBhZ2UvT3JkZXJMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlRmlsdGVyT3JkZXIiLCJyZXN1bHQiLCJpIiwicHVzaCIsInZhbHVlIiwidGV4dCIsImhlbHBlcnMiLCJjb252ZXJ0T3JkZXJTdGF0dXMiLCJPcmRlckxpc3QiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXBkYXRlT3JkZXJTdGF0dXMiLCJpZCIsIm9yZGVyU3RhdHVzIiwiYWRtaW5BcGkiLCJwb3N0VXBkYXRlT3JkZXJTdGF0dXMiLCJtZXNzYWdlIiwic3VjY2VzcyIsIm1hcCIsIml0ZW0iLCJvcmRlcklkIiwiY29sdW1ucyIsInRpdGxlIiwia2V5IiwiZGF0YUluZGV4IiwicmVuZGVyIiwiY29kZSIsInRhcmdldCIsImhyZWYiLCJfaWQiLCJhdnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ2Iiwic29ydGVyIiwiYSIsImIiLCJvcmRlckRhdGUiLCJwcm9kTmFtZSIsInJlY29yZCIsInRvIiwiaWRQcm9kdWN0IiwicmVkdWNlUHJvZHVjdE5hbWUiLCJzdHlsZSIsImNvbG9yIiwiZm9ybWF0UHJvZHVjdFByaWNlIiwidG90YWxNb25leSIsImZpbHRlcnMiLCJvbkZpbHRlciIsIl92IiwicmVjb3JkcyIsInR5cGUiLCJvbkNsaWNrIiwiZGVmYXVsdFZhbCIsIm9yZGVyQ29kZSIsInZhbHVlQ3VyciIsIm1vZGFsIiwiTW9kYWwiLCJpbmZvIiwid2lkdGgiLCJjb250ZW50IiwiR3JvdXAiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsImluZGV4IiwiY2VudGVyZWQiLCJpY29uIiwib2tUZXh0Iiwib25PayIsImRlc3Ryb3kiLCJVcGRhdGVPcmRlclN0YXR1c01vZGFsIiwidXNlRWZmZWN0IiwiaXNTdWJzY3JpYmUiLCJnZXRPcmRlckxpc3QiLCJyZXNwb25zZSIsImxpc3QiLCJuZXdMaXN0Iiwib3duZXIiLCJmb3JtYXRPcmRlckRhdGUiLCJvcmRlclByb2QiLCJuYW1lIiwibnVtT2ZQcm9kIiwicHJpY2UiLCJkaXNjb3VudCIsInBheW1lbnRNZXRob2QiLCJ0aXAiLCJkYXRhU291cmNlIiwicGFnaW5hdGlvbiIsInNob3dMZXNzSXRlbXMiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6ImsyQkFhQSxTQUFTQSxJQUVQLElBREEsSUFBSUMsRUFBUyxHQUNKQyxFQUFJLEVBQUdBLEVBQUksSUFBS0EsRUFDdkJELEVBQU9FLEtBQUssQ0FBRUMsTUFBT0YsRUFBR0csS0FBTUMsSUFBUUMsbUJBQW1CTCxLQUUzRCxPQUFPRCxFQW1OTU8sVUFoTmYsV0FDRSxNQUF3QkMsbUJBQVMsSUFBRyxXQUE3QkMsRUFBSSxLQUFFQyxFQUFPLEtBQ3BCLEVBQWtDRixvQkFBUyxHQUFLLFdBQXpDRyxFQUFTLEtBQUVDLEVBQVksS0FNeEJDLEVBQWlCLCtCQUFHLFdBQU9DLEVBQUlDLEdBQVcsMEZBRXJCQyxJQUFTQyxzQkFBc0JILEVBQUlDLEdBQVksT0FBckQsRUFBSCxPQUVaRyxJQUFRQyxRQUFRLHVCQUNoQlQsRUFDRUQsRUFBS1csS0FBSSxTQUFDQyxHQUFJLE9BQ1pBLEVBQUtDLFVBQVlSLEVBQUssRUFBSCxLQUFRTyxHQUFJLElBQUVOLGdCQUFXLEtBQVVNLFFBRzNELGdEQUVESCxJQUFRQyxRQUFRLHFCQUFxQix5REFFeEMsZ0JBZHNCLHdDQTRDakJJLEVBQVUsQ0FDZCxDQUNFQyxNQUFPLGlCQUNQQyxJQUFLLFFBQ0xDLFVBQVcsU0FHYixDQUNFRixNQUFPLFNBQ1BDLElBQUssV0FDTEMsVUFBVyxZQUViLENBQ0VGLE1BQU8sY0FDUEMsSUFBSyxPQUNMQyxVQUFXLE9BQ1hDLE9BQVEsU0FBQ0MsRUFBTW5CLEdBQUksT0FDakIsdUJBQUdvQixPQUFPLFFBQVFDLEtBQUksbUJBQWNyQixFQUFLc0IsTUFDdENILEtBS1AsQ0FDRUosTUFBTyxvQkFDUEMsSUFBSyxNQUNMQyxV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RUFBSzZELFVBQVVHLE1BQ2JoRSxFQUFLNkQsVUFBVUcsTUFBUWhFLEVBQUs2RCxVQUFVSSxTQUFZLEtBQ3ZEQyxjQUFlbEUsRUFBS2tFLGNBQ3BCeEUsWUFBYU0sRUFBS04sWUFDbEI2QixVQUFXdkIsRUFBSzZELFVBQVVwRSxHQUMxQlEsUUFBU0QsRUFBS1UsUUFHbEJyQixFQUFRLElBQUlxRSxJQUNabkUsR0FBYSxJQUNkLGdEQUVHK0QsR0FBYS9ELEdBQWEsR0FBTywwREFFeEMsc0JBRUQsT0FoQ3VCLFdBQ0ksd0JBOEIzQmdFLEdBQ08sV0FDTEQsR0FBYyxLQUVmLElBR0Qsb0NBQ0doRSxFQUNDLGtCQUFDLElBQUksQ0FBQ3NCLFVBQVUsZUFBZXVELElBQUksb0NBRW5DLGtCQUFDLElBQUssQ0FDSmpFLFFBQVNBLEVBQ1RrRSxXQUFZaEYsRUFDWmlGLFdBQVksQ0FBRUMsZUFBZSxFQUFNQyxTQUFVLENBQUMiLCJmaWxlIjoiMTQuNDBmOWY0YjQzNWI1ZmJiMWJhYTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBNb2RhbCwgUmFkaW8sIFNwaW4sIFRhYmxlLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgYWRtaW5BcGkgZnJvbSAnYXBpcy9hZG1pbkFwaSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICdoZWxwZXJzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVGaWx0ZXJPcmRlcigpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7ICsraSkge1xuICAgIHJlc3VsdC5wdXNoKHsgdmFsdWU6IGksIHRleHQ6IGhlbHBlcnMuY29udmVydE9yZGVyU3RhdHVzKGkpIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIE9yZGVyTGlzdCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy9cbiAgXG5cbiAgLy8gZXZlbnQ6IEPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpIMSRxqFuIGjDoG5nXG4gIGNvbnN0IHVwZGF0ZU9yZGVyU3RhdHVzID0gYXN5bmMgKGlkLCBvcmRlclN0YXR1cykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkbWluQXBpLnBvc3RVcGRhdGVPcmRlclN0YXR1cyhpZCwgb3JkZXJTdGF0dXMpO1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQ+G6rXAgbmjhuq10IHRow6BuaCBjw7RuZycpO1xuICAgICAgICBzZXREYXRhKFxuICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbS5vcmRlcklkID09PSBpZCA/IHsgLi4uaXRlbSwgb3JkZXJTdGF0dXMgfSA6IHsgLi4uaXRlbSB9LFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQ+G6rXAgbmjhuq10IHRo4bqldCBi4bqhaScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBtb2RhbCBj4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSDEkcahbiBow6BuZ1xuICBmdW5jdGlvbiBVcGRhdGVPcmRlclN0YXR1c01vZGFsKGRlZmF1bHRWYWwgPSAwLCBvcmRlckNvZGUsIG9yZGVySWQpIHtcbiAgICBsZXQgdmFsdWVDdXJyID0gZGVmYXVsdFZhbDtcbiAgICBjb25zdCBtb2RhbCA9IE1vZGFsLmluZm8oe1xuICAgICAgd2lkdGg6IDc2OCxcbiAgICAgIHRpdGxlOiBgQ+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgxJHGoW4gaMOgbmcgIyR7b3JkZXJDb2RlfWAsXG4gICAgICBjb250ZW50OiAoXG4gICAgICAgIDxSYWRpby5Hcm91cFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbH1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+ICh2YWx1ZUN1cnIgPSB2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibS10LTEyXCI+XG4gICAgICAgICAge2dlbmVyYXRlRmlsdGVyT3JkZXIoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UmFkaW8gY2xhc3NOYW1lPVwibS1iLThcIiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JhZGlvLkdyb3VwPlxuICAgICAgKSxcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgaWNvbjogbnVsbCxcbiAgICAgIG9rVGV4dDogJ0Phuq1wIG5o4bqtdCcsXG4gICAgICBvbk9rOiAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZU9yZGVyU3RhdHVzKG9yZGVySWQsIHZhbHVlQ3Vycik7XG4gICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnIE3DoyBLaMOhY2ggSMOgbmcnLFxuICAgICAga2V5OiAnb3duZXInLFxuICAgICAgZGF0YUluZGV4OiAnb3duZXInLFxuICAgIH0sXG4gICAgXG4gICAge1xuICAgICAgdGl0bGU6ICdI4buNIHTDqm4nLFxuICAgICAga2V5OiAnZnVsbE5hbWUnLFxuICAgICAgZGF0YUluZGV4OiAnZnVsbE5hbWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdNw6MgU+G6o24gUGjhuqltJyxcbiAgICAgIGtleTogJ2NvZGUnLFxuICAgICAgZGF0YUluZGV4OiAnY29kZScsXG4gICAgICByZW5kZXI6IChjb2RlLCBkYXRhKSA9PiAoXG4gICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5faWR9YH0+XG4gICAgICAgICAge2NvZGV9XG4gICAgICAgIDwvYT5cbiAgICAgICksXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiAnSMOsbmgg4bqibmggTeG6t3QgSMOgbmcnLFxuICAgICAga2V5OiAnYXZ0JyxcbiAgICAgIGRhdGFJbmRleDogJ2F2dCcsXG4gICAgICByZW5kZXI6IChhdnQpID0+IChcblxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1heC13LTEwMCBtYXgtaC0xMDBcIiBzcmM9e2F2dH0gYWx0PVwi4bqibmggxJDGoW4gSMOgbmdcIiAvPlxuXG4gICAgICApLFxuICAgIH0sXG4gICAgXG4gICAge1xuICAgICAgdGl0bGU6ICdNw6MgxJHGoW4gaMOgbmcnLFxuICAgICAga2V5OiAnb3JkZXJDb2RlJyxcbiAgICAgIGRhdGFJbmRleDogJ29yZGVyQ29kZScsXG4gICAgICByZW5kZXI6ICh2KSA9PiA8YT57dn08L2E+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdOZ8OgeSDEkeG6t3QnLFxuICAgICAga2V5OiAnb3JkZXJEYXRlJyxcbiAgICAgIGRhdGFJbmRleDogJ29yZGVyRGF0ZScsXG4gICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLm9yZGVyRGF0ZSA+IGIub3JkZXJEYXRlKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEub3JkZXJEYXRlIDwgYi5vcmRlckRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdT4bqjbiBwaOG6qW0nLFxuICAgICAga2V5OiAncHJvZE5hbWUnLFxuICAgICAgZGF0YUluZGV4OiAncHJvZE5hbWUnLFxuICAgICAgcmVuZGVyOiAocHJvZE5hbWUsIHJlY29yZCkgPT4gKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17cHJvZE5hbWV9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgL3Byb2R1Y3QvJHtyZWNvcmQuaWRQcm9kdWN0fWB9PlxuICAgICAgICAgICAge2hlbHBlcnMucmVkdWNlUHJvZHVjdE5hbWUocHJvZE5hbWUsIDMwKX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Thu5VuZyB0aeG7gW4nLFxuICAgICAga2V5OiAndG90YWxNb25leScsXG4gICAgICBkYXRhSW5kZXg6ICd0b3RhbE1vbmV5JyxcbiAgICAgIHJlbmRlcjogKHZhbHVlKSA9PiAoXG4gICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiAnIzMzMycgfX0+e2hlbHBlcnMuZm9ybWF0UHJvZHVjdFByaWNlKHZhbHVlKX08L2I+XG4gICAgICApLFxuICAgICAgc29ydGVyOiAoYSwgYikgPT4gYS50b3RhbE1vbmV5IC0gYi50b3RhbE1vbmV5LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdIVCB0aGFuaCB0b8OhbicsXG4gICAgICBrZXk6ICdwYXltZW50TWV0aG9kJyxcbiAgICAgIGRhdGFJbmRleDogJ3BheW1lbnRNZXRob2QnLFxuICAgICAgcmVuZGVyOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/ICdUaeG7gW4gbeG6t3QnIDogJ1ZOUGF5JyksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Ry4bqhbmcgdGjDoWkgxJHGoW4gaMOgbmcnLFxuICAgICAga2V5OiAnb3JkZXJTdGF0dXMnLFxuICAgICAgZGF0YUluZGV4OiAnb3JkZXJTdGF0dXMnLFxuICAgICAgZmlsdGVyczogZ2VuZXJhdGVGaWx0ZXJPcmRlcigpLFxuICAgICAgb25GaWx0ZXI6ICh2YWx1ZSwgcmVjb3JkKSA9PiByZWNvcmQub3JkZXJTdGF0dXMgPT09IHZhbHVlLFxuICAgICAgcmVuZGVyOiAodmFsdWUpID0+IGhlbHBlcnMuY29udmVydE9yZGVyU3RhdHVzKHZhbHVlKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHJlbmRlcjogKF92LCByZWNvcmRzKSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiZGFzaGVkXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgVXBkYXRlT3JkZXJTdGF0dXNNb2RhbChcbiAgICAgICAgICAgICAgcmVjb3Jkcy5vcmRlclN0YXR1cyxcbiAgICAgICAgICAgICAgcmVjb3Jkcy5vcmRlckNvZGUsXG4gICAgICAgICAgICAgIHJlY29yZHMub3JkZXJJZCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9PlxuICAgICAgICAgIEPhuq1wIG5o4bqtdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc1N1YnNjcmliZSA9IHRydWU7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJMaXN0KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkbWluQXBpLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICBpZiAoaXNTdWJzY3JpYmUgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zdCB7IGxpc3QgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgb3duZXI6IGl0ZW0ub3duZXIsXG4gICAgICAgICAgICAgIG9yZGVyQ29kZTogaXRlbS5vcmRlckNvZGUsXG4gICAgICAgICAgICAgIG9yZGVyRGF0ZTogaGVscGVycy5mb3JtYXRPcmRlckRhdGUoaXRlbS5vcmRlckRhdGUpLFxuICAgICAgICAgICAgICBwcm9kTmFtZTogaXRlbS5vcmRlclByb2QubmFtZSxcbiAgICAgICAgICAgICAgdG90YWxNb25leTpcbiAgICAgICAgICAgICAgICBpdGVtLm51bU9mUHJvZCAqXG4gICAgICAgICAgICAgICAgKGl0ZW0ub3JkZXJQcm9kLnByaWNlIC1cbiAgICAgICAgICAgICAgICAgIChpdGVtLm9yZGVyUHJvZC5wcmljZSAqIGl0ZW0ub3JkZXJQcm9kLmRpc2NvdW50KSAvIDEwMCksXG4gICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGl0ZW0ucGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgICAgb3JkZXJTdGF0dXM6IGl0ZW0ub3JkZXJTdGF0dXMsXG4gICAgICAgICAgICAgIGlkUHJvZHVjdDogaXRlbS5vcmRlclByb2QuaWQsXG4gICAgICAgICAgICAgIG9yZGVySWQ6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXREYXRhKFsuLi5uZXdMaXN0XSk7XG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGlzU3Vic2NyaWJlKSBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRPcmRlckxpc3QoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNTdWJzY3JpYmUgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPFNwaW4gY2xhc3NOYW1lPVwidHJhbnMtY2VudGVyXCIgdGlwPVwixJBhbmcgbOG6pXkgZGFuaCBzw6FjaCDEkcahbiBow6BuZyAuLi5cIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgICAgIHBhZ2luYXRpb249e3sgc2hvd0xlc3NJdGVtczogdHJ1ZSwgcG9zaXRpb246IFsnYm90dG9tQ2VudGVyJ10gfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=